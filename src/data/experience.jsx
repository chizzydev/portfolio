// Work experience and professional timeline
// PLACEHOLDER data - replace with your actual experience

/**
 * Experience data structure
 * Each entry includes:
 * - id: Unique identifier
 * - type: Type of experience (work, freelance, project, education)
 * - title: Job title or role
 * - company: Company/organization name
 * - location: Work location
 * - locationType: Remote, On-site, Hybrid
 * - startDate: Start date (YYYY-MM format)
 * - endDate: End date (YYYY-MM format or 'Present')
 * - current: Boolean indicating if currently in this role
 * - description: Brief role description
 * - responsibilities: Key responsibilities and achievements
 * - techStack: Technologies used in this role
 * - highlights: Major accomplishments
 * - companyUrl: Company website (optional)
 * - companyLogo: Path to company logo (optional)
 */

export const experience = [
  // EXAMPLE 1 - Freelance/Project Work
  {
    id: 'freelance-developer',
    type: 'freelance',
    title: 'Freelance Frontend Developer',
    company: 'Self-Employed',
    location: 'Awka, Nigeria',
    locationType: 'Remote',
    startDate: '2023-06',
    endDate: 'Present',
    current: true,
    description: 'Building modern web applications for clients and personal projects using React, Vite, and Tailwind CSS.',
    responsibilities: [
      'Develop responsive, production-ready web applications',
      'Implement pixel-perfect UI designs from Figma',
      'Write clean, maintainable, and scalable code',
      'Collaborate with clients to understand requirements',
      'Deploy and maintain applications on cloud platforms',
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Git', 'GitHub', 'Light NodeJs'],
    highlights: [
      'Built 5+ production-ready web applications, was told not add them to my portfolio by my clients',
      'Achieved 90+ Lighthouse scores on all projects',
      'Implemented responsive designs across all device sizes',
    ],
    companyUrl: null,
    companyLogo: null,
  },

  // EXAMPLE 2 - Project-based experience
  /* {
    id: 'admin-dashboard-project',
    type: 'project',
    title: 'Front-end Developer',
    company: 'Admin Dashboard Project',
    location: 'Awka, Nigeria',
    locationType: 'Remote',
    startDate: '2026-1',
    endDate: '2026-3',
    current: false,
    description: 'Developed a comprehensive admin dashboard with authentication, CRUD operations, and multiple management modules.',
    responsibilities: [
      'Designed and implemented component architecture',
      'Built user authentication system with protected routes',
      'Created reusable UI components following DRY principles',
      'Implemented responsive design for mobile, tablet, and desktop',
      'Managed application state with custom hooks',
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
    highlights: [
      'Built 8 different management modules (Dashboard, Users, Emails, etc.)',
      'Implemented clean code architecture with separation of concerns',
      'Created 20+ reusable components',
      'Achieved fully responsive design across all screen sizes',
    ],
    companyUrl: null,
    companyLogo: null,
  }, */

  // EXAMPLE 3 - Education (if no work experience yet)
{
  id: 'education-cs',
  type: 'education',
  title: 'B.Sc. Human Physiology',
  company: 'University of Calabar',
  location: 'Calabar, Nigeria',
  locationType: 'On-site',
  startDate: '2019',
  endDate: '2023',
  current: false,
  description:
    'Completed a Bachelor’s degree in Human Physiology with strong emphasis on research, data analysis, scientific documentation, and critical thinking. Developed a disciplined problem-solving approach through laboratory work, experimental design, and academic projects.',
  responsibilities: [
    'Conducted laboratory experiments and analyzed physiological data using structured methodologies',
    'Prepared detailed research reports, presentations, and project documentation under strict academic standards',
  ],
  highlights: [
    'Completed a final-year research project involving data collection, interpretation, and formal reporting',
    'Built strong analytical and problem-solving skills transferable to software development',
    'Developed consistency, attention to detail, and the ability to work independently on long-term projects',
  ],
  companyUrl: null,
  companyLogo: null,
},

  // PLACEHOLDER - Internship example (replace with real data when you get one)
 /** {
    id: 'internship-placeholder',
    type: 'work',
    title: 'Frontend Developer Intern',
    company: 'Tech Company Name',
    location: 'Location',
    locationType: 'Remote',
    startDate: '2025-03',
    endDate: '2025-06',
    current: false,
    description: 'Internship position - replace this with actual internship details when you have them.',
    responsibilities: [
      'Assisted in building web applications',
      'Collaborated with senior developers',
      'Fixed bugs and implemented new features',
      'Participated in code reviews',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Contributed to production codebase',
      'Learned industry best practices',
    ],
    companyUrl: '',
    companyLogo: null,
  }, */
]; 

/**
 * Experience organized by type
 */
export const experienceByType = {
  all: experience,
  work: experience.filter(exp => exp.type === 'work'),
  freelance: experience.filter(exp => exp.type === 'freelance'),
  project: experience.filter(exp => exp.type === 'project'),
  education: experience.filter(exp => exp.type === 'education'),
};

/**
 * Current/active experiences
 */
export const currentExperience = experience.filter(exp => exp.current);

/**
 * Past experiences
 */
export const pastExperience = experience.filter(exp => !exp.current);

/**
 * Experience sorted by date (most recent first)
 */
export const experienceByDate = [...experience].sort((a, b) => {
  const dateA = a.endDate === 'Present' ? new Date() : new Date(a.endDate);
  const dateB = b.endDate === 'Present' ? new Date() : new Date(b.endDate);
  return dateB - dateA;
});

/**
 * Experience type labels and colors
 */
export const experienceTypes = {
  work: {
    label: 'Work Experience',
    color: '#3B82F6',
    icon: 'Briefcase',
  },
  freelance: {
    label: 'Freelance',
    color: '#8B5CF6',
    icon: 'Users',
  },
  project: {
    label: 'Project',
    color: '#10B981',
    icon: 'Code2',
  },
  education: {
    label: 'Education',
    color: '#F59E0B',
    icon: 'GraduationCap',
  },
};

/**
 * Location type labels
 */
export const locationTypes = {
  'Remote': {
    label: 'Remote',
    icon: 'Home',
  },
  'On-site': {
    label: 'On-site',
    icon: 'Building',
  },
  'Hybrid': {
    label: 'Hybrid',
    icon: 'Shuffle',
  },
};

/**
 * Experience statistics
 */
export const experienceStats = {
  total: experience.length,
  current: currentExperience.length,
  byType: {
    work: experienceByType.work.length,
    freelance: experienceByType.freelance.length,
    project: experienceByType.project.length,
    education: experienceByType.education.length,
  },
  totalYears: calculateTotalExperience(),
};

/**
 * Helper function to calculate total experience in years
 * @returns {number} Total years of experience
 */
function calculateTotalExperience() {
  const workExp = experience.filter(exp => 
    exp.type === 'work' || exp.type === 'freelance'
  );
  
  if (workExp.length === 0) return 0;
  
  let totalMonths = 0;
  
  workExp.forEach(exp => {
    const start = new Date(exp.startDate);
    const end = exp.endDate === 'Present' ? new Date() : new Date(exp.endDate);
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    totalMonths += months;
  });
  
  return Math.round(totalMonths / 12 * 10) / 10; // Round to 1 decimal
}

/**
 * Helper function to get experience by ID
 * @param {string} id - Experience ID
 * @returns {Object|null} Experience object or null
 */
export const getExperienceById = (id) => {
  return experience.find(exp => exp.id === id) || null;
};

/**
 * Helper function to get experiences by type
 * @param {string} type - Experience type
 * @returns {Array} Array of experiences of that type
 */
export const getExperienceByType = (type) => {
  if (type === 'all') return experience;
  return experience.filter(exp => exp.type === type);
};

/**
 * Helper function to get experiences by technology
 * @param {string} tech - Technology name
 * @returns {Array} Array of experiences using that tech
 */
export const getExperienceByTech = (tech) => {
  return experience.filter(exp => 
    exp.techStack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

/**
 * Helper function to format date range
 * @param {string} startDate - Start date
 * @param {string} endDate - End date or 'Present'
 * @returns {string} Formatted date range
 */
export const formatDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const startFormatted = start.toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });
  
  if (endDate === 'Present') {
    return `${startFormatted} - Present`;
  }
  
  const end = new Date(endDate);
  const endFormatted = end.toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });
  
  return `${startFormatted} - ${endFormatted}`;
};

/**
 * All unique technologies used across all experience
 */
export const allExperienceTech = [...new Set(experience.flatMap(exp => exp.techStack))].sort();

export default {
  experience,
  experienceByType,
  currentExperience,
  pastExperience,
  experienceByDate,
  experienceTypes,
  locationTypes,
  experienceStats,
  getExperienceById,
  getExperienceByType,
  getExperienceByTech,
  formatDateRange,
  allExperienceTech,
};