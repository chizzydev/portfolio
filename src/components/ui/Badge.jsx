// Reusable Badge component for tech stack, tags, and status indicators
import { forwardRef } from 'react';

/**
 * Badge Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Badge style variant (primary, secondary, success, warning, danger, info, outline)
 * @param {string} props.size - Badge size (sm, md, lg)
 * @param {boolean} props.dot - Whether to show a dot indicator
 * @param {React.ReactNode} props.children - Badge content
 * @param {React.ReactNode} props.icon - Icon to display
 * @param {string} props.className - Additional CSS classes
 */

const Badge = forwardRef(({
  variant = 'primary',
  size = 'md',
  dot = false,
  children,
  icon,
  className = '',
  ...props
}, ref) => {
  // Base styles (always applied)
  const baseStyles = 'inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200';

  // Variant styles
  const variants = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800',
    secondary: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800',
    danger: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800',
    info: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
    outline: 'bg-transparent text-light-text-primary dark:text-dark-text-primary border border-light-border dark:border-dark-border',
    gray: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700',
  };

  // Size styles
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  // Dot indicator colors based on variant
  const dotColors = {
    primary: 'bg-primary-500',
    secondary: 'bg-accent-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
    outline: 'bg-gray-500',
    gray: 'bg-gray-500',
  };

  // Icon size based on badge size
  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  // Dot size based on badge size
  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  // Combine all styles
  const badgeStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <span
      ref={ref}
      className={badgeStyles}
      {...props}
    >
      {/* Dot Indicator */}
      {dot && (
        <span 
          className={`rounded-full ${dotSizes[size]} ${dotColors[variant]} animate-pulse`}
          aria-hidden="true"
        />
      )}

      {/* Icon */}
      {icon && (
        <span className={`flex-shrink-0 ${iconSizes[size]}`}>
          {icon}
        </span>
      )}

      {/* Badge Text */}
      {children && (
        <span className="whitespace-nowrap">
          {children}
        </span>
      )}
    </span>
  );
});

// Display name for debugging
Badge.displayName = 'Badge';

/**
 * TechBadge Component
 * Specialized badge for tech stack items
 */
export const TechBadge = ({ tech, color, icon, className = '' }) => {
  return (
    <Badge 
      variant="primary" 
      size="md"
      icon={icon}
      className={className}
      style={color ? { 
        borderColor: `${color}40`,
        backgroundColor: `${color}10`,
        color: color 
      } : {}}
    >
      {tech}
    </Badge>
  );
};

/**
 * StatusBadge Component
 * Badge for status indicators
 */
export const StatusBadge = ({ status, className = '' }) => {
  const statusVariants = {
    available: { variant: 'success', text: 'Available', dot: true },
    busy: { variant: 'warning', text: 'Busy', dot: true },
    unavailable: { variant: 'danger', text: 'Unavailable', dot: true },
    completed: { variant: 'success', text: 'Completed', dot: false },
    'in-progress': { variant: 'info', text: 'In Progress', dot: false },
    planned: { variant: 'gray', text: 'Planned', dot: false },
  };

  const config = statusVariants[status] || statusVariants.available;

  return (
    <Badge 
      variant={config.variant}
      dot={config.dot}
      size="sm"
      className={className}
    >
      {config.text}
    </Badge>
  );
};

/**
 * CategoryBadge Component
 * Badge for project/content categories
 */
export const CategoryBadge = ({ category, className = '' }) => {
  const categoryVariants = {
    'web-app': { variant: 'primary', text: 'Web App' },
    'ui-component': { variant: 'secondary', text: 'UI Component' },
    'open-source': { variant: 'success', text: 'Open Source' },
    certification: { variant: 'info', text: 'Certification' },
    award: { variant: 'warning', text: 'Award' },
    contribution: { variant: 'success', text: 'Contribution' },
    metric: { variant: 'secondary', text: 'Metric' },
  };

  const config = categoryVariants[category] || { variant: 'outline', text: category };

  return (
    <Badge 
      variant={config.variant}
      size="sm"
      className={className}
    >
      {config.text}
    </Badge>
  );
};

/**
 * CountBadge Component
 * Badge for displaying counts (e.g., notification badges)
 */
export const CountBadge = ({ count, max = 99, variant = 'danger', className = '' }) => {
  const displayCount = count > max ? `${max}+` : count;

  return (
    <Badge 
      variant={variant}
      size="sm"
      className={`min-w-[1.5rem] justify-center ${className}`}
    >
      {displayCount}
    </Badge>
  );
};

// Export Badge as default and specialized badges as named exports
export default Badge;