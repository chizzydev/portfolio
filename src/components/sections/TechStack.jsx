// TechStack section - Skills and technologies
import { useState } from 'react';
import { Code2, Wrench, BookOpen, Target } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import Badge from '../ui/Badge';
import AnimatedSection, { StaggeredList } from '../common/AnimatedSection';
import { 
  techStackByCategory, 
  categoryInfo, 
  proficiencyLevels 
} from '../../data/techStack';

/**
 * TechStack Component
 * Display skills organized by categories with proficiency levels
 */

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  // Category icons mapping
  const categoryIcons = {
    Frontend: Code2,
    Tools: Wrench,
    Learning: BookOpen,
    Practices: Target,
  };

  const categories = Object.keys(techStackByCategory);

  return (
    <section className="section-padding bg-light-card dark:bg-dark-card">
      <div className="container-custom">
        {/* Section Title */}
        <AnimatedSection>
          <SectionTitle
            title="Tech Stack"
            subtitle="Technologies and tools I work with"
            align="center"
            underline
          />
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                    transition-all duration-300
                    ${isActive
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-light-bg dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category}</span>
                  <span className="text-xs opacity-75">
                    ({techStackByCategory[category].length})
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Category Description */}
        <AnimatedSection delay={300}>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">
              {categoryInfo[activeCategory]?.title}
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              {categoryInfo[activeCategory]?.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Tech Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggeredList staggerDelay={100}>
            {techStackByCategory[activeCategory].map((tech) => (
              <Card
                key={tech.id}
                variant="default"
                hoverable
                className="group"
              >
                <div className="flex items-start justify-between">
                  {/* Tech Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary group-hover:text-primary-500 transition-colors">
                        {tech.name}
                      </h4>
                    </div>
                    
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4">
                      {tech.description}
                    </p>

                    {/* Proficiency Badge */}
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          tech.proficiency === 'expert' ? 'success' :
                          tech.proficiency === 'advanced' ? 'primary' :
                          tech.proficiency === 'intermediate' ? 'warning' :
                          'gray'
                        }
                        size="sm"
                      >
                        {proficiencyLevels[tech.proficiency]?.label}
                      </Badge>

                      {/* Proficiency Bar */}
                      <div className="flex-1 h-2 bg-light-border dark:bg-dark-border rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            tech.proficiency === 'expert' ? 'bg-green-500' :
                            tech.proficiency === 'advanced' ? 'bg-primary-500' :
                            tech.proficiency === 'intermediate' ? 'bg-yellow-500' :
                            'bg-gray-500'
                          }`}
                          style={{
                            width: `${proficiencyLevels[tech.proficiency]?.percentage}%`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </StaggeredList>
        </div>

        {/* Proficiency Legend */}
        <AnimatedSection delay={400}>
          <Card variant="bordered" className="mt-12 bg-light-bg dark:bg-dark-bg">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">
                Proficiency Levels
              </h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(proficiencyLevels).map(([key, level]) => (
                <div key={key} className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: level.color }}
                    />
                    <span className="font-medium text-light-text-primary dark:text-dark-text-primary">
                      {level.label}
                    </span>
                  </div>
                  <p className="text-xs text-light-text-tertiary dark:text-dark-text-tertiary">
                    {level.description}
                  </p>
                  <div className="w-full h-2 bg-light-border dark:bg-dark-border rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${level.percentage}%`,
                        backgroundColor: level.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>

        {/* Additional Info */}
        <AnimatedSection delay={500}>
          <div className="mt-12 text-center">
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              I'm constantly learning and expanding my skill set. Currently exploring{' '}
              <strong className="text-primary-500">TypeScript</strong> and{' '}
              <strong className="text-primary-500">Node.js</strong> to build even better applications.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStack;