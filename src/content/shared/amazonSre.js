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

export const amazonSreMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Amazon Software Operations and Scaling',
  description: 'Software engineering and cloud reliability résumé tailored for Amazon One Material Handling System.',
  filename: 'phillip-bryan-kouokam-amazon-sre.pdf',
})

export const amazonSreSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer and AWS Certified Solutions Architect – Associate with hands-on experience building production-ready applications and AWS cloud projects focused on reliability, monitoring, and automation. Designed highly available infrastructure with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, VPC, and IAM, plus event-driven workflows using S3, Lambda, and Glue. Builds Node.js and Express.js REST APIs with MongoDB while emphasizing debugging, documentation, clear communication, and rapid learning.',
})

export const amazonSreSkills = Object.freeze([
  Object.freeze({
    id: 'cloud-reliability',
    label: 'Cloud & Reliability',
    skills: Object.freeze([
      'AWS',
      'AWS Certified Solutions Architect – Associate',
      'Amazon EC2',
      'Elastic Load Balancing',
      'Auto Scaling',
      'CloudWatch',
      'VPC',
      'IAM',
      'Amazon S3',
      'AWS Lambda',
      'AWS Glue',
      'Amazon SNS',
      'Cloud Monitoring',
    ]),
  }),
  Object.freeze({
    id: 'software-development',
    label: 'Software Development',
    skills: Object.freeze([
      'JavaScript (ES6+)',
      'TypeScript (Learning)',
      'Node.js',
      'Express.js',
      'React',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'JWT Authentication',
      'Git',
      'GitHub',
      'Python (Project Use)',
    ]),
  }),
  Object.freeze({
    id: 'engineering',
    label: 'Engineering',
    skills: Object.freeze([
      'Debugging',
      'Troubleshooting',
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'API Design',
      'Automation',
      'System Documentation',
      'Performance Optimization',
      'Problem Solving',
    ]),
  }),
])

export const amazonSreProjects = Object.freeze([
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Deployed fault-tolerant AWS infrastructure with EC2, Elastic Load Balancing, Auto Scaling, CloudWatch monitoring, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Automated event-driven CSV-to-JSON processing with S3, Lambda, Glue, IAM, and Python using serverless AWS services.',
    ]),
  }),
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Owned a production MERN app with secure JWT REST APIs, MongoDB profiles, AWS S3 integration, and cloud deployment.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Built a maintainable MERN finance application with authenticated CRUD workflows, REST API integration, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Built JWT-authenticated REST CRUD workflows and resolved CORS, environment, and MongoDB Atlas deployment issues.',
    ]),
  }),
])
