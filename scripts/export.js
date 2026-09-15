import { resolve } from 'node:path'
import { getVariantIds, loadVariant } from '../src/content/index.js'
import { exportPdf } from './output/exportPdf.js'
import { OutputError } from './output/OutputError.js'
import { startStaticServer } from './output/staticServer.js'

const PROJECT_ROOT = resolve(import.meta.dirname, '..')
const BUILD_DIRECTORY = resolve(PROJECT_ROOT, 'dist')
const OUTPUT_DIRECTORY = resolve(BUILD_DIRECTORY, 'pdf')

function readOptions(argumentsList) {
  const options = { all: false, defaultVariant: false, variantId: null }

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index]
    if (argument === '--all') options.all = true
    else if (argument === '--default') options.defaultVariant = true
    else if (argument === '--variant') options.variantId = argumentsList[++index]
    else throw new OutputError('INVALID_ARGUMENT', `Unknown export argument: ${argument}`)
  }

  if (options.all && options.variantId) {
    throw new OutputError('INVALID_ARGUMENT', 'Use either --all or --variant, not both.')
  }
  if (!options.all && !options.defaultVariant && !options.variantId) {
    throw new OutputError('MISSING_VARIANT', 'Specify a variant with --variant <id>.')
  }
  if (options.variantId === undefined) {
    throw new OutputError('MISSING_VARIANT', 'The --variant option requires an ID.')
  }

  return options
}

async function selectModels(options) {
  if (options.variantId) {
    const model = await loadVariant(options.variantId)
    if (model.status !== 'published') {
      throw new OutputError('UNPUBLISHED_VARIANT',
        `Variant "${options.variantId}" is ${model.status} and cannot be exported.`)
    }
    return [model]
  }

  const models = await Promise.all(getVariantIds().map(loadVariant))
  const published = models.filter((model) => model.status === 'published')
  if (published.length === 0) {
    throw new OutputError('NO_PUBLISHED_VARIANTS',
      'No published résumé variants are available. Publish content before exporting.')
  }
  return options.all ? published : [published[0]]
}

async function run() {
  const options = readOptions(process.argv.slice(2))
  const models = await selectModels(options)
  const server = await startStaticServer(BUILD_DIRECTORY)

  try {
    for (const model of models) {
      const result = await exportPdf({
        model,
        origin: server.origin,
        outputDirectory: OUTPUT_DIRECTORY,
        verifyDeterminism: true,
      })
      console.log(`Exported ${model.id}: ${result.outputPath}`)
      console.log(`Validated: 1 page, ${result.validation.textItemCount} text items, ${result.validation.linkCount} links`)
      console.log(`Layout: ${result.layout.contentHeight.toFixed(2)} px high, ${result.layout.width.toFixed(2)} px wide; ${result.layout.trailingWhitespace.toFixed(2)} px remaining in conservative 960 px export area`)
      console.log(`SHA-256: ${result.digest}`)
    }
  } finally {
    await server.close()
  }
}

run().catch((error) => {
  if (error instanceof OutputError) {
    console.error(`[${error.code}] ${error.message}`)
    if (Object.keys(error.details).length > 0) console.error(error.details)
  } else {
    console.error(error)
  }
  process.exitCode = 1
})
