// Reusable SectionTitle component for consistent section headers
import { forwardRef } from 'react';

/**
 * SectionTitle Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Subtitle/description text
 * @param {string} props.align - Text alignment (left, center, right)
 * @param {string} props.size - Title size (sm, md, lg, xl)
 * @param {boolean} props.gradient - Whether to apply gradient to title
 * @param {React.ReactNode} props.badge - Badge/tag to display above title
 * @param {React.ReactNode} props.icon - Icon to display before title
 * @param {boolean} props.underline - Whether to show underline decoration
 * @param {string} props.className - Additional CSS classes
 */

const SectionTitle = forwardRef(({
  title,
  subtitle,
  align = 'center',
  size = 'lg',
  gradient = false,
  badge,
  icon,
  underline = false,
  className = '',
}, ref) => {
  // Alignment styles
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  // Size styles for title
  const titleSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl',
    xl: 'text-4xl md:text-5xl lg:text-6xl',
  };

  // Size styles for subtitle
  const subtitleSizes = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
  };

  // Gradient text styles
  const gradientStyles = gradient
    ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500'
    : 'text-light-text-primary dark:text-dark-text-primary';

  return (
    <div 
      ref={ref}
      className={`flex flex-col gap-4 mb-12 ${alignments[align]} ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className="inline-flex">
          {badge}
        </div>
      )}

      {/* Title with optional icon */}
      <div className="flex items-center gap-3">
        {icon && align === 'left' && (
          <div className="flex-shrink-0 text-primary-500">
            {icon}
          </div>
        )}

        <h2 className={`font-bold leading-tight ${titleSizes[size]} ${gradientStyles}`}>
          {title}
        </h2>

        {icon && align !== 'left' && (
          <div className="flex-shrink-0 text-primary-500">
            {icon}
          </div>
        )}
      </div>

      {/* Underline decoration */}
      {underline && (
        <div className={`h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`} />
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className={`
          ${subtitleSizes[size]} 
          text-light-text-secondary dark:text-dark-text-secondary 
          max-w-2xl
          ${align === 'center' ? 'mx-auto' : ''}
        `}>
          {subtitle}
        </p>
      )}
    </div>
  );
});

// Display name for debugging
SectionTitle.displayName = 'SectionTitle';

/**
 * SectionHeader Component
 * Alternative header with number/step indicator
 */
export const SectionHeader = ({ 
  number, 
  title, 
  subtitle, 
  align = 'left',
  className = '' 
}) => {
  return (
    <div className={`flex flex-col gap-4 mb-12 ${align === 'center' ? 'items-center text-center' : ''} ${className}`}>
      {/* Number indicator */}
      {number && (
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-lg">
            {number}
          </span>
          <div className="h-[2px] w-12 bg-gradient-to-r from-primary-500 to-accent-500" />
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

/**
 * PageTitle Component
 * Large title for page headers
 */
export const PageTitle = ({ 
  title, 
  subtitle, 
  breadcrumbs,
  className = '' 
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <nav className="flex items-center gap-2 text-sm mb-4 text-light-text-tertiary dark:text-dark-text-tertiary">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              <span className={index === breadcrumbs.length - 1 ? 'text-light-text-primary dark:text-dark-text-primary font-medium' : ''}>
                {crumb}
              </span>
            </div>
          ))}
        </nav>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

/**
 * CompactTitle Component
 * Smaller, inline title for cards or subsections
 */
export const CompactTitle = ({ 
  title, 
  subtitle,
  action,
  className = '' 
}) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Optional action button/link */}
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};

// Export SectionTitle as default and variations as named exports
export default SectionTitle;