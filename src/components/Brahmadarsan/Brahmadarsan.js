/*
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaOm, 
  FaSpa, 
  FaBookOpen, 
  FaLeaf, 
  FaPray,
  FaExternalLinkAlt 
} from 'react-icons/fa';
import './Brahmadarsan.css';

gsap.registerPlugin(ScrollTrigger);

const Brahmadarsan = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.brahmadarsan-content',
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.brahmadarsan-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.brahmadarsan-image',
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.brahmadarsan-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.program-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.brahmadarsan-programs',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const programs = [
    {
      icon: <FaSpa />,
      title: 'Yoga & Meditation',
      description: 'Physical well-being and mental peace through ancient practices',
    },
    {
      icon: <FaBookOpen />,
      title: 'Sanskrit Knowledge',
      description: 'Learn the sacred language of ancient scriptures',
    },
    {
      icon: <FaOm />,
      title: 'Vedic Sciences',
      description: 'Traditional wisdom and spiritual disciplines',
    },
    {
      icon: <FaLeaf />,
      title: 'Spiritual Awareness',
      description: 'Inner stillness, self-realization, and harmony with nature',
    },
  ];

  return (
    <section className="brahmadarsan-section section" ref={sectionRef}>
      <div className="brahmadarsan-bg">
        <div className="bg-pattern"></div>
        <div className="bg-gradient"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Brahmadarsan
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Vedic Studies & <span>Research Institute</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A bridge between ancient wisdom and modern life
          </motion.p>
        </div>

        <div className="brahmadarsan-wrapper">
          <div className="brahmadarsan-content">
            <div className="content-badge">
              <FaPray />
              <span>Spiritual Education</span>
            </div>

            <h3 className="content-title">
              Reconnect with the <span>Timeless Wisdom</span> of the Vedas
            </h3>

            <div className="content-text">
              <p>
                Brahmadarsan is our institute's dedicated center for Vedic learning and spiritual growth. Through courses in Yoga, Meditation, Sanskrit, and traditional Vedic sciences, Brahmadarsan helps seekers reconnect with the timeless wisdom of the Vedas.
              </p>
              <p>
                As an integral part of our institute, Brahmadarsan is committed to spreading the light of ancient Vedic knowledge and yogic traditions. It offers a holistic learning experience through Yoga & Meditation, Sanskrit knowledge, and other Vedic disciplines.
              </p>
              <p>
                Each program is designed to nurture physical well-being, mental peace, and spiritual awareness. Brahmadarsan serves as a bridge between ancient wisdom and modern life — inviting students to explore inner stillness, self-realization, and harmony with nature.
              </p>
            </div>

            <div className="content-highlight">
              <FaOm className="highlight-icon" />
              <p>
                Under the guidance of learned teachers and spiritual mentors, participants engage in practices that lead to clarity, compassion, and a higher understanding of life.
              </p>
            </div>

            <a 
              href="https://www.brahmadarshan.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <span>Visit Brahmadarsan</span>
              <FaExternalLinkAlt className="btn-icon" />
            </a>
          </div>

          <div className="brahmadarsan-image">
            <div className="image-wrapper">
              <div className="image-frame">
                <div className="image-placeholder">
                  <FaOm className="placeholder-icon" />
                  <span>Brahmadarsan Image</span>
                </div>
              </div>
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>

              <motion.div
                className="floating-symbol symbol-1"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                ॐ
              </motion.div>
              <motion.div
                className="floating-symbol symbol-2"
                animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                🙏
              </motion.div>
            </div>
          </div>
        </div>

        <div className="brahmadarsan-programs">
          <h3 className="programs-title">Our Programs</h3>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div className="program-card" key={index}>
                <div className="program-icon">{program.icon}</div>
                <h4>{program.title}</h4>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="brahmadarsan-cta">
          <div className="cta-inner">
            <div className="cta-content">
              <h3>Begin Your Spiritual Journey</h3>
              <p>
                Discover more about our spiritual education and programs at Brahmadarsan. Start your path to inner peace and enlightenment.
              </p>
            </div>
            <a 
              href="https://www.brahmadarshan.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold"
            >
              <span>Explore Brahmadarsan</span>
              <FaExternalLinkAlt className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brahmadarsan;
*/

// Placeholder export while commented
const Brahmadarsan = () => null;

export default Brahmadarsan;