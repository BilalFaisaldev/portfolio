import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MessageCircle, FileDown, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email, and message.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus({
          type: 'success',
          message: data.message || 'Inquiry successfully transmitted! I will respond promptly.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('API dispatch failed');
      }
    } catch (err) {
      // Graceful fallback for static GitHub Pages or offline backend
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');

      setStatus({
        type: 'success',
        message: 'Your email client has been opened to send this inquiry directly to Muhammad Bilal Faisal!',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
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
            Based in Karachi, Pakistan • Available for remote worldwide contracts & engineering teams
          </p>
        </div>

        {/* Interactive Contact Form */}
        <div className="contact-form-card">
          {status.message && (
            <div className={`form-status-alert ${status.type}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@enterprise.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Project Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Next.js Architecture / Full-Stack Contract"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label>Message Details</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Describe your project requirements, timeline, or engineering goals..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width" style={{ marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
                </button>
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
            type="button"
            className="tech-pill2"
            onClick={handleCopyEmail}
            style={{ cursor: 'pointer' }}
          >
            {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
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

          <a
            className="tech-pill2"
            href={personalInfo.resumeUrl}
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
