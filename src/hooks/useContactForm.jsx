import { useState } from 'react';
import { validateContactForm } from '../utils/validators';
import { sanitizeInput } from '../utils/helpers';

/**
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    validateField(name);
  };

  const validateField = (fieldName) => {
    const validation = validateContactForm({ [fieldName]: formData[fieldName] });
    
    if (!validation.isValid && validation.errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: validation.errors[fieldName],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      resetForm();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const setValues = (values) => {
    setFormData(prev => ({
      ...prev,
      ...values,
    }));
  };

  const setFieldValue = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const setFieldError = (name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const isValid = Object.keys(errors).length === 0 && 
                  formData.name && 
                  formData.email && 
                  formData.message;

  const isDirty = Object.values(formData).some(value => value.trim() !== '');

  return {
    formData,
    values: formData,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    isValid,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
    setFieldValue,
    setFieldError,
    setSubmitStatus,
  };
};

/**
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
