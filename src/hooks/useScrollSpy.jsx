// Custom hook for scroll spy functionality
import { useState, useEffect } from 'react';
import { throttle } from '../utils/helpers';

/**
 * useScrollSpy Hook
 * Detects which section is currently in viewport and returns active section ID
 * Useful for navbar active link highlighting
 * 
 * @param {Array<string>} sectionIds - Array of section IDs to track
 * @param {Object} options - Configuration options
 * @param {number} options.offset - Offset from top (e.g., navbar height)
 * @param {number} options.throttleMs - Throttle scroll event (ms)
 * @returns {string} Active section ID
 */

const useScrollSpy = (sectionIds, options = {}) => {
  const {
    offset = 100,
    throttleMs = 100,
  } = options;

  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    // Function to determine which section is active
    const handleScroll = throttle(() => {
      // Get current scroll position
      const scrollPosition = window.scrollY + offset;

      // Find the section that's currently in view
      let currentSection = sectionIds[0] || '';

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          // Check if scroll position is within this section
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Update active section if it changed
      setActiveSection(currentSection);
    }, throttleMs);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset, throttleMs]);

  return activeSection;
};

/**
 * useScrollSpyAdvanced Hook
 * Advanced scroll spy with more granular control
 * 
 * @param {Array<string>} sectionIds - Array of section IDs to track
 * @param {Object} options - Configuration options
 * @returns {Object} Scroll spy state
 */
export const useScrollSpyAdvanced = (sectionIds, options = {}) => {
  const {
    offset = 100,
    throttleMs = 100,
    rootMargin = '0px',
    threshold = 0.5,
  } = options;

  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const [sectionsInView, setSectionsInView] = useState([]);

  useEffect(() => {
    // IntersectionObserver approach (more modern)
    const observerOptions = {
      rootMargin,
      threshold,
    };

    const observers = [];
    const inView = new Set();

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inView.add(entry.target.id);
        } else {
          inView.delete(entry.target.id);
        }
      });

      // Update sections in view
      setSectionsInView(Array.from(inView));

      // Set the first visible section as active
      if (inView.size > 0) {
        const firstInView = sectionIds.find(id => inView.has(id));
        if (firstInView) {
          setActiveSection(firstInView);
        }
      }
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    // Observe all sections
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, rootMargin, threshold]);

  return {
    activeSection,
    sectionsInView,
    isInView: (sectionId) => sectionsInView.includes(sectionId),
  };
};

/**
 * useScrollPosition Hook
 * Track current scroll position
 * 
 * @param {number} throttleMs - Throttle scroll event (ms)
 * @returns {Object} Scroll position data
 */
export const useScrollPosition = (throttleMs = 100) => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
      });

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    }, throttleMs);

    window.addEventListener('scroll', handleScroll);
    
    // Get initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, throttleMs]);

  return {
    scrollPosition,
    scrollDirection,
    isScrolled: scrollPosition.y > 0,
    isScrolledPast: (threshold) => scrollPosition.y > threshold,
  };
};

export default useScrollSpy;