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

export const justpaidSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | JustPaid Software Engineer',
  description: 'Product-focused full-stack software engineering résumé tailored for JustPaid.',
  filename: 'justpaid-software-engineer.pdf',
})

export const justpaidSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer and product builder working with React, JavaScript, Node.js, Python, REST APIs, MongoDB, and AWS. AWS Certified Solutions Architect - Associate with ownership building products from idea to deployment, rapid learning, curiosity, and AI-assisted development using Codex, Claude Code, and Cursor.',
})

export const justpaidSoftwareEngineerSkills = Object.freeze([
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
    skills: Object.freeze(['AWS', 'Amazon EC2', 'AWS Lambda', 'Amazon S3', 'IAM', 'CloudWatch']),
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
      'Full Stack Development',
      'Product Development',
      'REST API Design',
      'Software Engineering',
      'Ownership',
      'Customer Focus',
      'Problem Solving',
      'Maintainable Code',
      'Scalable Applications',
      'AI-assisted Development',
      'Startup Mindset',
    ]),
  }),
])

export const justpaidSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a user-focused full-stack product from scratch with React workflows, JWT authentication, REST APIs, MongoDB profiles, and AWS S3.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Shipped responsive finance dashboards and CRUD workflows with React, JavaScript, REST APIs, MongoDB, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Created maintainable habit tracking with JWT authentication, React Context state, REST APIs, and iterative user workflows.',
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
