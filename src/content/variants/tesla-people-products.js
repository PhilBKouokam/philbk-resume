import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'
import {
  teslaPeopleProductsEducation,
  teslaPeopleProductsMetadata,
  teslaPeopleProductsProjects,
  teslaPeopleProductsSkills,
  teslaPeopleProductsSummary,
} from '../shared/teslaPeopleProducts.js'

export default Object.freeze({
  id: 'tesla-people-products',
  label: 'Tesla Software Engineer, People Products',
  locale: 'en-US',
  status: 'published',
  metadata: teslaPeopleProductsMetadata,
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
  summary: teslaPeopleProductsSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: teslaPeopleProductsSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: teslaPeopleProductsProjects,
    },
    {
      id: 'education',
      type: 'education',
      position: 3,
      heading: 'Education',
      items: teslaPeopleProductsEducation,
    },
  ],
})
