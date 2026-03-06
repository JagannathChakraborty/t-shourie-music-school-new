import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  const courseCategories = [
    { name: 'Grooming Courses', path: '/courses/grooming' },
    { name: 'Teaching Courses', path: '/courses/teaching' },
    { name: 'Specialized Courses', path: '/courses/specialized' },
    { name: 'All Courses', path: '/courses' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses', hasDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Services', path: '/services' },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Contact Us', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setCoursesOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-wrapper">
            <img src="/logo.png" alt="T. Shourie" className="logo-img" />
            <div className="logo-text-wrapper">
              <span className="logo-main">T. Shourie</span>
              <span className="logo-sub">The School of Music</span>
            </div>
          </div>
        </Link>

        <ul className="navbar-menu">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`nav-item ${link.hasDropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => link.hasDropdown && setCoursesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setCoursesOpen(false)}
            >
              {link.hasDropdown ? (
                <>
                  <span
                    className={`nav-link ${
                      location.pathname.includes('/courses') ? 'active' : ''
                    }`}
                  >
                    {link.name} <FaChevronDown className="dropdown-icon" />
                  </span>
                  <AnimatePresence>
                    {coursesOpen && (
                      <motion.ul
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {courseCategories.map((category, idx) => (
                          <li key={idx}>
                            <Link to={category.path} className="dropdown-link">
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <a href="tel:9937023166" className="navbar-cta">
          <FaPhoneAlt />
          <span>Call Now</span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              className="mobile-menu"
              role="dialog"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-menu-header">
                <Link to="/" className="mobile-logo">
                  <img src="/logo.png" alt="T. Shourie" />
                  <div className="mobile-logo-text">
                    <span className="mobile-logo-main">T. Shourie</span>
                    <span className="mobile-logo-sub">The School of Music</span>
                  </div>
                </Link>
                <button className="mobile-close" onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </button>
              </div>

              <div className="mobile-menu-content">
                <Link to="/" className="mobile-link">Home</Link>

                <div className="mobile-dropdown">
                  <button
                    className="mobile-dropdown-toggle"
                    onClick={() => setCoursesOpen(!coursesOpen)}
                  >
                    Courses <FaChevronDown className={coursesOpen ? 'rotated' : ''} />
                  </button>
                  <AnimatePresence>
                    {coursesOpen && (
                      <motion.div
                        className="mobile-dropdown-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        {courseCategories.map((category, index) => (
                          <Link key={index} to={category.path} className="mobile-dropdown-link">
                            {category.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/gallery" className="mobile-link">Gallery</Link>
                <Link to="/services" className="mobile-link">Our Services</Link>
                <Link to="/why-us" className="mobile-link">Why Choose Us</Link>
                <Link to="/#contact" className="mobile-link">Contact Us</Link>

                <a href="tel:9937023166" className="mobile-cta">
                  <FaPhoneAlt />
                  <span>Call: 9937023166</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;