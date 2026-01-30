// Reusable Input component for forms
import { forwardRef } from 'react';

/**
 * Input Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Input type (text, email, password, number, tel, url, etc.)
 * @param {string} props.label - Label text
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.error - Error message
 * @param {string} props.helperText - Helper text below input
 * @param {boolean} props.required - Whether field is required
 * @param {boolean} props.disabled - Whether input is disabled
 * @param {boolean} props.fullWidth - Whether input should take full width
 * @param {React.ReactNode} props.leftIcon - Icon to display on the left
 * @param {React.ReactNode} props.rightIcon - Icon to display on the right
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.inputClassName - Additional CSS classes for input element
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 */

const Input = forwardRef(({
  type = 'text',
  label,
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  leftIcon,
  rightIcon,
  className = '',
  inputClassName = '',
  value,
  onChange,
  ...props
}, ref) => {
  // Container styles
  const containerStyles = fullWidth ? 'w-full' : '';

  // Input base styles
  const baseInputStyles = 'input-base w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2';

  // Input state styles
  const stateStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-light-border dark:border-dark-border focus:border-primary-500 focus:ring-primary-500';

  // Background styles
  const bgStyles = 'bg-light-bg dark:bg-dark-bg';

  // Text styles
  const textStyles = 'text-light-text-primary dark:text-dark-text-primary placeholder:text-light-text-tertiary dark:placeholder:text-dark-text-tertiary';

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  // Icon padding adjustments
  const iconPadding = leftIcon && rightIcon
    ? 'pl-12 pr-12'
    : leftIcon
    ? 'pl-12'
    : rightIcon
    ? 'pr-12'
    : '';

  // Combine input styles
  const inputStyles = `
    ${baseInputStyles}
    ${stateStyles}
    ${bgStyles}
    ${textStyles}
    ${disabledStyles}
    ${iconPadding}
    ${inputClassName}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={`${containerStyles} ${className}`}>
      {/* Label */}
      {label && (
        <label className="block mb-2 text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text-tertiary dark:text-dark-text-tertiary">
            {leftIcon}
          </div>
        )}

        {/* Input Element */}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={onChange}
          className={inputStyles}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined
          }
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-light-text-tertiary dark:text-dark-text-tertiary">
            {rightIcon}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p
          id={`${props.id}-error`}
          className="mt-2 text-sm text-red-500 flex items-center gap-1"
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}

      {/* Helper Text */}
      {!error && helperText && (
        <p
          id={`${props.id}-helper`}
          className="mt-2 text-sm text-light-text-tertiary dark:text-dark-text-tertiary"
        >
          {helperText}
        </p>
      )}
    </div>
  );
});

// Display name for debugging
Input.displayName = 'Input';

/**
 * SearchInput Component
 * Specialized input for search functionality
 */
export const SearchInput = forwardRef(({
  placeholder = 'Search...',
  onClear,
  value,
  ...props
}, ref) => {
  return (
    <Input
      ref={ref}
      type="text"
      placeholder={placeholder}
      value={value}
      leftIcon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      }
      rightIcon={
        value && onClear ? (
          <button
            type="button"
            onClick={onClear}
            className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : null
      }
      {...props}
    />
  );
});

SearchInput.displayName = 'SearchInput';

/**
 * PasswordInput Component
 * Input with show/hide password toggle
 */
export const PasswordInput = forwardRef(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input
      ref={ref}
      type={showPassword ? 'text' : 'password'}
      rightIcon={
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      }
      {...props}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';

// Fix React import for PasswordInput
import React from 'react';

// Export Input as default and specialized inputs as named exports
export default Input;