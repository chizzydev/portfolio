// Achievements section - Certifications and accomplishments
import { useState } from 'react';
import { Award, Trophy, GitPullRequest, TrendingUp, ExternalLink, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import AnimatedSection, { StaggeredList } from '../common/AnimatedSection';
import { 
  achievementsByDate,
  achievementTypes,
  getAchievementsByType
} from '../../data/achievements';
import { formatDate } from '../../utils/helpers';

/**
 * Achievements Component
 * Display certifications, awards, contributions, and metrics
 */

const Achievements = () => {
  const [filter, setFilter] = useState('all');

  // Filter achievements
  const filteredAchievements = filter === 'all' 
    ? achievementsByDate 
    : getAchievementsByType(filter);

  // Type icons mapping
  const typeIcons = {
    certification: Award,
    award: Trophy,
    contribution: GitPullRequest,
    metric: TrendingUp,
  };

  return (
    <section className="section-padding bg-light-card dark:bg-dark-card">
      <div className="container-custom">
        {/* Section Title */}
        <AnimatedSection>
          <SectionTitle
            title="Achievements"
            subtitle="Continuous learning and professional development"
            align="center"
            underline
          />
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${filter === 'all'
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-light-bg dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                }
              `}
            >
              All Achievements
            </button>

            {Object.entries(achievementTypes).map(([type, config]) => {
              const Icon = typeIcons[type];
              const count = getAchievementsByType(type).length;

              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${filter === type
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-light-bg dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{config.label}</span>
                  <span className="text-xs opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggeredList staggerDelay={100}>
            {filteredAchievements.map((achievement) => {
              const Icon = typeIcons[achievement.type];
              const typeConfig = achievementTypes[achievement.type];

              return (
                <Card
                  key={achievement.id}
                  variant="default"
                  hoverable
                  className="group relative overflow-hidden"
                >
                  {/* Type indicator bar */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: typeConfig.color }}
                  />

                  <div className="space-y-4">
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                        style={{ backgroundColor: `${typeConfig.color}20` }}
                      >
                        <Icon 
                          className="w-6 h-6"
                          style={{ color: typeConfig.color }}
                        />
                      </div>

                      <Badge
                        variant={
                          achievement.type === 'certification' ? 'primary' :
                          achievement.type === 'award' ? 'warning' :
                          achievement.type === 'contribution' ? 'success' :
                          'secondary'
                        }
                        size="sm"
                      >
                        {typeConfig.label}
                      </Badge>
                    </div>

                    {/* Image (if available) */}
                    {achievement.image && (
                      <div className="rounded-lg overflow-hidden bg-light-bg dark:bg-dark-bg">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-32 object-contain p-4"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary-500 transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1 text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                        <span className="font-medium">{achievement.issuer}</span>
                        {achievement.date && (
                          <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(achievement.date, 'month-year')}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    {achievement.description && (
                      <CardDescription className="text-sm">
                        {achievement.description}
                      </CardDescription>
                    )}

                    {/* Skills */}
                    {achievement.skills && achievement.skills.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-light-text-tertiary dark:text-dark-text-tertiary mb-2">
                          Skills:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {achievement.skills.slice(0, 3).map((skill, i) => (
                            <Badge key={i} variant="outline" size="sm">
                              {skill}
                            </Badge>
                          ))}
                          {achievement.skills.length > 3 && (
                            <Badge variant="gray" size="sm">
                              +{achievement.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Credential Link */}
                    {achievement.credentialUrl && (
                      <div className="pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          rightIcon={<ExternalLink className="w-4 h-4" />}
                          onClick={() => window.open(achievement.credentialUrl, '_blank')}
                          fullWidth
                        >
                          View Credential
                        </Button>
                      </div>
                    )}

                    {/* Credential ID */}
                    {achievement.credentialId && !achievement.credentialUrl && (
                      <div className="text-xs text-light-text-tertiary dark:text-dark-text-tertiary">
                        ID: {achievement.credentialId}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </StaggeredList>
        </div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                No {filter !== 'all' && achievementTypes[filter]?.label.toLowerCase()} achievements yet.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Stats Summary */}
        {achievementsByDate.length > 0 && (
          <AnimatedSection delay={400}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {Object.entries(achievementTypes).map(([type, config]) => {
                const Icon = typeIcons[type];
                const count = getAchievementsByType(type).length;

                return (
                  <Card
                    key={type}
                    variant="bordered"
                    className="text-center"
                    style={{ borderColor: `${config.color}40` }}
                  >
                    <div className="space-y-3">
                      <div className="mx-auto w-fit">
                        <Icon 
                          className="w-8 h-8"
                          style={{ color: config.color }}
                        />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                          {count}
                        </p>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">
                          {config.label}
                          {count !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>
        )}

        {/* Certification Platforms */}
        <AnimatedSection delay={500}>
          <div className="mt-16 text-center">
            <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary mb-6">
              Earning certifications from trusted platforms:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Platform logos/names - you can replace with actual logos */}
              <div className="text-light-text-secondary dark:text-dark-text-secondary font-medium">
                Youtube
              </div>
              <div className="text-light-text-secondary dark:text-dark-text-secondary font-medium">
                Alx
              </div>
              <div className="text-light-text-secondary dark:text-dark-text-secondary font-medium">
                X
              </div>
              <div className="text-light-text-secondary dark:text-dark-text-secondary font-medium">
                Chatgpt
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Continuous Learning Note */}
        <AnimatedSection delay={600}>
          <Card variant="bordered" className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 border-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-2xl">
                  📚
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">
                  Committed to Continuous Learning
                </h4>
                <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  I believe in staying current with the latest technologies and best practices. 
                  Always learning, always improving.
                </p>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Achievements;