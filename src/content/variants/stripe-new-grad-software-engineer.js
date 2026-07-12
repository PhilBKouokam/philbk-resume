import { certifications } from '../shared/certifications.js'
import { education } from '../shared/education.js'
import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'
import {
  stripeNewGradSoftwareEngineerMetadata,
  stripeNewGradSoftwareEngineerProjects,
  stripeNewGradSoftwareEngineerSkills,
  stripeNewGradSoftwareEngineerSummary,
} from '../shared/stripeNewGradSoftwareEngineer.js'

const certificationItems = certifications.map(({ id, issuer, name }) => ({ id, issuer, name }))

export default Object.freeze({
  id: 'stripe-new-grad-software-engineer',
  label: 'Stripe New Grad Software Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: stripeNewGradSoftwareEngineerMetadata,
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
  summary: stripeNewGradSoftwareEngineerSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: stripeNewGradSoftwareEngineerSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: stripeNewGradSoftwareEngineerProjects,
    },
    {
      id: 'certifications',
      type: 'certifications',
      position: 3,
      heading: 'Certifications',
      items: certificationItems,
    },
    {
      id: 'education',
      type: 'education',
      position: 4,
      heading: 'Education',
      items: education,
    },
  ],
})
