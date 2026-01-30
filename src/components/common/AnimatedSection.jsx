// Animated section component for scroll-triggered animations
import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedSection Component
 * Triggers animation when element enters viewport
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type (fade-up, fade-down, fade-left, fade-right, fade-in, scale, slide-up)
 * @param {number} props.delay - Animation delay in milliseconds
 * @param {number} props.duration - Animation duration in milliseconds
 * @param {number} props.threshold - Intersection threshold (0-1)
 * @param {boolean} props.once - Whether to animate only once
 * @param {string} props.className - Additional CSS classes
 */

const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If already animated and should only animate once, don't animate again
        if (hasAnimated && once) {
          return;
        }

        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);

  // Animation variants
  const animations = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-down': {
      initial: 'opacity-0 -translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-left': {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
    'fade-in': {
      initial: 'opacity-0',
      animate: 'opacity-100',
    },
    'scale': {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100',
    },
    'slide-up': {
      initial: 'translate-y-full',
      animate: 'translate-y-0',
    },
    'zoom-in': {
      initial: 'opacity-0 scale-50',
      animate: 'opacity-100 scale-100',
    },
    'rotate': {
      initial: 'opacity-0 rotate-12',
      animate: 'opacity-100 rotate-0',
    },
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];

  return (
    <div
      ref={sectionRef}
      className={`
        transition-all
        ${isVisible ? selectedAnimation.animate : selectedAnimation.initial}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * StaggeredList Component
 * Animates list items with staggered delays
 */
export const StaggeredList = ({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  threshold = 0.1,
  className = '',
}) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          threshold={threshold}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};

/**
 * FadeInWhenVisible Component
 * Simple fade-in animation (most common use case)
 */
export const FadeInWhenVisible = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  return (
    <AnimatedSection
      animation="fade-up"
      delay={delay}
      className={className}
    >
      {children}
    </AnimatedSection>
  );
};

/**
 * SlideInFromLeft Component
 * Slides in content from the left
 */
export const SlideInFromLeft = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  return (
    <AnimatedSection
      animation="fade-right"
      delay={delay}
      className={className}
    >
      {children}
    </AnimatedSection>
  );
};

/**
 * SlideInFromRight Component
 * Slides in content from the right
 */
export const SlideInFromRight = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  return (
    <AnimatedSection
      animation="fade-left"
      delay={delay}
      className={className}
    >
      {children}
    </AnimatedSection>
  );
};

/**
 * ScaleIn Component
 * Scales in content with fade
 */
export const ScaleIn = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  return (
    <AnimatedSection
      animation="scale"
      delay={delay}
      className={className}
    >
      {children}
    </AnimatedSection>
  );
};

/**
 * ParallaxSection Component
 * Simple parallax scrolling effect
 */
export const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = '' 
}) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;

      // Only apply parallax when element is in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * RevealOnScroll Component
 * Reveals content with a sliding mask effect
 */
export const RevealOnScroll = ({ 
  children, 
  direction = 'left',
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const directions = {
    left: 'origin-left',
    right: 'origin-right',
    top: 'origin-top',
    bottom: 'origin-bottom',
  };

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Reveal mask */}
      <div
        className={`
          absolute inset-0 bg-primary-500 z-10 transition-transform duration-1000 ease-out
          ${directions[direction]}
          ${isVisible ? 'scale-x-0' : 'scale-x-100'}
        `}
      />
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;