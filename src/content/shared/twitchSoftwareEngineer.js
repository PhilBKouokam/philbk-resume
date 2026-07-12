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

export const twitchSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Twitch Software Engineer, Commerce Engineering',
  description: 'Full-stack software engineering résumé tailored for Twitch Commerce Engineering (BITS).',
  filename: 'phillip-bryan-kouokam-twitch-software-engineer.pdf',
})

export const twitchSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. AWS Certified Solutions Architect – Associate with experience building production-quality consumer-facing web applications, secure REST APIs, responsive user interfaces, and cloud solutions. Passionate about creating intuitive products, improving user experiences, and building scalable software using modern engineering practices.',
})

export const twitchSoftwareEngineerSkills = Object.freeze([
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
      'Context API',
      'React Router',
      'Accessibility',
      'Vite',
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
      'EC2',
      'S3',
      'IAM',
      'MongoDB Atlas',
      'AWS Certified Solutions Architect – Associate',
    ]),
  }),
  Object.freeze({
    id: 'engineering',
    label: 'Engineering',
    skills: Object.freeze([
      'Git',
      'GitHub',
      'Object-Oriented Programming',
      'Software Architecture',
      'API Design',
      'Validation',
      'Debugging',
      'Testing',
      'Performance Optimization',
      'Deployment',
    ]),
  }),
])

export const twitchSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    bullets: Object.freeze([
      'Built a production-ready MERN application with responsive React components and Context API state for personalized nutrition workflows.',
      'Implemented secure JWT REST APIs, MongoDB profiles, AWS S3 uploads, and deployment through Vercel and Render.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    bullets: Object.freeze([
      'Built a responsive MERN finance dashboard with secure CRUD workflows, reusable React architecture, Recharts, and AWS S3 uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    bullets: Object.freeze([
      'Built authenticated REST CRUD workflows with reusable React components, Context API state, and MongoDB persistence.',
    ]),
  }),
  Object.freeze({
    ...awsHighlyAvailable,
    bullets: Object.freeze([
      'Deployed monitored AWS infrastructure using EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
    ]),
  }),
  Object.freeze({
    ...awsServerlessEtl,
    bullets: Object.freeze([
      'Built an event-driven AWS pipeline using S3, Lambda, Glue, IAM, and Python to automate CSV-to-JSON transformation.',
    ]),
  }),
  Object.freeze({
    id: 'resume-publishing-engine',
    name: 'Resume Publishing Engine',
    bullets: Object.freeze([
      'Built a React publishing system with reusable architecture, schema validation, automated tests, and deterministic PDF generation.',
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

export const twitchSoftwareEngineerEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: 'Expected Graduation: December 2027 • Dean’s List (Multiple Semesters)',
  }),
])
