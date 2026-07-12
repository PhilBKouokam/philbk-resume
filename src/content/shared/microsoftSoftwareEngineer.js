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

export const microsoftSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Microsoft Software Engineer',
  description: 'Full-stack software engineering résumé tailored for Microsoft Industry Solutions Engineering.',
  filename: 'phillip-bryan-kouokam-microsoft-software-engineer.pdf',
})

export const microsoftSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. AWS Certified Solutions Architect – Associate building production-ready apps, secure REST APIs, reusable front-end architecture, and scalable AWS cloud solutions.',
})

export const microsoftSoftwareEngineerSkills = Object.freeze([
  Object.freeze({
    id: 'languages',
    label: 'Languages',
    skills: Object.freeze(['JavaScript (ES6+)', 'Python (Project Use)']),
  }),
  Object.freeze({
    id: 'frontend',
    label: 'Frontend',
    skills: Object.freeze(['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']),
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
    id: 'database',
    label: 'Database',
    skills: Object.freeze(['MongoDB', 'MongoDB Atlas', 'Mongoose']),
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
      'Component Architecture',
      'REST API Design',
      'Cloud Architecture',
      'API Integration',
      'Performance Optimization',
      'System Documentation',
      'Accessibility',
      'Debugging',
    ]),
  }),
])

export const microsoftSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a production MERN app with reusable React components, secure JWT REST APIs, MongoDB profiles, AWS S3 integration, and cloud deployment.',
    ]),
  }),
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Designed scalable AWS infrastructure with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven serverless workflow with S3, Lambda, Glue, IAM, and Python to automate CSV-to-JSON transformation.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Built a responsive finance app with reusable React dashboards, authenticated CRUD workflows, REST API integration, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Built a maintainable MERN habit tracker with JWT authentication, React Context state, REST CRUD workflows, and MongoDB persistence.',
    ]),
  }),
])
