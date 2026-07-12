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

export const metaProductionEngineerUniversityGradMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Meta Production Engineer',
  description: 'Backend, cloud, and reliability-oriented software engineering résumé tailored for Meta Production Engineering.',
  filename: 'meta-production-engineer-university-grad.pdf',
})

export const metaProductionEngineerUniversityGradSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Software Engineer focused on backend and full-stack development with JavaScript, Python, Node.js, Express.js, MongoDB, REST APIs, SQL coursework, and AWS. AWS Certified Solutions Architect – Associate with experience building scalable applications, cloud architecture projects, authentication systems, and data-processing workflows.',
})

export const metaProductionEngineerUniversityGradSkills = Object.freeze([
  Object.freeze({
    id: 'languages',
    label: 'Languages',
    skills: Object.freeze([
      'Python (Project Use)',
      'JavaScript (ES6+)',
      'TypeScript (Learning)',
      'SQL (Coursework)',
      'HTML5',
      'CSS3',
    ]),
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
      'IAM',
      'AWS Lambda',
      'Amazon S3',
      'CloudWatch',
      'Elastic Load Balancing',
      'Auto Scaling',
      'VPC',
      'AWS Glue',
    ]),
  }),
  Object.freeze({
    id: 'frontend',
    label: 'Frontend',
    skills: Object.freeze(['React', 'Tailwind CSS', 'Responsive Design']),
  }),
  Object.freeze({
    id: 'tools',
    label: 'Tools',
    skills: Object.freeze(['Git', 'GitHub', 'Postman', 'Render', 'Vercel']),
  }),
  Object.freeze({
    id: 'concepts',
    label: 'Concepts',
    skills: Object.freeze([
      'Data Structures',
      'Algorithms',
      'Object-Oriented Programming',
      'REST API Design',
      'Debugging',
      'Maintainable Code',
      'Problem Solving',
      'Scalability',
    ]),
  }),
])

export const metaProductionEngineerUniversityGradProjects = Object.freeze([
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Built HA AWS infrastructure with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven data pipeline with S3, Lambda, Glue, IAM, and Python to automate CSV-to-JSON processing.',
    ]),
  }),
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built backend-focused MERN architecture with JWT REST APIs, MongoDB profiles, reusable React components, and AWS S3.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Built authenticated CRUD workflows with Node.js APIs, MongoDB integration, React dashboards, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Built a maintainable MERN habit tracker with JWT authentication, REST CRUD APIs, React Context state, and MongoDB persistence.',
    ]),
  }),
])
