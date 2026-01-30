// Experience section - Work history and timeline
import { useState } from 'react';
import { Briefcase, Users, Code2, GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import AnimatedSection, { StaggeredList } from '../common/AnimatedSection';
import { 
  experienceByDate, 
  experienceTypes,
  formatDateRange 
} from '../../data/experience';
import { calculateDuration } from '../../utils/helpers';

const Experience = () => {
  const [filter, setFilter] = useState('all');

  const filteredExperiences = filter === 'all' 
    ? experienceByDate 
    : experienceByDate.filter(exp => exp.type === filter);

  const typeIcons = {
    work: Briefcase,
    freelance: Users,
    project: Code2,
    education: GraduationCap,
  };

  return (
    <section className="section-padding bg-light-bg dark:bg-dark-bg overflow-hidden">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title="Experience"
            subtitle="My professional journey and projects"
            align="center"
            underline
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
            <button
              onClick={() => setFilter('all')}
              className={`
                px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-base whitespace-nowrap
                ${filter === 'all'
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-light-card dark:bg-dark-card text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                }
              `}
            >
              All
            </button>

            {Object.entries(experienceTypes).map(([type, config]) => {
              const Icon = typeIcons[type];
              const count = experienceByDate.filter(exp => exp.type === type).length;

              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`
                    flex items-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-base whitespace-nowrap
                    ${filter === type
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-light-card dark:bg-dark-card text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                    }
                  `}
                >
                  <Icon className="w-3 h-3 sm:w-5 sm:h-5" />
                  <span>{config.label}</span>
                  <span className="text-[10px] sm:text-xs opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          <div className="relative">
            <div className="absolute left-2 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2" />

            <div className="space-y-8 sm:space-y-12">
              <StaggeredList staggerDelay={150}>
                {filteredExperiences.map((exp, index) => {
                  const Icon = typeIcons[exp.type];
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={exp.id}
                      className={`relative flex items-center ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className="absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 z-10">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: experienceTypes[exp.type]?.color }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>

                      <div className={`w-full md:w-5/12 ml-14 sm:ml-16 md:ml-0 pr-2 sm:pr-4 md:pr-0 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                        <Card variant="default" hoverable className="relative">
                          {exp.current && (
                            <div className="absolute -top-2 sm:-top-3 right-2 sm:right-4">
                              <Badge variant="success" dot size="sm">
                                Current
                              </Badge>
                            </div>
                          )}

                          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-sm sm:text-base md:text-xl leading-tight">
                                  {exp.title}
                                </CardTitle>
                                <CardDescription className="text-xs sm:text-sm md:text-base font-medium mt-0.5">
                                  {exp.company}
                                </CardDescription>
                              </div>
                              
                              <Badge
                                variant={
                                  exp.type === 'work' ? 'primary' :
                                  exp.type === 'freelance' ? 'secondary' :
                                  exp.type === 'project' ? 'success' :
                                  'warning'
                                }
                                size="sm"
                                className="flex-shrink-0 text-[10px] sm:text-xs"
                              >
                                {experienceTypes[exp.type]?.label}
                              </Badge>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{formatDateRange(exp.startDate, exp.endDate)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="hidden sm:inline">•</span>
                                <span>{calculateDuration(exp.startDate, exp.endDate)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary mb-3 sm:mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          {exp.responsibilities && exp.responsibilities.length > 0 && (
                            <div className="mb-3 sm:mb-4">
                              <h5 className="text-xs sm:text-sm font-semibold text-light-text-primary dark:text-dark-text-primary mb-1.5 sm:mb-2">
                                Key Responsibilities:
                              </h5>
                              <ul className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs md:text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                {exp.responsibilities.slice(0, 3).map((item, i) => (
                                  <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                                    <span className="text-primary-500 mt-0.5 flex-shrink-0">•</span>
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.highlights && exp.highlights.length > 0 && (
                            <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 md:p-4 rounded-lg bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800">
                              <h5 className="text-xs sm:text-sm font-semibold text-primary-700 dark:text-primary-300 mb-1.5 sm:mb-2">
                                Highlights:
                              </h5>
                              <ul className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs md:text-sm text-primary-600 dark:text-primary-400">
                                {exp.highlights.map((item, i) => (
                                  <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                                    <span className="flex-shrink-0 mt-0.5">✓</span>
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.techStack && exp.techStack.length > 0 && (
                            <div>
                              <h5 className="text-xs sm:text-sm font-semibold text-light-text-primary dark:text-dark-text-primary mb-1.5 sm:mb-2">
                                Technologies Used:
                              </h5>
                              <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                                {exp.techStack.map((tech, i) => (
                                  <Badge key={i} variant="outline" size="sm" className="text-[10px] sm:text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {exp.companyUrl && (
                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-light-border dark:border-dark-border">
                              <Button
                                variant="ghost"
                                size="sm"
                                rightIcon={<ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />}
                                onClick={() => window.open(exp.companyUrl, '_blank')}
                                className="text-xs sm:text-sm"
                              >
                                <span className="hidden sm:inline">Visit Company Website</span>
                                <span className="sm:hidden">Visit Website</span>
                              </Button>
                            </div>
                          )}
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </StaggeredList>
            </div>
          </div>
        </div>

        {filteredExperiences.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <p className="text-xs sm:text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary px-4">
                No {filter !== 'all' && experienceTypes[filter]?.label.toLowerCase()} experience to display.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Experience;