import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'
import {
  spacexStarshipCiEducation,
  spacexStarshipCiMetadata,
  spacexStarshipCiProjects,
  spacexStarshipCiSkills,
  spacexStarshipCiSummary,
} from '../shared/spacexStarshipCi.js'

export default Object.freeze({
  id: 'spacex-starship-ci',
  label: 'SpaceX Starship Continuous Integration Software Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: spacexStarshipCiMetadata,
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
  summary: spacexStarshipCiSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: spacexStarshipCiSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: spacexStarshipCiProjects,
    },
    {
      id: 'education',
      type: 'education',
      position: 3,
      heading: 'Education',
      items: spacexStarshipCiEducation,
    },
  ],
})
