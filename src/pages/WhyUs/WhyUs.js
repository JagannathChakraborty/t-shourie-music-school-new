import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  FaMusic,
  FaStar,
  FaHeart,
  FaGraduationCap,
  FaQuoteLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';

// Image Import
import journeyImg from '../../assets/images/why-us/journey.jpg';

import './WhyUs.css';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  useEffect(() => {
    gsap.fromTo(
      '.reason-item',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.reasons-section',
          start: 'top 75%',
        },
      }
    );

    gsap.fromTo(
      '.testimonial-card',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.journey-image-wrapper',
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.journey-section',
          start: 'top 75%',
        },
      }
    );

    gsap.fromTo(
      '.entertainment-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.entertainment-section',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const reasons = [
    {
      icon: <FaUserGraduate />,
      title: 'Expert Faculty',
      description:
        'Learn from industry professionals with decades of experience in Indian classical and Western music traditions.',
    },
    {
      icon: <FaMicrophone />,
      title: 'State-of-the-Art Facilities',
      description:
        'Acoustically treated rooms, industry-standard gear, and professional post-production suites.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Personalized Attention',
      description:
        'Individual growth focus with private lessons, mentorship, and customized learning paths.',
    },
    {
      icon: <FaLaptop />,
      title: 'Learning by Doing',
      description:
        'Hands-on access to professional workflows alongside experienced mentors in real projects.',
    },
    {
      icon: <FaTheaterMasks />,
      title: 'Performance Opportunities',
      description:
        'Regular workshops, recitals, and community performances to showcase your talent.',
    },
    {
      icon: <FaCertificate />,
      title: 'Recognized Certifications',
      description:
        'Get certified from prestigious academies like Gandharv Mahavidyalaya and Odisha Sangeet Natak Academy.',
    },
    {
      icon: <FaAward />,
      title: 'Industry Connections',
      description:
        'Direct pathway to the entertainment industry through T. Shourie Entertainment network.',
    },
    {
      icon: <FaUsers />,
      title: 'Vibrant Community',
      description:
        'Join a supportive community where creativity thrives and lifelong connections are made.',
    },
  ];

  const highlights = [
    { icon: <FaMusic />, number: '10+', label: 'Years of Excellence' },
    { icon: <FaGraduationCap />, number: '1000+', label: 'Students Trained' },
    { icon: <FaStar />, number: '50+', label: 'Courses Offered' },
    { icon: <FaHeart />, number: '100%', label: 'Passion Driven' },
  ];

  const testimonials = [
    {
      name: 'Student Name',
      course: 'Hindustani Classical',
      quote:
        'The training at T. Shourie School of Music has transformed my understanding of music. The faculty is exceptional!',
    },
    {
      name: 'Student Name',
      course: 'Music Production',
      quote:
        "I've gained hands-on experience with professional equipment. This school truly prepares you for the industry.",
    },
    {
      name: 'Student Name',
      course: 'Reality Show Grooming',
      quote:
        'The grooming sessions helped me crack my audition. Forever grateful to T. Shourie sir and the team!',
    },
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="whyus-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="whyus-hero">
        <div className="container">
          <motion.div
            className="whyus-hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="page-label">Why Choose Us</span>
            <h1>
              Why <span>T. Shourie</span> School of Music?
            </h1>
            <p>
              Discover what makes us one of Odisha's leading music schools and why
              students choose us to begin their musical journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <span className="highlight-number">{item.number}</span>
                <span className="highlight-label">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="reasons-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Strengths</span>
            <h2 className="section-title">
              What Sets Us <span>Apart</span>
            </h2>
            <p className="section-subtitle">
              We're committed to each student's individual growth and success
            </p>
          </div>

          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="reason-item"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="reason-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
                <span className="reason-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section section">
        <div className="container">
          <div className="journey-content">
            <motion.div
              className="journey-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">Your Journey</span>
              <h2>
                Step Into a Legacy of <span>Excellence</span>
              </h2>
              <p>
                As a student at T. Shourie School of Music under the guidance of T.
                Shourie, you're not just learning music — you're stepping into a
                legacy of excellence, discipline, and creative freedom.
              </p>
              <p>
                Whether you dream of becoming a playback singer, a composer, a live
                performer, or simply want to deepen your relationship with music —
                you'll find your rhythm here.
              </p>
              <p>
                From private lessons and ensemble opportunities to workshops,
                recitals, and community performances, we provide a rich, supportive
                environment where artists can thrive.
              </p>
              <Link to="/courses" className="btn-primary">
                Explore Courses <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="journey-image-wrapper"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="journey-image-frame">
                <img src={journeyImg} alt="T. Shourie School of Music Journey" />
              </div>
              <div className="journey-decoration decoration-1"></div>
              <div className="journey-decoration decoration-2"></div>
              <div className="journey-badge">
                <span>Since</span>
                <strong>2015</strong>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* T. Shourie Entertainment Section */}
      <section className="entertainment-section section">
        <div className="container">
          <div className="entertainment-card">
            <div className="entertainment-content">
              <div className="entertainment-badge">
                <FaMusic />
                <span>Powered By</span>
              </div>

              <h2 className="entertainment-title">
                T. Shourie <span>Entertainment</span>
              </h2>

              <p className="entertainment-subtitle">
                Your Bridge to the Entertainment Industry
              </p>

              <p className="entertainment-description">
                T. Shourie Entertainment is a cutting-edge Entertainment & Media House that operates as an integral part of our music school's creative and technical infrastructure. Built on decades of experience in the music and film industry, it offers professional-level facilities and services to both students and external clients.
              </p>

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
                <div className="entertainment-feature">
                  <FaAward className="feature-icon" />
                  <span>Industry-Standard Technologies</span>
                </div>
              </div>

              <a
                href="https://www.tshourieentertainment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary entertainment-btn"
              >
                <span>For More Details Visit</span>
                <FaExternalLinkAlt className="btn-icon" />
              </a>

              <p className="entertainment-link-text">
                www.tshourieentertainment.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">
              What Our <span>Students</span> Say
            </h2>
            <p className="section-subtitle">
              Hear from our students about their experience
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                whileHover={{ y: -5 }}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <FaMusic />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.course}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="testimonials-note">
            <p>
              <em>
                Note: Testimonials will be updated with real student feedback.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-why section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Certifications</span>
            <h2 className="section-title">
              Recognized <span>Certifications</span>
            </h2>
          </div>

          <div className="cert-why-grid">
            <motion.div
              className="cert-why-card"
              whileHover={{ y: -5 }}
            >
              <div className="cert-why-icon">🎓</div>
              <h3>Akhila Bhartiya Gandharv Mahavidyalaya Mandal</h3>
              <p>University Grants Commission (UGC) Recognized</p>
              <span className="cert-badge">Government Recognized</span>
            </motion.div>

            <motion.div
              className="cert-why-card"
              whileHover={{ y: -5 }}
            >
              <div className="cert-why-icon">🏛️</div>
              <h3>Odisha Sangeet Natak Academy</h3>
              <p>Government of Odisha</p>
              <span className="cert-badge">State Recognized</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="whyus-cta-section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Begin Your Musical Journey?</h2>
            <p>
              Join T. Shourie School of Music and become part of a legacy that
              nurtures talent with dedication, creativity, and discipline.
            </p>
            <div className="cta-buttons">
              <a href="tel:9937023166" className="btn-primary">
                Call Us: 9937023166
              </a>
              <Link to="/#contact" className="btn-secondary">
                Send Inquiry <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhyUs;