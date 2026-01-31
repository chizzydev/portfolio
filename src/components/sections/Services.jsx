// Services section - What you offer
import { Code2, Palette, Blocks, Layout, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import Button from '../ui/Button';
import AnimatedSection, { StaggeredList } from '../common/AnimatedSection';
import { SERVICES } from '../../utils/constants';

const Services = () => {
  const iconMap = { Code2, Palette, Blocks, Layout };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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

        {/* ✅ Services Grid */}
        <div className="max-w-6xl mx-auto mt-12">
          <StaggeredList staggerDelay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {SERVICES.map((service, index) => {
                const Icon = iconMap[service.icon] || Code2;

                return (
                  <Card
                    key={service.id}
                    variant="default"
                    hoverable
                    className="group relative overflow-hidden w-full"
                  >
                    {/* Decorative background */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                    <div className="relative p-6 space-y-4">
                      {/* Icon + Number */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-light-bg dark:bg-dark-bg border-2 border-primary-500 flex items-center justify-center text-sm font-bold text-primary-500">
                          {index + 1}
                        </div>
                      </div>

                      {/* Title */}
                      <CardTitle className="group-hover:text-primary-500 transition-colors">
                        {service.title}
                      </CardTitle>

                      {/* Description */}
                      <CardDescription className="leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </CardDescription>

                      {/* CTA */}
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
            </div>
          </StaggeredList>
        </div>
      </div>
    </section>
  );
};

export default Services;
