// Global constants for the portfolio application

// Personal information
export const PERSONAL_INFO = {
  name: "Chizaram Chukwuka Anthony",
  title: "Front-end React Developer",
  tagline: "Building Scalable, Production-Ready Web Applications",
  email: "chukwukachizaram150@gmail.com",
  phone: "+234 912 186 4819",
  location: "Awka, Anambra State, Nigeria",
  availability: "Available for freelance work",
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
  LEARNING: "Learning/Familiar With",
  PRACTICES: "Development Practices",
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
    id: "web-development",
    title: "Web Application Development",
    description: "Building modern, responsive web applications using React, Vite, and Tailwind CSS",
    icon: "Code2",
  },
  {
    id: "ui-implementation",
    title: "UI/UX Implementation",
    description: "Converting designs into pixel-perfect, accessible, and responsive interfaces",
    icon: "Palette",
  },
  {
    id: "component-libraries",
    title: "Component Libraries",
    description: "Creating reusable, scalable component systems for design consistency",
    icon: "Blocks",
  },
  {
    id: "frontend-architecture",
    title: "Frontend Architecture",
    description: "Designing clean, maintainable, and scalable frontend architectures",
    icon: "Layout",
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
  title: "Chukwuka Chizaram Anthony | Full-Stack React Developer",
  description: "Full-stack React developer specializing in building scalable, production-ready web applications. Portfolio showcasing projects built with React, Vite, and Tailwind CSS.",
  keywords: "React Developer, Frontend Developer, Full-Stack Developer, Web Developer, JavaScript, Tailwind CSS, Vite",
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