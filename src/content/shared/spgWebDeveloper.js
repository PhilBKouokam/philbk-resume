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

export const spgWebDeveloperMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | SPG Web Developer',
  description: 'Full-stack web development résumé tailored for Software Productivity Group.',
  filename: 'spg-web-developer.pdf',
})

export const spgWebDeveloperSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Web Developer building maintainable web applications with JavaScript, React, Node.js, Express.js, REST APIs, HTML5, CSS3, and AWS. AWS Certified Solutions Architect - Associate with strong debugging, documentation, rapid learning, and AI-assisted development using Codex, Claude Code, and Cursor.',
})

export const spgWebDeveloperSkills = Object.freeze([
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
      'Web Development',
      'REST API Design',
      'Software Engineering',
      'Debugging',
      'Documentation',
      'Responsive UI',
      'Authentication',
      'Problem Solving',
      'Version Control',
      'Maintainable Code',
      'AI-assisted Development',
    ]),
  }),
])

export const spgWebDeveloperProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a full-stack web application with reusable React workflows, JWT authentication, REST APIs, MongoDB profiles, and clean architecture.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Designed responsive finance dashboards and CRUD workflows with React, JavaScript, REST APIs, MongoDB, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Created maintainable habit tracking with JWT authentication, React Context state, REST APIs, and frontend architecture.',
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
