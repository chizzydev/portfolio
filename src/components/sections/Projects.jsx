// Projects section - Portfolio showcase
import { useState } from 'react';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardImage, CardTitle, CardDescription } from '../ui/Card';
import Badge, { CategoryBadge, StatusBadge } from '../ui/Badge';
import Button from '../ui/Button';
import Modal, { ModalBody } from '../ui/Modal';
import AnimatedSection, { StaggeredList } from '../common/AnimatedSection';
import { 
  projects, 
  projectCategories, 
  getProjectsByCategory 
} from '../../data/projects';

/**
 * Projects Component
 * Showcase portfolio projects with filtering and detail modals
 */

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects
  const filteredProjects = getProjectsByCategory(activeFilter);

  return (
    <section className="section-padding bg-light-card dark:bg-dark-card">
      <div className="container-custom">
        {/* Section Title */}
        <AnimatedSection>
          <SectionTitle
            title="Featured Projects"
            subtitle="Check out some of my recent work"
            align="center"
            underline
          />
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all duration-300
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StaggeredList staggerDelay={100}>
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                variant="default"
                hoverable
                padding="none"
                className="overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 aspect-video">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    // Placeholder if no image
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <div className="text-center p-6">
                        <div className="text-6xl font-bold mb-2">
                          {project.title.charAt(0)}
                        </div>
                        <p className="text-sm opacity-75">Project Screenshot</p>
                      </div>
                    </div>
                  )}

                  {/* Status Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <StatusBadge status={project.status} />
                  </div>

                  {/* Category Badge Overlay */}
                  <div className="absolute top-4 right-4">
                    <CategoryBadge category={project.category} />
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
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
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="bg-white hover:bg-gray-100"
                    >
                      Details
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Title */}
                    <CardTitle className="group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>

                    {/* Tech Stack */}
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

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary-500 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary-500 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary-500 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Watch demo video"
                        >
                          <Play className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </StaggeredList>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                No projects found in this category. Check back soon!
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          size="xl"
          title={selectedProject.title}
        >
          <ModalBody>
            {/* Project Image */}
            {selectedProject.image && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <CategoryBadge category={selectedProject.category} />
              <StatusBadge status={selectedProject.status} />
              <span className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                {selectedProject.date}
              </span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">
                About This Project
              </h4>
              <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Features */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-light-text-secondary dark:text-dark-text-secondary"
                    >
                      <span className="text-primary-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {selectedProject.challenges && selectedProject.challenges.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">
                  Challenges & Solutions
                </h4>
                <div className="space-y-3">
                  {selectedProject.challenges.map((challenge, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border"
                    >
                      <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-2">
                        Challenge: {challenge.problem}
                      </p>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        Solution: {challenge.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <Badge key={i} variant="primary" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-light-border dark:border-dark-border">
              {selectedProject.links.live && (
                <Button
                  variant="primary"
                  leftIcon={<ExternalLink className="w-5 h-5" />}
                  onClick={() => window.open(selectedProject.links.live, '_blank')}
                >
                  View Live Demo
                </Button>
              )}
              {selectedProject.links.github && (
                <Button
                  variant="outline"
                  leftIcon={<Github className="w-5 h-5" />}
                  onClick={() => window.open(selectedProject.links.github, '_blank')}
                >
                  View Code
                </Button>
              )}
              {selectedProject.links.demo && (
                <Button
                  variant="ghost"
                  leftIcon={<Play className="w-5 h-5" />}
                  onClick={() => window.open(selectedProject.links.demo, '_blank')}
                >
                  Watch Demo
                </Button>
              )}
            </div>
          </ModalBody>
        </Modal>
      )}
    </section>
  );
};

export default Projects;