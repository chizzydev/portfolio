// Contact section - Contact form and information
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import AnimatedSection from '../common/AnimatedSection';
import { contactInfo, footerSocialLinks } from '../../data/social';
import { PERSONAL_INFO } from '../../utils/constants';
import { validateContactForm } from '../../utils/validators';
import { sanitizeInput } from '../../utils/helpers';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [copiedId, setCopiedId] = useState(null);

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

  const handleCopy = async (contact, e) => {
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(contact.value);
      setCopiedId(contact.id);
      
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Portfolio Contact Form',
          message: formData.message,
          to_email: PERSONAL_INFO.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section className="section-padding bg-light-card dark:bg-dark-card overflow-hidden">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title="Get In Touch"
            subtitle="Have a project in mind? Let's work together!"
            align="center"
            underline
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon;
                  const isCopied = copiedId === contact.id;
                  
                  return (
                    <Card
                      key={contact.id}
                      variant="default"
                      hoverable
                      className="group cursor-pointer"
                      onClick={() => {
                        if (contact.href) {
                          window.location.href = contact.href;
                        }
                      }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-light-text-tertiary dark:text-dark-text-tertiary">
                            {contact.name}
                          </p>
                          <p className="text-sm sm:text-base text-light-text-primary dark:text-dark-text-primary font-medium truncate group-hover:text-primary-500 transition-colors">
                            {contact.display}
                          </p>
                        </div>

                        {contact.copyable && (
                          <button
                            onClick={(e) => handleCopy(contact, e)}
                            className={`
                              flex-shrink-0 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs font-medium transition-all duration-200
                              ${isCopied 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                                : 'text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950'
                              }
                            `}
                            aria-label="Copy to clipboard"
                          >
                            {isCopied ? (
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="hidden sm:inline">Copied!</span>
                              </span>
                            ) : (
                              'Copy'
                            )}
                          </button>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-3 sm:mb-4">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {footerSocialLinks.map((social) => {
                    const Icon = social.icon;
                    
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 sm:p-4 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500 hover:border-primary-500 hover:scale-110 transition-all duration-300"
                        aria-label={social.name}
                        title={social.name}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <Card variant="bordered" className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 border-2">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-lg sm:text-xl">
                        ✓
                      </div>
                      <span className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-ping" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-light-text-primary dark:text-dark-text-primary mb-1">
                      Currently Available
                    </h4>
                    <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {PERSONAL_INFO.availability}
                    </p>
                  </div>
                </div>
              </Card>

              <div className="text-xs sm:text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                <p>📧 I typically respond within 24 hours</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={300}>
            <Card variant="default" className="h-full">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <Input
                  id="name"
                  name="name"
                  label="Your Name"
                  type="text"
                  placeholder="Chizaram Chukwuka"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                  disabled={status === 'loading'}
                />

                <Input
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="chizzy@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  disabled={status === 'loading'}
                />

                <Input
                  id="subject"
                  name="subject"
                  label="Subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  disabled={status === 'loading'}
                />

                <Textarea
                  id="message"
                  name="message"
                  label="Message"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={5}
                  maxLength={1000}
                  showCount
                  disabled={status === 'loading'}
                />

                {status === 'success' && (
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Message sent successfully!</p>
                      <p className="text-xs sm:text-sm mt-1">I'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Something went wrong!</p>
                      <p className="text-xs sm:text-sm mt-1">Please try again or contact me directly via email.</p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={status === 'loading'}
                  disabled={status === 'loading' || status === 'success'}
                  rightIcon={<Send className="w-4 h-4 sm:w-5 sm:h-5" />}
                  className="mt-6"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-center text-light-text-tertiary dark:text-dark-text-tertiary px-2">
                  Your information is safe and will never be shared with third parties.
                </p>
              </form>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary mb-4 sm:mb-6 px-4">
              Prefer a different method? Reach out via:
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 px-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Email Me</span>
              </a>
              
              {contactInfo.find(c => c.id === 'phone') && (
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Me</span>
                </a>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;