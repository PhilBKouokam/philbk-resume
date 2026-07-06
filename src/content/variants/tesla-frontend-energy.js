import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'
import {
  teslaFrontendEnergyEducation,
  teslaFrontendEnergyMetadata,
  teslaFrontendEnergyProjects,
  teslaFrontendEnergySkills,
  teslaFrontendEnergySummary,
} from '../shared/teslaFrontendEnergy.js'

export default Object.freeze({
  id: 'tesla-frontend-energy',
  label: 'Tesla Frontend Software Engineer, Energy Charging',
  locale: 'en-US',
  status: 'published',
  metadata: teslaFrontendEnergyMetadata,
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
  summary: teslaFrontendEnergySummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: teslaFrontendEnergySkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: teslaFrontendEnergyProjects,
    },
    {
      id: 'education',
      type: 'education',
      position: 3,
      heading: 'Education',
      items: teslaFrontendEnergyEducation,
    },
  ],
})
