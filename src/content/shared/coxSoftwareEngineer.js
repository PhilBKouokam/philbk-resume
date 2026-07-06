import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')

export const coxSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Cox Automotive Software Engineer',
  description: 'Full-stack software engineering résumé tailored for Cox Automotive.',
  filename: 'phillip-bryan-kouokam-cox-software-engineer.pdf',
})

export const coxSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer with experience building modern web applications using React, JavaScript, Node.js, Express.js, MongoDB, and AWS. Developed scalable applications with reusable component architecture, REST APIs, authentication, and responsive user interfaces while applying object-oriented programming principles, clean code practices, and continuous learning. Passionate about collaborating with engineering teams to build reliable software that delivers great user experiences.',
})

export const coxSoftwareEngineerSkills = Object.freeze([
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
    skills: Object.freeze(['AWS', 'EC2', 'S3', 'IAM', 'MongoDB Atlas']),
  }),
  Object.freeze({
    id: 'engineering',
    label: 'Engineering',
    skills: Object.freeze([
      'Object-Oriented Programming',
      'Git',
      'GitHub',
      'Component Architecture',
      'API Integration',
      'Debugging',
      'Testing',
      'ESLint',
      'Vitest',
      'Documentation',
      'Agile Development',
      'Code Reviews',
      'Deployment',
    ]),
  }),
])

export const coxSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    description: 'Designed and deployed a scalable full-stack application integrating a responsive React interface with Express.js REST APIs, MongoDB persistence, secure authentication, and AWS S3 uploads.',
    bullets: Object.freeze([
      'Built reusable React components and Context API state management for maintainable, responsive user experiences.',
      'Integrated the frontend, REST API, authentication, and database through modular application workflows.',
      'Deployed AWS S3 image uploads and production frontend and backend services using Vercel and Render.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    description: 'Built a responsive personal finance application with reusable React dashboards, authenticated Express.js APIs, MongoDB persistence, and AWS S3 receipt storage.',
    bullets: Object.freeze([
      'Developed maintainable components for expense tracking, budgeting, and interactive financial data visualization.',
      'Integrated responsive frontend workflows with REST APIs, persistent CRUD operations, and cloud storage.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    description: 'Developed a production-ready MERN application with authenticated CRUD functionality and predictable client-server state management.',
    bullets: Object.freeze([
      'Built authentication, authorization, reusable components, and global state management using JWT and React Context.',
      'Debugged CORS, environment variable, and MongoDB Atlas connectivity issues across deployment environments.',
    ]),
  }),
  Object.freeze({
    id: 'resume-publishing-engine',
    name: 'Resume Publishing Engine',
    description: 'Built a deterministic document publishing platform demonstrating maintainable software architecture, validation, automated testing, and developer tooling.',
    bullets: Object.freeze([
      'Implemented schema validation and immutable normalization to generate predictable documents from canonical content.',
      'Added Zod, Vitest, and ESLint quality gates to detect content and rendering failures before export.',
      'Documented the architecture and engineered reproducible browser-to-PDF publishing with Playwright.',
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

export const coxSoftwareEngineerEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: 'Expected Graduation: December 2027 • Dean’s List (Multiple Semesters)',
  }),
])
