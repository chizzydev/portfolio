// Social media links and contact information
// Edit these with your actual social media profiles

import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';

/**
 * Social media links configuration
 * Each item includes:
 * - id: Unique identifier
 * - name: Platform name
 * - icon: Lucide React icon component
 * - url: Your profile URL
 * - username: Your username/handle (optional, for display)
 * - color: Brand color for hover effects
 * - show: Whether to display this link (true/false)
 */

export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/chizzy250',
    username: '@Chizzy250',
    color: '#333',
    show: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/chizaram-chukwuka-b331b6222',
    username: 'Your Name',
    color: '#0077B5',
    show: true,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/Chizaram250',
    username: '@Chizaram250',
    color: '#1DA1F2',
    show: true,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/2349121864819', // Replace with your WhatsApp number
    username: '+234 912 186 4819',
    color: '#25D366',
    show: true,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/Chizzyy250',
    username: '@yourusername',
    color: '#E4405F',
    show: false, // Set to true if you want to display
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/chizaram.chukwuka',
    username: 'Chizaram Chukwuka',
    color: '#1877F2',
    show: false, // Set to true if you want to display
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@yourchannel',
    username: '@yourchannel',
    color: '#FF0000',
    show: false, // Set to true if you want to display
  },
];

/**
 * Contact information
 * Used in Contact section and Footer
 */
export const contactInfo = [
  {
    id: 'email',
    name: 'Email',
    icon: Mail,
    value: 'chukwukachizaram150@gmail.com',
    href: 'mailto:chukwukachizaram150@gmail.com',
    display: 'chukwukachizaram150@gmail.com',
    copyable: true, // Can be copied to clipboard
  },
  {
    id: 'phone',
    name: 'Phone',
    icon: Phone,
    value: '+2349121864819',
    href: 'tel:+2349121864819',
    display: '+234 912 186 4819',
    copyable: true,
  },
  {
    id: 'location',
    name: 'Location',
    icon: MapPin,
    value: 'Awka, Anambra State, Nigeria',
    href: null, // No link for location
    display: 'Awka, Nigeria',
    copyable: false,
  },
];

/**
 * Quick contact actions
 * Primary CTAs for getting in touch
 */
export const quickContactActions = [
  {
    id: 'email-cta',
    label: 'Send Email',
    icon: Mail,
    href: 'mailto:chukwukachizaram150@gmail.com',
    primary: true,
    color: 'primary',
  },
  {
    id: 'whatsapp-cta',
    label: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/2349121864819?text=Hi!%20I%20found%20your%20portfolio',
    primary: false,
    color: 'success',
  },
  {
    id: 'linkedin-cta',
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/chizaram-chukwuka-b331b6222',
    primary: false,
    color: 'info',
  },
];

/**
 * Footer social links (subset of main social links)
 * Only shows platforms where show: true
 */
export const footerSocialLinks = socialLinks.filter(link => link.show);

/**
 * Resume/CV download link
 */
export const resumeLink = {
  label: 'Download Resume',
  url: '/resume.pdf', // Place your resume.pdf in public folder
  fileName: 'YourName_Resume.pdf',
};

/**
 * Availability status
 * Shows if you're available for work
 */
export const availability = {
  status: 'available', // 'available', 'busy', 'unavailable'
  message: 'Available for freelance work',
  statusColors: {
    available: 'bg-green-500',
    busy: 'bg-yellow-500',
    unavailable: 'bg-red-500',
  },
  statusLabels: {
    available: 'Available',
    busy: 'Limited Availability',
    unavailable: 'Not Available',
  },
};

/**
 * Helper function to get social link by ID
 * @param {string} id - Social platform ID
 * @returns {Object|null} Social link object or null
 */
export const getSocialLinkById = (id) => {
  return socialLinks.find(link => link.id === id) || null;
};

/**
 * Helper function to get contact info by ID
 * @param {string} id - Contact info ID
 * @returns {Object|null} Contact info object or null
 */
export const getContactById = (id) => {
  return contactInfo.find(contact => contact.id === id) || null;
};

/**
 * Helper function to get all visible social links
 * @returns {Array} Array of visible social links
 */
export const getVisibleSocialLinks = () => {
  return socialLinks.filter(link => link.show);
};

export default {
  socialLinks,
  contactInfo,
  quickContactActions,
  footerSocialLinks,
  resumeLink,
  availability,
  getSocialLinkById,
  getContactById,
  getVisibleSocialLinks,
};