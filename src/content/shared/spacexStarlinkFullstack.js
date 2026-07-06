import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')

export const spacexStarlinkFullstackMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | SpaceX Starlink Full Stack Software Engineer',
  description: 'Full-stack software engineering résumé tailored for SpaceX Starlink Constellation Tools.',
  filename: 'phillip-bryan-kouokam-spacex-starlink-fullstack.pdf',
})

export const spacexStarlinkFullstackSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. Built production-quality web applications featuring reusable component architecture, REST APIs, authentication, and responsive user interfaces. Passionate about building reliable software, owning products from concept to deployment, collaborating closely with users, and rapidly learning new technologies to solve complex engineering challenges.',
})

export const spacexStarlinkFullstackSkills = Object.freeze([
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
      'Git',
      'GitHub',
      'Object-Oriented Programming',
      'Component Architecture',
      'API Integration',
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

export const spacexStarlinkFullstackProjects = Object.freeze([
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
      'Developed reusable components for expense tracking, budgeting, and interactive financial data visualization.',
      'Integrated responsive frontend workflows with REST APIs, persistent CRUD operations, and cloud storage.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    description: 'Developed a reliable MERN application with authenticated CRUD architecture and predictable client-server state management.',
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

export const spacexStarlinkFullstackEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: 'Expected Graduation: December 2027 • Dean’s List (Multiple Semesters)',
  }),
])
