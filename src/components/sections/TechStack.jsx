import { useState } from 'react';
import { Code2, Wrench, BookOpen, Target } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import AnimatedSection, { StaggeredList } from '../common/AnimatedSection';
import {
  techStackByCategory,
  categoryInfo,
  proficiencyLevels
} from '../../data/techStack';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const categoryIcons = {
    Frontend: Code2,
    Tools: Wrench,
    Learning: BookOpen,
    Practices: Target,
  };

  return (
    <section className="section-padding bg-light-card dark:bg-dark-card">
      <div className="container-custom">

        <AnimatedSection>
          <SectionTitle
            title="Tech Stack"
            subtitle="Technologies and tools I work with"
            align="center"
            underline
          />
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(techStackByCategory).map((category) => {
              const Icon = categoryIcons[category];
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all
                    ${isActive
                      ? 'bg-primary-500 text-white scale-105'
                      : 'bg-light-bg dark:bg-dark-bg text-light-text-secondary hover:text-primary-500'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  {category}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={300}>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              {categoryInfo[activeCategory]?.title}
            </h3>
            <p className="text-light-text-secondary">
              {categoryInfo[activeCategory]?.description}
            </p>
          </div>
        </AnimatedSection>

        {/* ✅ THIS IS THE FIX */}
        <AnimatedSection>
         <StaggeredList
  staggerDelay={100}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
>
            {techStackByCategory[activeCategory].map((tech) => (
              <Card
                key={tech.id}
                hoverable
                className="w-full max-w-md"
              >
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">
                    {tech.name}
                  </h4>

                  <p className="text-sm text-light-text-secondary mb-4">
                    {tech.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <Badge
                      size="sm"
                      variant={
                        tech.proficiency === 'expert' ? 'success' :
                        tech.proficiency === 'advanced' ? 'primary' :
                        tech.proficiency === 'intermediate' ? 'warning' :
                        'gray'
                      }
                    >
                      {proficiencyLevels[tech.proficiency]?.label}
                    </Badge>

                    <div className="flex-1 h-2 bg-light-border rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${proficiencyLevels[tech.proficiency]?.percentage}%`,
                          backgroundColor: proficiencyLevels[tech.proficiency]?.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </StaggeredList>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default TechStack;




