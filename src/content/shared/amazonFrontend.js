import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')

export const amazonFrontendMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Amazon Front-End Engineer',
  description: 'Front-end focused software engineering résumé for Amazon.',
  filename: 'phillip-bryan-kouokam-amazon-frontend-engineer.pdf',
})

export const amazonFrontendSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. Built and deployed production MERN applications and a document publishing system applying reusable component architecture, REST APIs, authentication, testing, deployment, and AWS cloud services. Passionate about building accessible, maintainable front-end systems that scale.',
})

export const amazonFrontendSkills = Object.freeze([
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
    id: 'cloud-infrastructure',
    label: 'Cloud Infrastructure',
    skills: Object.freeze([
      'AWS',
      'EC2',
      'S3',
      'Lambda',
      'IAM',
      'VPC',
      'Elastic Load Balancing',
      'Auto Scaling',
      'MongoDB Atlas',
    ]),
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
      'Component Architecture',
      'Performance Optimization',
      'API Integration',
      'Deployment',
    ]),
  }),
])

export const amazonFrontendProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    description: 'Designed and deployed a production-ready full-stack nutrition platform centered on a calorie banking system that combines personalized TDEE calculations, secure authentication, food logging, and cloud-based image uploads.',
    bullets: Object.freeze([
      'Architected secure authentication, protected routing, and persistent user profiles using JWT, Express.js, and MongoDB.',
      'Designed reusable React components and Context API state management to build a scalable, maintainable front-end architecture across desktop and mobile devices.',
      'Built authenticated REST API workflows, integrated AWS S3 image uploads, and deployed production infrastructure using Vercel and Render.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    description: 'Built a responsive personal finance platform supporting authenticated expense tracking, receipt uploads, budgeting, and interactive financial dashboards.',
    bullets: Object.freeze([
      'Implemented reusable React dashboard components with authenticated CRUD workflows.',
      'Integrated REST APIs and AWS S3 storage for receipt management.',
    ]),
  }),
  Object.freeze({
    ...habitTracker,
    description: 'Developed a production-ready MERN application for secure habit tracking with authenticated CRUD operations.',
    bullets: Object.freeze([
      'Built authentication, authorization, and global state management using JWT and React Context.',
      'Implemented predictable client-server CRUD workflows with MongoDB persistence.',
    ]),
  }),
  Object.freeze({
    id: 'resume-publishing-engine',
    name: 'Resume Publishing Engine',
    description: 'Built a deterministic document publishing system that separates canonical content from presentation using schema validation, immutable normalization, automated testing, and Playwright PDF generation.',
    bullets: Object.freeze([
      'Built a canonical content model supporting multiple published résumé variants from a single source of truth.',
      'Implemented automated validation using Zod, Vitest, and ESLint to enforce deterministic document generation.',
      'Engineered deterministic browser-to-PDF publishing with Playwright, automated output validation, and reproducible builds.',
    ]),
    technologies: Object.freeze([
      'React',
      'Vite',
      'Zod',
      'Vitest',
      'ESLint',
      'Playwright',
    ]),
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

export const amazonFrontendEducation = Object.freeze([
  Object.freeze({
    id: 'university-of-houston',
    institution: 'University of Houston',
    credential: 'Computer Science Coursework',
    field: 'Expected Graduation: Fall 2027 • Dean’s List (Multiple Semesters)',
  }),
])
