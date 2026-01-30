// Custom hook for IntersectionObserver - scroll-triggered animations
import { useEffect, useRef, useState } from 'react';

/**
 * useIntersectionObserver Hook
 * Detects when an element enters the viewport
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around viewport
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {Object} Ref and visibility state
 */

const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        if (isElementIntersecting) {
          setIsIntersecting(true);
          setHasIntersected(true);

          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref: elementRef,
    isIntersecting,
    hasIntersected,
  };
};

/**
 * useOnScreen Hook
 * Simple boolean check if element is on screen
 * 
 * @param {Object} options - Configuration options
 * @returns {Array} [ref, isVisible]
 */
export const useOnScreen = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
};

/**
 * useInViewport Hook
 * Get detailed viewport information
 * 
 * @param {Object} options - Configuration options
 * @returns {Object} Ref and viewport data
 */
export const useInViewport = (options = {}) => {
  const { threshold = 0, rootMargin = '0px' } = options;
  const [inViewport, setInViewport] = useState(false);
  const [entry, setEntry] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
        setEntry(entry);
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return {
    ref,
    inViewport,
    entry,
  };
};

export default useIntersectionObserver;