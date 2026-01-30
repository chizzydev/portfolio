// Projects data configuration
// This is a PLACEHOLDER structure - you'll add your real projects here later

/**
 * Project data structure
 * Each project includes:
 * - id: Unique identifier
 * - title: Project name
 * - description: Brief project description
 * - longDescription: Detailed description for project modal
 * - category: Project category (for filtering)
 * - image: Project screenshot/thumbnail (path to public/projects/)
 * - techStack: Array of technologies used
 * - features: Key features/accomplishments
 * - challenges: Challenges faced and solutions (optional)
 * - links: Live demo and GitHub links
 * - date: Project completion date
 * - featured: Whether to feature this project
 * - status: Project status (completed, in-progress, planned)
 */

export const projects = [
  // EXAMPLE PROJECT 1 - Admin Dashboard (Your existing project)
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description: 'Full-featured admin dashboard with authentication, CRUD operations, and responsive design.',
    longDescription: 'A comprehensive admin dashboard built with React and Tailwind CSS featuring user authentication, role-based access control, and multiple management modules. The dashboard includes email management, user management, file storage, database monitoring, and real-time messaging system. Built with clean architecture following senior-level development practices.',
    category: 'web-app',
    //image: '/projects/admin-dashboard.png', // Add your screenshot to public/projects/
    techStack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
    features: [
      'User authentication with protected routes',
      'Dashboard analytics with stats cards',
      'Email management system with CRUD operations',
      'User management with role-based permissions',
      'File storage and management interface',
      'Database monitoring dashboard',
      'Real-time messaging system',
      'Fully responsive design (mobile-first)',
      'Dark/Light theme support',
      'Clean component architecture',
    ],
    challenges: [
      {
        problem: 'State management across multiple modules',
        solution: 'Implemented custom hooks for shared state and localStorage persistence',
      },
      {
        problem: 'Complex nested routing structure',
        solution: 'Created reusable ProtectedRoute component and centralized route configuration',
      },
    ],
    links: {
      live: '', // Add when you deploy
      github: '', // Add your GitHub repo link
      demo: '', // Optional: video demo link
    },
    date: '2026-01',
    featured: true,
    status: 'in-progress',
  },

  // EXAMPLE PROJECT 2 - Portfolio Website (This project!)
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and professional experience.',
    longDescription: 'A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth scrolling, dark/light mode, animated sections, and a working contact form. Designed with performance, accessibility, and SEO in mind following industry best practices.',
    category: 'web-app',
    //image: '/projects/portfolio.png', // Add your screenshot
    techStack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'EmailJS'],
    features: [
      'Single-page application with smooth scroll navigation',
      'Dark/Light theme with system preference detection',
      'Responsive design (mobile-first approach)',
      'Animated sections with Intersection Observer',
      'Working contact form with email integration',
      'Project filtering by category',
      'Downloadable resume',
      'SEO optimized',
      'Fast performance (Lighthouse 90+ scores)',
    ],
    challenges: [
      {
        problem: 'Implementing smooth scroll animations without janky performance',
        solution: 'Used Intersection Observer API with optimized CSS animations',
      },
    ],
    links: {
      live: '', // Add when deployed
      github: '', // Add your repo
      demo: '',
    },
    date: '2026-01',
    featured: true,
    status: 'in-progress',
  },

  // PLACEHOLDER PROJECT 3 - You'll replace this with a real project
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
  },

  // PLACEHOLDER PROJECT 4
  /** {
    id: 'project-4',
    title: 'Another Project',
    description: 'Another project placeholder - replace with your real project',
    longDescription: 'Detailed description of this project.',
    category: 'ui-component',
    image: '/projects/project-4.png',
    techStack: ['React', 'CSS3'],
    features: [
      'Feature 1',
      'Feature 2',
    ],
    challenges: [],
    links: {
      live: '',
      github: '',
      demo: '',
    },
    date: '2025-03',
    featured: false,
    status: 'planned',
  }, */
];

/**
 * Projects organized by category
 */
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
];

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