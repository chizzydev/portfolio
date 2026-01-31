import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { footerSocialLinks } from '../../data/social';
import { PERSONAL_INFO, NAV_ITEMS } from '../../utils/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border"
    >
      <div className="container-custom">
        {/* MAIN FOOTER */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* ABOUT */}
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {PERSONAL_INFO.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
                  {PERSONAL_INFO.name.split(' ')[0]}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-light-text-secondary dark:text-dark-text-secondary">
                {PERSONAL_INFO.tagline}
              </p>

              <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                {PERSONAL_INFO.location}
              </p>
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_ITEMS.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500 transition"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CONTACT */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-5">Get In Touch</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-primary-500 transition break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="hover:text-primary-500 transition"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </li>
                <li className="text-light-text-tertiary dark:text-dark-text-tertiary">
                  {PERSONAL_INFO.availability}
                </li>
              </ul>
            </motion.div>

            {/* SOCIALS */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-5">Follow Me</h3>

              <div className="flex flex-wrap gap-4">
                {footerSocialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <div key={link.id} className="relative group">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          w-11 h-11 flex items-center justify-center rounded-xl
                          bg-light-bg dark:bg-dark-bg
                          border border-light-border dark:border-dark-border
                          text-light-text-secondary dark:text-dark-text-secondary
                          hover:text-primary-500 hover:border-primary-500
                          transition-all duration-300
                        "
                        aria-label={link.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>

                      {/* Tooltip */}
                      <span
                        className="
                          absolute -top-10 left-1/2 -translate-x-1/2
                          px-2 py-1 text-xs rounded-md
                          bg-dark-card text-dark-text-primary
                          opacity-0 group-hover:opacity-100
                          pointer-events-none
                          transition-opacity duration-200
                          whitespace-nowrap
                        "
                      >
                        {link.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-light-border dark:border-dark-border" />

        {/* BOTTOM BAR */}
        <motion.div
          variants={itemVariants}
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <p className="text-light-text-tertiary dark:text-dark-text-tertiary text-center md:text-left">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-light-text-tertiary dark:text-dark-text-tertiary">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> React & Tailwind
          </p>

          <div className="flex gap-2">
            {['React', 'Vite', 'Tailwind'].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

