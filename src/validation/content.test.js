import { describe, expect, it } from 'vitest'
import {
  ContentValidationError,
  loadVariant,
  normalizeResumeVariant,
  validateResumeVariant,
} from '../content/index.js'
import { createPublishedVariant } from './fixtures/resumeVariant.js'

describe('validateResumeVariant', () => {
  it('accepts a structurally complete published variant', () => {
    expect(validateResumeVariant(createPublishedVariant()).status).toBe('published')
  })

  it('normalizes and deeply freezes a published variant', () => {
    const model = normalizeResumeVariant(validateResumeVariant(createPublishedVariant()))

    expect(model.sections[0]).not.toHaveProperty('position')
    expect(Object.isFrozen(model)).toBe(true)
    expect(Object.isFrozen(model.sections[0].items)).toBe(true)
  })

  it('accepts a content-free draft manifest', () => {
    expect(
      validateResumeVariant({
        id: 'frontend',
        label: 'Frontend',
        locale: 'en-US',
        status: 'draft',
      }),
    ).toMatchObject({ id: 'frontend', status: 'draft' })
  })

  it('accepts mail and telephone header links', () => {
    const variant = createPublishedVariant()
    variant.header.links.push(
      { id: 'email', label: 'Email', url: 'mailto:person@example.com' },
      { id: 'phone', label: 'Phone', url: 'tel:+12145550100' },
    )

    expect(validateResumeVariant(variant).header.links).toHaveLength(3)
  })

  it('accepts a certification without an unverified issue date', () => {
    const variant = createPublishedVariant()
    variant.sections = [
      {
        id: 'certifications',
        type: 'certifications',
        position: 1,
        heading: 'Certifications',
        items: [{ id: 'example-certification', name: 'Example', issuer: 'Issuer' }],
      },
    ]

    expect(validateResumeVariant(variant).sections[0].items[0]).not.toHaveProperty('date')
  })

  it.each([
    ['missing metadata', (variant) => delete variant.metadata],
    [
      'an unsupported section type',
      (variant) => {
        variant.sections[0].type = 'unsupported'
      },
    ],
    [
      'an invalid URL',
      (variant) => {
        variant.header.links[0].url = 'not-a-url'
      },
    ],
    [
      'a duplicate section ID',
      (variant) => {
        variant.sections.push({
          ...variant.sections[0],
          type: 'projects',
          position: 2,
        })
      },
    ],
    [
      'section positions that disagree with array order',
      (variant) => {
        variant.sections[0].position = 2
      },
    ],
  ])('rejects %s with a readable error', (_, mutate) => {
    const variant = createPublishedVariant()
    mutate(variant)

    expect(() => validateResumeVariant(variant)).toThrow(ContentValidationError)
    expect(() => validateResumeVariant(variant)).toThrow(/Invalid resume variant "test-variant"/)
  })
})

describe('default fullstack content safeguards', () => {
  const expectedProjectIds = [
    'caloriebank',
    'spendwise',
    'habit-tracker',
    'aws-highly-available-web-application',
    'aws-serverless-etl-pipeline',
  ]
  const unsupportedClaims = [
    'Apple Health',
    'Fitbit',
    'MyFitnessPal',
    'native mobile',
    'health integration',
    'automated ingestion',
    'RAG',
    'fine-tuning',
    'model training',
    'autonomous agents',
    'machine-learning models',
  ]

  it('preserves required sections, projects, credentials, and education', async () => {
    const model = await loadVariant('fullstack')
    const sectionTypes = model.sections.map((section) => section.type)
    const projects = model.sections.find((section) => section.type === 'projects')

    expect(sectionTypes).toEqual(['skills', 'projects', 'certifications', 'education'])
    expect(sectionTypes).not.toContain('experience')
    expect(projects.items.map((project) => project.id)).toEqual(expectedProjectIds)
  })

  it('keeps the summary concise and grounded in conventional role and technology terms', async () => {
    const model = await loadVariant('fullstack')
    const summaryWords = model.summary.text.trim().split(/\s+/)
    const searchableContent = [
      model.header.headline,
      model.summary.text,
      ...model.sections.flatMap((section) =>
        section.items.flatMap((item) => [
          item.label ?? '',
          ...(item.skills ?? []),
          ...(item.technologies ?? []),
        ]),
      ),
    ].join(' ')

    expect(summaryWords.length).toBeGreaterThanOrEqual(45)
    expect(summaryWords.length).toBeLessThanOrEqual(65)
    for (const term of [
      'Full-Stack Software Engineer',
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AWS',
      'AI-assisted development',
      'human judgment',
    ]) {
      expect(searchableContent).toContain(term)
    }
  })

  it('keeps project bullets concise and rejects unsupported claims', async () => {
    const model = await loadVariant('fullstack')
    const projects = model.sections.find((section) => section.type === 'projects')
    const defaultContent = [model.header.headline, model.summary.text]

    for (const project of projects.items) {
      expect(project.bullets).toHaveLength(1)
      expect(project.bullets[0].trim().split(/\s+/).length).toBeLessThanOrEqual(35)
      defaultContent.push(project.bullets[0])
    }

    for (const claim of unsupportedClaims) {
      expect(defaultContent.join(' ').toLocaleLowerCase('en-US')).not.toContain(
        claim.toLocaleLowerCase('en-US'),
      )
    }
  })
})
