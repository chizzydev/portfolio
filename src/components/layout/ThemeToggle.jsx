// Theme toggle component for switching between light and dark modes
import { Sun, Moon } from 'lucide-react';

/**
 * ThemeToggle Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.theme - Current theme ('light' or 'dark')
 * @param {Function} props.toggleTheme - Function to toggle theme
 * @param {string} props.variant - Button variant (icon, button)
 * @param {string} props.className - Additional CSS classes
 */

const ThemeToggle = ({ 
  theme, 
  toggleTheme,
  variant = 'icon',
  className = '' 
}) => {
  const isDark = theme === 'dark';

  // Icon variant - just the icon button
  if (variant === 'icon') {
    return (
      <button
        onClick={toggleTheme}
        className={`
          relative p-2.5 rounded-lg
          text-light-text-primary dark:text-dark-text-primary
          hover:bg-light-border dark:hover:bg-dark-border
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-primary-500
          ${className}
        `}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {/* Sun icon (shows in dark mode) */}
        <Sun 
          className={`
            w-5 h-5 absolute inset-0 m-auto
            transition-all duration-300
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}
          `}
        />
        
        {/* Moon icon (shows in light mode) */}
        <Moon 
          className={`
            w-5 h-5 absolute inset-0 m-auto
            transition-all duration-300
            ${!isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}
          `}
        />
      </button>
    );
  }

  // Button variant - with text label
  if (variant === 'button') {
    return (
      <button
        onClick={toggleTheme}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg
          text-light-text-primary dark:text-dark-text-primary
          bg-light-card dark:bg-dark-card
          border border-light-border dark:border-dark-border
          hover:bg-light-border dark:hover:bg-dark-border
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-primary-500
          ${className}
        `}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? (
          <>
            <Sun className="w-5 h-5" />
            <span className="text-sm font-medium">Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5" />
            <span className="text-sm font-medium">Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  return null;
};

/**
 * ThemeToggleSwitch Component
 * Toggle switch style theme switcher
 */
export const ThemeToggleSwitch = ({ 
  theme, 
  toggleTheme,
  className = '' 
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center h-8 w-16 rounded-full
        transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${isDark ? 'bg-primary-600' : 'bg-gray-300'}
        ${className}
      `}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Switch toggle */}
      <span
        className={`
          inline-flex items-center justify-center
          h-6 w-6 rounded-full bg-white shadow-md
          transform transition-all duration-300 ease-in-out
          ${isDark ? 'translate-x-9' : 'translate-x-1'}
        `}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-primary-600" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
};

/**
 * ThemeToggleDropdown Component
 * Dropdown with theme options
 */
export const ThemeToggleDropdown = ({ 
  theme, 
  toggleTheme,
  className = '' 
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`relative group ${className}`}>
      <button
        className="
          flex items-center gap-2 px-4 py-2 rounded-lg
          text-light-text-primary dark:text-dark-text-primary
          hover:bg-light-border dark:hover:bg-dark-border
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-primary-500
        "
      >
        {isDark ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
        <span className="text-sm font-medium hidden md:inline">
          {isDark ? 'Dark' : 'Light'}
        </span>
      </button>

      {/* Dropdown menu */}
      <div className="
        absolute right-0 mt-2 w-40 rounded-lg shadow-lg
        bg-light-card dark:bg-dark-card
        border border-light-border dark:border-dark-border
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-300
        z-50
      ">
        <div className="py-2">
          <button
            onClick={() => theme !== 'light' && toggleTheme()}
            className={`
              w-full px-4 py-2 text-left text-sm flex items-center gap-3
              hover:bg-light-border dark:hover:bg-dark-border
              transition-colors
              ${theme === 'light' ? 'text-primary-500 font-medium' : 'text-light-text-secondary dark:text-dark-text-secondary'}
            `}
          >
            <Sun className="w-4 h-4" />
            Light Mode
          </button>
          <button
            onClick={() => theme !== 'dark' && toggleTheme()}
            className={`
              w-full px-4 py-2 text-left text-sm flex items-center gap-3
              hover:bg-light-border dark:hover:bg-dark-border
              transition-colors
              ${theme === 'dark' ? 'text-primary-500 font-medium' : 'text-light-text-secondary dark:text-dark-text-secondary'}
            `}
          >
            <Moon className="w-4 h-4" />
            Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * AnimatedThemeToggle Component
 * Theme toggle with smooth animated transition
 */
export const AnimatedThemeToggle = ({ 
  theme, 
  toggleTheme,
  className = '' 
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-3 rounded-full overflow-hidden
        bg-gradient-to-br ${isDark ? 'from-slate-800 to-slate-900' : 'from-sky-400 to-blue-500'}
        transition-all duration-500 ease-in-out
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Stars (visible in dark mode) */}
      {isDark && (
        <>
          <span className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse" />
          <span className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-pulse delay-100" />
          <span className="absolute bottom-3 left-4 w-1 h-1 bg-white rounded-full animate-pulse delay-200" />
        </>
      )}

      {/* Sun/Moon icon */}
      <div className="relative z-10">
        {isDark ? (
          <Moon className="w-5 h-5 text-yellow-200" />
        ) : (
          <Sun className="w-5 h-5 text-white animate-spin-slow" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;