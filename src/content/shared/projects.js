export const projects = Object.freeze([
  Object.freeze({
    id: 'caloriebank',
    name: 'CalorieBank',
    bullets: Object.freeze([
      'Built reusable React components and Context API state management for responsive calorie banking and food-logging workflows.',
      'Implemented secure JWT REST APIs, MongoDB user profiles, AWS S3 uploads, and deployment through Vercel and Render.',
    ]),
    technologies: Object.freeze([
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'AWS S3',
      'Tailwind CSS',
      'Vercel',
      'Render',
    ]),
    linksLabel: 'CalorieBank links',
    links: Object.freeze([
      Object.freeze({ id: 'case-study', label: 'Portfolio Case Study', url: 'https://philbk.dev/#projects' }),
      Object.freeze({ id: 'live-demo', label: 'Live Demo', url: 'https://caloriebank-pi.vercel.app' }),
      Object.freeze({ id: 'github', label: 'GitHub Repository', url: 'https://github.com/PhilBKouokam/CalorieBank' }),
    ]),
  }),
  Object.freeze({
    id: 'spendwise',
    name: 'SpendWise',
    bullets: Object.freeze([
      'Built an authenticated MERN finance dashboard with persistent CRUD workflows, Recharts visualization, and AWS S3 receipt uploads.',
    ]),
    technologies: Object.freeze([
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'AWS S3',
      'Recharts',
    ]),
    linksLabel: 'SpendWise links',
    links: Object.freeze([
      Object.freeze({ id: 'case-study', label: 'Portfolio Case Study', url: 'https://philbk.dev/#projects' }),
      Object.freeze({ id: 'live-demo', label: 'Live Demo', url: 'https://spendwise-two-navy.vercel.app' }),
      Object.freeze({ id: 'github', label: 'GitHub Repository', url: 'https://github.com/PhilBKouokam/spendwise' }),
    ]),
  }),
  Object.freeze({
    id: 'habit-tracker',
    name: 'Habit Tracker',
    bullets: Object.freeze([
      'Built a secure MERN habit tracker with JWT authentication, React Context state, persistent CRUD, and resolved deployment issues.',
    ]),
    technologies: Object.freeze([
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Context API',
    ]),
    linksLabel: 'Habit Tracker links',
    links: Object.freeze([
      Object.freeze({ id: 'case-study', label: 'Portfolio Case Study', url: 'https://philbk.dev/#projects' }),
      Object.freeze({ id: 'live-demo', label: 'Live Demo', url: 'https://habit-tracker-fullstack-ten.vercel.app' }),
      Object.freeze({ id: 'github', label: 'GitHub Repository', url: 'https://github.com/PhilBKouokam/habit-tracker-fullstack' }),
    ]),
  }),
  Object.freeze({
    id: 'aws-highly-available-web-application',
    name: 'AWS Highly Available Web Application',
    bullets: Object.freeze([
      'Deployed fault-tolerant AWS infrastructure using EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
    ]),
    technologies: Object.freeze([
      'AWS',
      'Amazon EC2',
      'Elastic Load Balancing',
      'Auto Scaling',
      'CloudWatch',
      'Amazon SNS',
      'IAM',
    ]),
    linksLabel: 'AWS Highly Available Web Application links',
    links: Object.freeze([
      Object.freeze({
        id: 'github',
        label: 'GitHub Repository',
        url: 'https://github.com/PhilBKouokam/aws-highly-available-web-application',
      }),
    ]),
  }),
  Object.freeze({
    id: 'aws-serverless-etl-pipeline',
    name: 'AWS Serverless ETL Pipeline',
    bullets: Object.freeze([
      'Built an event-driven AWS pipeline using S3, Lambda, Glue, IAM, and Python to automate CSV-to-JSON transformation.',
    ]),
    technologies: Object.freeze([
      'AWS',
      'Amazon S3',
      'AWS Lambda',
      'AWS Glue',
      'IAM',
      'Python',
    ]),
    linksLabel: 'AWS Serverless ETL Pipeline links',
    links: Object.freeze([
      Object.freeze({
        id: 'github',
        label: 'GitHub Repository',
        url: 'https://github.com/PhilBKouokam/aws-serverless-etl-pipeline',
      }),
    ]),
  }),
])
