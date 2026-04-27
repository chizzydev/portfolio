export const projects = [
  {
  id: 'decide-platform',
  title: 'Decide - Phone Intelligence Platform',
  description: 'Cross-platform phone intelligence product with a website, Android app, backend APIs, live pricing workflows, and product decision tooling for the Nigerian market.',
  longDescription: 'Decide is a product-focused phone intelligence platform built end to end across web, mobile, and backend. It combines curated phone data, vendor price tracking, compare and analyze flows, account-backed saves and alerts, Google authentication, scraping and normalization workflows, and a growing market intelligence layer. I have been responsible for architecture, backend API design, data cleanup workflows, production UX refinement, Android QA, and the broader direction for turning it into a monetizable product.',
  category: 'web-app',
  image: '',
  techStack: [
    'Next.js',
    'React Native (Expo)',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'TypeScript',
    'Tailwind CSS',
    'Google OAuth',
    'Cheerio',
    'Supabase',
  ],
  features: [
    'Website plus Android app connected to a shared backend and account system',
    'Phone browse, compare, analyze, saved phones, and price alert flows',
    'Live vendor pricing pipelines and product normalization for Nigerian phone listings',
    'Google sign-in, password reset, session management, and account security flows',
    'Admin workflows for data quality, sync jobs, moderation, and operational control',
    'Wave 1 market intelligence surfaces for deals, price history, and decision verdicts',
  ],
  challenges: [
    {
      problem: 'Real-world vendor data was noisy, inconsistent, and full of mismatched or accessory listings.',
      solution: 'Built matching, filtering, and validation logic to clean product data, normalize naming, and keep the catalog trustworthy.',
    },
    {
      problem: 'The mobile app needed production-quality Android UX while sharing truth with the website and backend.',
      solution: 'Stabilized the mobile shell, account flows, auth recovery, alerts, compare, and narrow-screen behavior through real-device QA on Android.',
    },
    {
      problem: 'The product needed to move beyond static comparison into acquisition, retention, and monetization surfaces.',
      solution: 'Planned and implemented Wave 1 market intelligence layers including price history, deals discovery, verdict pages, and a watchlist hub.',
    },
  ],
  links: {
    live: '',
    github: '',
    demo: '',
  },
  date: '2026-04',
  featured: true,
  status: 'in-progress',
},

 {
  id: 'ecommerce-store',
  title: 'Full-Stack E-Commerce Platform',
  description: 'Production-ready multi-currency e-commerce store with dual payment integration (Stripe & Flutterwave), admin dashboard, and real-time inventory management.',
  longDescription: 'A comprehensive e-commerce platform built for the Nigerian market with international reach. Features include automatic currency detection across 7 currencies with live exchange rates, dual payment gateway integration for both local and international transactions, complete admin panel for product and order management, user authentication with password reset, product reviews and ratings system, and wishlist functionality. Built with modern technologies and deployed on Vercel with PostgreSQL database hosted on Supabase.',
  category: 'web-app',
  image: 'images/projects/ecommerce-store.png', // Add your screenshot
  techStack: [
    'Next.js 16',
    'TypeScript',
    'PostgreSQL',
    'Prisma ORM',
    'NextAuth.js',
    'Stripe',
    'Flutterwave',
    'Redis',
    'Tailwind CSS',
    'Shadcn/ui',
    'Resend',
    'UploadThing',
  ],
  features: [
    'Multi-currency support (NGN, USD, GBP, EUR, GHS, KES, ZAR) with auto-detection',
    'Dual payment integration: Stripe for international, Flutterwave for Nigerian payments',
    'Complete admin dashboard with analytics, order management, and product CRUD',
    'User authentication with password reset via email',
    'Product reviews and 5-star rating system with admin moderation',
    'Wishlist and shopping cart with persistent sessions',
    'Real-time inventory tracking and stock management',
    'Image upload system with UploadThing integration',
    'Responsive design optimized for mobile, tablet, and desktop',
    'Email notifications for orders and password resets',
  ],
  challenges: [
    {
      problem: 'Database connection pool exhaustion in serverless environment causing 500 errors',
      solution: 'Implemented PgBouncer transaction pooling (port 6543) with connection limiting and optimized Prisma client singleton pattern for serverless functions',
    },
    {
      problem: 'Middleware bundle size exceeded Vercel Edge Function limit (1MB) blocking deployment',
      solution: 'Removed middleware entirely and implemented page-level authentication guards using server-side session checks in Next.js layouts',
    },
    {
      problem: 'Multi-currency pricing with real-time exchange rates without external API costs',
      solution: 'Built client-side currency detection with localStorage caching and 24-hour auto-refresh using free exchangerate-api.com, with fallback to hardcoded rates',
    },
    {
      problem: 'Supabase API exposing all database tables publicly without Row Level Security',
      solution: 'Disabled Supabase auto-generated REST API and relied solely on Prisma direct PostgreSQL connections for secure data access',
    },
  ],
  links: {
    live: 'https://online-shopping-store-one.vercel.app/',
    github: 'https://github.com/chizzydev/ecommerce-store',
    demo: '', 
  },
  date: '2026-02',
  featured: true, 
  status: 'completed',
},

  // PLACEHOLDER PROJECT 2 - To be replace this with a real project
  /** {
    id: 'project-3',
    title: 'Your Next Project',
    description: 'Brief description of your project goes here. What problem does it solve?',
    longDescription: 'Detailed description explaining the project in depth, the challenges you faced, technologies used, and the impact of the solution.',
    category: 'web-app',
    image: '/projects/project-3.png', // Add your screenshot
    techStack: ['React', 'Tailwind CSS', 'Other Tech'],
    features: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
      'Key feature 4',
    ],
    challenges: [
      {
        problem: 'Challenge description',
        solution: 'How you solved it',
      },
    ],
    links: {
      live: '',
      github: '',
      demo: '',
    },
    date: '2025-02',
    featured: false,
    status: 'planned',
  }, */
];

export const projectsByCategory = {
  all: projects,
  'web-app': projects.filter(p => p.category === 'web-app'),
  'ui-component': projects.filter(p => p.category === 'ui-component'),
  'open-source': projects.filter(p => p.category === 'open-source'),
};

/**
 * Featured projects (shown first)
 */
export const featuredProjects = projects.filter(p => p.featured);

/**
 * Completed projects
 */
export const completedProjects = projects.filter(p => p.status === 'completed');

/**
 * Projects statistics
 */
export const projectStats = {
  total: projects.length,
  completed: completedProjects.length,
  featured: featuredProjects.length,
  technologies: [...new Set(projects.flatMap(p => p.techStack))].length,
};

/**
 * Helper function to get project by ID
 * @param {string} id - Project ID
 * @returns {Object|null} Project object or null
 */
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

/**
 * Helper function to get projects by category
 * @param {string} category - Category name
 * @returns {Array} Array of projects in category
 */
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

/**
 * Helper function to get projects by tech stack
 * @param {string} tech - Technology name
 * @returns {Array} Array of projects using that tech
 */
export const getProjectsByTech = (tech) => {
  return projects.filter(project => 
    project.techStack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

/**
 * Helper function to get recent projects
 * @param {number} limit - Number of projects to return
 * @returns {Array} Array of recent projects
 */
export const getRecentProjects = (limit = 3) => {
  return [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

/**
 * Helper function to filter projects by status
 * @param {string} status - Project status
 * @returns {Array} Array of projects with that status
 */
export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status);
};

/**
 * All unique technologies used across projects
 */
export const allTechnologies = [...new Set(projects.flatMap(p => p.techStack))].sort();

/**
 * Project categories information
 */
export const projectCategories = [
  {
    id: 'all',
    label: 'All Projects',
    count: projects.length,
  },
  {
    id: 'web-app',
    label: 'Web Applications',
    count: projectsByCategory['web-app'].length,
  },
  {
    id: 'ui-component',
    label: 'UI Components',
    count: projectsByCategory['ui-component'].length,
  },
  {
    id: 'open-source',
    label: 'Open Source',
    count: projectsByCategory['open-source'].length,
  },
].filter((category) => category.id === 'all' || category.count > 0);

export default {
  projects,
  projectsByCategory,
  featuredProjects,
  completedProjects,
  projectStats,
  getProjectById,
  getProjectsByCategory,
  getProjectsByTech,
  getRecentProjects,
  getProjectsByStatus,
  allTechnologies,
  projectCategories,
};
