import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMusic, FaAward, FaMicrophone, FaFilm, FaQuoteLeft } from 'react-icons/fa';

// Image Import
import tShourieImg from '../../assets/images/principal/t-shourie.jpg';

import './Principal.css';

gsap.registerPlugin(ScrollTrigger);

const Principal = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.principal-image-container',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.principal-section',
            start: 'top 75%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.principal-content',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.principal-section',
            start: 'top 75%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.achievement-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.principal-achievements',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.principal-quote',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.principal-quote',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      icon: <FaMicrophone />,
      title: 'Celebrated Singer',
      description: 'Mesmerizing voice loved across the nation',
    },
    {
      icon: <FaFilm />,
      title: 'Music Director',
      description: 'Iconic debut with Udandi Sita (1992)',
    },
    {
      icon: <FaAward />,
      title: '30+ Years Legacy',
      description: 'Three decades of musical excellence',
    },
    {
      icon: <FaMusic />,
      title: 'Producer',
      description: 'Visionary artistic production',
    },
  ];

  return (
    <section className="principal-section section" ref={sectionRef}>
      <div className="principal-bg-pattern"></div>
      
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
            Our Principal
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Meet <span>T. Shourie</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            An Icon of the Music Industry
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="principal-wrapper">
          <div className="principal-image-container">
            <div className="principal-image-wrapper">
              <div className="principal-image-frame">
                <img src={tShourieImg} alt="T. Shourie - Principal" />
              </div>
              <div className="principal-decoration decoration-gold"></div>
              <div className="principal-decoration decoration-beige"></div>
              
              {/* Experience Badge */}
              <motion.div
                className="experience-badge"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="badge-number">30+</span>
                <span className="badge-text">Years of Excellence</span>
              </motion.div>
            </div>
          </div>

          <div className="principal-content">
            <div className="principal-intro">
              <h3 className="principal-name">T. Shourie</h3>
              <span className="principal-title">Founder & Principal</span>
            </div>

            <div className="principal-bio">
              <p>
                At the core of T. Shourie School of Music stands an icon of the music industry - <strong>T. Shourie</strong>, a celebrated singer, music director, and producer with a legacy spanning over three decades.
              </p>
              <p>
                Since his debut in 1992 with the iconic film <em>Udandi Sita</em>, T. Shourie has carved a permanent place in the hearts of music lovers across the nation. His mesmerizing voice, artistic vision, and commitment to excellence have made him a household name and an inspirational leader in the music community.
              </p>
              <p>
                As Principal, Mr. T. Shourie brings a unique blend of artistic excellence and educational leadership. His passion lies in cultivating a nurturing, inspiring environment where students of all ages and backgrounds can discover and develop their musical talents.
              </p>
              <p>
                Under his guidance, the school has expanded its programs, embraced innovation in music technology, and built a reputation for academic and artistic excellence.
              </p>
            </div>

            {/* Achievements */}
            <div className="principal-achievements">
              {achievements.map((item, index) => (
                <div className="achievement-item" key={index}>
                  <div className="achievement-icon">{item.icon}</div>
                  <div className="achievement-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="principal-quote">
          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
          <blockquote>
            As a student at T. Shourie School of Music under the guidance of T. Shourie, you're not just learning music — you're stepping into a legacy of excellence, discipline, and creative freedom.
          </blockquote>
          <p className="quote-footer">
            Whether you dream of becoming a playback singer, a composer, a live performer, or simply want to deepen your relationship with music — <strong>you'll find your rhythm here.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Principal;