import { projects } from './projects.js'

function canonicalProject(id) {
  const project = projects.find((entry) => entry.id === id)
  if (!project) throw new Error(`Missing canonical project: ${id}`)
  return project
}

const calorieBank = canonicalProject('caloriebank')
const spendWise = canonicalProject('spendwise')
const habitTracker = canonicalProject('habit-tracker')

export const twitchSoftwareEngineerMetadata = Object.freeze({
  title: 'Phillip-Bryan Kouokam | Twitch Software Engineer I, Commerce Engineering',
  description: 'Full-stack software engineering résumé tailored for Twitch Commerce Engineering.',
  filename: 'phillip-bryan-kouokam-twitch-software-engineer.pdf',
})

export const twitchSoftwareEngineerSummary = Object.freeze({
  heading: 'Professional Summary',
  text: 'Full-Stack Software Engineer specializing in React, JavaScript, Node.js, Express.js, MongoDB, and AWS. Built responsive, user-focused web applications featuring reusable React components, REST APIs, authentication, validation, and scalable full-stack architecture. Passionate about creating intuitive customer experiences, writing clean maintainable code, collaborating across teams, and delivering high-quality software from design through deployment.',
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
      'Component-Based Architecture',
      'State Management',
      'API Integration',
      'Debugging',
      'Testing',
      'ESLint',
      'Vitest',
      'Performance Optimization',
      'Deployment',
      'Software Architecture',
      'Agile Development',
    ]),
  }),
])

export const twitchSoftwareEngineerProjects = Object.freeze([
  Object.freeze({
    ...calorieBank,
    description: 'Designed and deployed a consumer-facing full-stack application integrating a responsive React interface with Express.js REST APIs, MongoDB persistence, authentication, and AWS S3 uploads.',
    bullets: Object.freeze([
      'Built reusable React components and Context API state management for an intuitive desktop and mobile experience.',
      'Integrated frontend, API, authentication, and database workflows through a maintainable application architecture.',
      'Iterated from development through deployment using AWS S3, Vercel, and Render.',
    ]),
  }),
  Object.freeze({
    ...spendWise,
    description: 'Built a responsive personal finance application with reusable React dashboards, authenticated Express.js APIs, MongoDB persistence, and AWS S3 storage.',
    bullets: Object.freeze([
      'Developed maintainable UI components for expense tracking, budgeting, and interactive financial visualization.',
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
    description: 'Built a reliable document publishing platform with reusable architecture, validation, automated testing, and deterministic export.',
    bullets: Object.freeze([
      'Implemented schema validation and immutable normalization to generate predictable documents from canonical content.',
      'Added Zod, Vitest, and ESLint quality gates to detect content and rendering failures before export.',
      'Engineered reproducible browser-to-PDF publishing with Playwright and documented maintenance workflows.',
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
