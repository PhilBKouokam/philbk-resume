import { createHash } from 'node:crypto'
import { access, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { chromium } from 'playwright'
import { OutputError } from './OutputError.js'
import { applyCanonicalMetadata } from './pdfMetadata.js'
import { validatePdf } from './validatePdf.js'

const LETTER_CONTENT_HEIGHT_PX = 10 * 96
const LAYOUT_TOLERANCE_PX = 1
const MINIMUM_PAGE_OCCUPANCY = 0.5

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

async function prepareOutputPath(outputDirectory, filename) {
  const directory = resolve(outputDirectory)
  try {
    await mkdir(directory, { recursive: true })
    await access(directory)
  } catch (error) {
    throw new OutputError('INVALID_OUTPUT_DIRECTORY',
      `Cannot create or write to output directory: ${directory}.`, { cause: error.message })
  }
  return resolve(directory, filename)
}

async function inspectDocument(page) {
  return page.evaluate(({ maxHeight, minOccupancy, tolerance }) => {
    const resume = document.querySelector('[data-resume-document]')
    if (!resume) return { error: 'Rendered page does not contain a resume document.' }

    const rect = resume.getBoundingClientRect()
    const lastElement = resume.lastElementChild
    const lastBottom = lastElement?.getBoundingClientRect().bottom ?? rect.top
    return {
      contentHeight: lastBottom - rect.top,
      horizontalOverflow: resume.scrollWidth > resume.clientWidth + tolerance,
      pageOverflow: lastBottom - rect.top > maxHeight + tolerance,
      underfilled: lastBottom - rect.top < maxHeight * minOccupancy,
      trailingWhitespace: maxHeight - (lastBottom - rect.top),
      width: rect.width,
    }
  }, {
    maxHeight: LETTER_CONTENT_HEIGHT_PX,
    minOccupancy: MINIMUM_PAGE_OCCUPANCY,
    tolerance: LAYOUT_TOLERANCE_PX,
  })
}

export async function exportPdf({ model, origin, outputDirectory, verifyDeterminism = false }) {
  if (model.status !== 'published') {
    throw new OutputError('UNPUBLISHED_VARIANT',
      `Variant "${model.id}" is ${model.status} and cannot be exported.`)
  }

  const outputPath = await prepareOutputPath(outputDirectory, model.metadata.filename)
  const temporaryPath = `${outputPath}.tmp`
  let browser

  try {
    browser = await chromium.launch({ headless: true })
  } catch (error) {
    throw new OutputError(
      'MISSING_BROWSER',
      'Pinned Chromium could not be launched. Run: npx playwright install chromium',
      { cause: error.message },
    )
  }

  try {
    const page = await browser.newPage({ viewport: { width: 816, height: 1056 } })
    const diagnostics = []
    page.on('console', (message) => {
      if (message.type() === 'warning' || message.type() === 'error') {
        diagnostics.push(`${message.type()}: ${message.text()}`)
      }
    })
    page.on('pageerror', (error) => diagnostics.push(`pageerror: ${error.message}`))

    const response = await page.goto(`${origin}/?variant=${encodeURIComponent(model.id)}`, {
      waitUntil: 'networkidle',
    })
    if (!response?.ok()) {
      throw new OutputError('PAGE_LOAD_FAILED',
        `Production page returned HTTP ${response?.status() ?? 'unknown'}.`)
    }

    await page.emulateMedia({ media: 'print' })
    await page.evaluate(() => document.fonts.ready)

    const layout = await inspectDocument(page)
    if (layout.error) throw new OutputError('MISSING_DOCUMENT', layout.error)
    if (layout.horizontalOverflow) {
      throw new OutputError('HORIZONTAL_OVERFLOW', 'Résumé content overflows horizontally.', layout)
    }
    if (layout.pageOverflow) {
      throw new OutputError('PAGE_OVERFLOW',
        `Résumé content exceeds the 10-inch printable content area (${layout.contentHeight.toFixed(1)} px).`,
        layout)
    }
    if (layout.underfilled) {
      throw new OutputError('UNEXPECTED_BLANK_SPACE',
        `Résumé occupies less than ${MINIMUM_PAGE_OCCUPANCY * 100}% of the printable page.`,
        layout)
    }
    if (diagnostics.length > 0) {
      throw new OutputError('BROWSER_DIAGNOSTICS',
        `Browser emitted ${diagnostics.length} warning or error message(s).`, { diagnostics })
    }

    const generatedBytes = await page.pdf({
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      tagged: true,
      outline: true,
    })
    const canonicalBytes = await applyCanonicalMetadata(generatedBytes, model)
    await writeFile(temporaryPath, canonicalBytes)

    const validation = await validatePdf(temporaryPath, model)
    const digest = sha256(await readFile(temporaryPath))

    if (verifyDeterminism) {
      const repeatedBytes = await applyCanonicalMetadata(await page.pdf({
        format: 'Letter',
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        tagged: true,
        outline: true,
      }), model)
      const repeatedDigest = sha256(repeatedBytes)
      if (digest !== repeatedDigest) {
        throw new OutputError('NON_DETERMINISTIC_OUTPUT',
          'Repeated export produced different PDF bytes.', { digest, repeatedDigest })
      }
    }

    await rename(temporaryPath, outputPath)

    return Object.freeze({ outputPath, digest, layout, validation })
  } catch (error) {
    await rm(temporaryPath, { force: true })
    if (error instanceof OutputError) throw error
    throw new OutputError('EXPORT_FAILED', `PDF export failed: ${error.message}`, {
      cause: error.stack,
    })
  } finally {
    await browser.close()
  }
}
