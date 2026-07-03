import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import Resume from '../components/resume/Resume.jsx'
import ResumeSection from '../components/resume/ResumeSection.jsx'
import { DocumentRenderError } from '../components/resume/DocumentRenderError.js'
import DateRange from '../components/primitives/DateRange.jsx'
import { normalizeResumeVariant, validateResumeVariant } from '../content/index.js'
import { createPublishedVariant } from './fixtures/resumeVariant.js'

function renderResume(mutator) {
  const variant = createPublishedVariant()
  if (mutator) mutator(variant)
  const model = normalizeResumeVariant(validateResumeVariant(variant))
  return renderToStaticMarkup(<Resume model={model} />)
}

describe('document engine', () => {
  it('renders one semantic document with a logical heading hierarchy', () => {
    const html = renderResume()

    expect(html.match(/<main\b/g)).toHaveLength(1)
    expect(html.match(/<h1\b/g)).toHaveLength(1)
    expect(html.match(/<h2\b/g)).toHaveLength(6)
    expect(html).toContain('<header data-resume-header="">')
    expect(html).toContain('<address>')
    expect(html).toContain('<article')
    expect(html).toContain('<time dateTime="2024-01">Jan 2024</time>')
  })

  it('preserves content-defined section order', () => {
    const html = renderResume((variant) => {
      const [skills, experience, projects, certifications, education] = variant.sections
      variant.sections = [education, projects, skills, certifications, experience].map(
        (section, index) => ({ ...section, position: index + 1 }),
      )
    })

    const headings = [...html.matchAll(/<h2[^>]*>([^<]+)<\/h2>/g)].map((match) => match[1])
    expect(headings).toEqual([
      'Example Summary',
      'Example Education',
      'Example Projects',
      'Example Skills',
      'Example Certifications',
      'Example Experience',
    ])
  })

  it('renders external links through one consistent contract', () => {
    const html = renderResume()
    const links = html.match(/<a [^>]+>/g)

    expect(links).toHaveLength(3)
    expect(links.every((link) => link.includes('rel="external"'))).toBe(true)
  })

  it('rejects non-published models with a developer-facing diagnostic', () => {
    expect(() => renderToStaticMarkup(<Resume model={{ status: 'draft' }} />)).toThrow(
      DocumentRenderError,
    )
  })

  it('rejects unknown section types instead of silently omitting them', () => {
    expect(() =>
      renderToStaticMarkup(
        <ResumeSection
          section={{ id: 'unknown', type: 'unknown', heading: 'Unknown', items: [] }}
          locale="en-US"
          presentLabel="Current"
        />,
      ),
    ).toThrow(/No renderer exists for section type "unknown"/)
  })
})

describe('DateRange', () => {
  it('renders a single semantic date', () => {
    expect(renderToStaticMarkup(<DateRange date="2024-03" locale="en-US" />)).toBe(
      '<time dateTime="2024-03">Mar 2024</time>',
    )
  })

  it('renders a closed date range', () => {
    const html = renderToStaticMarkup(
      <DateRange startDate="2023-01" endDate="2024-02" locale="en-US" />,
    )
    expect(html).toContain('Jan 2023')
    expect(html).toContain('Feb 2024')
  })

  it('renders an open date range with the content-provided label', () => {
    const html = renderToStaticMarkup(
      <DateRange startDate="2023-01" endDate={null} locale="en-US" presentLabel="Current" />,
    )
    expect(html).toContain('Current')
  })

  it('renders nothing when no date is provided', () => {
    expect(renderToStaticMarkup(<DateRange locale="en-US" />)).toBe('')
  })
})
