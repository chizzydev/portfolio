// Loading spinner and skeleton components
import { forwardRef } from 'react';

/**
 * LoadingSpinner Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.size - Spinner size (xs, sm, md, lg, xl)
 * @param {string} props.color - Spinner color (primary, secondary, white, current)
 * @param {string} props.text - Optional loading text
 * @param {boolean} props.fullScreen - Whether to display as full-screen overlay
 * @param {string} props.className - Additional CSS classes
 */

const LoadingSpinner = forwardRef(({
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  className = '',
}, ref) => {
  // Size variants
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  // Color variants
  const colors = {
    primary: 'text-primary-500',
    secondary: 'text-accent-500',
    white: 'text-white',
    current: 'text-current',
  };

  const spinnerContent = (
    <div ref={ref} className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Spinner */}
      <svg
        className={`animate-spin ${sizes[size]} ${colors[color]}`}
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

      {/* Loading text */}
      {text && (
        <p className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
          {text}
        </p>
      )}
    </div>
  );

  // Full-screen overlay
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm">
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
});

LoadingSpinner.displayName = 'LoadingSpinner';

/**
 * DotsLoader Component
 * Three bouncing dots loader
 */
export const DotsLoader = ({ 
  size = 'md',
  color = 'primary',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-accent-500',
    white: 'bg-white',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div 
        className={`${sizes[size]} ${colors[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '0ms' }}
      />
      <div 
        className={`${sizes[size]} ${colors[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '150ms' }}
      />
      <div 
        className={`${sizes[size]} ${colors[color]} rounded-full animate-bounce`}
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
};

/**
 * PulseLoader Component
 * Pulsing circle loader
 */
export const PulseLoader = ({ 
  size = 'md',
  color = 'primary',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-accent-500',
    white: 'bg-white',
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <div className={`absolute inset-0 ${colors[color]} rounded-full opacity-75 animate-ping`} />
      <div className={`absolute inset-0 ${colors[color]} rounded-full opacity-75`} />
    </div>
  );
};

/**
 * BarLoader Component
 * Horizontal bar loader
 */
export const BarLoader = ({ 
  width = 'full',
  height = 'md',
  color = 'primary',
  className = '' 
}) => {
  const widths = {
    sm: 'w-24',
    md: 'w-48',
    lg: 'w-64',
    full: 'w-full',
  };

  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-accent-500',
  };

  return (
    <div className={`${widths[width]} ${heights[height]} bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${className}`}>
      <div 
        className={`h-full ${colors[color]} rounded-full animate-pulse`}
        style={{ 
          width: '50%',
          animation: 'slide 1.5s ease-in-out infinite'
        }}
      />
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

/**
 * Skeleton Component
 * Loading skeleton for content placeholders
 */
export const Skeleton = ({ 
  width = 'full',
  height = 'md',
  circle = false,
  count = 1,
  className = '' 
}) => {
  const widths = {
    quarter: 'w-1/4',
    half: 'w-1/2',
    three_quarters: 'w-3/4',
    full: 'w-full',
  };

  const heights = {
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
  };

  const skeletonClass = `
    ${circle ? 'rounded-full' : 'rounded-lg'}
    ${!circle && widths[width]}
    ${!circle && heights[height]}
    ${circle ? 'w-12 h-12' : ''}
    bg-gray-200 dark:bg-gray-700
    animate-pulse
    ${className}
  `;

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={skeletonClass} />
      ))}
    </>
  );
};

/**
 * CardSkeleton Component
 * Loading skeleton for card components
 */
export const CardSkeleton = ({ className = '' }) => {
  return (
    <div className={`card p-6 space-y-4 ${className}`}>
      {/* Image skeleton */}
      <Skeleton height="xl" />
      
      {/* Title skeleton */}
      <Skeleton width="three_quarters" height="md" />
      
      {/* Description skeletons */}
      <div className="space-y-2">
        <Skeleton width="full" height="sm" />
        <Skeleton width="full" height="sm" />
        <Skeleton width="half" height="sm" />
      </div>
      
      {/* Tags skeleton */}
      <div className="flex gap-2">
        <Skeleton width="quarter" height="sm" />
        <Skeleton width="quarter" height="sm" />
        <Skeleton width="quarter" height="sm" />
      </div>
    </div>
  );
};

/**
 * PageLoader Component
 * Full page loading state
 */
export const PageLoader = ({ text = 'Loading...' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="mt-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;