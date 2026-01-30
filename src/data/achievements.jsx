// Achievements, certifications, and accomplishments
// PLACEHOLDER data - replace with your actual achievements

/**
 * Achievement data structure
 * Each achievement includes:
 * - id: Unique identifier
 * - type: Type of achievement (certification, award, contribution, metric)
 * - title: Achievement title
 * - issuer: Organization that issued the achievement
 * - description: Brief description
 * - date: Date achieved (YYYY-MM format)
 * - credentialId: Credential ID (for certifications)
 * - credentialUrl: Link to verify credential
 * - image: Path to certificate/badge image
 * - skills: Skills demonstrated/learned
 * - featured: Whether to feature this achievement
 */

export const achievements = [
  {
  id: 'alx-aice-cert',
  type: 'certification',
  title: 'AI Career Essentials (AiCE)',
  issuer: 'ALX Africa',
  description:
    'Completed an intensive 8-week program focused on AI-augmented professional development in the digital age. The program covered practical applications of AI tools, problem-solving, communication, and career readiness, with a validated overall score of 98.92%.',
  date: '2024-07',
  credentialId: '2RYS56LN7M',
  credentialUrl: 'https://intranet.alxswe.com/certificates/2RYS56LN7M',
  image: '/images/achievements/aice.png',
  skills: [
    'AI Tools & Prompting',
    'Critical Thinking',
    'Digital Productivity',
    'Professional Communication',
    'Problem Solving',
    'Career Readiness'
  ],
  featured: true,
},

  // EXAMPLE 1 - Online Course Certification
 /* {
    id: 'react-course',
    type: 'certification',
    title: 'React - The Complete Guide',
    issuer: 'Youtube',
    description: 'Comprehensive React course covering hooks, context, routing, and modern React patterns.',
    date: '2024-11',
    //credentialId: 'UC-XXXXXXXX',
    credentialUrl: '', // Add your certificate link
    //image: '/achievements/react-cert.png', // Add certificate image to public/achievements/
    skills: ['React', 'React Hooks', 'React Router', 'Context API', 'Redux'],
    featured: true,
  },

  // EXAMPLE 2 - JavaScript Certification
  {
    id: 'javascript-cert',
    type: 'certification',
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'Youtube',
    description: 'Completed comprehensive JavaScript course covering ES6+, algorithms, and data structures.',
    date: '2025-09',
    credentialId: 'fcc-XXXXXXXX',
    //credentialUrl: 'https://www.freecodecamp.org/certification/yourusername/javascript-algorithms-and-data-structures',
    //image: '/achievements/javascript-cert.png',
    skills: ['JavaScript', 'ES6+', 'Algorithms', 'Data Structures'],
    featured: true,
  },

  // EXAMPLE 3 - Responsive Web Design
  {
    id: 'responsive-web-design',
    type: 'certification',
    title: 'Responsive Web Design',
    issuer: 'Youtube',
    description: 'Mastered responsive web design principles, flexbox, CSS Grid, and accessibility.',
    date: '2023-01',
    //credentialId: 'fcc-XXXXXXXX',
    //credentialUrl: 'https://www.freecodecamp.org/certification/yourusername/responsive-web-design',
    //image: '/achievements/responsive-cert.png',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'CSS Grid', 'Accessibility'],
    featured: true,
  },

  // EXAMPLE 4 - Tailwind CSS Course
  {
    id: 'tailwind-course',
    type: 'certification',
    title: 'Tailwind CSS From Scratch',
    issuer: 'Youtube',
    description: 'Learned utility-first CSS with Tailwind, including responsive design and customization.',
    date: '2024-10',
    //credentialId: 'UC-XXXXXXXX',
    //credentialUrl: '',
    //image: '/achievements/tailwind-cert.png',
    skills: ['Tailwind CSS', 'CSS', 'Responsive Design', 'UI Development'],
    featured: false,
  },

  // EXAMPLE 5 - Git & GitHub
  {
    id: 'git-github',
    type: 'certification',
    title: 'Git & GitHub - Version Control',
    issuer: 'Youtube',
    description: 'Mastered Git workflows, branching strategies, and GitHub collaboration.',
    date: '2025-07',
    //credentialId: 'UC-XXXXXXXX',
    credentialUrl: '',
    //image: '/achievements/git-cert.png',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    featured: false,
  }, */

  // EXAMPLE 6 - Project Metric Achievement
  /*{
    id: 'portfolio-metrics',
    type: 'metric',
    title: '90+ Lighthouse Score',
    issuer: 'Portfolio Website',
    description: 'Achieved 90+ scores across all Lighthouse metrics (Performance, Accessibility, Best Practices, SEO).',
    date: '2025-01',
    credentialId: null,
    credentialUrl: null,
    image: null,
    skills: ['Performance Optimization', 'Accessibility', 'SEO', 'Web Development'],
    featured: true,
  }, */

  // EXAMPLE 7 - GitHub Contribution
  /*{
    id: 'github-activity',
    type: 'contribution',
    title: '100+ GitHub Contributions',
    issuer: 'GitHub',
    description: 'Maintained consistent coding activity with 100+ contributions to open source and personal projects.',
    date: '2024-12',
    credentialId: null,
    credentialUrl: 'https://github.com/yourusername',
    image: null,
    skills: ['Git', 'Open Source', 'Collaboration'],
    featured: false,
  }, */
];

/**
 * Achievements organized by type
 */
export const achievementsByType = {
  all: achievements,
  certification: achievements.filter(a => a.type === 'certification'),
  award: achievements.filter(a => a.type === 'award'),
  contribution: achievements.filter(a => a.type === 'contribution'),
  metric: achievements.filter(a => a.type === 'metric'),
};

/**
 * Featured achievements (shown prominently)
 */
export const featuredAchievements = achievements.filter(a => a.featured);

/**
 * Recent achievements (last 6 months)
 */
export const recentAchievements = achievements.filter(a => {
  const achievementDate = new Date(a.date);
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return achievementDate >= sixMonthsAgo;
});

/**
 * Achievements sorted by date (most recent first)
 */
export const achievementsByDate = [...achievements].sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

/**
 * Achievement type configuration
 */
export const achievementTypes = {
  certification: {
    label: 'Certification',
    color: '#3B82F6',
    icon: 'Award',
    description: 'Professional certifications and completed courses',
  },
  award: {
    label: 'Award',
    color: '#F59E0B',
    icon: 'Trophy',
    description: 'Awards and recognitions received',
  },
  contribution: {
    label: 'Contribution',
    color: '#10B981',
    icon: 'GitPullRequest',
    description: 'Open source and community contributions',
  },
  metric: {
    label: 'Metric',
    color: '#8B5CF6',
    icon: 'TrendingUp',
    description: 'Project metrics and performance achievements',
  },
};

/**
 * Popular certification platforms
 */
export const certificationPlatforms = [
  {
    name: 'Youtube',
    url: 'https://www.youtube.org',
    logo: null,
  },
  {
    name: 'Alx',
    url: 'https://www.alxafrica.com',
    logo: null,
  },
  {
    name: 'X',
    url: 'https://www.x.com',
    logo: null,
  },
  {
    name: 'Chatgpt',
    url: 'https://wwwchatgpt.com'
  }
];

/**
 * Achievement statistics
 */
export const achievementStats = {
  total: achievements.length,
  featured: featuredAchievements.length,
  recent: recentAchievements.length,
  byType: {
    certification: achievementsByType.certification.length,
    award: achievementsByType.award.length,
    contribution: achievementsByType.contribution.length,
    metric: achievementsByType.metric.length,
  },
  totalSkills: [...new Set(achievements.flatMap(a => a.skills))].length,
};

/**
 * Helper function to get achievement by ID
 * @param {string} id - Achievement ID
 * @returns {Object|null} Achievement object or null
 */
export const getAchievementById = (id) => {
  return achievements.find(achievement => achievement.id === id) || null;
};

/**
 * Helper function to get achievements by type
 * @param {string} type - Achievement type
 * @returns {Array} Array of achievements of that type
 */
export const getAchievementsByType = (type) => {
  if (type === 'all') return achievements;
  return achievements.filter(achievement => achievement.type === type);
};

/**
 * Helper function to get achievements by issuer
 * @param {string} issuer - Issuer name
 * @returns {Array} Array of achievements from that issuer
 */
export const getAchievementsByIssuer = (issuer) => {
  return achievements.filter(achievement => 
    achievement.issuer.toLowerCase().includes(issuer.toLowerCase())
  );
};

/**
 * Helper function to get achievements by skill
 * @param {string} skill - Skill name
 * @returns {Array} Array of achievements teaching that skill
 */
export const getAchievementsBySkill = (skill) => {
  return achievements.filter(achievement => 
    achievement.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
  );
};

/**
 * Helper function to get achievements from a specific year
 * @param {number} year - Year
 * @returns {Array} Array of achievements from that year
 */
export const getAchievementsByYear = (year) => {
  return achievements.filter(achievement => 
    new Date(achievement.date).getFullYear() === year
  );
};

/**
 * All unique skills from achievements
 */
export const allAchievementSkills = [...new Set(achievements.flatMap(a => a.skills))].sort();

/**
 * Achievements grouped by year
 */
export const achievementsByYear = achievements.reduce((acc, achievement) => {
  const year = new Date(achievement.date).getFullYear();
  if (!acc[year]) {
    acc[year] = [];
  }
  acc[year].push(achievement);
  return acc;
}, {});

/**
 * Years with achievements (sorted descending)
 */
export const yearsWithAchievements = Object.keys(achievementsByYear)
  .map(Number)
  .sort((a, b) => b - a);

export default {
  achievements,
  achievementsByType,
  featuredAchievements,
  recentAchievements,
  achievementsByDate,
  achievementTypes,
  certificationPlatforms,
  achievementStats,
  getAchievementById,
  getAchievementsByType,
  getAchievementsByIssuer,
  getAchievementsBySkill,
  getAchievementsByYear,
  allAchievementSkills,
  achievementsByYear,
  yearsWithAchievements,
};