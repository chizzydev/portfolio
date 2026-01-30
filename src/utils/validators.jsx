// Form validation functions for the portfolio application

/**
 * Validates if a string is not empty
 * @param {string} value - Value to validate
 * @returns {boolean} True if valid
 */
export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined && value !== '';
};

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum length required
 * @returns {boolean} True if valid
 */
export const hasMinLength = (value, minLength) => {
  return value.trim().length >= minLength;
};

/**
 * Validates maximum length
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum length allowed
 * @returns {boolean} True if valid
 */
export const hasMaxLength = (value, maxLength) => {
  return value.trim().length <= maxLength;
};

/**
 * Validates if value is within a length range
 * @param {string} value - Value to validate
 * @param {number} min - Minimum length
 * @param {number} max - Maximum length
 * @returns {boolean} True if valid
 */
export const isWithinRange = (value, min, max) => {
  const length = value.trim().length;
  return length >= min && length <= max;
};

/**
 * Validates phone number format (international or local)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone number
 */
export const isValidPhone = (phone) => {
  // Matches international format (+234...) or local format (0...)
  const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{7,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validates URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

/**
 * Validates if string contains only letters
 * @param {string} value - Value to validate
 * @returns {boolean} True if only letters
 */
export const isAlpha = (value) => {
  const alphaRegex = /^[A-Za-z\s]+$/;
  return alphaRegex.test(value);
};

/**
 * Validates if string contains only alphanumeric characters
 * @param {string} value - Value to validate
 * @returns {boolean} True if alphanumeric
 */
export const isAlphanumeric = (value) => {
  const alphanumericRegex = /^[A-Za-z0-9\s]+$/;
  return alphanumericRegex.test(value);
};

/**
 * Validates if value is a number
 * @param {any} value - Value to validate
 * @returns {boolean} True if number
 */
export const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/**
 * Validates if string matches a pattern
 * @param {string} value - Value to validate
 * @param {RegExp} pattern - Regular expression pattern
 * @returns {boolean} True if matches pattern
 */
export const matchesPattern = (value, pattern) => {
  return pattern.test(value);
};

/**
 * Validates contact form data
 * @param {Object} formData - Form data object
 * @returns {Object} Validation result with errors
 */
export const validateContactForm = (formData) => {
  const errors = {};
  
  // Validate name
  if (!isRequired(formData.name)) {
    errors.name = 'Name is required';
  } else if (!hasMinLength(formData.name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  } else if (!hasMaxLength(formData.name, 50)) {
    errors.name = 'Name must be less than 50 characters';
  }
  
  // Validate email
  if (!isRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate subject (optional but if provided, must meet requirements)
  if (formData.subject && !hasMinLength(formData.subject, 3)) {
    errors.subject = 'Subject must be at least 3 characters';
  } else if (formData.subject && !hasMaxLength(formData.subject, 100)) {
    errors.subject = 'Subject must be less than 100 characters';
  }
  
  // Validate message
  if (!isRequired(formData.message)) {
    errors.message = 'Message is required';
  } else if (!hasMinLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  } else if (!hasMaxLength(formData.message, 1000)) {
    errors.message = 'Message must be less than 1000 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Validates a single field
 * @param {string} fieldName - Name of the field
 * @param {string} value - Value to validate
 * @param {Object} rules - Validation rules
 * @returns {string|null} Error message or null if valid
 */
export const validateField = (fieldName, value, rules = {}) => {
  // Check required
  if (rules.required && !isRequired(value)) {
    return `${fieldName} is required`;
  }
  
  // If field is optional and empty, skip other validations
  if (!rules.required && !value) {
    return null;
  }
  
  // Check min length
  if (rules.minLength && !hasMinLength(value, rules.minLength)) {
    return `${fieldName} must be at least ${rules.minLength} characters`;
  }
  
  // Check max length
  if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
    return `${fieldName} must be no more than ${rules.maxLength} characters`;
  }
  
  // Check email format
  if (rules.email && !isValidEmail(value)) {
    return 'Please enter a valid email address';
  }
  
  // Check phone format
  if (rules.phone && !isValidPhone(value)) {
    return 'Please enter a valid phone number';
  }
  
  // Check URL format
  if (rules.url && !isValidUrl(value)) {
    return 'Please enter a valid URL';
  }
  
  // Check alpha (letters only)
  if (rules.alpha && !isAlpha(value)) {
    return `${fieldName} must contain only letters`;
  }
  
  // Check alphanumeric
  if (rules.alphanumeric && !isAlphanumeric(value)) {
    return `${fieldName} must contain only letters and numbers`;
  }
  
  // Check numeric
  if (rules.numeric && !isNumeric(value)) {
    return `${fieldName} must be a number`;
  }
  
  // Check custom pattern
  if (rules.pattern && !matchesPattern(value, rules.pattern)) {
    return rules.patternMessage || `${fieldName} format is invalid`;
  }
  
  return null;
};

/**
 * Sanitizes and validates form input
 * @param {string} value - Input value
 * @returns {string} Sanitized value
 */
export const sanitizeFormInput = (value) => {
  // Remove leading/trailing whitespace
  let sanitized = value.trim();
  
  // Remove multiple consecutive spaces
  sanitized = sanitized.replace(/\s+/g, ' ');
  
  // Remove potentially dangerous characters for XSS prevention
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  return sanitized;
};

/**
 * Real-time validation helper for forms
 * @param {Object} formData - Current form data
 * @param {Object} validationRules - Rules for each field
 * @returns {Object} Validation errors object
 */
export const validateForm = (formData, validationRules) => {
  const errors = {};
  
  Object.keys(validationRules).forEach(fieldName => {
    const value = formData[fieldName] || '';
    const rules = validationRules[fieldName];
    const error = validateField(fieldName, value, rules);
    
    if (error) {
      errors[fieldName] = error;
    }
  });
  
  return errors;
};

/**
 * Checks if form has any errors
 * @param {Object} errors - Errors object
 * @returns {boolean} True if no errors
 */
export const isFormValid = (errors) => {
  return Object.keys(errors).length === 0;
};

/**
 * Gets first error message from errors object
 * @param {Object} errors - Errors object
 * @returns {string|null} First error message or null
 */
export const getFirstError = (errors) => {
  const keys = Object.keys(errors);
  return keys.length > 0 ? errors[keys[0]] : null;
};

/**
 * Validates file upload
 * @param {File} file - File to validate
 * @param {Object} options - Validation options
 * @returns {Object} Validation result
 */
export const validateFile = (file, options = {}) => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  } = options;
  
  const errors = [];
  
  // Check file size
  if (file.size > maxSize) {
    errors.push(`File size must be less than ${maxSize / 1024 / 1024}MB`);
  }
  
  // Check file type
  if (!allowedTypes.includes(file.type)) {
    errors.push(`File type must be one of: ${allowedTypes.join(', ')}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};