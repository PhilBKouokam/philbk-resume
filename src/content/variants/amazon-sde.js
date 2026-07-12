import { certifications } from '../shared/certifications.js'
import {
  amazonSdeEducation,
  amazonSdeMetadata,
  amazonSdeProjects,
  amazonSdeSkills,
  amazonSdeSummary,
} from '../shared/amazonSde.js'
import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'

const awsCertification = certifications
  .filter(({ id }) => id === 'aws-solutions-architect-associate')
  .map(({ id, issuer, name }) => ({ id, issuer, name }))

export default Object.freeze({
  id: 'amazon-sde',
  label: 'Amazon Software Development Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: amazonSdeMetadata,
  labels: {
    present: 'Present',
  },
  header: {
    name: profile.name,
    headline: profile.headline,
    location: profile.location,
    linksLabel: 'Contact and professional links',
    links: [links.portfolio, links.phone, links.email, links.github, links.linkedin],
  },
  summary: amazonSdeSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: amazonSdeSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: amazonSdeProjects,
    },
    {
      id: 'certifications',
      type: 'certifications',
      position: 3,
      heading: 'Certification',
      items: awsCertification,
    },
    {
      id: 'education',
      type: 'education',
      position: 4,
      heading: 'Education',
      items: amazonSdeEducation,
    },
  ],
})
