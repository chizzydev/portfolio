// Navigation bar component
import { useState, useEffect } from 'react';
import { Menu, X, Download, Home, User, Briefcase, FolderOpen, Award, MessageSquare, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Button from '../ui/Button';
import { NAV_ITEMS, PERSONAL_INFO } from '../../utils/constants';

/**
 * Navbar Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.theme - Current theme ('light' or 'dark')
 * @param {Function} props.toggleTheme - Function to toggle theme
 */

// Icon mapping for navigation items
const NAV_ICONS = {
  home: Home,
  about: User,
  'tech-stack': Briefcase,
  experience: Briefcase,
  projects: FolderOpen,
  services: Briefcase,
  achievements: Award,
  testimonials: MessageSquare,
  contact: Mail,
};

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Handle scroll to detect active section and navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = NAV_ITEMS.map(item => item.id);
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with offset for navbar height)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle touch events for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    // Close menu on right swipe
    if (isRightSwipe && isOpen) {
      setIsOpen(false);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled || isOpen
            ? 'bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="
                  w-10 h-10 rounded-lg 
                  bg-gradient-to-br from-primary-500 to-accent-500
                  flex items-center justify-center
                  transition-transform duration-300 group-hover:scale-110
                ">
                  <span className="text-white font-bold text-xl">
                    {PERSONAL_INFO.name.charAt(0)}
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary hidden sm:inline">
                {PERSONAL_INFO.name.split(' ')[0]}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Nav Links */}
              <ul className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`
                        relative text-sm font-medium
                        transition-colors duration-300
                        ${activeSection === item.id
                          ? 'text-primary-500'
                          : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500'
                        }
                      `}
                    >
                      {item.label}
                      
                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <span className="
                          absolute -bottom-1 left-0 right-0 h-0.5 
                          bg-primary-500 rounded-full
                          animate-fade-in
                        " />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                {/* Resume Download */}
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<Download className="w-4 h-4" />}
                  onClick={() => window.open(PERSONAL_INFO.resumeUrl, '_blank')}
                >
                  Resume
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex md:hidden items-center gap-3">
              {/* Mobile Theme Toggle */}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  p-2 rounded-lg
                  text-light-text-primary dark:text-dark-text-primary
                  hover:bg-light-border dark:hover:bg-dark-border
                  transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                "
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Behind Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[45]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu - Full Screen */}
      <div
        className={`
          md:hidden fixed inset-0 z-[48]
          bg-white dark:bg-gray-900
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'opacity-100 visible translate-x-0' 
            : 'opacity-0 invisible translate-x-full'
          }
        `}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Menu Header */}
        <div className="fixed top-0 left-0 right-0 h-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 z-[49]">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {PERSONAL_INFO.name.charAt(0)}
              </span>
            </div>
            <span className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
          </a>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-light-text-primary dark:text-dark-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Menu Content - Scrollable */}
        <div className="h-full overflow-y-auto pt-20">
          <div className="py-8 px-6">
            {/* Mobile Nav Links */}
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => {
                const Icon = NAV_ICONS[item.id] || Home;
                
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`
                        flex items-center gap-3 py-3 px-4 rounded-lg text-lg font-medium
                        transition-all duration-300
                        ${activeSection === item.id
                          ? 'text-primary-500 bg-primary-50 dark:bg-primary-950'
                          : 'text-light-text-primary dark:text-dark-text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Resume Button */}
            <div className="mt-8">
              <Button
                variant="primary"
                fullWidth
                leftIcon={<Download className="w-5 h-5" />}
                onClick={() => {
                  window.open(PERSONAL_INFO.resumeUrl, '_blank');
                  setIsOpen(false);
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
