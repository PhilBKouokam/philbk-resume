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

export const visaSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Visa Software Engineer',
  description: 'Full-stack software engineering résumé tailored for Visa Software Engineer roles.',
  filename: 'visa-software-engineer.pdf',
})

export const visaSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, REST APIs, SQL coursework, and AWS. AWS Certified Solutions Architect – Associate building scalable web applications with reusable components, authentication, responsive interfaces, maintainable software, and product-quality engineering.',
})

export const visaSoftwareEngineerSkills = Object.freeze([
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
      'Software Design',
      'REST API Design',
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Maintainable Code',
      'Reusable Components',
      'Scalable Web Applications',
      'Debugging',
    ]),
  }),
])

export const visaSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a scalable MERN app with reusable React components, JWT REST APIs, MongoDB profiles, AWS S3 storage, and responsive UX.',
    ]),
  }),
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Deployed highly available AWS infrastructure with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
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
      'Built a maintainable MERN habit tracker with JWT authentication, React Context state, REST CRUD APIs, and MongoDB persistence.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven AWS pipeline with S3, Lambda, Glue, IAM, and Python for automated CSV-to-JSON processing.',
    ]),
  }),
])
