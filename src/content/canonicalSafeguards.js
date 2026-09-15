// Conservative claim gate, not a substitute for source review.
export function assertCanonicalClaims(variant) {
  if (variant.sections.some(({ type }) => type === 'experience')) {
    throw new Error('Canonical evidence does not include professional engineering employment.')
  }
  const text = JSON.stringify(variant)
  const prohibited = /\b(?:Apple Health|Fitbit|MyFitnessPal|health integration|automated ingestion|RAG|fine[- ]tuning|model training|autonomous agents?|machine[- ]learning models|production AI|enterprise[- ](?:scale|usage|customers?)|production[- ]scale|App Store|Google Play|health data|AI[- ]powered|AI product|revenue|adoption|notifications?|background delivery|projections?|production authentication)\b|\b(?:hundreds|thousands|dozens|millions) of (?:active |paying )?users\b|\b\d[\d,]*\s*(?:active\s+|paying\s+)?users\b|\b\d+\+? years? of (?:professional|industry)\b/i
  if (prohibited.test(text)) throw new Error('Unsupported canonical claim: source verification required.')
}
