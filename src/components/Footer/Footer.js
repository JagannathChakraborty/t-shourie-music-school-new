import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaHeart,
  FaMusic,
  FaArrowUp,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Services', path: '/services' },
    { name: 'Why Choose Us', path: '/why-us' },
  ];

  const courses = [
    { name: 'Reality Show Grooming', path: '/courses/grooming' },
    { name: 'Studio Singing', path: '/courses/grooming' },
    { name: 'Music Production', path: '/courses/specialized' },
    { name: 'Hindustani Classical', path: '/courses/teaching' },
    { name: 'Western Music', path: '/courses/teaching' },
  ];

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/17qgAMArLp/?mibextid=wwXIfr' 
    },
    { 
      icon: <FaInstagram />, 
      name: 'Instagram', 
      url: 'https://www.instagram.com/tshourieschoolofmusic?igsh=Zm9wNG01Zzc4bGk0' 
    },
    { 
      icon: <FaYoutube />, 
      name: 'YouTube', 
      url: 'https://youtube.com/@tshourieentertainment?si=uIfTEKzY0a9xsdJI' 
    },
    { 
      icon: <FaWhatsapp />, 
      name: 'WhatsApp', 
      url: 'https://wa.me/919937023166' 
    },
  ];

  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src="/logo.png" alt="T. Shourie" className="logo-img" />
                <div className="logo-text">
                  <span className="logo-main">T. Shourie</span>
                  <span className="logo-sub">The School of Music</span>
                </div>
              </Link>
              <p className="footer-tagline">
                Where Passion Meets Practice. One of Odisha's leading music schools
                for learners of all ages and levels.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ y: -5, scale: 1.1 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div className="footer-links">
              <h4>Our Courses</h4>
              <ul>
                {courses.map((course, index) => (
                  <li key={index}>
                    <Link to={course.path}>{course.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-items">
                <a href="https://maps.google.com/?q=Rajtarangini+Complex,+Buxibazar,+Cuttack,+Odisha+753001" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <FaMapMarkerAlt />
                  <span>Buxibazar, Cuttack, Odisha, Century Plaza,1st Floor, Rajtarangini Complex 753001</span>
                </a>
                <a href="tel:9937023166" className="contact-item">
                  <FaPhoneAlt />
                  <span>9937023166, 0671-3507096</span>
                </a>
                <a href="mailto:info@tshourie.com" className="contact-item">
                  <FaEnvelope />
                  <span>tshourieentertainment66@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} T. Shourie The School of Music. All Rights Reserved.
            </p>
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> & <FaMusic className="music-icon" />
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        className="scroll-top-btn"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        title="Scroll to Top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;