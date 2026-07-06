import {
  amazonFrontendEducation,
  amazonFrontendMetadata,
  amazonFrontendProjects,
  amazonFrontendSkills,
  amazonFrontendSummary,
} from '../shared/amazonFrontend.js'
import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'

export default Object.freeze({
  id: 'amazon-frontend',
  label: 'Amazon Front-End Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: amazonFrontendMetadata,
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
  summary: amazonFrontendSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: amazonFrontendSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: amazonFrontendProjects,
    },
    {
      id: 'education',
      type: 'education',
      position: 3,
      heading: 'Education',
      items: amazonFrontendEducation,
    },
  ],
})
