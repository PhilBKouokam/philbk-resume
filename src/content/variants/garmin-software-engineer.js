import {
  garminSoftwareEngineerEducation,
  garminSoftwareEngineerMetadata,
  garminSoftwareEngineerProjects,
  garminSoftwareEngineerSkills,
  garminSoftwareEngineerSummary,
} from '../shared/garminSoftwareEngineer.js'
import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'

export default Object.freeze({
  id: 'garmin-software-engineer',
  label: 'Garmin Software Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: garminSoftwareEngineerMetadata,
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
  summary: garminSoftwareEngineerSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: garminSoftwareEngineerSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: garminSoftwareEngineerProjects,
    },
    {
      id: 'education',
      type: 'education',
      position: 3,
      heading: 'Education',
      items: garminSoftwareEngineerEducation,
    },
  ],
})
