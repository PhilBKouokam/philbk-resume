import { describe, expect, it } from 'vitest'
import {
  ContentValidationError,
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
