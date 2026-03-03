import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaUserGraduate,
  FaMicrophone,
  FaAward,
  FaHandsHelping,
  FaLaptop,
  FaTheaterMasks,
  FaCertificate,
  FaUsers,
  FaExternalLinkAlt,
  FaMusic,
} from 'react-icons/fa';

// Image Import
import whyUsImg from '../../assets/images/why-us/why-us-main.jpg';

import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reason-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.reasons-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.why-image-container',
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.why-entertainment-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.why-entertainment-content',
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.why-entertainment-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: <FaUserGraduate />,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals with decades of experience in Indian classical and Western music.',
    },
    {
      icon: <FaMicrophone />,
      title: 'State-of-the-Art Facilities',
      description: 'Acoustically treated rooms, industry-standard gear, and professional post-production suites.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Personalized Attention',
      description: 'Individual growth focus with private lessons, mentorship, and customized learning paths.',
    },
    {
      icon: <FaLaptop />,
      title: 'Learning by Doing',
      description: 'Hands-on access to professional workflows alongside experienced mentors in real projects.',
    },
    {
      icon: <FaTheaterMasks />,
      title: 'Performance Opportunities',
      description: 'Regular workshops, recitals, and community performances to showcase your talent.',
    },
    {
      icon: <FaCertificate />,
      title: 'Recognized Certifications',
      description: 'Get certified from prestigious academies like Gandharv Mahavidyalaya and Odisha Sangeet Natak Academy.',
    },
    {
      icon: <FaAward />,
      title: 'Industry Connections',
      description: 'Direct pathway to the entertainment industry through T. Shourie Entertainment network.',
    },
    {
      icon: <FaUsers />,
      title: 'Vibrant Community',
      description: 'Join a supportive community where creativity thrives and lifelong connections are made.',
    },
  ];

  return (
    <section className="why-choose-section section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Us
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Choose <span>T. Shourie</span> School of Music?
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover what makes us one of Odisha's leading music schools
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
              <div className="reason-number">{String(index + 1).padStart(2, '0')}</div>
            </motion.div>
          ))}
        </div>

        {/* T. Shourie Entertainment Section */}
        <div className="why-entertainment-section">
          <div className="why-image-container">
            <div className="why-image-wrapper">
              <div className="why-image-frame">
                <img src={whyUsImg} alt="T. Shourie Entertainment Studio" />
              </div>
              <div className="why-image-decoration decoration-1"></div>
              <div className="why-image-decoration decoration-2"></div>
            </div>
          </div>

          <div className="why-entertainment-content">
            <div className="entertainment-badge">
              <FaMusic />
              <span>Powered By</span>
            </div>

            <h3 className="entertainment-title">
              T. Shourie <span>Entertainment</span>
            </h3>

            <p className="entertainment-subtitle">
              Your Bridge to the Entertainment Industry
            </p>

            <div className="entertainment-text">
              <p>
                T. Shourie Entertainment is a cutting-edge Entertainment & Media House that operates as an integral part of our music school's creative and technical infrastructure. Built on decades of experience in the music and film industry, it offers professional-level facilities and services to both students and external clients.
              </p>
              <p>
                Located on campus in a modern, purpose-built complex, the studio includes a full-fledged office, recording studio, post-production workshop, and multimedia development space—all equipped with the latest industry-standard technologies.
              </p>
            </div>

            <div className="entertainment-features">
              <div className="entertainment-feature">
                <FaMicrophone className="feature-icon" />
                <span>Professional Recording Studio</span>
              </div>
              <div className="entertainment-feature">
                <FaLaptop className="feature-icon" />
                <span>Post-Production Suite</span>
              </div>
              <div className="entertainment-feature">
                <FaTheaterMasks className="feature-icon" />
                <span>Multimedia Development</span>
              </div>
            </div>

            <a
              href="https://www.tshourieentertainment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary entertainment-btn"
            >
              <span>Visit T. Shourie Entertainment</span>
              <FaExternalLinkAlt className="btn-icon" />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="why-cta">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ready to Begin Your Musical Journey?</h3>
            <p>
              Whether you're aiming for a career in music or simply want to enjoy
              the journey, we're here to guide every step of your path.
            </p>
            <div className="cta-buttons">
              <a href="tel:9937023166" className="btn-primary">
                Call Us Now
              </a>
              <a href="#contact" className="btn-secondary">
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;