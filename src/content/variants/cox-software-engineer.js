import {
  coxSoftwareEngineerEducation,
  coxSoftwareEngineerMetadata,
  coxSoftwareEngineerProjects,
  coxSoftwareEngineerSkills,
  coxSoftwareEngineerSummary,
} from '../shared/coxSoftwareEngineer.js'
import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'

export default Object.freeze({
  id: 'cox-software-engineer',
  label: 'Cox Automotive Software Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: coxSoftwareEngineerMetadata,
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
  summary: coxSoftwareEngineerSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: coxSoftwareEngineerSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: coxSoftwareEngineerProjects,
    },
    {
      id: 'education',
      type: 'education',
      position: 3,
      heading: 'Education',
      items: coxSoftwareEngineerEducation,
    },
  ],
})
