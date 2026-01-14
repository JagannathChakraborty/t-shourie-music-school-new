import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaMicrophone,
  FaVideo,
  FaMusic,
  FaHeadphones,
  FaFilm,
  FaVolumeUp,
  FaGraduationCap,
  FaLandmark,
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.fromTo(
      '.service-detail-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.services-detail-grid',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const audioServices = [
    {
      icon: <FaMicrophone />,
      title: 'Professional Recording',
      description: 'State-of-the-art recording for vocals, instruments, voiceovers, and podcast production.',
      features: [
        'Vocal recording',
        'Instrument recording',
        'Voiceover production',
        'Podcast recording',
        'Live session recording',
      ],
    },
    {
      icon: <FaVolumeUp />,
      title: 'Sound Mixing & Mastering',
      description: 'Studio-quality output for music, film, and commercial projects with industry-standard techniques.',
      features: [
        'Multi-track mixing',
        'Audio mastering',
        'Film audio mixing',
        'Commercial audio',
        'Surround sound mixing',
      ],
    },
    {
      icon: <FaMusic />,
      title: 'Music Production',
      description: 'Complete music production services including background scores, jingles, and original compositions.',
      features: [
        'Original compositions',
        'Background scores',
        'Jingle creation',
        'Music arrangement',
        'Beat production',
      ],
    },
    {
      icon: <FaHeadphones />,
      title: 'Voice Training & Dubbing',
      description: 'Multi-language dubbing and professional voiceover training for aspiring artists.',
      features: [
        'Voice modulation training',
        'Multi-language dubbing',
        'Character voicing',
        'Commercial VO',
        'Audiobook narration',
      ],
    },
  ];

  const visualServices = [
    {
      icon: <FaVideo />,
      title: 'Video Editing',
      description: 'Professional video editing for films, music videos, and promotional content.',
      features: [
        'Film editing',
        'Music video editing',
        'Promotional videos',
        'Social media content',
        'Corporate videos',
      ],
    },
    {
      icon: <FaFilm />,
      title: 'Multimedia & Content Creation',
      description: 'Interactive learning materials, e-learning content, and explainer video production.',
      features: [
        'E-learning content',
        'Explainer videos',
        'Interactive media',
        'Motion graphics',
        'Animation',
      ],
    },
    {
      icon: <FaLandmark />,
      title: 'Cultural Projects',
      description: 'Heritage content, traditional music recordings, and community-based storytelling.',
      features: [
        'Heritage documentation',
        'Traditional music recording',
        'Community storytelling',
        'Cultural preservation',
        'Documentary production',
      ],
    },
    {
      icon: <FaGraduationCap />,
      title: 'Educational Media',
      description: 'Production of educational content for music learning and institutional purposes.',
      features: [
        'Tutorial videos',
        'Course content',
        'Institutional videos',
        'Training materials',
        'Certification programs',
      ],
    },
  ];

  const facilities = [
    { icon: '🎙️', title: 'Recording Studio', desc: 'Acoustically treated professional recording space' },
    { icon: '🎛️', title: 'Control Room', desc: 'State-of-the-art mixing and monitoring setup' },
    { icon: '🎬', title: 'Post-Production Suite', desc: 'Complete video and audio post-production' },
    { icon: '💻', title: 'Multimedia Lab', desc: 'Modern computers with industry software' },
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="services-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="page-label">Our Services</span>
            <h1>
              Professional Training Meets <span>World-Class Production</span>
            </h1>
            <p>
              At T. Shourie School of Music, we go beyond traditional music education
              to offer a comprehensive creative ecosystem for aspiring musicians,
              composers, producers, and media artists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* T. Shourie Entertainment Section */}
      <section className="entertainment-section section">
        <div className="container">
          <div className="entertainment-content">
            <motion.div
              className="entertainment-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">Powered By</span>
              <h2>T. Shourie Entertainment</h2>
              <p className="entertainment-subtitle">
                Your Bridge to the Entertainment Industry
              </p>
              <p>
                T. Shourie Entertainment is a cutting-edge Entertainment & Media House
                that operates as an integral part of our music school's creative and
                technical infrastructure. Built on decades of experience in the music
                and film industry, it offers professional-level facilities and services
                to both students and external clients.
              </p>
              <p>
                Located on campus in a modern, purpose-built complex, the studio includes
                a full-fledged office, recording studio, post-production workshop, and
                multimedia development space—all equipped with the latest industry-standard
                technologies.
              </p>
              <a
                href="https://www.tshourieentertainment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Website <FaExternalLinkAlt />
              </a>
            </motion.div>

            <motion.div
              className="entertainment-facilities"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="facilities-grid">
                {facilities.map((facility, index) => (
                  <div key={index} className="facility-card">
                    <span className="facility-icon">{facility.icon}</span>
                    <h4>{facility.title}</h4>
                    <p>{facility.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audio Services */}
      <section className="services-detail-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Audio Services</span>
            <h2 className="section-title">
              Professional <span>Audio</span> Services
            </h2>
            <p className="section-subtitle">
              Complete audio production and training solutions
            </p>
          </div>

          <div className="services-detail-grid">
            {audioServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-detail-card"
                whileHover={{ y: -10 }}
              >
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Services */}
      <section className="services-detail-section section alt-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Visual Production</span>
            <h2 className="section-title">
              Visual & <span>Media</span> Services
            </h2>
            <p className="section-subtitle">
              Complete video production and content creation
            </p>
          </div>

          <div className="services-detail-grid">
            {visualServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-detail-card"
                whileHover={{ y: -10 }}
              >
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="services-why section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Us</span>
            <h2 className="section-title">
              Why Choose <span>Our Services</span>?
            </h2>
          </div>

          <div className="why-services-grid">
            <motion.div className="why-service-item" whileHover={{ scale: 1.02 }}>
              <span className="why-number">01</span>
              <h3>State-of-the-Art Facilities</h3>
              <p>
                Acoustically treated rooms, industry-standard gear, and
                post-production suites.
              </p>
            </motion.div>
            <motion.div className="why-service-item" whileHover={{ scale: 1.02 }}>
              <span className="why-number">02</span>
              <h3>Learning by Doing</h3>
              <p>
                Students get hands-on access to professional workflows alongside
                experienced mentors.
              </p>
            </motion.div>
            <motion.div className="why-service-item" whileHover={{ scale: 1.02 }}>
              <span className="why-number">03</span>
              <h3>Artist-Centric Environment</h3>
              <p>
                Designed to support creative experimentation and professional
                growth.
              </p>
            </motion.div>
            <motion.div className="why-service-item" whileHover={{ scale: 1.02 }}>
              <span className="why-number">04</span>
              <h3>Professional-Grade Services</h3>
              <p>
                Available to both students and external clients, from solo artists
                to production houses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Create Something Amazing?</h2>
            <p>
              Whether you're a student, artist, or business looking for professional
              audio-visual services, we're here to help bring your vision to life.
            </p>
            <div className="cta-buttons">
              <a href="tel:9937023166" className="btn-primary">
                Call Us: 9937023166
              </a>
              <Link to="/#contact" className="btn-secondary">
                Get a Quote <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;