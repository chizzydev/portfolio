// About section - Personal introduction and story
import { Code2, Rocket, Target, Award } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import AnimatedSection from '../common/AnimatedSection';
import { PERSONAL_INFO } from '../../utils/constants';
import { experienceStats } from '../../data/experience';
import { projectStats } from '../../data/projects';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      label: 'Years Experience',
      value: experienceStats.totalYears > 0 ? `${experienceStats.totalYears}+` : 'Growing',
      color: 'text-primary-500',
    },
    {
      icon: Rocket,
      label: 'Products Built',
      value: `${projectStats.total}+`,
      color: 'text-accent-500',
    },
    {
      icon: Target,
      label: 'Technologies',
      value: `${projectStats.technologies}+`,
      color: 'text-green-500',
    },
    {
      icon: Award,
      label: 'Delivery Focus',
      value: 'End-to-End',
      color: 'text-yellow-500',
    },
  ];

  return (
    <section className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title="About Me"
            subtitle="How I think, build, and ship products"
            align="center"
            underline
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <AnimatedSection animation="fade-right">
            <div className="relative max-w-md mx-auto pt-8 sm:pt-12 md:pt-16">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                <div className="w-full h-full rounded-2xl bg-light-card dark:bg-dark-card flex items-center justify-center">
                  <div className="text-center p-4 sm:p-6 md:p-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
                        {PERSONAL_INFO.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-lg md:text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="text-xs md:text-sm text-light-text-secondary dark:text-dark-text-secondary mt-2">
                      {PERSONAL_INFO.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                  I Build Products End to End,{' '}
                  <span className="gradient-text">Not Just Interfaces</span>
                </h3>

                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  <p>
                    I&apos;m a <strong className="text-light-text-primary dark:text-dark-text-primary">Full-Stack JavaScript Developer</strong> based in {PERSONAL_INFO.location},
                    focused on building production products that feel polished for users and dependable under the hood.
                  </p>

                  <p>
                    My work has grown beyond interface delivery into real product ownership: planning features, shaping data models,
                    building APIs, handling authentication, debugging edge cases, refining UX, and stabilizing systems for real-world use.
                  </p>

                  <p>
                    I work primarily with <strong className="text-light-text-primary dark:text-dark-text-primary">React, Next.js, Node.js, PostgreSQL, Supabase, and modern JavaScript tooling</strong>.
                    I enjoy turning messy requirements into clean systems that balance speed, maintainability, and strong product judgment.
                  </p>

                  <p>
                    The kind of work I care about most is end-to-end product building: taking an idea from concept to working software,
                    then improving reliability, performance, and usability until it feels production-ready.
                  </p>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <h4 className="text-base md:text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">
                  What I Do:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">Full-Stack Product Development</Badge>
                  <Badge variant="secondary">Backend APIs</Badge>
                  <Badge variant="success">Web Applications</Badge>
                  <Badge variant="info">Mobile App Delivery</Badge>
                  <Badge variant="primary">Product Architecture</Badge>
                  <Badge variant="secondary">QA and Refinement</Badge>
                </div>
              </div>

              <div className="pt-2 md:pt-4 space-y-2 text-xs md:text-sm">
                <p className="text-light-text-tertiary dark:text-dark-text-tertiary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {PERSONAL_INFO.availability}
                </p>
                <p className="text-light-text-tertiary dark:text-dark-text-tertiary">
                  Location: {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 md:mt-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  variant="default"
                  hoverable
                  className="text-center"
                >
                  <div className="space-y-2 md:space-y-3">
                    <div className={`${highlight.color} mx-auto w-fit`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                        {highlight.value}
                      </p>
                      <p className="text-xs md:text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">
                        {highlight.label}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <Card variant="bordered" className="mt-8 md:mt-12 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 border-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-500 flex items-center justify-center text-xl md:text-2xl text-white font-semibold">
                  01
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-base md:text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">
                  My Development Philosophy
                </h4>
                <p className="text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  &quot;Write code that earns trust later - in maintenance, in production, and in the hands of real users.&quot;
                </p>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
