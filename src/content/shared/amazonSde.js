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

export const amazonSdeMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Amazon Software Development Engineer',
  description: 'Software engineering résumé tailored for Amazon SDE I opportunities.',
  filename: 'phillip-bryan-kouokam-amazon-sde.pdf',
})

export const amazonSdeSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. AWS Certified Solutions Architect – Associate with experience building production-quality web applications, secure REST APIs, cloud-native architectures, and scalable software systems. Passionate about software engineering, clean architecture, operational excellence, and owning solutions from design through deployment using modern development practices.',
})

export const amazonSdeSkills = Object.freeze([
  Object.freeze({
    id: 'software-engineering',
    label: 'Software Engineering',
    skills: Object.freeze([
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Software Architecture',
      'REST APIs',
      'Git',
      'GitHub',
      'Debugging',
      'Testing',
      'Performance Optimization',
      'CI/CD Concepts',
    ]),
  }),
  Object.freeze({
    id: 'cloud',
    label: 'Cloud',
    skills: Object.freeze([
      'AWS',
      'AWS Certified Solutions Architect – Associate',
      'EC2',
      'S3',
      'IAM',
      'CloudWatch',
      'Auto Scaling',
      'Elastic Load Balancing',
      'AWS Lambda',
      'AWS Glue',
      'MongoDB Atlas',
    ]),
  }),
  Object.freeze({
    id: 'frontend',
    label: 'Frontend',
    skills: Object.freeze([
      'React',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
      'React Router',
      'Context API',
      'Vite',
    ]),
  }),
  Object.freeze({
    id: 'backend',
    label: 'Backend',
    skills: Object.freeze([
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT Authentication',
    ]),
  }),
])

export const amazonSdeProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Owned a production MERN app with reusable React components, JWT REST APIs, MongoDB, AWS S3, and cloud deployment.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Built a maintainable MERN finance application with secure CRUD workflows, responsive React architecture, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Built JWT-authenticated REST CRUD workflows with reusable React components, Context API state, and MongoDB persistence.',
    ]),
  }),
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Deployed fault-tolerant AWS infrastructure with Elastic Load Balancing, Auto Scaling, CloudWatch monitoring, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven serverless pipeline with S3, Lambda, Glue, IAM, and Python to automate CSV-to-JSON processing.',
    ]),
  }),
  Object.freeze({
    id: 'resume-publishing-engine',
    name: 'Resume Publishing Engine',
    bullets: Object.freeze([
      'Built a maintainable React publishing system with schema validation, automated testing/export, and AI-assisted debugging.',
    ]),
    technologies: Object.freeze(['React', 'Vite', 'Zod', 'Vitest', 'ESLint', 'Playwright']),
    linksLabel: 'Resume Publishing Engine links',
    links: Object.freeze([
      Object.freeze({
        id: 'github',
        label: 'GitHub Repository',
        url: 'https://github.com/PhilBKouokam/philbk-resume',
      }),
    ]),
  }),
])

export const amazonSdeEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: 'Expected Graduation: December 2027 • Dean’s List (Multiple Semesters)',
  }),
])
