import { links } from '../shared/links.js'
import { profile } from '../shared/profile.js'
import {
  twitchSoftwareEngineerEducation,
  twitchSoftwareEngineerMetadata,
  twitchSoftwareEngineerProjects,
  twitchSoftwareEngineerSkills,
  twitchSoftwareEngineerSummary,
} from '../shared/twitchSoftwareEngineer.js'

export default Object.freeze({
  id: 'twitch-software-engineer',
  label: 'Twitch Software Engineer I, Commerce Engineering',
  locale: 'en-US',
  status: 'published',
  metadata: twitchSoftwareEngineerMetadata,
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
  summary: twitchSoftwareEngineerSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: twitchSoftwareEngineerSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: twitchSoftwareEngineerProjects,
    },
    {
      id: 'education',
      type: 'education',
      position: 3,
      heading: 'Education',
      items: twitchSoftwareEngineerEducation,
    },
  ],
})
