// Testimonials and recommendations
// PLACEHOLDER data - replace with real testimonials as you receive them

/**
 * Testimonial data structure
 * Each testimonial includes:
 * - id: Unique identifier
 * - name: Person's name
 * - role: Job title/role
 * - company: Company/organization name
 * - relationship: How you know them (client, colleague, mentor, classmate)
 * - testimonial: The testimonial text
 * - rating: Rating out of 5 (optional)
 * - date: Date received (YYYY-MM format)
 * - avatar: Path to person's photo (optional)
 * - linkedIn: LinkedIn profile URL (optional)
 * - platform: Where testimonial was given (LinkedIn, Email, Upwork, etc.)
 * - featured: Whether to feature this testimonial
 * - projectRelated: Related project ID (optional)
 */

export const testimonials = [
  // PLACEHOLDER 1 - Mentor/Instructor testimonial
  {
    id: 'mentor-testimonial',
    name: 'Michael John',
    role: 'Senior Developer',
    company: 'Tech Company',
    relationship: 'mentor',
    testimonial: 'Working with [Chizaram] has been exceptional. Their dedication to writing clean, maintainable code and commitment to learning best practices sets them apart. They consistently deliver high-quality work and show great attention to detail.',
    rating: 5,
    date: '2024-12',
    avatar: null,
    linkedIn: '',
    platform: 'LinkedIn',
    featured: true,
    projectRelated: null,
  },

  // PLACEHOLDER 2 - Colleague/Classmate testimonial
  {
    id: 'colleague-testimonial',
    name: 'Jane Smith',
    role: 'Frontend Developer',
    company: 'Web Agency',
    relationship: 'colleague',
    testimonial: 'I had the pleasure of collaborating with [Chizaram] on several projects. Their problem-solving skills and ability to translate designs into pixel-perfect, responsive interfaces is impressive. They\'re a great team player and communicator.',
    rating: 5,
    date: '2024-11',
    //avatar: '/testimonials/colleague.jpg',
    linkedIn: '',
    platform: 'LinkedIn',
    featured: true,
    projectRelated: 'admin-dashboard',
  },

  // PLACEHOLDER 3 - Client testimonial (when you start freelancing)
  {
    id: 'client-testimonial-1',
    name: 'Michael Johnson',
    role: 'Business Owner',
    company: 'Local Business',
    relationship: 'client',
    testimonial: '[Chizaram] delivered exactly what we needed and more. The website is fast, responsive, and looks great on all devices. They were professional, communicated well throughout the project, and delivered on time. Highly recommended!',
    rating: 5,
    date: '2025-01',
    //avatar: '/testimonials/client1.jpg',
    linkedIn: '',
    platform: 'Direct',
    featured: true,
    projectRelated: null,
  },

  // PLACEHOLDER 4 - Another client
  {
    id: 'client-testimonial-2',
    name: 'Sarah Williams',
    role: 'Marketing Manager',
    company: 'Startup Inc.',
    relationship: 'client',
    testimonial: 'Outstanding work! [Chizaram] took our design mockups and turned them into a beautiful, functional web application. They suggested improvements we hadn\'t thought of and the final product exceeded our expectations.',
    rating: 5,
    date: '2024-12',
    //avatar: '/testimonials/client2.jpg',
    linkedIn: '',
    platform: 'Email',
    featured: true,
    projectRelated: null,
  },

  // PLACEHOLDER 5 - Instructor/Teacher
  {
    id: 'instructor-testimonial',
    name: 'Dr. David Brown',
    role: 'Computer Science Professor',
    company: 'University Name',
    relationship: 'instructor',
    testimonial: '[Chizaram] consistently demonstrated exceptional programming skills and a deep understanding of software development principles. Their projects showed creativity, technical proficiency, and adherence to best practices. A standout student with great potential.',
    rating: 5,
    date: '2024-10',
    //avatar: '/testimonials/instructor.jpg',
    linkedIn: '',
    platform: 'LinkedIn',
    featured: false,
    projectRelated: null,
  },

  // PLACEHOLDER 6 - Study/Project partner
  {
    id: 'partner-testimonial',
    name: 'Alex Chen',
    role: 'Software Developer',
    company: 'Tech Startup',
    relationship: 'classmate',
    testimonial: 'I\'ve worked on multiple projects with [Chizaram]. They bring strong technical skills, great ideas, and always write clean, well-documented code. Their attention to code quality and willingness to help teammates is admirable.',
    rating: 5,
    date: '2024-09',
    avatar: null,
    linkedIn: '',
    platform: 'LinkedIn',
    featured: false,
    projectRelated: null,
  },
];

/**
 * Testimonials organized by relationship
 */
export const testimonialsByRelationship = {
  all: testimonials,
  client: testimonials.filter(t => t.relationship === 'client'),
  colleague: testimonials.filter(t => t.relationship === 'colleague'),
  mentor: testimonials.filter(t => t.relationship === 'mentor'),
  instructor: testimonials.filter(t => t.relationship === 'instructor'),
  classmate: testimonials.filter(t => t.relationship === 'classmate'),
};

/**
 * Featured testimonials (shown prominently)
 */
export const featuredTestimonials = testimonials.filter(t => t.featured);

/**
 * Recent testimonials (last 6 months)
 */
export const recentTestimonials = testimonials.filter(t => {
  const testimonialDate = new Date(t.date);
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return testimonialDate >= sixMonthsAgo;
});

/**
 * Testimonials sorted by date (most recent first)
 */
export const testimonialsByDate = [...testimonials].sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

/**
 * Testimonials with 5-star ratings
 */
export const fiveStarTestimonials = testimonials.filter(t => t.rating === 5);

/**
 * Relationship type configuration
 */
export const relationshipTypes = {
  client: {
    label: 'Client',
    color: '#3B82F6',
    icon: 'Briefcase',
    description: 'Clients I\'ve worked with',
  },
  colleague: {
    label: 'Colleague',
    color: '#10B981',
    icon: 'Users',
    description: 'Professional colleagues',
  },
  mentor: {
    label: 'Mentor',
    color: '#8B5CF6',
    icon: 'UserCheck',
    description: 'Mentors and senior developers',
  },
  instructor: {
    label: 'Instructor',
    color: '#F59E0B',
    icon: 'GraduationCap',
    description: 'Teachers and instructors',
  },
  classmate: {
    label: 'Classmate',
    color: '#EC4899',
    icon: 'UserPlus',
    description: 'Study and project partners',
  },
};

/**
 * Testimonial platforms
 */
export const testimonialPlatforms = {
  LinkedIn: {
    label: 'LinkedIn',
    icon: 'Linkedin',
    color: '#0077B5',
  },
  Email: {
    label: 'Email',
    icon: 'Mail',
    color: '#EA4335',
  },
  Direct: {
    label: 'Direct',
    icon: 'MessageCircle',
    color: '#10B981',
  },
  Upwork: {
    label: 'Upwork',
    icon: 'Briefcase',
    color: '#6FDA44',
  },
  Fiverr: {
    label: 'Fiverr',
    icon: 'Star',
    color: '#1DBF73',
  },
};

/**
 * Testimonial statistics
 */
export const testimonialStats = {
  total: testimonials.length,
  featured: featuredTestimonials.length,
  recent: recentTestimonials.length,
  fiveStar: fiveStarTestimonials.length,
  byRelationship: {
    client: testimonialsByRelationship.client.length,
    colleague: testimonialsByRelationship.colleague.length,
    mentor: testimonialsByRelationship.mentor.length,
    instructor: testimonialsByRelationship.instructor.length,
    classmate: testimonialsByRelationship.classmate.length,
  },
  averageRating: (
    testimonials.reduce((sum, t) => sum + (t.rating || 0), 0) / 
    testimonials.filter(t => t.rating).length
  ).toFixed(1),
};

/**
 * Helper function to get testimonial by ID
 * @param {string} id - Testimonial ID
 * @returns {Object|null} Testimonial object or null
 */
export const getTestimonialById = (id) => {
  return testimonials.find(testimonial => testimonial.id === id) || null;
};

/**
 * Helper function to get testimonials by relationship
 * @param {string} relationship - Relationship type
 * @returns {Array} Array of testimonials of that relationship type
 */
export const getTestimonialsByRelationship = (relationship) => {
  if (relationship === 'all') return testimonials;
  return testimonials.filter(testimonial => testimonial.relationship === relationship);
};

/**
 * Helper function to get testimonials by rating
 * @param {number} rating - Rating value (1-5)
 * @returns {Array} Array of testimonials with that rating
 */
export const getTestimonialsByRating = (rating) => {
  return testimonials.filter(testimonial => testimonial.rating === rating);
};

/**
 * Helper function to get testimonials by platform
 * @param {string} platform - Platform name
 * @returns {Array} Array of testimonials from that platform
 */
export const getTestimonialsByPlatform = (platform) => {
  return testimonials.filter(testimonial => testimonial.platform === platform);
};

/**
 * Helper function to get testimonials for a specific project
 * @param {string} projectId - Project ID
 * @returns {Array} Array of testimonials related to that project
 */
export const getTestimonialsByProject = (projectId) => {
  return testimonials.filter(testimonial => testimonial.projectRelated === projectId);
};

/**
 * Helper function to truncate testimonial text
 * @param {string} text - Testimonial text
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateTestimonial = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Display settings for testimonials section
 */
export const testimonialDisplaySettings = {
  showRatings: true,
  showAvatars: true,
  showCompany: true,
  showDate: false,
  showPlatform: true,
  maxLength: 200, // Max characters to show initially
  itemsPerPage: 3, // For carousel/pagination
  autoRotate: true, // Auto-rotate testimonials
  rotateInterval: 5000, // 5 seconds
};

/**
 * Testimonial call-to-action
 */
export const testimonialCTA = {
  title: 'Work with me',
  description: 'Interested in working together? Let\'s create something amazing!',
  buttonText: 'Get In Touch',
  buttonLink: '#contact',
};

export default {
  testimonials,
  testimonialsByRelationship,
  featuredTestimonials,
  recentTestimonials,
  testimonialsByDate,
  fiveStarTestimonials,
  relationshipTypes,
  testimonialPlatforms,
  testimonialStats,
  getTestimonialById,
  getTestimonialsByRelationship,
  getTestimonialsByRating,
  getTestimonialsByPlatform,
  getTestimonialsByProject,
  truncateTestimonial,
  testimonialDisplaySettings,
  testimonialCTA,
};