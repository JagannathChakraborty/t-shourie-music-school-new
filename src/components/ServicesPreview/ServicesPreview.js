import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaMicrophone,
  FaVideo,
  FaMusic,
  FaHeadphones,
  FaFilm,
  FaArrowRight,
} from 'react-icons/fa';
import './ServicesPreview.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <FaMicrophone />,
      title: 'Professional Recording',
      description: 'Vocals, instruments, voiceovers, and podcast production with studio-quality output.',
    },
    {
      icon: <FaHeadphones />,
      title: 'Sound Mixing & Mastering',
      description: 'Industry-standard mixing and mastering for music, film, and commercial projects.',
    },
    {
      icon: <FaMusic />,
      title: 'Music Production',
      description: 'Background scores, jingles, original compositions, and professional arrangements.',
    },
    {
      icon: <FaFilm />,
      title: 'Voice Training & Dubbing',
      description: 'Multi-language dubbing and voiceover training for aspiring artists.',
    },
    {
      icon: <FaVideo />,
      title: 'Video Editing',
      description: 'Film, music video, and promotional video editing with professional-grade software.',
    },
    {
      icon: <FaMusic />,
      title: 'Educational Media',
      description: 'Production of interactive learning materials, e-learning content, and explainer videos.',
    },
  ];

  return (
    <section className="services-preview-section section" ref={sectionRef}>
      <div className="container">
        <div className="services-header">
          <div className="services-header-content">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">
              Professional Training Meets <span>World-Class Production</span>
            </h2>
            <p className="section-subtitle">
              Powered by T. Shourie Entertainment — Your Bridge to the Entertainment Industry
            </p>
          </div>
          <div className="services-header-cta">
            <Link to="/services" className="btn-secondary">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="services-intro">
          <p>
            At T. Shourie School of Music, we go beyond traditional music education to offer
            a comprehensive creative ecosystem for aspiring musicians, composers, producers,
            and media artists.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="services-banner">
          <div className="banner-content">
            <h3>T. Shourie Entertainment</h3>
            <p>
              A cutting-edge Entertainment & Media House that operates as an integral part
              of our music school's creative and technical infrastructure. Built on decades
              of experience in the music and film industry.
            </p>
            <a
              href="https://www.tshourieentertainment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Visit T. Shourie Entertainment <FaArrowRight />
            </a>
          </div>
          <div className="banner-features">
            <div className="banner-feature">
              <span className="feature-icon">🎙️</span>
              <span>Recording Studio</span>
            </div>
            <div className="banner-feature">
              <span className="feature-icon">🎬</span>
              <span>Post-Production</span>
            </div>
            <div className="banner-feature">
              <span className="feature-icon">🎵</span>
              <span>Music Production</span>
            </div>
            <div className="banner-feature">
              <span className="feature-icon">📹</span>
              <span>Video Editing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;