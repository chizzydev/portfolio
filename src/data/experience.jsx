export const experience = [
  {
    id: 'freelance-developer',
    type: 'freelance',
    title: 'Full-Stack JavaScript Developer',
    company: 'Self-Employed',
    location: 'Nnewi, Nigeria',
    locationType: 'Remote',
    startDate: '2023-06',
    endDate: 'Present',
    current: true,
    description: 'Building production web applications and backend-backed product experiences for clients and personal products using JavaScript across frontend and server-side systems.',
    responsibilities: [
      'Build responsive, production-ready applications from interface through backend integration',
      'Translate product requirements into clean architecture, maintainable components, and reliable business logic',
      'Write scalable code, debug issues quickly, and improve usability across devices',
      'Collaborate with clients to shape scope, priorities, and product direction',
      'Deploy, maintain, and iterate on applications in real environments',
    ],
    techStack: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Vite', 'Git', 'GitHub', 'Node.js', 'Express.js', 'Supabase (PostgreSQL)'],
    highlights: [
      'Delivered 5+ production-ready client projects that cannot be shown publicly due to client restrictions',
      'Achieved 90+ Lighthouse scores on all projects',
      'Implemented responsive systems across mobile, tablet, and desktop',
    ],
    companyUrl: null,
    companyLogo: null,
  },

  {
    id: 'decide-platform',
    type: 'project',
    title: 'Full-Stack JavaScript Developer',
    company: 'Decide - Phone Intelligence Platform',
    location: 'Nigeria',
    locationType: 'Remote',
    startDate: '2026-02',
    endDate: 'Present',
    current: true,
    description: 'Engineered a full-stack phone intelligence platform that aggregates real-time pricing, analyzes device value, and delivers data-driven purchase decisions. Built both web and mobile applications with a custom scoring engine, scraping infrastructure, and intelligent recommendation system designed for emerging markets.',
    responsibilities: [
      'Architected end-to-end system including backend services, database design, and frontend applications',
      'Developed a custom phone scoring engine to evaluate battery, performance, camera, build, and value metrics',
      'Built automated scraping infrastructure to collect and validate real-time prices from multiple vendors (Jumia, Slot)',
      'Implemented intelligent phone matching and validation logic to eliminate mismatches and accessory noise',
      'Designed and integrated RESTful APIs powering both web and mobile clients',
      'Developed admin dashboard for managing phones, triggering sync jobs, and maintaining data integrity',
      'Handled edge cases in data normalization, including brand hierarchies (Xiaomi, Redmi, POCO) and model disambiguation',
      'Implemented image scraping and localization pipeline for consistent asset management',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'React',
      'Next.js',
      'React Native (Expo)',
      'TypeScript',
      'Tailwind CSS',
      'Cheerio',
      'Axios',
      'Supabase',
    ],
    highlights: [
      'Built a cross-platform system (web + mobile app) from scratch with shared backend infrastructure',
      'Developed a robust scraping and validation engine capable of filtering out false listings and mismatched products',
      'Implemented a data-driven recommendation system that goes beyond specs to deliver real-world value insights',
      'Designed a price synchronization pipeline with validation, fallback logic, and anomaly detection',
      'Created a scalable architecture supporting hundreds of phone entries with automated updates',
      'Engineered intelligent name-matching logic to handle complex real-world inconsistencies in product listings',
      'Developed internal tools for auditing data integrity (slug validation, duplicate detection, cleanup workflows)',
      'Positioned platform for monetization via affiliate integrations and market intelligence features',
    ],
    companyUrl: null,
    companyLogo: null,
  },

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
      "Completed a Bachelor's degree in Human Physiology with strong emphasis on research, data analysis, scientific documentation, and critical thinking. Developed a disciplined problem-solving approach through laboratory work, experimental design, and academic projects.",
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

export const experienceByType = {
  all: experience,
  work: experience.filter(exp => exp.type === 'work'),
  freelance: experience.filter(exp => exp.type === 'freelance'),
  project: experience.filter(exp => exp.type === 'project'),
  education: experience.filter(exp => exp.type === 'education'),
};

export const currentExperience = experience.filter(exp => exp.current);

export const pastExperience = experience.filter(exp => !exp.current);

export const experienceByDate = [...experience].sort((a, b) => {
  const dateA = a.endDate === 'Present' ? new Date() : new Date(a.endDate);
  const dateB = b.endDate === 'Present' ? new Date() : new Date(b.endDate);
  return dateB - dateA;
});

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

export const locationTypes = {
  Remote: {
    label: 'Remote',
    icon: 'Home',
  },
  'On-site': {
    label: 'On-site',
    icon: 'Building',
  },
  Hybrid: {
    label: 'Hybrid',
    icon: 'Shuffle',
  },
};

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

  return Math.round(totalMonths / 12 * 10) / 10;
}

export const getExperienceById = (id) => {
  return experience.find(exp => exp.id === id) || null;
};

export const getExperienceByType = (type) => {
  if (type === 'all') return experience;
  return experience.filter(exp => exp.type === type);
};

export const getExperienceByTech = (tech) => {
  return experience.filter(exp =>
    exp.techStack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

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
