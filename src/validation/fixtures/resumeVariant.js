export function createPublishedVariant() {
  return {
    id: 'test-variant',
    label: 'Test Variant',
    locale: 'en-US',
    status: 'published',
    metadata: {
      title: 'Document title',
      description: 'Document description',
      filename: 'test-variant.pdf',
    },
    labels: { present: 'Current' },
    header: {
      name: 'Example Name',
      headline: 'Example Headline',
      location: 'Example Location',
      linksLabel: 'Example links',
      links: [{ id: 'website', label: 'Example Website', url: 'https://example.com' }],
    },
    summary: {
      heading: 'Example Summary',
      text: 'Example summary text.',
    },
    sections: [
      {
        id: 'skills',
        type: 'skills',
        position: 1,
        heading: 'Example Skills',
        items: [{ id: 'skill-group', label: 'Example Group', skills: ['Example Skill'] }],
      },
      {
        id: 'experience',
        type: 'experience',
        position: 2,
        heading: 'Example Experience',
        items: [
          {
            id: 'example-role',
            role: 'Example Role',
            organization: 'Example Organization',
            location: 'Example Location',
            startDate: '2024-01',
            endDate: null,
            bullets: ['Example accomplishment.'],
          },
        ],
      },
      {
        id: 'projects',
        type: 'projects',
        position: 3,
        heading: 'Example Projects',
        items: [
          {
            id: 'example-project',
            name: 'Example Project',
            description: 'Example project description.',
            technologies: ['Example Technology'],
            linksLabel: 'Example project links',
            links: [
              { id: 'live-demo', label: 'Example Live Demo', url: 'https://example.com/demo' },
            ],
          },
        ],
      },
      {
        id: 'certifications',
        type: 'certifications',
        position: 4,
        heading: 'Example Certifications',
        items: [
          {
            id: 'example-certification',
            name: 'Example Certification',
            issuer: 'Example Issuer',
            date: '2023-06',
            url: 'https://example.com/certification',
          },
        ],
      },
      {
        id: 'education',
        type: 'education',
        position: 5,
        heading: 'Example Education',
        items: [
          {
            id: 'example-education',
            institution: 'Example Institution',
            credential: 'Example Credential',
            field: 'Example Field',
            location: 'Example Location',
            date: '2022-05',
          },
        ],
      },
    ],
  }
}
