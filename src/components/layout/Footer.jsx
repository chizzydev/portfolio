// Footer component
import { Heart, ArrowUp } from 'lucide-react';
import { footerSocialLinks } from '../../data/social';
import { PERSONAL_INFO, NAV_ITEMS } from '../../utils/constants';

/**
 * Footer Component
 * Contains social links, quick navigation, and copyright info
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Column 1: About */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="
                  w-10 h-10 rounded-lg 
                  bg-gradient-to-br from-primary-500 to-accent-500
                  flex items-center justify-center
                ">
                  <span className="text-white font-bold text-xl">
                    {PERSONAL_INFO.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
                  {PERSONAL_INFO.name.split(' ')[0]}
                </span>
              </div>
              
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>

              <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                {PERSONAL_INFO.location}
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {NAV_ITEMS.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="
                        text-sm text-light-text-secondary dark:text-dark-text-secondary
                        hover:text-primary-500 dark:hover:text-primary-400
                        transition-colors duration-200
                        inline-flex items-center gap-2 group
                      "
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="
                      text-sm text-light-text-secondary dark:text-dark-text-secondary
                      hover:text-primary-500 dark:hover:text-primary-400
                      transition-colors duration-200
                      break-all
                    "
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="
                      text-sm text-light-text-secondary dark:text-dark-text-secondary
                      hover:text-primary-500 dark:hover:text-primary-400
                      transition-colors duration-200
                    "
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </li>
                <li>
                  <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                    {PERSONAL_INFO.availability}
                  </p>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {footerSocialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        p-3 rounded-lg
                        bg-light-bg dark:bg-dark-bg
                        border border-light-border dark:border-dark-border
                        text-light-text-secondary dark:text-dark-text-secondary
                        hover:text-primary-500 dark:hover:text-primary-400
                        hover:border-primary-500 dark:hover:border-primary-400
                        hover:scale-110
                        transition-all duration-300
                        group
                      "
                      aria-label={link.name}
                      title={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="
                  mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  text-sm font-medium
                  text-primary-500 dark:text-primary-400
                  border border-primary-500 dark:border-primary-400
                  hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600
                  transition-all duration-300
                  group
                "
              >
                Back to Top
                <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light-border dark:border-dark-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary text-center md:text-left">
              © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary flex items-center gap-2">
              Built with
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              using React & Tailwind CSS
            </p>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 text-xs text-light-text-tertiary dark:text-dark-text-tertiary">
              <span className="px-2 py-1 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border">
                React
              </span>
              <span className="px-2 py-1 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border">
                Vite
              </span>
              <span className="px-2 py-1 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;