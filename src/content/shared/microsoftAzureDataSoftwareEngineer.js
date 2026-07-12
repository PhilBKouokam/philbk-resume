import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')
const awsHighlyAvailable = canonicalProject('aws-highly-available-web-application')
const awsServerlessEtl = canonicalProject('aws-serverless-etl-pipeline')

export const microsoftAzureDataSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Data Software Engineer',
  description: 'Cloud, backend, and data-oriented software engineering résumé tailored for Microsoft.',
  filename: 'microsoft-azure-data-software-engineer.pdf',
})

export const microsoftAzureDataSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Software Engineer specializing in JavaScript, Node.js, Express.js, MongoDB, React, and AWS. AWS Certified Solutions Architect – Associate with experience building cloud-native applications, backend REST APIs, database-backed systems, and scalable AWS architectures.',
})

export const microsoftAzureDataSoftwareEngineerSkills = Object.freeze([
  Object.freeze({
    id: 'languages',
    label: 'Languages',
    skills: Object.freeze(['JavaScript (ES6+)', 'Python (Project Use)']),
  }),
  Object.freeze({
    id: 'database',
    label: 'Database',
    skills: Object.freeze(['SQL (Coursework)', 'MongoDB', 'MongoDB Atlas', 'Mongoose']),
  }),
  Object.freeze({
    id: 'backend',
    label: 'Backend',
    skills: Object.freeze(['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication']),
  }),
  Object.freeze({
    id: 'cloud',
    label: 'Cloud',
    skills: Object.freeze([
      'AWS',
      'AWS Certified Solutions Architect – Associate',
      'Amazon EC2',
      'AWS Lambda',
      'Amazon S3',
      'IAM',
      'CloudWatch',
      'Auto Scaling',
      'Elastic Load Balancing',
      'VPC',
      'AWS Glue',
    ]),
  }),
  Object.freeze({
    id: 'frontend',
    label: 'Frontend',
    skills: Object.freeze(['React', 'HTML5', 'CSS3', 'Tailwind CSS']),
  }),
  Object.freeze({
    id: 'tools',
    label: 'Tools',
    skills: Object.freeze(['Git', 'GitHub', 'Postman', 'Vercel', 'Render']),
  }),
  Object.freeze({
    id: 'concepts',
    label: 'Concepts',
    skills: Object.freeze([
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Database Design',
      'REST API Design',
      'Cloud Architecture',
      'Scalable Systems',
      'Debugging',
    ]),
  }),
])

export const microsoftAzureDataSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Designed highly available AWS infrastructure with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven ETL pipeline with S3, Lambda, Glue, IAM, and Python for automated CSV-to-JSON processing.',
    ]),
  }),
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a maintainable MERN app with reusable React architecture, JWT REST APIs, MongoDB profiles, AWS S3, and cloud deployment.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Built an authenticated finance dashboard with MongoDB CRUD workflows, REST API integration, reusable React components, and S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Built a maintainable MERN habit tracker with JWT authentication, React Context state, REST CRUD APIs, and MongoDB persistence.',
    ]),
  }),
])

export const microsoftAzureDataSoftwareEngineerEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: "Relevant Coursework: Database Systems (SQL) • Dean's List (Multiple Semesters)",
  }),
])
