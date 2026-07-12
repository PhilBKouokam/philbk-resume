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

export const toyotaFinancialServicesSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Toyota Financial Services Software Engineer',
  description: 'Cloud and full-stack software engineering résumé tailored for Toyota Financial Services.',
  filename: 'toyota-financial-services-software-engineer.pdf',
})

export const toyotaFinancialServicesSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer focused on cloud-native applications with AWS, Python, JavaScript, React, Node.js, Express.js, REST APIs, MongoDB, and SQL coursework. AWS Certified Solutions Architect – Associate with hands-on cloud engineering projects, automation workflows, reliable application design, maintainable software, and continuous learning.',
})

export const toyotaFinancialServicesSoftwareEngineerSkills = Object.freeze([
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
      'Cloud-native Applications',
      'Cloud Engineering',
      'Software Engineering',
      'REST API Design',
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Automation',
      'Maintainable Code',
      'Scalable Applications',
      'Debugging',
      'Agile Development',
      'Problem Solving',
      'Reliability',
    ]),
  }),
])

export const toyotaFinancialServicesSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Designed highly available AWS architecture with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven AWS ETL pipeline with S3, Lambda, Glue, IAM, and Python for automated CSV-to-JSON processing.',
    ]),
  }),
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a maintainable MERN application with reusable React workflows, JWT authentication, REST APIs, MongoDB profiles, and AWS S3.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Designed responsive finance dashboards and CRUD workflows with React, REST APIs, MongoDB, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Created a user-focused habit tracker with JWT authentication, React Context state, REST APIs, and maintainable workflows.',
    ]),
  }),
])
