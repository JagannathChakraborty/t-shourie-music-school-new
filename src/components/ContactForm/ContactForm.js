import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import './ContactForm.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5106';
const WHATSAPP_URL = 'https://wa.me/919937023166';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.message && formData.message.length < 20) {
      setStatus({ type: 'error', message: 'Message must be at least 20 characters long.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Oops! Something went wrong. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to send your message. Please try again or reach us on WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      content: 'Century Plaza, 1st Floor, Rajtarangini Complex, Buxibazar, Cuttack, Odisha – 753001',
      link: 'https://maps.google.com/?q=Rajtarangini+Complex,+Buxibazar,+Cuttack,+Odisha+753001',
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Call Us',
      content: '9937023166 / 0671-3507096',
      link: 'tel:9937023166',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      content: 'tshourieentertainment66@gmail.com',
      link: 'mailto:tshourieentertainment66@gmail.com',
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      url: 'https://www.facebook.com/share/17qgAMArLp/?mibextid=wwXIfr',
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://www.instagram.com/tshourieschoolofmusic?igsh=Zm9wNG01Zzc4bGk0',
    },
    {
      icon: <FaYoutube />,
      name: 'YouTube',
      url: 'https://youtube.com/@tshourieentertainment?si=uIfTEKzY0a9xsdJI',
    },
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      url: WHATSAPP_URL,
    },
  ];

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
          <p className="section-subtitle">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="info-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp Quick Contact */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-quick-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaWhatsapp className="wa-icon" />
              <div className="wa-text">
                <strong>Chat on WhatsApp</strong>
                <span>Quick response guaranteed</span>
              </div>
            </motion.a>

            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=Rajtarangini+Complex,+Buxibazar,+Cuttack,+Odisha+753001&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="T. Shourie School of Music Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Course Inquiry">Course Inquiry</option>
                    <option value="Admission">Admission</option>
                    <option value="Studio Booking">Studio Booking</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  maxLength={1000}
                ></textarea>
                <span className="char-counter">
                  {formData.message.length} / 1000 characters
                </span>
              </div>

              {status.message && (
                <motion.div
                  className={`form-status ${status.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.type === 'success' ? (
                    <FaCheckCircle />
                  ) : (
                    <FaExclamationCircle />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
