// Projects section - Portfolio showcase
import { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Play } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import Badge, { CategoryBadge, StatusBadge } from '../ui/Badge';
import Button from '../ui/Button';
import Modal, { ModalBody } from '../ui/Modal';
import AnimatedSection, { StaggeredList } from '../common/AnimatedSection';
import {
  projects,
  projectCategories,
  getProjectsByCategory
} from '../../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = getProjectsByCategory(activeFilter);

  return (
    <section className="section-padding bg-light-card dark:bg-dark-card">
      <div className="container-custom">
        {/* Title + Filters */}
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionTitle
              title="Selected Products and Case Studies"
              subtitle="Products that best show how I design, build, and ship across frontend, backend, and product delivery"
              align="center"
              underline
            />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`
                    px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base
                    transition-all duration-300
                    ${activeFilter === category.id
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-light-bg dark:bg-dark-bg text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary-50 dark:hover:bg-primary-950 hover:text-primary-500'
                    }
                  `}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* ✅ PROJECTS GRID — FIXED */}
        <div className="max-w-6xl mx-auto">
          <StaggeredList staggerDelay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  variant="default"
                  hoverable
                  padding="none"
                  className="overflow-hidden group w-full"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 aspect-video">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.15),rgba(2,6,23,0.5))]">
                          <div className="flex items-start justify-between gap-3">
                            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                              {project.status === 'in-progress' ? 'Active build' : 'Case study'}
                            </span>
                            <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium">
                              {project.category === 'web-app' ? 'Web / Mobile / API' : 'Project'}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <div className="text-4xl sm:text-5xl font-bold leading-none">
                              {project.title.split(' ').slice(0, 2).join(' ')}
                            </div>
                            <p className="max-w-sm text-sm sm:text-base text-white/85 leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <StatusBadge status={project.status} />
                    </div>

                    <div className="absolute top-4 right-4">
                      <CategoryBadge category={project.category} />
                    </div>

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300 flex items-center justify-center gap-3">
                      {project.links.live && (
                        <Button
                          variant="primary"
                          size="sm"
                          leftIcon={<ExternalLink className="w-4 h-4" />}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.links.live, '_blank');
                          }}
                        >
                          Live Demo
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        Details
                      </Button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-4">
                    <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-2 text-sm sm:text-base">
                      {project.description}
                    </CardDescription>

                    <div className="rounded-xl border border-light-border/80 bg-light-bg/60 p-3 dark:border-dark-border dark:bg-dark-bg/40">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-light-text-tertiary dark:text-dark-text-tertiary">
                        What this project proves
                      </p>
                      <p className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary line-clamp-2">
                        {project.challenges?.[0]?.solution || project.features?.[0]}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="gray" size="sm">
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-500 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-500 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-500 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Play className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </StaggeredList>
        </div>

        {filteredProjects.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                No case studies found in this category.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen
          onClose={() => setSelectedProject(null)}
          size="xl"
          title={selectedProject.title}
        >
          <ModalBody>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg mb-6"
              />
            )}

            <div className="flex gap-3 mb-6">
              <CategoryBadge category={selectedProject.category} />
              <StatusBadge status={selectedProject.status} />
            </div>

            <p className="leading-relaxed">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {selectedProject.features?.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">
                  Product highlights
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedProject.features.slice(0, 6).map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-light-border dark:border-dark-border bg-light-bg/60 dark:bg-dark-bg/40 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 rounded-full bg-primary-100 px-2 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                          {index + 1}
                        </span>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedProject.challenges?.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">
                  Notable challenges solved
                </h4>
                <div className="space-y-3">
                  {selectedProject.challenges.slice(0, 3).map((challenge, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-light-border dark:border-dark-border bg-light-bg/60 dark:bg-dark-bg/40 p-4"
                    >
                      <p className="text-sm font-semibold text-light-text-primary dark:text-dark-text-primary">
                        {challenge.problem}
                      </p>
                      <p className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {challenge.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              {selectedProject.links.live && (
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<ExternalLink className="w-4 h-4" />}
                  onClick={() => window.open(selectedProject.links.live, '_blank')}
                >
                  View project
                </Button>
              )}
              {selectedProject.links.github && (
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Github className="w-4 h-4" />}
                  onClick={() => window.open(selectedProject.links.github, '_blank')}
                >
                  Source code
                </Button>
              )}
              {!selectedProject.links.live && !selectedProject.links.github && (
                <div className="inline-flex items-center gap-2 rounded-lg border border-light-border px-4 py-2 text-sm text-light-text-secondary dark:border-dark-border dark:text-dark-text-secondary">
                  <ArrowRight className="w-4 h-4" />
                  Private or in-progress build
                </div>
              )}
            </div>
          </ModalBody>
        </Modal>
      )}
    </section>
  );
};

export default Projects;

