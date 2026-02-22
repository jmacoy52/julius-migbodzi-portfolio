/**
 * EmailJS Configuration and Form Handling
 * This script enables sending messages directly from the contact form to Gmail
 */

// Debug: Log configuration to console
console.log('EmailJS script loaded');

const EMAILJS_CONFIG = {
  USER_ID: 'I_hAfC2z8-tBV9M4q',
  SERVICE_ID: 'service_bsc69mk',
  TEMPLATE_ID: 'template_tumupwo'
};

console.log('EmailJS Config:', EMAILJS_CONFIG);

/**
 * Initialize EmailJS
 */
export const initEmailJS = () => {
  if (window.emailjs) {
    window.emailjs.init(EMAILJS_CONFIG.USER_ID);
    console.log('EmailJS initialized successfully');
  } else {
    console.error('EmailJS SDK not loaded');
  }
};

/**
 * Send email using EmailJS
 */
export const sendEmail = async (formData) => {
  try {
    if (!window.emailjs) {
      throw new Error('EmailJS not initialized');
    }

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      to_email: 'juliusmigb@gmail.com'
    };

    console.log('Sending email with params:', emailParams);
    console.log('Using Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('Using Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);

    const response = await window.emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      emailParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};

/**
 * Handle form submission
 */
export const handleFormSubmit = async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
  }

  const formData = {
    name: form.name?.value || '',
    email: form.email?.value || '',
    company: form.company?.value || '',
    subject: form.subject?.value || '',
    message: form.message?.value || ''
  };

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
    return { success: false, error: 'Please fill in all required fields' };
  }

  try {
    const result = await sendEmail(formData);
    
    if (result.success) {
      form.reset();
      return { success: true, message: 'Thank you for reaching out! I\'ll get back to you soon.' };
    } else {
      return { success: false, error: 'Failed to send message. Please try again or email directly.' };
    }
  } catch (error) {
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  }
};

/**
 * Load EmailJS SDK dynamically
 */
export const loadEmailJSSDK = () => {
  return new Promise((resolve, reject) => {
    if (window.emailjs) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      console.log('EmailJS SDK loaded');
      resolve();
    };
    
    script.onerror = () => {
      console.error('Failed to load EmailJS SDK');
      reject(new Error('Failed to load EmailJS SDK'));
    };
    
    document.head.appendChild(script);
  });
};

/**
 * Initialize the contact form with EmailJS
 */
export const initContactForm = async () => {
  try {
    await loadEmailJSSDK();
    initEmailJS();
    
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        const result = await handleFormSubmit(e);
        
        if (result.success) {
          alert(result.message);
        } else {
          alert(result.error);
        }
      });
      console.log('Contact form initialized with EmailJS');
    }
  } catch (error) {
    console.error('Failed to initialize contact form:', error);
  }
};

export default {
  initEmailJS,
  sendEmail,
  handleFormSubmit,
  loadEmailJSSDK,
  initContactForm
};
