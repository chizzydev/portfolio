// Services section - What you offer
import { Code2, Palette, Blocks, Layout, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import Button from '../ui/Button';
import AnimatedSection, { StaggeredList } from '../common/AnimatedSection';
import { SERVICES } from '../../utils/constants';

/**
 * Services Component
 * Display services offered to clients/employers
 */

const Services = () => {
  // Icon mapping
  const iconMap = {
    Code2,
    Palette,
    Blocks,
    Layout,
  };

  // Scroll to contact section
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

  return (
    <section className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        {/* Section Title */}
        <AnimatedSection>
          <SectionTitle
            title="What I Can Do For You"
            subtitle="Services I offer to bring your ideas to life"
            align="center"
            underline
          />
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <StaggeredList staggerDelay={150}>
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;

              return (
                <Card
                  key={service.id}
                  variant="default"
                  hoverable
                  className="group relative overflow-hidden"
                >
                  {/* Decorative gradient background */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Number badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-light-bg dark:bg-dark-bg border-2 border-primary-500 flex items-center justify-center text-sm font-bold text-primary-500">
                        {index + 1}
                      </div>
                    </div>

                    {/* Title */}
                    <CardTitle className="group-hover:text-primary-500 transition-colors">
                      {service.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>

                    {/* Learn More Link */}
                    <div className="pt-4">
                      <button
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm group/link transition-colors"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </StaggeredList>
        </div>

        {/* Why Work With Me */}
        <AnimatedSection delay={600}>
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-light-text-primary dark:text-dark-text-primary mb-12">
              Why Work With Me?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <h4 className="font-semibold text-lg text-light-text-primary dark:text-dark-text-primary">
                  Quality Code
                </h4>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  Clean, maintainable, and production-ready code following industry best practices
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <h4 className="font-semibold text-lg text-light-text-primary dark:text-dark-text-primary">
                  Fast Delivery
                </h4>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  Efficient workflows and timely delivery without compromising on quality
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-2xl">
                  🤝
                </div>
                <h4 className="font-semibold text-lg text-light-text-primary dark:text-dark-text-primary">
                  Clear Communication
                </h4>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  Regular updates and transparent communication throughout the project
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Process Steps (Optional) */}
        <AnimatedSection delay={700}>
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-light-text-primary dark:text-dark-text-primary mb-12">
              How We'll Work Together
            </h3>

            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Step 1 */}
                <div className="relative text-center space-y-3">
                  <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                    Discovery
                  </h4>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    Understand your needs and goals
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative text-center space-y-3">
                  <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                    Planning
                  </h4>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    Create a roadmap and timeline
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative text-center space-y-3">
                  <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                    Development
                  </h4>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    Build your solution with updates
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative text-center space-y-3">
                  <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                  <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                    Launch
                  </h4>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    Deploy and provide support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={800}>
          <div className="mt-16 text-center">
            <Card variant="bordered" className="max-w-2xl mx-auto bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 border-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    Let's discuss how I can help bring your ideas to life with clean, scalable code.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    onClick={scrollToContact}
                  >
                    Get In Touch
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById('projects');
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                  >
                    View My Work
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;