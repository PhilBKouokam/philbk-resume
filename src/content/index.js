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
  'amazon-sde': () => import('./variants/amazon-sde.js'),
  'amazon-sre': () => import('./variants/amazon-sre.js'),
  'microsoft-software-engineer': () => import('./variants/microsoft-software-engineer.js'),
  'microsoft-azure-data-software-engineer': () => import('./variants/microsoft-azure-data-software-engineer.js'),
  'apple-swe-program-tools': () => import('./variants/apple-swe-program-tools.js'),
  'meta-production-engineer-university-grad': () => import('./variants/meta-production-engineer-university-grad.js'),
  'visa-software-engineer': () => import('./variants/visa-software-engineer.js'),
  'stripe-new-grad-software-engineer': () => import('./variants/stripe-new-grad-software-engineer.js'),
  'salesforce-software-engineer': () => import('./variants/salesforce-software-engineer.js'),
  'notion-early-career-software-engineer': () => import('./variants/notion-early-career-software-engineer.js'),
  'intuit-software-engineer': () => import('./variants/intuit-software-engineer.js'),
  'toyota-financial-services-software-engineer': () => import('./variants/toyota-financial-services-software-engineer.js'),
  'salvo-software-engineer': () => import('./variants/salvo-software-engineer.js'),
  'ust-analyst-junior-developer': () => import('./variants/ust-analyst-junior-developer.js'),
  'spg-web-developer': () => import('./variants/spg-web-developer.js'),
  'justpaid-software-engineer': () => import('./variants/justpaid-software-engineer.js'),
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
