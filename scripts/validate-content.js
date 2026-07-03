import { getVariantIds, loadVariant } from '../src/content/index.js'

const failures = []

for (const variantId of getVariantIds()) {
  try {
    await loadVariant(variantId)
    console.log(`Validated content variant: ${variantId}`)
  } catch (error) {
    failures.push(error)
  }
}

if (failures.length > 0) {
  for (const error of failures) {
    console.error(error.message)
  }
  process.exitCode = 1
}
