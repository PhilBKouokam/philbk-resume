import { describe, expect, it } from 'vitest'
import { assertCanonicalClaims } from '../content/canonicalSafeguards.js'
import fullstack from '../content/variants/fullstack.js'
import { validateResumeVariant } from '../content/schema.js'
import facts from './fixtures/approvedFullstackFacts.json'

describe('canonical claim and identity gates', () => {
  it.each(['Apple Health', 'Fitbit', 'MyFitnessPal', 'RAG', 'fine-tuning', 'model training',
    'autonomous agents', 'production AI', 'enterprise-scale', 'revenue', 'adoption',
    'notifications', 'background delivery', 'projections', 'production authentication',
    'App Store release', 'Google Play release', 'enterprise usage', 'production scale',
    'health data', 'AI-powered recommendations', 'AI product functionality',
    'hundreds of users', 'thousands of users', 'dozens of users',
    '1,000 active users', '3 years of professional experience'])(
    'rejects unsupported claim %s before export', (claim) => {
      const candidate = structuredClone(fullstack)
      candidate.sections[1].items[0].bullets.push(`Built ${claim}.`)
      expect(() => validateResumeVariant(candidate)).toThrow(/Unsupported canonical claim/)
    },
  )
  it('rejects a professional employment section', () => {
    const candidate = structuredClone(fullstack)
    candidate.sections.push({ type: 'experience', items: [] })
    expect(() => assertCanonicalClaims(candidate)).toThrow(/professional engineering employment/)
  })
  it('preserves approved identity, credentials, education, and URL destinations', () => {
    expect(fullstack.header).toEqual(facts.header)
    expect(fullstack.sections[2].items).toEqual(facts.certifications)
    expect(fullstack.sections[3].items).toEqual(facts.education)
    expect(fullstack.sections[1].items.flatMap(p => p.links.map(l => l.url))).toEqual(facts.projectUrls)
  })
  it('preserves independent ownership, early mobile testing, and human AI responsibility', () => {
    const text = fullstack.sections[1].items[0].bullets.join(' ')
    expect(text).toMatch(/Independently building/)
    expect(text).toMatch(/web prototype/)
    expect(text).toMatch(/working iOS and Android mobile versions/)
    expect(text).toMatch(/tested by early users/)
    expect(text).toMatch(/real usage and feedback/)
    expect(text).toMatch(/documenting development publicly on GitHub/)
    expect(() => validateResumeVariant(fullstack)).not.toThrow()
    const skills = fullstack.sections[0].items.flatMap(item => item.skills)
    for (const skill of ['React Native', 'Expo', 'TypeScript']) expect(skills).toContain(skill)
    for (const term of ['investigation', 'research', 'architecture exploration', 'implementation',
      'debugging', 'documentation', 'problem definition', 'tradeoffs', 'testing', 'validation', 'final verification']) {
      expect(fullstack.summary.text).toContain(term)
    }
  })
})
