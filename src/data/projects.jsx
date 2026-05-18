export const projects = [
  {
    id: 'offersignal',
    title: 'OfferSignal - Ecommerce Intelligence & Trust Infrastructure',
    description: 'A global ecommerce intelligence product that combines recurring competitor monitoring with technical trust and security reviews for stores, agencies, and launch-stage teams.',
    longDescription: 'OfferSignal is a two-in-one ecommerce intelligence and technical trust platform built to help merchants catch competitor moves and fix issues that quietly cost sales. The recurring product, Rival Briefs, monitors competitor prices, promotions, stock signals, Shopify catalog movement, new launches, shipping thresholds, and evidence screenshots, then turns those signals into concise business-readable action briefs. The second offer, Technical Trust Reviews, audits ecommerce stores for performance, metadata, broken resources, mobile buying friction, checkout trust cues, security headers, deployment hygiene, and visible technical risks. I built the product as a scalable Next.js and Supabase system with custom authentication, admin workflows, scheduled monitoring, Shopify-aware extraction, AI-assisted merchandising analysis, legal/respect controls, evidence storage, signed reports, PDF artifacts, agency client workspaces, payment readiness, and a premium public positioning layer.',
    category: 'web-app',
    image: '',
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
      'Tailwind CSS',
      'Cheerio',
      'Vercel Cron',
      'HMAC Signed Links',
      'Supabase Storage',
    ],
    features: [
      'Rival Briefs workflow for recurring ecommerce competitor intelligence and weekly action reports',
      'Shopify-aware intelligence adapter with store detection, product feed pagination, collection discovery, sitemap hints, product/variant normalization, currency extraction, stock status, compare-at pricing, and storefront messaging signals',
      'Competitor monitoring for price changes, promo mechanics, stock movement, new products, new SKUs, new variants, new images, category shifts, and shipping/cart/banner language',
      'AI Merchandising Analyst format with biggest move, revenue risk, competitive pressure, suggested response, what not to do, evidence strength, signal lifecycle, category positioning, and opportunity scoring',
      'Evidence screenshot system using Playwright, Supabase Storage fallback, retention metadata, highlighted evidence boxes, before/after screenshot pairing, admin preview, and delete controls',
      'Store Trust Audit and Technical Trust Review system covering security headers, metadata, broken links/images, PageSpeed readiness, mobile viewport checks, sticky CTA detection, cart/add-to-cart cues, payment badges, policy visibility, trust signals, score breakdown, and remediation roadmap',
      'Admin workspace with lead pipeline, report editor, quality gate, approval/send flow, delivery status, generated PDF artifacts, signed hosted briefs, and scheduled monitoring controls',
      'Agency workspace with client folders, assigned leads, client/team users, client-branded hosted reports, signed client portal links, white-label sender fields, billing metadata, and client-level strategy defaults',
      'Custom authentication without Supabase Auth: app users, hashed passwords, database-backed sessions, first-owner setup, and role-aware admin access',
      'Legal/respect layer with OfferSignalBot user-agent, robots awareness, per-domain throttling, opt-out domains, admin opt-out controls, skip logs, and monitoring preflight enforcement',
      'Payment-readiness layer with Paystack-first checkout, manual payment fallback, fixed beta pricing, and room for future provider expansion',
      'Public product site with sample brief gallery, service positioning, lead capture, exact trust review offers, and non-scraper language focused on intelligence, trust, and revenue protection',
    ],
    impact: [
      'Built from scratch as a cash-flow product separate from Decide while reusing proven data, scraping, security, and reporting muscles',
      'Designed for global ecommerce merchants and agencies rather than a local-only buyer app',
      'Combines recurring SaaS-style monitoring with one-time technical trust review services for faster monetization',
      'Uses a clean Next.js monolith today, with service boundaries that can later split into web/API repos when usage justifies it',
      'Shows ability to move from product strategy to architecture, admin systems, automation, evidence, reports, payments, and go-to-market assets',
    ],
    challenges: [
      {
        problem: 'The product needed to reuse scraping and price-tracking strengths from Decide without looking like a generic scraper or another thin AI wrapper.',
        solution: 'Positioned the system as ecommerce intelligence and revenue protection, then built a proprietary report format around competitor moves, risk, evidence strength, opportunity scoring, what not to do, and merchant-specific strategy context.',
      },
      {
        problem: 'Generic page scraping creates noisy alerts because cookies, timestamps, random IDs, and broad homepage text can look like meaningful changes.',
        solution: 'Built structured extraction and diffing around ecommerce signals: prices, promo mechanics, landed-cost cues, stock phrases, Shopify catalog feeds, variants, collections, storefront messages, and normalized content hashes.',
      },
      {
        problem: 'Shopify merchants and agencies need catalog intelligence, not just text snapshots from a single page.',
        solution: 'Implemented Shopify detection, paginated product feed ingestion, collection and sitemap discovery, variant-level movement analytics, currency normalization, and catalog diffing for new launches, SKU changes, price moves, availability changes, and category shifts.',
      },
      {
        problem: 'Early customer reports need to feel trustworthy even while the product remains lightweight and manually reviewed.',
        solution: 'Added evidence screenshots, highlighted captures, before/after pairing, signed hosted reports, PDF export artifacts, quality gates, report editing, approval steps, and manual delivery safety around Resend.',
      },
      {
        problem: 'A one-time store audit could easily be perceived as a cheap SEO checklist instead of a serious business-risk product.',
        solution: 'Reframed it as Technical Trust Infrastructure with product lanes for Automated Trust Scan, Assisted Trust & Security Review, Deep Manual Security Assessment, and Mobile App Trust Review, each with specific deliverables and pricing logic.',
      },
      {
        problem: 'The platform had to support agencies without prematurely splitting into separate web and API repos or overbuilding a SaaS too early.',
        solution: 'Kept a clean Next.js monolith with Supabase-backed storage, service-layer boundaries, scheduled jobs, admin route separation, client folders, client portals, white-label fields, and client-level strategy defaults that can later move into a separate API if scale demands it.',
      },
    ],
    links: {
      live: '',
      github: '',
      demo: '',
    },
    date: '2026-05',
    featured: true,
    status: 'in-progress',
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
