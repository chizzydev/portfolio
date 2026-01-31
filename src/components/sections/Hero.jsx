// Hero section - Landing page
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import Button from '../ui/Button';
import { PERSONAL_INFO } from '../../utils/constants';
import { getSocialLinkById } from '../../data/social';
import { featuredTech } from '../../data/techStack';

const Hero = () => {
  const githubLink = getSocialLinkById('github');
  const linkedinLink = getSocialLinkById('linkedin');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (!element) return;
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (!element) return;
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-light-bg dark:bg-dark-bg
        min-h-screen
        flex items-center
      "
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">

          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            {PERSONAL_INFO.availability}
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-light-text-primary dark:text-dark-text-primary">
              Hey, I&apos;m{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
                {PERSONAL_INFO.name.split(' ')[0]}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-light-text-secondary dark:text-dark-text-secondary">
              {PERSONAL_INFO.title}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-light-text-secondary dark:text-dark-text-secondary">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Featured Tech */}
          <div className="flex flex-wrap justify-center gap-3">
            {featuredTech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-base font-medium bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text-primary dark:text-dark-text-primary hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={scrollToProjects}
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              leftIcon={<Mail className="w-5 h-5" />}
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>

            <Button
              variant="ghost"
              size="lg"
              leftIcon={<Download className="w-5 h-5" />}
              onClick={() => window.open(PERSONAL_INFO.resumeUrl, '_blank')}
            >
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
              Connect with me:
            </p>
            <div className="flex gap-3">
              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:scale-110 transition-all duration-300 text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500 dark:hover:text-primary-400"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:scale-110 transition-all duration-300 text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500 dark:hover:text-primary-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-6 animate-bounce">
            <div className="w-6 h-10 mx-auto border-2 border-primary-500 dark:border-primary-400 rounded-full p-1">
              <div className="w-1 h-3 bg-primary-500 dark:bg-primary-400 rounded-full mx-auto animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

