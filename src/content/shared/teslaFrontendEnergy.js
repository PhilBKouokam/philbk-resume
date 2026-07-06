import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')

export const teslaFrontendEnergyMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Tesla Frontend Software Engineer, Energy Charging',
  description: 'Frontend software engineering résumé tailored for Tesla Energy Charging.',
  filename: 'phillip-bryan-kouokam-tesla-frontend-energy.pdf',
})

export const teslaFrontendEnergySummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Frontend Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. Built production-quality web applications featuring reusable React component architecture, responsive user interfaces, REST API integration, authentication, and full-stack application development. Passionate about creating intuitive customer experiences, rapidly iterating on product ideas, collaborating across engineering teams, and solving complex problems through clean, maintainable software.',
})

export const teslaFrontendEnergySkills = Object.freeze([
  Object.freeze({
    id: 'frontend',
    label: 'Frontend',
    skills: Object.freeze([
      'React',
      'TypeScript (Learning)',
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
      'Git',
      'GitHub',
      'Component Architecture',
      'API Integration',
      'Object-Oriented Programming',
      'Debugging',
      'Testing',
      'Vitest',
      'ESLint',
      'Documentation',
      'CI/CD Concepts',
      'Performance Optimization',
      'Deployment',
    ]),
  }),
])

export const teslaFrontendEnergyProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    description: 'Designed and deployed a user-centered full-stack product integrating a responsive React interface with Express.js REST APIs, MongoDB persistence, authentication, and AWS S3 uploads.',
    bullets: Object.freeze([
      'Built reusable React components and Context API state management for maintainable desktop and mobile experiences.',
      'Owned frontend, API, authentication, and database integration for personalized calorie-banking workflows.',
      'Iterated from development through deployment using AWS S3, Vercel, and Render.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    description: 'Built an intuitive personal finance product with responsive React dashboards, authenticated Express.js APIs, MongoDB persistence, and AWS S3 receipt storage.',
    bullets: Object.freeze([
      'Developed reusable UI components for expense tracking, budgeting, and interactive financial data visualization.',
      'Integrated maintainable frontend workflows with REST APIs, persistent CRUD operations, and cloud storage.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    description: 'Developed a reliable MERN application with authenticated CRUD architecture and predictable client-server state management.',
    bullets: Object.freeze([
      'Built authentication, authorization, reusable React components, and global state management using JWT and Context API.',
      'Debugged CORS, environment variable, and MongoDB Atlas connectivity issues across deployment environments.',
    ]),
  }),
  Object.freeze({
    id: 'resume-publishing-engine',
    name: 'Resume Publishing Engine',
    description: 'Built a deterministic document publishing platform with reusable architecture, validation, automated testing, and developer tooling.',
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

export const teslaFrontendEnergyEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: 'Expected Graduation: December 2027 • Dean’s List (Multiple Semesters)',
  }),
])
