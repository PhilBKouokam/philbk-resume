import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')

export const hhaexchangeFullstackMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | HHAeXchange Full Stack Engineer',
  description: 'Full-stack software engineering résumé tailored for HHAeXchange.',
  filename: 'phillip-bryan-kouokam-hhaexchange-fullstack.pdf',
})

export const hhaexchangeFullstackSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Engineer building scalable web applications with React, JavaScript, Node.js, Express.js, MongoDB, REST APIs, and AWS. Builds intuitive, responsive user experiences and integrates frontend components with secure backend services, databases, authentication, and cloud deployment. Brings a collaborative, continuous-learning mindset and uses AI-assisted development responsibly to support debugging, testing, and iterative delivery.',
})

export const hhaexchangeFullstackSkills = Object.freeze([
  Object.freeze({
    id: 'frontend',
    label: 'Frontend',
    skills: Object.freeze([
      'React',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'React Router',
      'Context API',
      'Responsive Design',
      'Accessibility',
      'Vite',
    ]),
  }),
  Object.freeze({
    id: 'backend-database',
    label: 'Backend & Database',
    skills: Object.freeze([
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'MongoDB',
      'MongoDB Atlas',
      'Mongoose',
    ]),
  }),
  Object.freeze({
    id: 'cloud-deployment',
    label: 'Cloud & Deployment',
    skills: Object.freeze(['AWS', 'EC2', 'S3', 'Lambda', 'IAM', 'VPC', 'Vercel', 'Render']),
  }),
  Object.freeze({
    id: 'engineering',
    label: 'Engineering',
    skills: Object.freeze([
      'Git',
      'GitHub',
      'Postman',
      'Vitest',
      'ESLint',
      'Debugging',
      'Component Architecture',
      'API Integration',
      'AI-Assisted Development',
    ]),
  }),
])

export const hhaexchangeFullstackProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    description: 'Designed and deployed a full-stack nutrition platform with a responsive React frontend, Node.js and Express.js REST APIs, MongoDB persistence, secure authentication, and AWS S3 image uploads.',
    bullets: Object.freeze([
      'Built reusable React components and Context API state management for a maintainable user experience across desktop and mobile devices.',
      'Implemented JWT authentication, protected routing, and persistent user profiles across the frontend, API, and MongoDB database.',
      'Integrated AWS S3 image uploads and deployed the frontend and backend using Vercel and Render.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    description: 'Built a responsive personal finance application integrating a React frontend with Node.js and Express.js APIs, MongoDB persistence, authentication, and AWS S3 receipt storage.',
    bullets: Object.freeze([
      'Developed reusable dashboard components for expense tracking, budgeting, and interactive financial data visualization.',
      'Implemented authenticated CRUD workflows spanning the frontend, REST API, database, and cloud storage.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    description: 'Developed a production-ready MERN application integrating a responsive React interface with secure Node.js APIs and MongoDB persistence.',
    bullets: Object.freeze([
      'Built authentication, authorization, reusable components, and global state management using JWT and React Context.',
      'Resolved frontend-backend deployment issues involving CORS, environment variables, and MongoDB Atlas connectivity.',
    ]),
  }),
])
