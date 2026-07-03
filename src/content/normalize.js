function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value

  Object.freeze(value)
  Object.values(value).forEach(deepFreeze)
  return value
}

export function normalizeResumeVariant(variant) {
  if (variant.status === 'draft') return deepFreeze({ ...variant })

  const model = {
    ...variant,
    header: {
      ...variant.header,
      links: variant.header.links.map((link) => ({ ...link })),
    },
    summary: { ...variant.summary },
    sections: variant.sections.map((section) => ({
      id: section.id,
      type: section.type,
      heading: section.heading,
      items: section.items.map((item) => ({ ...item })),
    })),
  }

  return deepFreeze(model)
}
