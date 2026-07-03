import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import Resume from '../components/resume/Resume.jsx'
import { normalizeResumeVariant, validateResumeVariant } from '../content/index.js'
import { createPublishedVariant } from './fixtures/resumeVariant.js'

function renderDocument() {
  const model = normalizeResumeVariant(validateResumeVariant(createPublishedVariant()))
  return renderToStaticMarkup(<Resume model={model} />)
}

describe('ATS document structure', () => {
  it('does not emit prohibited or non-text document elements', () => {
    const html = renderDocument()

    expect(html).not.toMatch(/<(table|canvas|svg|img)\b/)
    expect(html).not.toContain('style=')
  })

  it('keeps every visible destination in a real anchor', () => {
    const html = renderDocument()

    expect(html).toContain('<a href="https://example.com"')
    expect(html).toContain('Example Website</a>')
    expect(html).toContain('Example Live Demo</a>')
  })
})
