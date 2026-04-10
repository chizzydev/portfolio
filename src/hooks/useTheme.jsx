// Custom hook for managing theme (light/dark mode)
import { useState, useEffect } from 'react';
import { THEME_MODES, STORAGE_KEYS } from '../utils/constants';
import { getSystemTheme } from '../utils/helpers';

const useTheme = () => {
  const [theme, setThemeState] = useState(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    
    if (savedTheme && (savedTheme === THEME_MODES.LIGHT || savedTheme === THEME_MODES.DARK)) {
      return savedTheme;
    }
    return getSystemTheme();
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(THEME_MODES.LIGHT, THEME_MODES.DARK);
    
    if (theme === THEME_MODES.LIGHT) {
      root.classList.add('light');
    }
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === THEME_MODES.LIGHT ? '#ffffff' : '#0a0a0a'
      );
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      
      if (!savedTheme) {
        setThemeState(e.matches ? THEME_MODES.LIGHT : THEME_MODES.DARK);
      }
    };
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Set theme function
  const setTheme = (newTheme) => {
    if (newTheme === THEME_MODES.DARK || newTheme === THEME_MODES.LIGHT) {
      setThemeState(newTheme);
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    setThemeState(prevTheme => 
      prevTheme === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT
    );
  };

  // Helper boolean
  const isLight = theme === THEME_MODES.LIGHT;

  return {
    theme,
    setTheme,
    toggleTheme,
    isLight,
  };
};

export default useTheme;