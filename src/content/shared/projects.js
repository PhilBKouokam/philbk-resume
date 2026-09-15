export const projects = Object.freeze([
  Object.freeze({
    id: 'caloriebank',
    name: 'CalorieBank',
    bullets: Object.freeze([
      'Independently building CalorieBank for flexible calorie planning across days, with a web prototype and working iOS and Android mobile versions now being tested by early users.',
      'Own product decisions and full-stack engineering with React Native, Expo, and Express APIs for saving product data; iterate on real usage and feedback, documenting development publicly on GitHub.',
    ]),
    technologies: Object.freeze([]),
    linksLabel: 'CalorieBank links',
    links: Object.freeze([
      Object.freeze({ id: 'live-demo', label: 'Web Prototype', url: 'https://caloriebank-pi.vercel.app' }),
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
      'Built a personal finance app to organize transactions, understand spending through charts, and keep receipts alongside financial records.',
      'Engineered secure sign-in with JWT, transaction management through Express APIs and MongoDB, spending charts with Recharts, and receipt storage in AWS S3.',
    ]),
    technologies: Object.freeze([]),
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
      'Built a habit-tracking app with personal accounts where users create habits and mark them complete to support consistent routines.',
      'Connected React screens to Express APIs and MongoDB to save personal habit data between visits, with JWT authentication protecting account access.',
    ]),
    technologies: Object.freeze([]),
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
      'Designed an AWS web architecture to distribute traffic, scale server capacity automatically, and monitor availability using EC2, Elastic Load Balancing, Auto Scaling, and CloudWatch.',
    ]),
    technologies: Object.freeze([]),
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
      'Automated conversion of uploaded CSV files into JSON using S3, Lambda, Glue, and Python, demonstrating cloud data processing triggered by file uploads.',
    ]),
    technologies: Object.freeze([]),
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
