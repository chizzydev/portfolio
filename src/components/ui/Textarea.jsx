// Reusable Textarea component for forms
import { forwardRef } from 'react';

/**
 * Textarea Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label text
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.error - Error message
 * @param {string} props.helperText - Helper text below textarea
 * @param {boolean} props.required - Whether field is required
 * @param {boolean} props.disabled - Whether textarea is disabled
 * @param {boolean} props.fullWidth - Whether textarea should take full width
 * @param {number} props.rows - Number of rows (height)
 * @param {number} props.maxLength - Maximum character length
 * @param {boolean} props.showCount - Whether to show character count
 * @param {boolean} props.resize - Whether textarea is resizable (none, vertical, horizontal, both)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.textareaClassName - Additional CSS classes for textarea element
 * @param {string} props.value - Textarea value
 * @param {Function} props.onChange - Change handler
 */

const Textarea = forwardRef(({
  label,
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  rows = 4,
  maxLength,
  showCount = false,
  resize = 'vertical',
  className = '',
  textareaClassName = '',
  value = '',
  onChange,
  ...props
}, ref) => {
  // Container styles
  const containerStyles = fullWidth ? 'w-full' : '';

  // Textarea base styles
  const baseTextareaStyles = 'input-base w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2';

  // Textarea state styles
  const stateStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-light-border dark:border-dark-border focus:border-primary-500 focus:ring-primary-500';

  // Background styles
  const bgStyles = 'bg-light-bg dark:bg-dark-bg';

  // Text styles
  const textStyles = 'text-light-text-primary dark:text-dark-text-primary placeholder:text-light-text-tertiary dark:placeholder:text-dark-text-tertiary';

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  // Resize styles
  const resizeStyles = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  // Combine textarea styles
  const textareaStyles = `
    ${baseTextareaStyles}
    ${stateStyles}
    ${bgStyles}
    ${textStyles}
    ${disabledStyles}
    ${resizeStyles[resize]}
    ${textareaClassName}
  `.trim().replace(/\s+/g, ' ');

  // Character count
  const currentLength = value.length;
  const isNearLimit = maxLength && currentLength >= maxLength * 0.9;
  const isAtLimit = maxLength && currentLength >= maxLength;

  return (
    <div className={`${containerStyles} ${className}`}>
      {/* Label */}
      {label && (
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {/* Character Count (in label area) */}
          {showCount && maxLength && (
            <span
              className={`text-xs font-medium ${
                isAtLimit
                  ? 'text-red-500'
                  : isNearLimit
                  ? 'text-yellow-500'
                  : 'text-light-text-tertiary dark:text-dark-text-tertiary'
              }`}
            >
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      )}

      {/* Textarea Element */}
      <textarea
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        className={textareaStyles}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={
          error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined
        }
        {...props}
      />

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

      {/* Character Count (below textarea, if not in label) */}
      {!error && !helperText && showCount && maxLength && !label && (
        <div className="mt-2 flex justify-end">
          <span
            className={`text-xs font-medium ${
              isAtLimit
                ? 'text-red-500'
                : isNearLimit
                ? 'text-yellow-500'
                : 'text-light-text-tertiary dark:text-dark-text-tertiary'
            }`}
          >
            {currentLength}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
});

// Display name for debugging
Textarea.displayName = 'Textarea';

/**
 * AutoResizeTextarea Component
 * Textarea that automatically grows with content
 */
export const AutoResizeTextarea = forwardRef(({
  value = '',
  onChange,
  minRows = 3,
  maxRows = 10,
  ...props
}, ref) => {
  const handleChange = (e) => {
    // Auto-resize logic
    e.target.style.height = 'auto';
    const scrollHeight = e.target.scrollHeight;
    const lineHeight = 24; // approximate line height in px
    const minHeight = minRows * lineHeight;
    const maxHeight = maxRows * lineHeight;
    
    const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
    e.target.style.height = `${newHeight}px`;

    if (onChange) onChange(e);
  };

  return (
    <Textarea
      ref={ref}
      value={value}
      onChange={handleChange}
      resize="none"
      rows={minRows}
      {...props}
    />
  );
});

AutoResizeTextarea.displayName = 'AutoResizeTextarea';

/**
 * MessageTextarea Component
 * Specialized textarea for messages/comments
 */
export const MessageTextarea = forwardRef(({
  placeholder = 'Write your message...',
  maxLength = 1000,
  ...props
}, ref) => {
  return (
    <Textarea
      ref={ref}
      placeholder={placeholder}
      maxLength={maxLength}
      showCount
      rows={5}
      resize="vertical"
      {...props}
    />
  );
});

MessageTextarea.displayName = 'MessageTextarea';

// Export Textarea as default and specialized textareas as named exports
export default Textarea;