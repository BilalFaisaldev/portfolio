import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MessageCircle, FileDown, Copy, Check, Send, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address (e.g. name@domain.com).';
      }
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message details.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(personalInfo.email).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double submit

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // If an external form submission endpoint is configured (e.g. Formspree / FormSubmit)
    if (personalInfo.formEndpoint) {
      try {
        const response = await fetch(personalInfo.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus({
            type: 'success',
            message: 'Inquiry successfully transmitted! I will respond to your email promptly.',
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setFieldErrors({});
        } else {
          throw new Error('Service returned an error');
        }
      } catch (err) {
        setStatus({
          type: 'error',
          message: `Unable to dispatch message directly. Please email directly at ${personalInfo.email}`,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Honest mailto behavior: explicitly opens user's email client with pre-filled details
      // No fake success banner is shown.
      const subject = encodeURIComponent(formData.subject.trim() || 'Portfolio Project Inquiry');
      const body = encodeURIComponent(
        `Hi Muhammad Bilal Faisal,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n`
      );
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      window.location.href = mailtoUrl;

      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <section id="contact">
      <div className="contact-section-inner">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span
            style={{
              color: 'var(--accent2)',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              fontSize: '0.8rem',
            }}
          >
            Have an ambitious project or engineering role?
          </span>
          <h2 className="section-title" style={{ marginTop: '0.8rem', marginBottom: '1rem' }}>
            Let's build something <span>extraordinary</span>
          </h2>
          <p style={{ color: '#888', fontSize: '0.95rem' }}>
            Based in {personalInfo.location} • Available for remote worldwide contracts & engineering teams
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="contact-form-card">
          {status.message && (
            <div className={`form-status-alert ${status.type}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(fieldErrors.name)}
                />
                {fieldErrors.name && (
                  <span className="field-error-text" style={{ color: 'var(--accent)', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                    {fieldErrors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Your Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="e.g. john@enterprise.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(fieldErrors.email)}
                />
                {fieldErrors.email && (
                  <span className="field-error-text" style={{ color: 'var(--accent)', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                    {fieldErrors.email}
                  </span>
                )}
              </div>

              <div className="form-group full-width">
                <label htmlFor="contact-subject">Project Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Full-Stack Web Architecture / QA Automation"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="contact-message">Message Details *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Describe your project requirements, timeline, or engineering goals..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(fieldErrors.message)}
                />
                {fieldErrors.message && (
                  <span className="field-error-text" style={{ color: 'var(--accent)', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                    {fieldErrors.message}
                  </span>
                )}
              </div>

              <div className="form-group full-width" style={{ marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  <Send size={16} />
                  <span>
                    {isSubmitting
                      ? 'Processing...'
                      : personalInfo.formEndpoint
                      ? 'Dispatch Message'
                      : 'Send via your email app'}
                  </span>
                </button>
                {!personalInfo.formEndpoint && (
                  <p style={{ fontSize: '0.78rem', color: '#777', marginTop: '0.6rem' }}>
                    Clicking will open your default email app with a pre-filled draft to {personalInfo.email}. Or use the Copy Email button below.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Quick Direct Actions */}
        <div className="contact-quick-actions">
          <a className="tech-pill2" href={`mailto:${personalInfo.email}`}>
            <Mail size={16} />
            Email Directly
          </a>

          <button
            id="copy-email-btn"
            type="button"
            className="tech-pill2"
            onClick={handleCopyEmail}
            style={{ cursor: 'pointer' }}
          >
            {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
            <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
          </button>

          <a
            className="tech-pill2"
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderColor: 'rgba(37, 211, 102, 0.4)', color: '#4ade80' }}
          >
            <MessageCircle size={16} />
            WhatsApp Desk
          </a>

          {personalInfo.instagramUrl && (
            <a
              className="tech-pill2"
              href={personalInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: 'rgba(228, 64, 95, 0.4)', color: '#ff809b' }}
            >
              <Instagram size={16} />
              Instagram
            </a>
          )}

          <a
            className="tech-pill2"
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderColor: 'var(--accent)', color: '#ff9cb3' }}
          >
            <FileDown size={16} />
            Resume CV
          </a>
        </div>
      </div>
    </section>
  );
}
