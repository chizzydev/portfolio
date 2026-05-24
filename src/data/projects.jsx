export const projects = [
  {
    id: 'proofcairn',
    title: 'ProofCairn - Trust, Security, and Market Intelligence',
    description: 'A live business-intelligence product that helps digital teams see competitor moves, trust gaps, conversion friction, exposed routes, weak headers, and public signals that can affect buyer confidence.',
    longDescription: 'ProofCairn is a live trust, security, conversion, and market-intelligence platform for digital businesses. It combines recurring Rival Briefs with one-time Trust Audits so teams can understand what changed in the market, what could weaken buyer confidence, and which public technical signals deserve review before they become business risk. I built the product across the public site, lead capture, admin workspace, report generation, PDF delivery, payment lifecycle, security hardening, operational alerting, sample brief gallery, and advanced Security Exposure Engine. The platform is intentionally business-aware and safe: it uses passive public checks, redacted evidence, route intelligence, security-header analysis, robots/sitemap review, source-map and API-surface signals, cookie/CSP posture, technology profiling, and manual validation guidance without presenting itself as automated exploitation.',
    category: 'web-app',
    image: 'images/projects/proofcairn-home.jpg',
    images: [
      'images/projects/proofcairn-home.jpg',
      'images/projects/proofcairn-trust-audit.jpg',
      'images/projects/proofcairn-rival-briefs.jpg',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Playwright',
      'OpenAI',
      'Resend',
      'Paystack',
      'Google SSO',
      'Passkeys',
      'Tailwind CSS',
      'Cheerio',
      'Vercel Cron',
      'HMAC Signed Links',
      'Supabase Storage',
    ],
    features: [
      'Live public product at proofcairn.com with premium positioning, responsive landing pages, sample report gallery, service pages, legal/scope pages, lead capture, and checkout flows',
      'Rival Briefs workflow for recurring competitor and peer monitoring across ecommerce, SaaS, apps, services, marketplaces, and content businesses',
      'Business-aware competitor discovery and brief generation that adapts findings by model instead of treating every company like an online store',
      'Trust Audit workflow covering mobile UX, Core Web Vitals, metadata, indexability, public route hygiene, broken resources, trust signals, and plain-English remediation plans',
      'Advanced Security Exposure Engine with passive same-origin route intelligence, robots/sitemap analysis, sensitive-path checks, JavaScript endpoint extraction, secret redaction, auth/admin surface mapping, and attack-chain correlation',
      'Premium security extras including technology risk profiling, CSP quality scoring, cookie posture analysis, public repository leakage hints, passive subdomain hints, and first-class security.txt review',
      'Report and PDF system with executive summaries, score-aware trust copy, stored PDFs in Supabase Storage, evidence appendices, signed hosted links, and client-ready language',
      'Admin workspace with lead pipeline, trust orders, report editor, client folders, payments, operational incidents, alerting, user/session management, passkeys, Google SSO, and manual subscription controls',
      'Payment lifecycle hardening with Paystack checkout, webhook idempotency, replay protection, payment event history, recurring subscription state, cancellation/reactivation controls, and manual fallback',
      'Production security hardening with CSP, admin origin and CSRF checks, invite-only owner/admin access, session expiry, revocation controls, passkeys, step-up confirmation, and audit logs',
      'Operational readiness with health checks, structured incident logging, admin-visible failure queues, cron/job monitoring, PDF/email/payment/audit alerts, and escalation rules',
      'Safe-scope design: passive/authorized public checks only, no brute forcing, no exploitation, no form submission, no token forging, and no privileged API calls',
    ],
    impact: [
      'Shipped from idea to live domain as a serious product, not only a portfolio demo',
      'Expanded from ecommerce monitoring into a broader trust, security, conversion, and market-intelligence platform for modern digital businesses',
      'Shows end-to-end product ownership across positioning, frontend, backend, security, payments, PDFs, evidence, admin ops, legal/scope controls, and deployment',
      'Demonstrates judgment around safe security tooling: strong enough to surface real public risk without crossing into unauthorized testing',
      'Built as a monetizable product with clear service lanes, sample reports, payment readiness, and operational workflows for real delivery',
    ],
    challenges: [
      {
        problem: 'The product had to feel premium and business-aware instead of looking like a generic scanner, scraper, or AI wrapper.',
        solution: 'Repositioned it as trust, exposure, conversion, and security intelligence, then built report formats that connect technical evidence to buyer confidence, revenue risk, and practical next steps.',
      },
      {
        problem: 'Security features needed to be useful without encouraging unsafe behavior or automated exploitation.',
        solution: 'Kept the engine strictly passive and same-origin, added clear scope language, redacted sensitive evidence, separated confidence from severity, and converted risky findings into manual validation guidance.',
      },
      {
        problem: 'A Trust Audit could easily be mistaken for a checklist of free-tool results.',
        solution: 'Added route-level intelligence, attack-chain correlation, CSP/cookie/security.txt scoring, technology risk profiles, public-surface mapping, score-aware report language, and business-model-specific manual review tasks.',
      },
      {
        problem: 'The product needed to serve more than ecommerce brands after the market positioning evolved.',
        solution: 'Expanded competitor discovery, sample briefs, and report framing for SaaS, mobile apps, services, marketplaces, and content businesses while preserving ecommerce-specific intelligence.',
      },
      {
        problem: 'A live product needs operational discipline, not only feature depth.',
        solution: 'Added admin-visible incidents, health checks, alerting, webhook idempotency, session controls, payment event history, failure queues, and secure owner/admin account controls.',
      },
      {
        problem: 'The public site needed to communicate serious security and market-intelligence value without sounding technical, robotic, or fear-based.',
        solution: 'Reworked the copy, sample gallery, mobile responsiveness, service cards, and report examples so buyers can understand the value in plain language before paying.',
      },
    ],
    links: {
      live: 'https://proofcairn.com/',
      github: 'https://github.com/chizzydev/proofcairn',
      demo: '',
    },
    date: '2026-05',
    featured: true,
    status: 'completed',
  },
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
];

export const projectsByCategory = {
  all: projects,
  'web-app': projects.filter(p => p.category === 'web-app'),
  'ui-component': projects.filter(p => p.category === 'ui-component'),
  'open-source': projects.filter(p => p.category === 'open-source'),
};


export const featuredProjects = projects.filter(p => p.featured);

export const completedProjects = projects.filter(p => p.status === 'completed');

export const projectStats = {
  total: projects.length,
  completed: completedProjects.length,
  featured: featuredProjects.length,
  technologies: [...new Set(projects.flatMap(p => p.techStack))].length,
};

/**
 * @param {string} id - Project ID
 * @returns {Object|null} Project object or null
 */
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

/**
 * @param {string} category - Category name
 * @returns {Array} Array of projects in category
 */
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

/**
 * @param {string} tech - Technology name
 * @returns {Array} Array of projects using that tech
 */
export const getProjectsByTech = (tech) => {
  return projects.filter(project => 
    project.techStack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

/**
 * @param {number} limit - Number of projects to return
 * @returns {Array} Array of recent projects
 */
export const getRecentProjects = (limit = 3) => {
  return [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

/**
 * @param {string} status - Project status
 * @returns {Array} Array of projects with that status
 */
export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status);
};

export const allTechnologies = [...new Set(projects.flatMap(p => p.techStack))].sort();

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
