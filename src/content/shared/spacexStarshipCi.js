import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')

export const spacexStarshipCiMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | SpaceX Starship Continuous Integration Software Engineer',
  description: 'Software engineering résumé tailored for SpaceX Starship Continuous Integration.',
  filename: 'phillip-bryan-kouokam-spacex-starship-ci.pdf',
})

export const spacexStarshipCiSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. Built production-quality web applications and developer tooling featuring reusable architectures, REST APIs, authentication, validation pipelines, automated workflows, and responsive user interfaces. Passionate about improving engineering productivity through reliable software, automation, testing, documentation, and end-to-end ownership from design through deployment.',
})

export const spacexStarshipCiSkills = Object.freeze([
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
      'Software Architecture',
      'Component Architecture',
      'Validation Pipelines',
      'Automated Testing',
      'Debugging',
      'Documentation',
      'ESLint',
      'Vitest',
      'CI/CD Concepts',
      'Build Automation',
      'Performance Optimization',
      'Deployment',
    ]),
  }),
])

export const spacexStarshipCiProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    description: 'Owned a full-stack application integrating reusable React components with Express.js REST APIs, MongoDB persistence, authentication, and AWS S3 uploads.',
    bullets: Object.freeze([
      'Built Context API state management and reusable components for a responsive, maintainable codebase.',
      'Integrated frontend, API, authentication, and database workflows for personalized calorie banking.',
      'Iterated from development through deployment using AWS S3, Vercel, and Render.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    description: 'Built a responsive finance application with reusable React dashboards, authenticated Express.js APIs, MongoDB persistence, and AWS S3 storage.',
    bullets: Object.freeze([
      'Developed maintainable components for expense tracking, budgeting, and interactive data visualization.',
      'Integrated frontend workflows with REST APIs, persistent CRUD operations, and cloud storage.',
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
    description: 'Built a deterministic publishing platform that automates validated document generation, testing, builds, and browser-to-PDF export.',
    bullets: Object.freeze([
      'Engineered a maintainable content architecture with Zod validation and immutable normalization for reliable output.',
      'Automated linting, Vitest checks, Vite builds, and Playwright exports through reproducible developer workflows.',
      'Used AI-assisted development responsibly to support debugging and documentation while preserving deterministic quality gates.',
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

export const spacexStarshipCiEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: 'Expected Graduation: December 2027 • Dean’s List (Multiple Semesters)',
  }),
])
