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

export const ustAnalystJuniorDeveloperMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | UST Analyst Junior Developer',
  description: 'Early-career full-stack software engineering résumé tailored for UST Developer I roles.',
  filename: 'ust-analyst-junior-developer.pdf',
})

export const ustAnalystJuniorDeveloperSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer and early-career Junior Developer focused on JavaScript, React, Node.js, Python, REST APIs, AWS, and maintainable web applications. AWS Certified Solutions Architect – Associate with strong software engineering fundamentals, analytical problem solving, technical documentation, and cross-functional collaboration.',
})

export const ustAnalystJuniorDeveloperSkills = Object.freeze([
  Object.freeze({
    id: 'languages',
    label: 'Languages',
    skills: Object.freeze([
      'JavaScript (ES6+)',
      'Python (Project Use)',
      'SQL (Coursework)',
      'HTML5',
      'CSS3',
      'TypeScript (Learning)',
    ]),
  }),
  Object.freeze({
    id: 'frontend',
    label: 'Frontend',
    skills: Object.freeze(['React', 'Tailwind CSS', 'Responsive Design']),
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
      'Software Development Lifecycle',
      'REST API Design',
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Problem Solving',
      'Debugging',
      'Maintainable Code',
      'Automation',
      'Version Control',
      'Technical Documentation',
      'Collaboration',
    ]),
  }),
])

export const ustAnalystJuniorDeveloperProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a maintainable full-stack application with React workflows, JWT authentication, REST APIs, MongoDB profiles, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Designed responsive finance dashboards and CRUD workflows with React, REST APIs, MongoDB, and software engineering best practices.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Created user-focused habit tracking with JWT authentication, REST APIs, React Context state, and maintainable workflows.',
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
