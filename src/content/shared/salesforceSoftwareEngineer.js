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

export const salesforceSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Salesforce Software Engineer',
  description: 'Full-stack software engineering résumé tailored for Salesforce New Grad roles.',
  filename: 'salesforce-software-engineer.pdf',
})

export const salesforceSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, REST APIs, SQL coursework, and AWS. AWS Certified Solutions Architect – Associate building scalable cloud applications with clean architecture, software craftsmanship, user-focused engineering, and responsible AI-assisted development workflows with human review for code quality.',
})

export const salesforceSoftwareEngineerSkills = Object.freeze([
  Object.freeze({
    id: 'languages',
    label: 'Languages',
    skills: Object.freeze([
      'JavaScript (ES6+)',
      'TypeScript (Learning)',
      'Python (Project Use)',
      'SQL (Coursework)',
      'HTML5',
      'CSS3',
    ]),
  }),
  Object.freeze({
    id: 'frontend',
    label: 'Frontend',
    skills: Object.freeze(['React', 'Tailwind CSS', 'Responsive Design', 'Accessibility']),
  }),
  Object.freeze({
    id: 'backend',
    label: 'Backend',
    skills: Object.freeze([
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'MongoDB',
      'Mongoose',
    ]),
  }),
  Object.freeze({
    id: 'cloud',
    label: 'Cloud',
    skills: Object.freeze([
      'AWS',
      'Amazon EC2',
      'AWS Lambda',
      'Amazon S3',
      'IAM',
      'CloudWatch',
      'Elastic Load Balancing',
      'Auto Scaling',
      'VPC',
      'AWS Glue',
    ]),
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
      'Software Design',
      'REST API Design',
      'Data Structures',
      'Algorithms',
      'Maintainable Code',
      'Scalable Applications',
      'Debugging',
      'Testing Mindset',
      'Code Quality',
    ]),
  }),
])

export const salesforceSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a scalable MERN app with reusable React components, JWT REST APIs, MongoDB profiles, AWS S3 storage, and responsive UX.',
    ]),
  }),
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Deployed scalable AWS architecture with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Built a responsive finance dashboard with MongoDB CRUD workflows, REST API integration, reusable React components, and S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Built a maintainable MERN habit tracker with JWT authentication, React Context state, REST CRUD APIs, and user-focused workflows.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven AWS pipeline with S3, Lambda, Glue, IAM, and Python for automated CSV-to-JSON processing.',
    ]),
  }),
])
