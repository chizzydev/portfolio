// Reusable Card component for content containers
import { forwardRef } from 'react';

/**
 * Card Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Card style variant (default, bordered, elevated, flat)
 * @param {boolean} props.hoverable - Whether card has hover effect
 * @param {boolean} props.clickable - Whether card is clickable (adds cursor pointer)
 * @param {string} props.padding - Padding size (none, sm, md, lg)
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 */

const Card = forwardRef(({
  variant = 'default',
  hoverable = true,
  clickable = false,
  padding = 'md',
  children,
  className = '',
  onClick,
  ...props
}, ref) => {
  // Base styles (always applied)
  const baseStyles = 'rounded-xl transition-all duration-300';

  // Variant styles
  const variants = {
    default: 'bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-card-light dark:shadow-card-dark',
    bordered: 'bg-light-card dark:bg-dark-card border-2 border-primary-200 dark:border-primary-800',
    elevated: 'bg-light-card dark:bg-dark-card shadow-lg dark:shadow-2xl',
    flat: 'bg-light-card dark:bg-dark-card',
    glass: 'backdrop-blur-lg bg-white/80 dark:bg-black/80 border border-white/20 dark:border-white/10',
  };

  // Hover effect styles
  const hoverStyles = hoverable 
    ? 'hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-1' 
    : '';

  // Clickable styles
  const clickableStyles = clickable 
    ? 'cursor-pointer active:scale-[0.99]' 
    : '';

  // Padding styles
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  // Combine all styles
  const cardStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${hoverStyles}
    ${clickableStyles}
    ${paddings[padding]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Handle click
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <div
      ref={ref}
      className={cardStyles}
      onClick={handleClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e);
        }
      } : undefined}
      {...props}
    >
      {children}
    </div>
  );
});

// Display name for debugging
Card.displayName = 'Card';

/**
 * CardHeader Component
 * Optional header section for the card
 */
export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

/**
 * CardTitle Component
 * Title for the card
 */
export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl md:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary ${className}`}>
      {children}
    </h3>
  );
};

/**
 * CardDescription Component
 * Description text for the card
 */
export const CardDescription = ({ children, className = '' }) => {
  return (
    <p className={`text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary ${className}`}>
      {children}
    </p>
  );
};

/**
 * CardContent Component
 * Main content area of the card
 */
export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

/**
 * CardFooter Component
 * Footer section of the card
 */
export const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={`mt-4 pt-4 border-t border-light-border dark:border-dark-border ${className}`}>
      {children}
    </div>
  );
};

/**
 * CardImage Component
 * Image section for the card
 */
export const CardImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

// Export Card as default and sub-components as named exports
export default Card;