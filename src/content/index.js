import { validateResumeVariant } from './schema.js'
import { normalizeResumeVariant } from './normalize.js'

const variantLoaders = Object.freeze({
  frontend: () => import('./variants/frontend.js'),
  fullstack: () => import('./variants/fullstack.js'),
  'amazon-frontend': () => import('./variants/amazon-frontend.js'),
  'hhaexchange-fullstack': () => import('./variants/hhaexchange-fullstack.js'),
  'garmin-software-engineer': () => import('./variants/garmin-software-engineer.js'),
  'cox-software-engineer': () => import('./variants/cox-software-engineer.js'),
  'spacex-starlink-fullstack': () => import('./variants/spacex-starlink-fullstack.js'),
  'tesla-people-products': () => import('./variants/tesla-people-products.js'),
  'tesla-frontend-energy': () => import('./variants/tesla-frontend-energy.js'),
  'spacex-starship-ci': () => import('./variants/spacex-starship-ci.js'),
  'twitch-software-engineer': () => import('./variants/twitch-software-engineer.js'),
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
