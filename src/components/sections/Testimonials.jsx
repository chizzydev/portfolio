import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import AnimatedSection from '../common/AnimatedSection';
import { 
  testimonials,
  relationshipTypes,
  getTestimonialsByRelationship
} from '../../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const filteredTestimonials = getTestimonialsByRelationship(filter);
  const displayTestimonials = filteredTestimonials.length > 0 ? filteredTestimonials : testimonials;

  useEffect(() => {
    if (displayTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [displayTestimonials.length, filter]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? displayTestimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % displayTestimonials.length
    );
  };

  if (testimonials.length === 0) {
    return (
      <section className="section-padding bg-light-bg dark:bg-dark-bg">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Testimonials"
              subtitle="What people say about working with me (Still in beta-nothing in the testimonial is real yet, I will edit it with time)"
              align="center"
              underline
            />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Quote className="w-10 h-10 text-primary-500" />
              </div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-md mx-auto">
                Testimonials will appear here as I work with more clients and colleagues. 
                Check back soon!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title="Testimonials"
            subtitle="This section is still in the beta phase—nothing in the testimonials is real yet. I’ll update it over time."
            align="center"
            underline
          />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${filter === 'all'
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-light-card dark:bg-dark-card text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                }
              `}
            >
              All
            </button>

            {Object.entries(relationshipTypes).map(([type, config]) => {
              const count = getTestimonialsByRelationship(type).length;
              if (count === 0) return null;

              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`
                    px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${filter === type
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-light-card dark:bg-dark-card text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                    }
                  `}
                >
                  {config.label}
                  <span className="ml-2 text-xs opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="max-w-4xl mx-auto">
            <Card variant="elevated" className="relative overflow-hidden">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-24 h-24 text-primary-500" />
              </div>

              <div className="relative p-8 md:p-12">
                <div className="relative min-h-[400px]">
                  {displayTestimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`
                        transition-opacity duration-500
                        ${index === currentIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}
                      `}
                    >
                      {testimonial.rating && (
                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      )}

                      <blockquote className="text-xl md:text-2xl text-light-text-primary dark:text-dark-text-primary leading-relaxed mb-8 italic">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          {testimonial.avatar ? (
                            <img
                              
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xl font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <p className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                            {testimonial.role}
                            {testimonial.company && ` at ${testimonial.company}`}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" size="sm">
                              {relationshipTypes[testimonial.relationship]?.label}
                            </Badge>
                            {testimonial.linkedIn && (
                              <a
                                href={testimonial.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-500 hover:text-primary-600 transition-colors"
                                aria-label="LinkedIn Profile"
                              >
                                <Linkedin className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {displayTestimonials.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                      onClick={goToPrevious}
                      className="p-2 rounded-full bg-light-bg dark:bg-dark-bg hover:bg-primary-500 hover:text-white transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-2">
                      {displayTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? 'w-8 bg-primary-500'
                              : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={goToNext}
                      className="p-2 rounded-full bg-light-bg dark:bg-dark-bg hover:bg-primary-500 hover:text-white transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;