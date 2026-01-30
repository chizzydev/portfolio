// Reusable Modal component for dialogs and overlays
import { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Modal Component
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {Function} props.onClose - Close handler
 * @param {string} props.title - Modal title
 * @param {React.ReactNode} props.children - Modal content
 * @param {string} props.size - Modal size (sm, md, lg, xl, full)
 * @param {boolean} props.closeOnOverlayClick - Whether to close on overlay click
 * @param {boolean} props.closeOnEscape - Whether to close on Escape key
 * @param {boolean} props.showCloseButton - Whether to show close button
 * @param {React.ReactNode} props.footer - Modal footer content
 * @param {string} props.className - Additional CSS classes
 */

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  footer,
  className = '',
}) => {
  // Handle escape key press
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Don't render if not open
  if (!isOpen) return null;

  // Size variants
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    '2xl': 'max-w-6xl',
    full: 'max-w-full mx-4',
  };

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Modal Container */}
      <div
        className={`
          relative w-full ${sizes[size]} 
          bg-light-card dark:bg-dark-card 
          rounded-2xl shadow-2xl 
          max-h-[90vh] overflow-hidden
          animate-fade-up
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-light-border dark:border-dark-border">
            {/* Title */}
            {title && (
              <h2
                id="modal-title"
                className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary"
              >
                {title}
              </h2>
            )}

            {/* Close Button */}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="
                  p-2 rounded-lg
                  text-light-text-tertiary dark:text-dark-text-tertiary
                  hover:text-light-text-primary dark:hover:text-dark-text-primary
                  hover:bg-light-border dark:hover:bg-dark-border
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                "
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="p-6 border-t border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * ModalHeader Component
 * Structured header for modal
 */
export const ModalHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
};

/**
 * ModalBody Component
 * Structured body for modal
 */
export const ModalBody = ({ children, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
};

/**
 * ModalFooter Component
 * Structured footer for modal with action buttons
 */
export const ModalFooter = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center justify-end gap-3 ${className}`}>
      {children}
    </div>
  );
};

/**
 * ConfirmModal Component
 * Pre-configured confirmation modal
 */
export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'primary',
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const variantStyles = {
    primary: 'bg-primary-500 hover:bg-primary-600',
    danger: 'bg-red-500 hover:bg-red-600',
    success: 'bg-green-500 hover:bg-green-600',
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalHeader title={title} />
      <ModalBody>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">
          {message}
        </p>
      </ModalBody>
      <ModalFooter>
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg border border-light-border dark:border-dark-border hover:bg-light-border dark:hover:bg-dark-border transition-colors"
        >
          {cancelText}
        </button>
        <button
          onClick={handleConfirm}
          className={`px-4 py-2 rounded-lg text-white transition-colors ${variantStyles[variant]}`}
        >
          {confirmText}
        </button>
      </ModalFooter>
    </Modal>
  );
};

/**
 * ImageModal Component
 * Modal for displaying images
 */
export const ImageModal = ({ isOpen, onClose, src, alt, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      title={title}
      showCloseButton={true}
    >
      <div className="flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[70vh] rounded-lg object-contain"
        />
      </div>
    </Modal>
  );
};

// Export Modal as default and sub-components as named exports
export default Modal;