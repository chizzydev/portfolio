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
];

export const achievementsByType = {
  all: achievements,
  certification: achievements.filter(a => a.type === 'certification'),
  award: achievements.filter(a => a.type === 'award'),
  contribution: achievements.filter(a => a.type === 'contribution'),
  metric: achievements.filter(a => a.type === 'metric'),
};

export const featuredAchievements = achievements.filter(a => a.featured);

export const recentAchievements = achievements.filter(a => {
  const achievementDate = new Date(a.date);
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return achievementDate >= sixMonthsAgo;
});

export const achievementsByDate = [...achievements].sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

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
 * @param {string} id - Achievement ID
 * @returns {Object|null} Achievement object or null
 */
export const getAchievementById = (id) => {
  return achievements.find(achievement => achievement.id === id) || null;
};

/**
 * @param {string} type - Achievement type
 * @returns {Array} Array of achievements of that type
 */
export const getAchievementsByType = (type) => {
  if (type === 'all') return achievements;
  return achievements.filter(achievement => achievement.type === type);
};

/**
 * @param {string} issuer - Issuer name
 * @returns {Array} Array of achievements from that issuer
 */
export const getAchievementsByIssuer = (issuer) => {
  return achievements.filter(achievement => 
    achievement.issuer.toLowerCase().includes(issuer.toLowerCase())
  );
};

/**
 * @param {string} skill - Skill name
 * @returns {Array} Array of achievements teaching that skill
 */
export const getAchievementsBySkill = (skill) => {
  return achievements.filter(achievement => 
    achievement.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
  );
};

/**
 * @param {number} year - Year
 * @returns {Array} Array of achievements from that year
 */
export const getAchievementsByYear = (year) => {
  return achievements.filter(achievement => 
    new Date(achievement.date).getFullYear() === year
  );
};

export const allAchievementSkills = [...new Set(achievements.flatMap(a => a.skills))].sort();

export const achievementsByYear = achievements.reduce((acc, achievement) => {
  const year = new Date(achievement.date).getFullYear();
  if (!acc[year]) {
    acc[year] = [];
  }
  acc[year].push(achievement);
  return acc;
}, {});


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