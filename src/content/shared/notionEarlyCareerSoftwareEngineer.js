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

export const notionEarlyCareerSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Notion Early Career Software Engineer',
  description: 'Product-focused full-stack software engineering résumé tailored for Notion Early Career roles.',
  filename: 'notion-new-grad-software-engineer-v2.pdf',
})

export const notionEarlyCareerSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer building products that solve real user problems with React, JavaScript, Node.js, REST APIs, MongoDB, SQL coursework, and AWS. AWS Certified Solutions Architect – Associate with product ownership, thoughtful engineering, maintainable software, and AI-assisted development workflows using Codex, Claude Code, and Cursor.',
})

export const notionEarlyCareerSoftwareEngineerSkills = Object.freeze([
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
    skills: Object.freeze([
      'Git',
      'GitHub',
      'Postman',
      'Vercel',
      'Render',
      'Codex',
      'Cursor',
      'Claude Code',
    ]),
  }),
  Object.freeze({
    id: 'concepts',
    label: 'Concepts',
    skills: Object.freeze([
      'Product Engineering',
      'Software Design',
      'Clean Architecture',
      'Maintainable Code',
      'Reusable Components',
      'Scalable Applications',
      'Reliability',
      'User Experience',
      'Debugging',
    ]),
  }),
])

export const notionEarlyCareerSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a calorie banking product that helps users plan nutrition with JWT authentication, reusable React workflows, REST APIs, and MongoDB profiles.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Designed responsive finance dashboards and CRUD workflows that help users track spending through clean React architecture.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Created a user-centered habit tracker with JWT authentication, React Context state, REST APIs, and maintainable workflows.',
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
