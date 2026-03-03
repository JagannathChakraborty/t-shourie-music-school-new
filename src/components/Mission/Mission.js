import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaBullseye, 
  FaEye, 
  FaLightbulb, 
  FaGlobe, 
  FaUsers, 
  FaGraduationCap,
  FaHandshake,
  FaStar
} from 'react-icons/fa';
import './Mission.css';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mission-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.mission-cards',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.value-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.mission-values',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.commitment-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.mission-commitment',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Embracing music technology and modern teaching methods',
    },
    {
      icon: <FaGlobe />,
      title: 'Global Competitiveness',
      description: 'Preparing students for international music standards',
    },
    {
      icon: <FaUsers />,
      title: 'Individual Growth',
      description: 'Personalized attention for every student',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Sustainable Careers',
      description: 'Building long-term professional musicians',
    },
  ];

  const commitments = [
    'Private lessons and personalized training',
    'Ensemble opportunities and group performances',
    'Workshops with industry professionals',
    'Recitals and community performances',
    'Research-based curriculum development',
    'Advocacy for music education in India',
  ];

  return (
    <section className="mission-section section" ref={sectionRef}>
      <div className="mission-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

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
            Mission & Vision
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our <span>Core Purpose</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering musicians to bring positive change to the Indian music industry
          </motion.p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mission-cards">
          <div className="mission-card mission-card-primary">
            <div className="card-icon">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              To educate musicians and professionals to make music their long-term sustainable career and to empower them to bring positive change, innovation, and global competitiveness to the Indian music industry.
            </p>
            <div className="card-decoration"></div>
          </div>

          <div className="mission-card mission-card-secondary">
            <div className="card-icon">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To discuss key areas of the music education system — curriculum content and implementation, teaching practices, available resources, use of technology, and advocacy for music & dance education — and share research-based recommendations to enrich music education in schools across India.
            </p>
            <div className="card-decoration"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mission-values">
          <h3 className="values-title">What Drives Us</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-item" key={index}>
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mission-commitment">
          <div className="commitment-content">
            <div className="commitment-header">
              <div className="commitment-icon">
                <FaHandshake />
              </div>
              <h3>Our Commitment to Your Growth</h3>
            </div>
            <p className="commitment-intro">
              What sets T. Shourie School of Music apart is our commitment to each student's individual growth. We provide a rich, supportive environment where artists can thrive.
            </p>
            <div className="commitment-list">
              {commitments.map((item, index) => (
                <div className="commitment-item" key={index}>
                  <div className="commitment-bullet">
                    <FaStar />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="commitment-footer">
              Whether you're aiming for a career in music or simply want to enjoy the journey, <strong>we're here to guide every path of Music.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;