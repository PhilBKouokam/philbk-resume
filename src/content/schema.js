import { z } from 'zod'
import { assertCanonicalClaims } from './canonicalSafeguards.js'

export const SUPPORTED_SECTION_TYPES = Object.freeze([
  'skills',
  'experience',
  'projects',
  'certifications',
  'education',
])

const stableId = z
  .string()
  .trim()
  .min(1, 'ID is required')
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase kebab-case ID')

const requiredText = (field) => z.string().trim().min(1, `${field} is required`)

const httpsUrl = z
  .url('URL must be valid')
  .refine((value) => value.startsWith('https://'), 'URL must use HTTPS')

const contactUrl = z
  .url('Contact URL must be valid')
  .refine(
    (value) => ['https://', 'mailto:', 'tel:'].some((scheme) => value.startsWith(scheme)),
    'Contact URL must use HTTPS, mailto, or tel',
  )

const optionalHttpsUrl = httpsUrl.optional()
const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Date must use YYYY-MM format')

const metadataSchema = z
  .object({
    title: requiredText('Metadata title'),
    description: requiredText('Metadata description'),
    filename: requiredText('Metadata filename').regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*\.pdf$/,
      'Metadata filename must be a kebab-case PDF filename',
    ),
  })
  .strict()

const createLinkSchema = (urlSchema) => z
  .object({
    id: stableId,
    label: requiredText('Link label'),
    url: urlSchema,
  })
  .strict()

const headerLinkSchema = createLinkSchema(contactUrl)
const externalLinkSchema = createLinkSchema(httpsUrl)

const headerSchema = z
  .object({
    name: requiredText('Header name'),
    headline: requiredText('Header headline'),
    location: requiredText('Header location'),
    linksLabel: requiredText('Header links label'),
    links: z.array(headerLinkSchema).min(1, 'At least one header link is required'),
  })
  .strict()

const summarySchema = z
  .object({
    heading: requiredText('Summary heading'),
    text: requiredText('Summary text'),
  })
  .strict()

const labelsSchema = z
  .object({
    present: requiredText('Present-date label'),
  })
  .strict()

const sectionBaseSchema = z
  .object({
    id: stableId,
    position: z.number().int().positive(),
    heading: requiredText('Section heading'),
  })
  .strict()

const skillGroupSchema = z
  .object({
    id: stableId,
    label: requiredText('Skill group label'),
    skills: z.array(requiredText('Skill')).min(1, 'Skill group cannot be empty'),
  })
  .strict()

const experienceItemSchema = z
  .object({
    id: stableId,
    role: requiredText('Experience role'),
    organization: requiredText('Experience organization'),
    location: requiredText('Experience location'),
    startDate: yearMonth,
    endDate: yearMonth.nullable(),
    bullets: z.array(requiredText('Experience bullet')).min(1, 'Experience bullets cannot be empty'),
  })
  .strict()
  .refine(
    (item) => item.endDate === null || item.endDate >= item.startDate,
    { path: ['endDate'], message: 'End date cannot be earlier than start date' },
  )

const projectItemSchema = z
  .object({
    id: stableId,
    name: requiredText('Project name'),
    description: requiredText('Project description').optional(),
    bullets: z.array(requiredText('Project bullet')).min(1).optional(),
    technologies: z.array(requiredText('Technology')),
    linksLabel: requiredText('Project links label').optional(),
    links: z.array(externalLinkSchema).min(1).optional(),
  })
  .strict()
  .refine((item) => item.description || item.bullets, {
    message: 'Project requires a description or bullets',
  })
  .refine((item) => Boolean(item.links) === Boolean(item.linksLabel), {
    message: 'Project links and links label must be provided together',
  })

const certificationItemSchema = z
  .object({
    id: stableId,
    name: requiredText('Certification name'),
    issuer: requiredText('Certification issuer'),
    date: yearMonth.optional(),
    url: optionalHttpsUrl,
  })
  .strict()

const educationItemSchema = z
  .object({
    id: stableId,
    institution: requiredText('Education institution'),
    credential: requiredText('Education credential'),
    field: requiredText('Education field').optional(),
    location: requiredText('Education location').optional(),
    date: yearMonth.optional(),
  })
  .strict()

const sectionSchema = z.discriminatedUnion('type', [
  sectionBaseSchema.extend({
    type: z.literal('skills'),
    items: z.array(skillGroupSchema).min(1, 'Section items cannot be empty'),
  }),
  sectionBaseSchema.extend({
    type: z.literal('experience'),
    items: z.array(experienceItemSchema).min(1, 'Section items cannot be empty'),
  }),
  sectionBaseSchema.extend({
    type: z.literal('projects'),
    items: z.array(projectItemSchema).min(1, 'Section items cannot be empty'),
  }),
  sectionBaseSchema.extend({
    type: z.literal('certifications'),
    items: z.array(certificationItemSchema).min(1, 'Section items cannot be empty'),
  }),
  sectionBaseSchema.extend({
    type: z.literal('education'),
    items: z.array(educationItemSchema).min(1, 'Section items cannot be empty'),
  }),
])

const variantIdentitySchema = z
  .object({
    id: stableId,
    label: requiredText('Variant label'),
    locale: requiredText('Variant locale'),
  })
  .strict()

const draftVariantSchema = variantIdentitySchema.extend({
  status: z.literal('draft'),
})

const publishedVariantSchema = variantIdentitySchema
  .extend({
    status: z.literal('published'),
    metadata: metadataSchema,
    labels: labelsSchema,
    header: headerSchema,
    summary: summarySchema,
    sections: z.array(sectionSchema).min(1, 'At least one section is required'),
  })
  .superRefine((variant, context) => {
    addDuplicateIssues(variant.sections, 'id', ['sections'], context)
    addDuplicateIssues(variant.sections, 'type', ['sections'], context)
    addDuplicateIssues(variant.header.links, 'id', ['header', 'links'], context)
    addDuplicateIssues(variant.header.links, 'url', ['header', 'links'], context)

    variant.sections.forEach((section, index) => {
      if (section.position !== index + 1) {
        context.addIssue({
          code: 'custom',
          path: ['sections', index, 'position'],
          message: `Section position must be ${index + 1} to match array order`,
        })
      }

      addDuplicateIssues(section.items, 'id', ['sections', index, 'items'], context)

      if (section.type === 'projects') {
        section.items.forEach((item, itemIndex) => {
          if (!item.links) return
          addDuplicateIssues(
            item.links,
            'id',
            ['sections', index, 'items', itemIndex, 'links'],
            context,
          )
          addDuplicateIssues(
            item.links,
            'url',
            ['sections', index, 'items', itemIndex, 'links'],
            context,
          )
        })
      }
    })
  })

export const resumeVariantSchema = z.discriminatedUnion('status', [
  draftVariantSchema,
  publishedVariantSchema,
])

function addDuplicateIssues(items, key, path, context) {
  const firstIndexByValue = new Map()

  items.forEach((item, index) => {
    if (!item || typeof item !== 'object' || !(key in item)) return

    const value = item[key]
    if (firstIndexByValue.has(value)) {
      context.addIssue({
        code: 'custom',
        path: [...path, index, key],
        message: `Duplicate ${key} "${value}"; first used at index ${firstIndexByValue.get(value)}`,
      })
    } else {
      firstIndexByValue.set(value, index)
    }
  })
}

function formatPath(path) {
  return path.length === 0
    ? 'variant'
    : path.map((segment) => (typeof segment === 'number' ? `[${segment}]` : segment)).join('.')
}

export class ContentValidationError extends Error {
  constructor(variantId, issues) {
    const details = issues
      .map((issue) => `- ${formatPath(issue.path)}: ${issue.message}`)
      .join('\n')
    super(`Invalid resume variant "${variantId}":\n${details}`)
    this.name = 'ContentValidationError'
    this.variantId = variantId
    this.issues = issues
  }
}

export function validateResumeVariant(input) {
  const result = resumeVariantSchema.safeParse(input)

  if (!result.success) {
    const variantId = typeof input?.id === 'string' ? input.id : 'unknown'
    throw new ContentValidationError(variantId, result.error.issues)
  }

  if (result.data.id === 'fullstack' && result.data.status === 'published') {
    assertCanonicalClaims(result.data)
  }
  return Object.freeze(result.data)
}
