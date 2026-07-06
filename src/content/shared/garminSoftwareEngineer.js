import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')

export const garminSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Garmin Software Engineer',
  description: 'Software engineering résumé tailored for Garmin web development and applications.',
  filename: 'phillip-bryan-kouokam-garmin-software-engineer.pdf',
})

export const garminSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. Built and deployed production web applications while applying secure coding practices, reusable component architecture, REST APIs, testing, and cloud deployment. Passionate about building reliable, maintainable software, solving technical problems, and continuously learning through real-world engineering projects.',
})

export const garminSoftwareEngineerSkills = Object.freeze([
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
    skills: Object.freeze(['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'MongoDB Atlas']),
  }),
  Object.freeze({
    id: 'engineering',
    label: 'Engineering',
    skills: Object.freeze([
      'Git',
      'GitHub',
      'Vitest',
      'ESLint',
      'Debugging',
      'Secure Coding',
      'Component Architecture',
      'API Integration',
      'Testing',
      'Documentation',
      'Deployment',
    ]),
  }),
])

export const garminSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    description: 'Designed and deployed a production web application integrating a responsive React interface with Express.js REST APIs, MongoDB persistence, secure authentication, and AWS S3 uploads.',
    bullets: Object.freeze([
      'Built reusable React components and Context API state management for maintainable, responsive interfaces.',
      'Implemented JWT authentication, protected routing, and persistent user profiles across the frontend, API, and database.',
      'Integrated AWS S3 image uploads and deployed the frontend and backend using Vercel and Render.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    description: 'Built a responsive personal finance web application with reusable React dashboards, authenticated Express.js APIs, MongoDB persistence, and AWS S3 receipt storage.',
    bullets: Object.freeze([
      'Developed reusable components for expense tracking, budgeting, and interactive financial data visualization.',
      'Integrated frontend workflows with REST APIs, persistent CRUD operations, and cloud-based receipt uploads.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    description: 'Developed a production-ready MERN web application for secure habit tracking with authenticated CRUD operations and predictable application state.',
    bullets: Object.freeze([
      'Built authentication, authorization, reusable components, and global state management using JWT and React Context.',
      'Debugged deployment issues involving CORS, environment variables, and MongoDB Atlas connectivity.',
    ]),
  }),
  Object.freeze({
    id: 'resume-publishing-engine',
    name: 'Resume Publishing Engine',
    description: 'Built a deterministic document publishing platform that separates canonical content from presentation through validated, maintainable software architecture.',
    bullets: Object.freeze([
      'Implemented schema validation and immutable normalization to produce predictable documents from a single source of truth.',
      'Added automated testing with Zod, Vitest, and ESLint to detect content and rendering failures before export.',
      'Documented the architecture, validation pipeline, and reproducible Playwright PDF export workflow.',
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

export const garminSoftwareEngineerEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: 'Expected Graduation: Fall 2027 • Dean’s List (Multiple Semesters)',
  }),
])
