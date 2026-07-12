import { certifications } from '../shared/certifications.js'
import { links } from '../shared/links.js'
import {
  microsoftAzureDataSoftwareEngineerEducation,
  microsoftAzureDataSoftwareEngineerMetadata,
  microsoftAzureDataSoftwareEngineerProjects,
  microsoftAzureDataSoftwareEngineerSkills,
  microsoftAzureDataSoftwareEngineerSummary,
} from '../shared/microsoftAzureDataSoftwareEngineer.js'
import { profile } from '../shared/profile.js'

const certificationItems = certifications.map(({ id, issuer, name }) => ({ id, issuer, name }))

export default Object.freeze({
  id: 'microsoft-azure-data-software-engineer',
  label: 'Microsoft Data Software Engineer',
  locale: 'en-US',
  status: 'published',
  metadata: microsoftAzureDataSoftwareEngineerMetadata,
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
  summary: microsoftAzureDataSoftwareEngineerSummary,
  sections: [
    {
      id: 'technical-skills',
      type: 'skills',
      position: 1,
      heading: 'Technical Skills',
      items: microsoftAzureDataSoftwareEngineerSkills,
    },
    {
      id: 'selected-engineering-projects',
      type: 'projects',
      position: 2,
      heading: 'Selected Engineering Projects',
      items: microsoftAzureDataSoftwareEngineerProjects,
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
      items: microsoftAzureDataSoftwareEngineerEducation,
    },
  ],
})
