export const projects = Object.freeze([
  Object.freeze({
    id: 'caloriebank',
    name: 'CalorieBank',
    bullets: Object.freeze([
      'Helps people plan eating flexibility through a calorie-banking web app engineered with React Context, Express REST APIs, JWT, MongoDB, AWS S3, Vercel, and Render.',
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
      Object.freeze({ id: 'live-demo', label: 'Live Demo', url: 'https://caloriebank-pi.vercel.app' }),
      Object.freeze({ id: 'github', label: 'GitHub', url: 'https://github.com/PhilBKouokam/CalorieBank' }),
      Object.freeze({
        id: 'walkthrough',
        label: '2-Min Walkthrough',
        url: 'https://www.loom.com/share/3a0f06928e004bad80cd4ae181f65d1c',
      }),
    ]),
  }),
  Object.freeze({
    id: 'spendwise',
    name: 'SpendWise',
    bullets: Object.freeze([
      'Organizes spending, budgets, and receipts through authenticated React views, CRUD REST APIs, MongoDB persistence, Recharts visualizations, and AWS S3 uploads.',
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
      Object.freeze({ id: 'live-demo', label: 'Live Demo', url: 'https://spendwise-two-navy.vercel.app' }),
      Object.freeze({ id: 'github', label: 'GitHub', url: 'https://github.com/PhilBKouokam/spendwise' }),
      Object.freeze({
        id: 'walkthrough',
        label: '2-Min Walkthrough',
        url: 'https://www.loom.com/share/75bc2eae927b4d0d9c22ff35297a09c1',
      }),
    ]),
  }),
  Object.freeze({
    id: 'habit-tracker',
    name: 'Habit Tracker',
    bullets: Object.freeze([
      'Helps users maintain habits with JWT authentication, React Context, CRUD REST APIs, MongoDB persistence, and deployment debugging.',
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
      Object.freeze({ id: 'live-demo', label: 'Live Demo', url: 'https://habit-tracker-fullstack-ten.vercel.app' }),
      Object.freeze({ id: 'github', label: 'GitHub', url: 'https://github.com/PhilBKouokam/HabitTracker' }),
      Object.freeze({
        id: 'walkthrough',
        label: '2-Min Walkthrough',
        url: 'https://www.loom.com/share/f69f4dce4b53414299a23805874cc25b',
      }),
    ]),
  }),
  Object.freeze({
    id: 'aws-highly-available-web-application',
    name: 'AWS Highly Available Web Application',
    bullets: Object.freeze([
      'Architected an AWS web application for availability, traffic distribution, automatic scaling, and operational visibility using EC2, Elastic Load Balancing, Auto Scaling, CloudWatch, SNS, and IAM.',
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
        label: 'GitHub',
        url: 'https://github.com/PhilBKouokam/aws-highly-available-web-application',
      }),
    ]),
  }),
  Object.freeze({
    id: 'aws-serverless-etl-pipeline',
    name: 'AWS Serverless ETL Pipeline',
    bullets: Object.freeze([
      'Automated event-driven CSV-to-JSON transformation with Amazon S3, AWS Lambda, AWS Glue, IAM, and Python.',
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
        label: 'GitHub',
        url: 'https://github.com/PhilBKouokam/aws-serverless-etl-pipeline',
      }),
    ]),
  }),
])
