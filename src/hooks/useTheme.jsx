// Custom hook for managing theme (dark/light mode)
import { useState, useEffect } from 'react';
import { THEME_MODES, STORAGE_KEYS } from '../utils/constants';
import { getSystemTheme } from '../utils/helpers';

/**
 * useTheme Hook
 * Manages dark/light theme with localStorage persistence and system preference detection
 * 
 * @returns {Object} Theme state and controls
 * - theme: Current theme ('light' or 'dark')
 * - setTheme: Function to set theme
 * - toggleTheme: Function to toggle between themes
 * - isDark: Boolean indicating if dark mode is active
 */

const useTheme = () => {
  // Initialize theme from localStorage or system preference
  const [theme, setThemeState] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    
    if (savedTheme && (savedTheme === THEME_MODES.LIGHT || savedTheme === THEME_MODES.DARK)) {
      return savedTheme;
    }
    
    // Fall back to system preference
    return getSystemTheme();
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove(THEME_MODES.LIGHT, THEME_MODES.DARK);
    
    // Add current theme class
    if (theme === THEME_MODES.DARK) {
      root.classList.add('dark');
    }
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === THEME_MODES.DARK ? '#0a0a0a' : '#ffffff'
      );
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      
      if (!savedTheme) {
        setThemeState(e.matches ? THEME_MODES.DARK : THEME_MODES.LIGHT);
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
    if (newTheme === THEME_MODES.LIGHT || newTheme === THEME_MODES.DARK) {
      setThemeState(newTheme);
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    setThemeState(prevTheme => 
      prevTheme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK
    );
  };

  // Helper boolean
  const isDark = theme === THEME_MODES.DARK;

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark,
  };
};

export default useTheme;