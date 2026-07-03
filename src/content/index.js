import { validateResumeVariant } from './schema.js'
import { normalizeResumeVariant } from './normalize.js'

const variantLoaders = Object.freeze({
  frontend: () => import('./variants/frontend.js'),
  fullstack: () => import('./variants/fullstack.js'),
  startup: () => import('./variants/startup.js'),
  cloud: () => import('./variants/cloud.js'),
})

export function getVariantIds() {
  return Object.freeze(Object.keys(variantLoaders))
}

export async function loadVariant(variantId) {
  const loader = variantLoaders[variantId]

  if (!loader) {
    throw new RangeError(
      `Unknown resume variant "${variantId}". Available variants: ${getVariantIds().join(', ')}`,
    )
  }

  const module = await loader()
  return normalizeResumeVariant(validateResumeVariant(module.default))
}

export { ContentValidationError, validateResumeVariant } from './schema.js'
export { normalizeResumeVariant } from './normalize.js'
