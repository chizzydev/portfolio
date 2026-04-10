// Hero section - Landing page
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import Button from '../ui/Button';
import { PERSONAL_INFO } from '../../utils/constants';
import { getSocialLinkById } from '../../data/social';
import { getFeaturedTech } from '../../data/techStack';

const Hero = () => {
  const githubLink = getSocialLinkById('github');
  const linkedinLink = getSocialLinkById('linkedin');
  const featuredStack = getFeaturedTech();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
   <section className="relative min-h-[calc(88svh-5rem)] sm:min-h-[calc(92svh-5rem)] lg:min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden bg-light-bg dark:bg-dark-bg py-8 sm:py-12 lg:py-16">
{/* Background Decorations */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-up">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-light-text-primary dark:text-dark-text-primary leading-tight">
                Hey, I'm { ' ' }
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
                  {PERSONAL_INFO.name.split(' ')[0]}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-light-text-secondary dark:text-dark-text-secondary">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            <p className="text-sm md:text-base text-light-text-tertiary dark:text-dark-text-tertiary max-w-3xl mx-auto leading-relaxed">
              Currently building Decide, a phone intelligence platform spanning website, backend APIs, and Android app delivery.
            </p>

            {/* Featured Tech Stack */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {featuredStack.map((tech) => (
                <span
                  key={tech.id}
                  className="px-3 sm:px-4 py-2 rounded-full text-sm md:text-base font-medium bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text-primary dark:text-dark-text-primary hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:scale-105"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={scrollToProjects}
              >
                View Selected Products
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<Mail className="w-5 h-5" />}
                onClick={scrollToContact}
              >
                Let's Talk
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
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-8">
              <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                Connect with me:
              </p>
              <div className="flex items-center gap-3">
                {githubLink && (
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500 dark:hover:text-primary-400 hover:bg-light-border dark:hover:bg-dark-border transition-all duration-300 hover:scale-110"
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
                    className="p-2 rounded-lg text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500 dark:hover:text-primary-400 hover:bg-light-border dark:hover:bg-dark-border transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
