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

const Achievements = () => {
  const [filter, setFilter] = useState('all');

  const filteredAchievements = filter === 'all' 
    ? achievementsByDate 
    : getAchievementsByType(filter);

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
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${filter === 'all'
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-light-bg dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                }`}
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
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${filter === type
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-light-bg dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{config.label}</span>
                  <span className="text-xs opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* ✅ Achievements Grid */}
        <div className="max-w-6xl mx-auto mt-8">
          <StaggeredList staggerDelay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAchievements.map((achievement) => {
                const Icon = typeIcons[achievement.type];
                const typeConfig = achievementTypes[achievement.type];

                return (
                  <Card
                    key={achievement.id}
                    variant="default"
                    hoverable
                    className="group relative overflow-hidden w-full"
                  >
                    {/* Type bar */}
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: typeConfig.color }} />

                    <div className="space-y-4 p-5">
                      {/* Icon + Badge */}
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 duration-300" style={{ backgroundColor: `${typeConfig.color}20` }}>
                          <Icon className="w-6 h-6" style={{ color: typeConfig.color }} />
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

                      {/* Image */}
                      {achievement.image && (
                        <div className="rounded-lg overflow-hidden bg-light-bg dark:bg-dark-bg h-50">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Title + Issuer */}
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
                        <CardDescription className="text-sm">{achievement.description}</CardDescription>
                      )}

                      {/* Skills */}
                      {achievement.skills && achievement.skills.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-light-text-tertiary dark:text-dark-text-tertiary mb-2">Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {achievement.skills.slice(0, 3).map((skill, i) => (
                              <Badge key={i} variant="outline" size="sm">{skill}</Badge>
                            ))}
                            {achievement.skills.length > 3 && (
                              <Badge variant="gray" size="sm">
                                +{achievement.skills.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Credential Button */}
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

                      {achievement.credentialId && !achievement.credentialUrl && (
                        <div className="text-xs text-light-text-tertiary dark:text-dark-text-tertiary">
                          ID: {achievement.credentialId}
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
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
      </div>
    </section>
  );
};

export default Achievements;
