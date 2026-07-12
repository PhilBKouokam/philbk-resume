import { certifications } from '../shared/certifications.js'
import { education } from '../shared/education.js'
import { links } from '../shared/links.js'
import {
  notionEarlyCareerSoftwareEngineerMetadata,
  notionEarlyCareerSoftwareEngineerProjects,
  notionEarlyCareerSoftwareEngineerSkills,
  notionEarlyCareerSoftwareEngineerSummary,
} from '../shared/notionEarlyCareerSoftwareEngineer.js'
import { profile } from '../shared/profile.js'

const certificationItems = certifications.map(({ id, issuer, name }) => ({ id, issuer, name }))

export default Object.freeze({
  id: 'notion-early-career-software-engineer',
  label: 'Notion Early Career Software Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: notionEarlyCareerSoftwareEngineerMetadata,
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
  summary: notionEarlyCareerSoftwareEngineerSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: notionEarlyCareerSoftwareEngineerSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: notionEarlyCareerSoftwareEngineerProjects,
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
