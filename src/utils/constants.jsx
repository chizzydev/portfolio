// Global constants for the portfolio application

// Personal information
export const PERSONAL_INFO = {
  name: "Chizaram Chukwuka Anthony",
  title: "Full-Stack JavaScript Developer",
  tagline: "Building production web, mobile, and backend products that solve real business problems.",
  email: "chukwukachizaram150@gmail.com",
  phone: "+234 912 186 4819",
  location: "Nnewi, Anambra State, Nigeria",
  availability: "Open to full-time roles and selective freelance projects",
  resumeUrl: "/cv.pdf",
};

// Navigation menu items
export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "tech-stack", label: "Skills", href: "#tech-stack" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "achievements", label: "Achievements", href: "#achievements" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// Project categories for filtering
export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web-app", label: "Web Applications" },
  { id: "ui-component", label: "UI Components" },
  { id: "open-source", label: "Open Source" },
];

// Tech stack categories
export const TECH_CATEGORIES = {
  FRONTEND: "Frontend",
  TOOLS: "Tools & Workflow",
  BACKEND: "Backend",
  LEARNING: "Learning",
};

// Experience types
export const EXPERIENCE_TYPES = {
  WORK: "work",
  PROJECT: "project",
  FREELANCE: "freelance",
};

// Achievement types
export const ACHIEVEMENT_TYPES = {
  CERTIFICATION: "certification",
  AWARD: "award",
  CONTRIBUTION: "contribution",
  METRIC: "metric",
};

// Service categories
export const SERVICES = [
  {
    id: "full-stack-product-development",
    title: "Full-Stack Product Development",
    description: "Building production-ready products from interface to API, auth, business logic, and delivery workflows.",
    icon: "Code2",
  },
  {
    id: "web-mobile-experiences",
    title: "Web and Mobile Experiences",
    description: "Shipping responsive web apps and mobile experiences with React, Next.js, and React Native patterns.",
    icon: "Layout",
  },
  {
    id: "backend-api-systems",
    title: "Backend and API Systems",
    description: "Designing backend services, data flows, and integrations that support real product behavior at scale.",
    icon: "Blocks",
  },
  {
    id: "product-architecture-optimization",
    title: "Architecture and Product Refinement",
    description: "Improving reliability, UX, maintainability, and performance across evolving codebases.",
    icon: "Palette",
  },
];

// Social media platforms
export const SOCIAL_PLATFORMS = {
  GITHUB: "github",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  EMAIL: "email",
  WHATSAPP: "whatsapp",
};

// Contact form field names
export const CONTACT_FORM_FIELDS = {
  NAME: "name",
  EMAIL: "email",
  SUBJECT: "subject",
  MESSAGE: "message",
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Please enter a valid email address",
  MIN_LENGTH: (min) => `Must be at least ${min} characters`,
  MAX_LENGTH: (max) => `Must be no more than ${max} characters`,
  SUCCESS: "Message sent successfully! I'll get back to you soon.",
  ERROR: "Something went wrong. Please try again or contact me directly via email.",
};

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
};

// Theme modes
export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME: "portfolio-theme",
  CONTACT_FORM: "portfolio-contact-form-draft",
};

// External links
export const EXTERNAL_LINKS = {
  GITHUB_REPO: "https://github.com/chizzy250/portfolio",
  LINKEDIN: "https://www.linkedin.com/in/chizaram-chukwuka-b331b6222",
  GITHUB_PROFILE: "https://github.com/chizzy250",
  TWITTER: "https://twitter.com/chizaram250",
};

// EmailJS configuration (replace with your actual IDs after setup)
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID:import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// SEO metadata
export const SEO_CONFIG = {
  title: "Chukwuka Chizaram Anthony | Full-Stack JavaScript Developer",
  description: "Full-stack JavaScript developer building production web, mobile, and backend products with React, Next.js, Node.js, PostgreSQL, and modern product engineering workflows.",
  keywords: "Full-Stack JavaScript Developer, Node.js Developer, Next.js Developer, React Developer, Web Developer, Mobile App Developer, Backend Developer, PostgreSQL, Tailwind CSS",
  author: "Chukwuka Chizaram Anthony",
  ogImage: "/og-image.png",
  twitterHandle: "@Chizaram250",
};

// Skills proficiency levels
export const PROFICIENCY_LEVELS = {
  EXPERT: "expert",
  ADVANCED: "advanced",
  INTERMEDIATE: "intermediate",
  BEGINNER: "beginner",
};

// Status indicators
export const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

// Scroll offset for smooth scrolling to sections (navbar height)
export const SCROLL_OFFSET = 80;

// Default values
export const DEFAULTS = {
  ITEMS_PER_PAGE: 6,
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 3000,
};
