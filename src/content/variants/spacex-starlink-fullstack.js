import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'
import {
  spacexStarlinkFullstackEducation,
  spacexStarlinkFullstackMetadata,
  spacexStarlinkFullstackProjects,
  spacexStarlinkFullstackSkills,
  spacexStarlinkFullstackSummary,
} from '../shared/spacexStarlinkFullstack.js'

export default Object.freeze({
  id: 'spacex-starlink-fullstack',
  label: 'SpaceX Starlink Full Stack Software Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: spacexStarlinkFullstackMetadata,
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
  summary: spacexStarlinkFullstackSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: spacexStarlinkFullstackSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: spacexStarlinkFullstackProjects,
    },
    {
      id: 'education',
      type: 'education',
      position: 3,
      heading: 'Education',
      items: spacexStarlinkFullstackEducation,
    },
  ],
})
