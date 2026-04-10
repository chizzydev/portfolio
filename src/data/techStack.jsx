export const techStack = [
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
    proficiency: 'advanced',
    icon: 'typescript',
    color: '#3178C6',
    description: 'Type-safe JavaScript development',
  },
  {
    id: 'react-native',
    name: 'React Native / Expo',
    category: 'Frontend',
    proficiency: 'advanced',
    icon: 'react',
    color: '#61DAFB',
    description: 'Cross-platform mobile app development for Android-first product delivery',
  },

  
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
    id: 'postman',
    name: 'Postman',
    category: 'Tools',
    proficiency: 'advanced',
    icon: 'postman',
    color: '#FF6C37',
    description: 'API testing and development',
  },

  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    proficiency: 'advanced',
    icon: 'nodejs',
    color: '#339933',
    description: 'JavaScript runtime for backend',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Backend',
    proficiency: 'advanced',
    icon: 'nextjs',
    color: '#000000',
    description: 'React framework for production',
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    proficiency: 'advanced',
    icon: 'express',
    color: '#000000',
    description: 'Web framework for Node.js',
  },
  
{
  id: 'supabase',
  name: 'Supabase (PostgreSQL)',
  category: 'Backend',
  proficiency: 'advanced',
  icon: 'supabase',
  color: '#3ECF8E',
  description: 'Backend-as-a-service built on PostgreSQL for scalable databases, auth, and real-time APIs',
},

  // ACTIVE LEARNING
  {
    id: 'cybersecurity-fundamentals',
    name: 'Cybersecurity Fundamentals',
    category: 'Learning',
    proficiency: 'beginner',
    icon: 'shield',
    color: '#EF4444',
    description: 'Learning core security concepts, threat awareness, and safer engineering habits.',
  },
  {
    id: 'owasp-top-10',
    name: 'OWASP Top 10',
    category: 'Learning',
    proficiency: 'beginner',
    icon: 'shield-alert',
    color: '#F97316',
    description: 'Studying common web vulnerabilities and how to prevent them in real applications.',
  },
  {
    id: 'auth-session-security',
    name: 'Auth and Session Security',
    category: 'Learning',
    proficiency: 'intermediate',
    icon: 'lock',
    color: '#3B82F6',
    description: 'Deepening practical knowledge around OAuth, sessions, abuse protection, and recovery flows.',
  },
  {
    id: 'secure-api-design',
    name: 'Secure API Design',
    category: 'Learning',
    proficiency: 'intermediate',
    icon: 'server',
    color: '#10B981',
    description: 'Learning stronger validation, rate limiting, safer contracts, and defensive backend patterns.',
  },
];

/**
 * Tech stack organized by categories
 */
export const techStackByCategory = {
  Frontend: techStack.filter(tech => tech.category === 'Frontend'),
  Tools: techStack.filter(tech => tech.category === 'Tools'),
  Backend: techStack.filter(tech => tech.category === 'Backend'),
  Learning: techStack.filter(tech => tech.category === 'Learning'),
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
  Backend: {
    title: 'Backend Development',
    description: 'Languages and frameworks I use to build APIs and application logic',
    icon: 'Server',
  },
  Learning: {
    title: 'Active Learning',
    description: 'Skills I am currently studying and strengthening, including cybersecurity',
    icon: 'Shield',
  },
};

/**
 * Featured technologies (shown prominently)
 */
export const featuredTech = [
  'react',
  'javascript',
  'typescript',
  'react-native',
  'nextjs',
  'nodejs',
  'express',
  'supabase',
  'tailwind'
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
    Backend: techStackByCategory.Backend.length,
    Learning: techStackByCategory.Learning.length,
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
