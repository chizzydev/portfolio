// Custom hook for contact form management
import { useState } from 'react';
import { validateContactForm } from '../utils/validators';
import { sanitizeInput } from '../utils/helpers';

/**
 * useContactForm Hook
 * Manages contact form state, validation, and submission
 * 
 * @param {Function} onSubmit - Callback function for form submission
 * @param {Object} initialValues - Initial form values
 * @returns {Object} Form state and handlers
 */

const useContactForm = (onSubmit, initialValues = {}) => {
  const [formData, setFormData] = useState({
    name: initialValues.name || '',
    email: initialValues.email || '',
    subject: initialValues.subject || '',
    message: initialValues.message || '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle input blur (mark as touched)
  const handleBlur = (e) => {
    const { name } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    // Validate this field on blur
    validateField(name);
  };

  // Validate single field
  const validateField = (fieldName) => {
    const validation = validateContactForm({ [fieldName]: formData[fieldName] });
    
    if (!validation.isValid && validation.errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: validation.errors[fieldName],
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // Validate entire form
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Clear errors
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Call the onSubmit callback
      await onSubmit(formData);
      
      // Success
      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      // Error
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setTouched({});
  };

  // Set form values
  const setValues = (values) => {
    setFormData(prev => ({
      ...prev,
      ...values,
    }));
  };

  // Set single field value
  const setFieldValue = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Set field error
  const setFieldError = (name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  // Check if form is valid
  const isValid = Object.keys(errors).length === 0 && 
                  formData.name && 
                  formData.email && 
                  formData.message;

  // Check if form is dirty (has unsaved changes)
  const isDirty = Object.values(formData).some(value => value.trim() !== '');

  return {
    // Form data
    formData,
    values: formData,
    
    // Errors
    errors,
    touched,
    
    // Status
    isSubmitting,
    submitStatus,
    isValid,
    isDirty,
    
    // Handlers
    handleChange,
    handleBlur,
    handleSubmit,
    
    // Utilities
    resetForm,
    setValues,
    setFieldValue,
    setFieldError,
    setSubmitStatus,
  };
};

/**
 * useFormField Hook
 * Hook for individual form field management
 * 
 * @param {string} initialValue - Initial field value
 * @param {Function} validate - Validation function
 * @returns {Object} Field state and handlers
 */
export const useFormField = (initialValue = '', validate) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const newValue = typeof e === 'string' ? e : e.target.value;
    setValue(sanitizeInput(newValue));
    
    if (error) {
      setError('');
    }
  };

  const handleBlur = () => {
    setTouched(true);
    
    if (validate) {
      const validationError = validate(value);
      setError(validationError || '');
    }
  };

  const reset = () => {
    setValue(initialValue);
    setError('');
    setTouched(false);
  };

  return {
    value,
    error,
    touched,
    handleChange,
    handleBlur,
    reset,
    setValue,
    setError,
  };
};

export default useContactForm;