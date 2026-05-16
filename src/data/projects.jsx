export const projects = [
  {
  id: 'decide-platform',
  title: 'Decide - Phone Buying Intelligence',
  description: 'A shipped web and Android product that helps Nigerian buyers know whether a phone makes sense right now using live prices, verdicts, marketplace risk, alerts, and comparison guidance.',
  longDescription: 'Decide is a production phone-buying intelligence platform for Nigerian and African buyers. It goes beyond phone specs by combining live trusted-store prices, buy-or-wait verdicts, deal truth, Jiji and used-market caution, repair and resale context, alternatives, comparison guidance, watchlist, alerts, feedback, and admin analytics. I built and shipped the product across Next.js web, React Native/Expo Android, backend APIs, data workflows, SEO, auth, security, Android QA, and the product strategy that positions Decide as a buyer-regret prevention tool rather than a static catalog.',
  category: 'web-app',
  image: 'images/projects/decide-mobile-home.jpg',
  images: [
    'images/projects/decide-mobile-home.jpg',
    'images/projects/decide-mobile-browse.jpg',
  ],
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
    'Sentry',
    'EAS Build',
  ],
  features: [
    'Production website and Android APK connected to a shared backend and account system',
    'Phone browse, Advisor, Analyze, Compare, Watchlist, result history, and price alert flows',
    'Live trusted-store prices, price fairness badges, market confidence, deal radar, and price history',
    'Jiji marketplace lane, used-phone scam/risk indicators, gray-market warnings, and safe buying steps',
    'Google sign-in, password reset, session management, feedback, security headers, and bot-aware analytics cleanup',
    'Admin analytics, sync tools, data quality workflows, SEO sitemap coverage, and structured data fixes',
  ],
  challenges: [
    {
      problem: 'Phone buying in Nigeria is not only a specs problem; buyers also face unstable prices, region variants, used-market scams, gray-market uncertainty, and repair/resale risk.',
      solution: 'Turned Decide into an advisory engine with live price context, buy/wait verdicts, market confidence, best alternatives, used-phone risk indicators, and comparison logic that explains tradeoffs in normal buyer language.',
    },
    {
      problem: 'Real-world store and marketplace data was noisy, inconsistent, and full of mismatched variants, stale listings, and risky seller-led claims.',
      solution: 'Built normalization, filtering, confidence, and separation rules so trusted retail prices, deal drops, and Jiji leads stay clearly framed instead of misleading buyers.',
    },
    {
      problem: 'The mobile app had to preserve the same product truth as the web app without changing the package/version lane during release hardening.',
      solution: 'Closed web-to-mobile parity across price verdicts, market confidence, best alternatives, used-risk guidance, radar counts, auth-gated retention flows, and Android APK distribution.',
    },
  ],
  links: {
    live: 'https://www.decide.com.ng/',
    github: '',
    demo: '',
  },
  date: '2026-05',
  featured: true,
  status: 'completed',
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
