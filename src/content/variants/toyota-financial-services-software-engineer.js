import { certifications } from '../shared/certifications.js'
import { education } from '../shared/education.js'
import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'
import {
  toyotaFinancialServicesSoftwareEngineerMetadata,
  toyotaFinancialServicesSoftwareEngineerProjects,
  toyotaFinancialServicesSoftwareEngineerSkills,
  toyotaFinancialServicesSoftwareEngineerSummary,
} from '../shared/toyotaFinancialServicesSoftwareEngineer.js'

const certificationItems = certifications.map(({ id, issuer, name }) => ({ id, issuer, name }))

export default Object.freeze({
  id: 'toyota-financial-services-software-engineer',
  label: 'Toyota Financial Services Software Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: toyotaFinancialServicesSoftwareEngineerMetadata,
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
  summary: toyotaFinancialServicesSoftwareEngineerSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: toyotaFinancialServicesSoftwareEngineerSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: toyotaFinancialServicesSoftwareEngineerProjects,
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
