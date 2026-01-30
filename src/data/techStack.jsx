// Technical skills and tech stack configuration
// Organized by categories for easy display and filtering

/**
 * Tech stack items
 * Each item includes:
 * - name: Technology name
 * - category: Category it belongs to
 * - proficiency: Skill level (expert, advanced, intermediate, beginner)
 * - icon: Icon name (you can add icon components later if needed)
 * - color: Brand/theme color for the tech
 * - description: Brief description (optional)
 */

export const techStack = [
  // FRONTEND TECHNOLOGIES
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    proficiency: 'expert',
    icon: 'react',
    color: '#61DAFB',
    description: 'Building modern, component-based user interfaces',
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    proficiency: 'advanced',
    icon: 'javascript',
    color: '#F7DF1E',
    description: 'Modern JavaScript with latest features',
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    proficiency: 'expert',
    icon: 'html',
    color: '#E34F26',
    description: 'Semantic and accessible markup',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend',
    proficiency: 'advanced',
    icon: 'css',
    color: '#1572B6',
    description: 'Modern CSS with animations and layouts',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    proficiency: 'advanced',
    icon: 'tailwind',
    color: '#06B6D4',
    description: 'Utility-first CSS framework',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: 'intermediate',
    icon: 'typescript',
    color: '#3178C6',
    description: 'Type-safe JavaScript development',
  },

  // TOOLS & WORKFLOW
  {
    id: 'vite',
    name: 'Vite',
    category: 'Tools',
    proficiency: 'advanced',
    icon: 'vite',
    color: '#646CFF',
    description: 'Next-generation frontend tooling',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    proficiency: 'advanced',
    icon: 'git',
    color: '#F05032',
    description: 'Version control and collaboration',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools',
    proficiency: 'advanced',
    icon: 'github',
    color: '#181717',
    description: 'Code hosting and version control',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Tools',
    proficiency: 'advanced',
    icon: 'vscode',
    color: '#007ACC',
    description: 'Primary code editor',
  },
  {
    id: 'npm',
    name: 'npm',
    category: 'Tools',
    proficiency: 'advanced',
    icon: 'npm',
    color: '#CB3837',
    description: 'Package management',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Tools',
    proficiency: 'intermediate',
    icon: 'figma',
    color: '#F24E1E',
    description: 'Design to code workflow',
  },
  {
    id: 'eslint',
    name: 'ESLint',
    category: 'Tools',
    proficiency: 'intermediate',
    icon: 'eslint',
    color: '#4B32C3',
    description: 'Code quality and linting',
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Tools',
    proficiency: 'intermediate',
    icon: 'postman',
    color: '#FF6C37',
    description: 'API testing and development',
  },

  // LEARNING/FAMILIAR WITH
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Learning',
    proficiency: 'beginner',
    icon: 'nodejs',
    color: '#339933',
    description: 'JavaScript runtime for backend',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Learning',
    proficiency: 'beginner',
    icon: 'nextjs',
    color: '#000000',
    description: 'React framework for production',
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Learning',
    proficiency: 'beginner',
    icon: 'express',
    color: '#000000',
    description: 'Web framework for Node.js',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Learning',
    proficiency: 'beginner',
    icon: 'mongodb',
    color: '#47A248',
    description: 'NoSQL database',
  },

  // DEVELOPMENT PRACTICES
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    category: 'Practices',
    proficiency: 'advanced',
    icon: 'monitor',
    color: '#6366F1',
    description: 'Mobile-first, adaptive layouts',
  },
  {
    id: 'component-architecture',
    name: 'Component Architecture',
    category: 'Practices',
    proficiency: 'advanced',
    icon: 'component',
    color: '#8B5CF6',
    description: 'Reusable, scalable components',
  },
  {
    id: 'clean-code',
    name: 'Clean Code',
    category: 'Practices',
    proficiency: 'advanced',
    icon: 'code',
    color: '#EC4899',
    description: 'Maintainable, readable code',
  },
  {
    id: 'accessibility',
    name: 'Accessibility (A11y)',
    category: 'Practices',
    proficiency: 'intermediate',
    icon: 'accessibility',
    color: '#10B981',
    description: 'WCAG 2.1 compliance',
  },
  {
    id: 'performance',
    name: 'Performance Optimization',
    category: 'Practices',
    proficiency: 'intermediate',
    icon: 'zap',
    color: '#F59E0B',
    description: 'Fast, efficient applications',
  },
  {
    id: 'seo',
    name: 'SEO Best Practices',
    category: 'Practices',
    proficiency: 'intermediate',
    icon: 'search',
    color: '#06B6D4',
    description: 'Search engine optimization',
  },
];

/**
 * Tech stack organized by categories
 */
export const techStackByCategory = {
  Frontend: techStack.filter(tech => tech.category === 'Frontend'),
  Tools: techStack.filter(tech => tech.category === 'Tools'),
  Learning: techStack.filter(tech => tech.category === 'Learning'),
  Practices: techStack.filter(tech => tech.category === 'Practices'),
};

/**
 * Category information with descriptions
 */
export const categoryInfo = {
  Frontend: {
    title: 'Frontend Development',
    description: 'Languages and frameworks I use to build user interfaces',
    icon: 'Code2',
  },
  Tools: {
    title: 'Tools & Workflow',
    description: 'Development tools and platforms I work with daily',
    icon: 'Wrench',
  },
  Learning: {
    title: 'Learning & Exploring',
    description: 'Technologies I\'m currently learning and growing my skills in',
    icon: 'BookOpen',
  },
  Practices: {
    title: 'Development Practices',
    description: 'Professional standards and methodologies I follow',
    icon: 'Target',
  },
};

/**
 * Featured technologies (shown prominently)
 */
export const featuredTech = [
  'react',
  'javascript',
  'typescript',
  'tailwind',
  'vite',
  'git',
  'responsive-design',
  'basic nodejs'
];

/**
 * Proficiency level information
 */
export const proficiencyLevels = {
  expert: {
    label: 'Expert',
    color: '#10B981',
    description: 'Deep expertise and extensive experience',
    percentage: 95,
  },
  advanced: {
    label: 'Advanced',
    color: '#3B82F6',
    description: 'Strong proficiency and production experience',
    percentage: 80,
  },
  intermediate: {
    label: 'Intermediate',
    color: '#F59E0B',
    description: 'Working knowledge and growing skills',
    percentage: 60,
  },
  beginner: {
    label: 'Beginner',
    color: '#6B7280',
    description: 'Learning and building foundational knowledge',
    percentage: 40,
  },
};

/**
 * Helper function to get tech by ID
 * @param {string} id - Tech ID
 * @returns {Object|null} Tech object or null
 */
export const getTechById = (id) => {
  return techStack.find(tech => tech.id === id) || null;
};

/**
 * Helper function to get techs by category
 * @param {string} category - Category name
 * @returns {Array} Array of tech items in category
 */
export const getTechsByCategory = (category) => {
  return techStack.filter(tech => tech.category === category);
};

/**
 * Helper function to get techs by proficiency level
 * @param {string} proficiency - Proficiency level
 * @returns {Array} Array of tech items at proficiency level
 */
export const getTechsByProficiency = (proficiency) => {
  return techStack.filter(tech => tech.proficiency === proficiency);
};

/**
 * Helper function to get featured technologies
 * @returns {Array} Array of featured tech items
 */
export const getFeaturedTech = () => {
  return techStack.filter(tech => featuredTech.includes(tech.id));
};

/**
 * Tech stack statistics
 */
export const techStackStats = {
  total: techStack.length,
  byCategory: {
    Frontend: techStackByCategory.Frontend.length,
    Tools: techStackByCategory.Tools.length,
    Learning: techStackByCategory.Learning.length,
    Practices: techStackByCategory.Practices.length,
  },
  byProficiency: {
    expert: getTechsByProficiency('expert').length,
    advanced: getTechsByProficiency('advanced').length,
    intermediate: getTechsByProficiency('intermediate').length,
    beginner: getTechsByProficiency('beginner').length,
  },
};

export default {
  techStack,
  techStackByCategory,
  categoryInfo,
  featuredTech,
  proficiencyLevels,
  getTechById,
  getTechsByCategory,
  getTechsByProficiency,
  getFeaturedTech,
  techStackStats,
};