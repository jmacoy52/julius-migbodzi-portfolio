import { useEffect } from "react";
import "../styles/pages/contact.css";
import { initContactForm, handleFormSubmit } from "../script.js";

function ContactPage() {
  useEffect(() => {
    // Initialize the contact form with EmailJS when component mounts
    initContactForm();
  }, []);

  const handleSubmit = async (e) => {
    // Handle form submission with EmailJS
    const result = await handleFormSubmit(e);
    
    // Show feedback message
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Let's Connect</h1>
        <p>Have a safety project in mind? Want to discuss workplace compliance or safety leadership? Get in touch.</p>
      </section>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <aside className="contact-sidebar">
          <h3>Quick Connect</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/julius-migbodzi/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href=" juliusmigb@gmail.com" className="social-link">
              Email
            </a>
            

          </div>
        </aside>
      </div>
    </div>
  );
}

export default ContactPage;
