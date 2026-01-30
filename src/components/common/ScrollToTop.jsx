// Scroll to Top button component
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollToTop Component
 * Displays a button to scroll back to top when user scrolls down
 * 
 * @param {Object} props - Component props
 * @param {number} props.showAfter - Scroll position (in pixels) after which button appears
 * @param {string} props.position - Button position (bottom-right, bottom-left, bottom-center)
 * @param {boolean} props.smooth - Whether to use smooth scrolling
 */

const ScrollToTop = ({ 
  showAfter = 400,
  position = 'bottom-right',
  smooth = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Check initial scroll position
    toggleVisibility();

    // Cleanup
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  // Position styles
  const positions = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-center': 'bottom-8 left-1/2 -translate-x-1/2',
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed ${positions[position]} z-40
        p-3 rounded-full
        bg-primary-500 hover:bg-primary-600
        text-white
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        group
      `}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
    </button>
  );
};

/**
 * ScrollProgress Component
 * Shows scroll progress as a circular indicator
 */
export const ScrollProgress = ({ 
  size = 56,
  strokeWidth = 3,
  position = 'bottom-right' 
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress();

    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const positions = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-center': 'bottom-8 left-1/2 -translate-x-1/2',
  };

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed ${positions[position]} z-40
        transition-all duration-300
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        group
      `}
      style={{ width: size, height: size }}
      aria-label="Scroll to top"
      title={`${Math.round(scrollProgress)}% scrolled`}
    >
      {/* Background circle */}
      <div className="absolute inset-0 rounded-full bg-primary-500/10 dark:bg-primary-500/20" />
      
      {/* SVG Progress Circle */}
      <svg
        className="absolute inset-0 -rotate-90"
        width={size}
        height={size}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-200 dark:text-gray-700"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-primary-500 transition-all duration-300"
        />
      </svg>

      {/* Arrow icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowUp className="w-5 h-5 text-primary-500 transition-transform group-hover:-translate-y-1" />
      </div>
    </button>
  );
};

/**
 * ScrollIndicator Component
 * Linear scroll progress bar at top of page
 */
export const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress();

    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollToTop;