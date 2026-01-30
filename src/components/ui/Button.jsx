// Reusable Button component with multiple variants
import { forwardRef } from 'react';

/**
 * Button Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button style variant (primary, secondary, outline, ghost)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.loading - Whether button is in loading state
 * @param {React.ReactNode} props.children - Button content
 * @param {React.ReactNode} props.leftIcon - Icon to display on the left
 * @param {React.ReactNode} props.rightIcon - Icon to display on the right
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {string} props.type - Button type (button, submit, reset)
 */

const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  leftIcon,
  rightIcon,
  className = '',
  onClick,
  type = 'button',
  ...props
}, ref) => {
  // Base styles (always applied)
  const baseStyles = 'btn-base inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-sm hover:shadow-md',
    secondary: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500 shadow-sm hover:shadow-md',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 focus:ring-primary-500',
    ghost: 'text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 focus:ring-primary-500',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 shadow-sm hover:shadow-md',
  };

  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2.5 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Loading styles
  const loadingStyles = loading ? 'opacity-70 cursor-wait' : '';

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${widthStyles}
    ${loadingStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Handle click with loading state
  const handleClick = (e) => {
    if (loading || disabled) return;
    if (onClick) onClick(e);
  };

  return (
    <button
      ref={ref}
      type={type}
      className={buttonStyles}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && !loading && (
        <span className="flex-shrink-0">
          {leftIcon}
        </span>
      )}

      {/* Loading Spinner */}
      {loading && (
        <svg 
          className="animate-spin h-5 w-5 flex-shrink-0" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Button Text */}
      <span>
        {children}
      </span>

      {/* Right Icon */}
      {rightIcon && !loading && (
        <span className="flex-shrink-0">
          {rightIcon}
        </span>
      )}
    </button>
  );
});

// Display name for debugging
Button.displayName = 'Button';

export default Button;