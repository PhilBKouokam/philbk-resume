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

export const salvoSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Salvo Health Software Engineer',
  description: 'Product-focused full-stack software engineering résumé tailored for Salvo Health.',
  filename: 'salvo-software-engineer.pdf',
})

export const salvoSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer building modern web applications with React, JavaScript, Node.js, Express.js, REST APIs, MongoDB, and AWS. AWS Certified Solutions Architect – Associate using Codex, Claude Code, and Cursor for AI-assisted development, rapid learning, and code quality.',
})

export const salvoSoftwareEngineerSkills = Object.freeze([
  Object.freeze({
    id: 'languages',
    label: 'Languages',
    skills: Object.freeze([
      'JavaScript (ES6+)',
      'Python (Project Use)',
      'SQL (Coursework)',
      'TypeScript (Learning)',
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
    skills: Object.freeze(['Git', 'GitHub', 'Postman', 'Codex', 'Claude Code', 'Cursor', 'Vercel', 'Render']),
  }),
  Object.freeze({
    id: 'concepts',
    label: 'Concepts',
    skills: Object.freeze([
      'Full-Stack Development',
      'Software Engineering',
      'REST API Design',
      'Maintainable Code',
      'Responsive UI',
      'Debugging',
      'Scalable Applications',
      'AI-assisted Development',
      'Agile Development',
      'Product Thinking',
      'Collaboration',
    ]),
  }),
])

export const salvoSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a user-focused calorie banking product with reusable React workflows, JWT authentication, REST APIs, MongoDB profiles, and maintainable architecture.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Designed responsive finance dashboards and CRUD workflows with React, REST APIs, MongoDB, AWS S3 uploads, and clean architecture.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Created a user-focused habit tracker with JWT authentication, React Context state, REST APIs, and clean software design.',
    ]),
  }),
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Deployed reliable AWS infrastructure with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven AWS pipeline with S3, Lambda, Glue, IAM, and Python for automated CSV-to-JSON processing.',
    ]),
  }),
])
