import { useState, useEffect } from 'react';
import { throttle } from '../utils/helpers';

/**
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
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + offset;
      let currentSection = sectionIds[0] || '';

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    }, throttleMs);

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset, throttleMs]);

  return activeSection;
};

/**
 * 
 * @param {Array<string>} sectionIds - Array of section IDs to track
 * @param {Object} options - Configuration options
 * @returns {Object} Scroll spy state
 */
export const useScrollSpyAdvanced = (sectionIds, options = {}) => {
  const {
    rootMargin = '0px',
    threshold = 0.5,
  } = options;

  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const [sectionsInView, setSectionsInView] = useState([]);

  useEffect(() => {
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

      setSectionsInView(Array.from(inView));

      if (inView.size > 0) {
        const firstInView = sectionIds.find(id => inView.has(id));
        if (firstInView) {
          setActiveSection(firstInView);
        }
      }
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

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

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    }, throttleMs);

    window.addEventListener('scroll', handleScroll);
    
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
