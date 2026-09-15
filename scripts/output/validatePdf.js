import { readFile } from 'node:fs/promises'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { OutputError } from './OutputError.js'

const LETTER_WIDTH_POINTS = 612
const LETTER_HEIGHT_POINTS = 792
const POINT_TOLERANCE = 0.5

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim().toLocaleLowerCase('en-US')
}

function collectExpectedText(model) {
  const values = [
    model.header.name,
    model.header.headline,
    model.header.location,
    model.summary.heading,
    model.summary.text,
    ...model.header.links.map((link) => link.label),
  ]

  for (const section of model.sections) {
    values.push(section.heading)
    for (const item of section.items) {
      for (const [key, value] of Object.entries(item)) {
        if (['id', 'url', 'linksLabel', 'startDate', 'endDate', 'date'].includes(key)) continue
        if (typeof value === 'string') values.push(value)
        if (Array.isArray(value)) {
          for (const entry of value) {
            if (typeof entry === 'string') values.push(entry)
            if (entry && typeof entry === 'object' && typeof entry.label === 'string') {
              values.push(entry.label)
            }
          }
        }
      }
    }
  }

  return values.map(normalizeText).filter(Boolean)
}

function collectExpectedLinks(model) {
  const links = model.header.links.map((link) => link.url)

  for (const section of model.sections) {
    for (const item of section.items) {
      if (item.url) links.push(item.url)
      if (item.links) links.push(...item.links.map((link) => link.url))
    }
  }

  return [...new Set(links.map((url) => new URL(url).href))].sort()
}

function assert(condition, code, message, details = {}) {
  if (!condition) throw new OutputError(code, message, details)
}

export async function validatePdf(filePath, model) {
  const bytes = new Uint8Array(await readFile(filePath))
  const task = getDocument({ data: bytes, useSystemFonts: true })
  const document = await task.promise

  try {
    assert(document.numPages === 1, 'INVALID_PAGE_COUNT',
      `Expected exactly one PDF page; received ${document.numPages}.`)

    const page = await document.getPage(1)
    const [, , width, height] = page.view
    assert(
      Math.abs(width - LETTER_WIDTH_POINTS) <= POINT_TOLERANCE
        && Math.abs(height - LETTER_HEIGHT_POINTS) <= POINT_TOLERANCE,
      'INVALID_PAGE_SIZE',
      `Expected US Letter portrait (612 × 792 pt); received ${width} × ${height} pt.`,
    )

    const textContent = await page.getTextContent()
    const extractedText = normalizeText(textContent.items.map((item) => item.str).join(' '))
    assert(extractedText.length > 0, 'MISSING_TEXT', 'PDF contains no selectable text.')

    const missingText = collectExpectedText(model).filter((value) => !extractedText.includes(value))
    assert(
      missingText.length === 0,
      'INCOMPLETE_TEXT',
      `PDF text extraction is missing ${missingText.length} expected value(s).`,
      { missingText },
    )

    // Catch browser auto-shrinking even when CSS still declares an 8.5 pt body.
    if (model.id === 'fullstack') {
      const bodyStarts = [model.summary.text, ...model.sections
        .filter((section) => section.type === 'projects')
        .flatMap((section) => section.items.flatMap((item) => item.bullets ?? []))]
        .map((text) => text.slice(0, 24))
      for (const start of bodyStarts) {
        const item = textContent.items.find((item) => item.str?.startsWith(start))
        assert(item && item.height >= 8.45, 'UNDERSIZED_BODY_TEXT',
          'Canonical summary and project text must retain the 8.5 pt body size.', { start, height: item?.height })
      }
    }

    const annotations = await page.getAnnotations({ intent: 'display' })
    const actualLinks = annotations
      .filter((annotation) => annotation.subtype === 'Link' && annotation.url)
      .map((annotation) => new URL(annotation.url).href)
      .sort()
    const missingLinks = collectExpectedLinks(model).filter((url) => !actualLinks.includes(url))
    assert(
      missingLinks.length === 0,
      'MISSING_LINKS',
      `PDF is missing ${missingLinks.length} hyperlink annotation(s).`,
      { missingLinks },
    )

    const metadata = await document.getMetadata()
    assert(metadata.info?.Title === model.metadata.title, 'INVALID_TITLE',
      `PDF title must be "${model.metadata.title}".`)
    assert(metadata.info?.Subject === model.metadata.description, 'INVALID_SUBJECT',
      'PDF subject does not match validated metadata.')
    assert(metadata.info?.Author === model.header.name, 'INVALID_AUTHOR',
      'PDF author does not match the résumé header name.')

    return Object.freeze({
      pageCount: document.numPages,
      pageSize: { width, height },
      textItemCount: textContent.items.length,
      linkCount: actualLinks.length,
      title: metadata.info.Title,
    })
  } finally {
    await task.destroy()
  }
}
