import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMusic, FaHeart, FaUsers, FaStar } from 'react-icons/fa';

// Image Imports
import schoolImg from '../../assets/images/about/school.jpg';
import aSpaceWhereImg from '../../assets/images/about/a space where.JPG';
import swaroopNaikImg from '../../assets/images/about/swaroop-naik.jpg';

import './About.css';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_SLIDES = [
  {
    src: schoolImg,
    alt: 'T. Shourie School of Music',
    fit: 'cover',
    kenBurns: { scale: [1, 1.12], x: ['0%', '2%'], y: ['0%', '-2%'] },
  },
  {
    src: aSpaceWhereImg,
    alt: 'A Space Where Music is a Way of Life',
    fit: 'contain',
    kenBurns: { scale: [1, 1.05], x: ['0%', '0%'], y: ['0%', '0%'] },
  },
];

const ABOUT_SLIDE_DURATION = 3000;
const ABOUT_CROSSFADE_DURATION = 1;

const aboutSlideVariants = {
  enter: { opacity: 0, scale: 1.05 },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: ABOUT_CROSSFADE_DURATION, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: ABOUT_CROSSFADE_DURATION, ease: [0.4, 0, 0.2, 1] },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: ABOUT_CROSSFADE_DURATION, ease: [0.4, 0, 0.2, 1] },
    },
  },
};

const About = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content-left',
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-content-right',
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-stat-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.tribute-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tribute-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Preload about images
  useEffect(() => {
    ABOUT_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Auto-play slideshow
  const advanceSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % ABOUT_SLIDES.length);
  }, []);

  useEffect(() => {
    slideTimerRef.current = setInterval(advanceSlide, ABOUT_SLIDE_DURATION);
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [advanceSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    slideTimerRef.current = setInterval(advanceSlide, ABOUT_SLIDE_DURATION);
  };

  const stats = [
    { icon: <FaMusic />, number: '10+', label: 'Years of Excellence' },
    { icon: <FaUsers />, number: '1000+', label: 'Students Trained' },
    { icon: <FaStar />, number: '50+', label: 'Courses Offered' },
    { icon: <FaHeart />, number: '100%', label: 'Passion Driven' },
  ];

  return (
    <section className="about-section section" ref={sectionRef}>
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
            About Us
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome to <span>T. Shourie</span> School of Music
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where Passion Meets Practice
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-content-left">
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentSlide}
                    className="about-slideshow-slide"
                    variants={aboutSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <motion.img
                      src={ABOUT_SLIDES[currentSlide].src}
                      alt={ABOUT_SLIDES[currentSlide].alt}
                      style={{ objectFit: ABOUT_SLIDES[currentSlide].fit }}
                      animate={{
                        scale: ABOUT_SLIDES[currentSlide].kenBurns.scale,
                        x: ABOUT_SLIDES[currentSlide].kenBurns.x,
                        y: ABOUT_SLIDES[currentSlide].kenBurns.y,
                      }}
                      transition={{
                        duration: ABOUT_SLIDE_DURATION / 1000,
                        ease: 'linear',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="about-slideshow-progress">
                  <motion.div
                    className="about-slideshow-progress-fill"
                    key={`about-progress-${currentSlide}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: ABOUT_SLIDE_DURATION / 1000,
                      ease: 'linear',
                    }}
                  />
                </div>

                <div className="about-slideshow-indicators">
                  {ABOUT_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      className={`about-slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="about-image-decoration decoration-1"></div>
              <div className="about-image-decoration decoration-2"></div>
            </div>
          </div>

          <div className="about-content-right">
            <div className="about-text-content">
              <h3 className="about-heading">
                A Space Where Music is a <span>Way of Life</span>
              </h3>
              <p className="about-description">
                T. Shourie School of Music is a space where music is more than just a subject — it's a way of life. Founded with the vision of making quality music education accessible to everyone, we are proud to be one of Odisha's leading music schools for learners of all ages and levels.
              </p>
              <p className="about-description">
                Established by T. Shourie in 2015, a musician and composer who was also the Music Director of the Odia Industry, the school is currently the premier institution for grooming talents into professionals. It caters to many students annually and provides instruction on all music courses.
              </p>
              <p className="about-description">
                We believe music is more than just sound—it's a language that connects spirituality, heals, and inspires. Founded by passionate musicians and educators, our school has grown into a vibrant community where creativity thrives, skills flourish, and lifelong connections are made.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="feature-icon">
                    <FaMusic />
                  </div>
                  <div className="feature-text">
                    <h4>Quality Education</h4>
                    <p>Accessible music education for all</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="feature-icon">
                    <FaHeart />
                  </div>
                  <div className="feature-text">
                    <h4>Passionate Teaching</h4>
                    <p>Learn from industry experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div className="about-stat-item" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Tribute Section */}
        <div className="tribute-section">
          <div className="tribute-card">
            <div className="tribute-image">
              <img src={swaroopNaikImg} alt="Late Swaroop Naik" />
            </div>
            <div className="tribute-content">
              <span className="tribute-label">In Memory Of</span>
              <h3 className="tribute-name">Late Swaroop Naik</h3>
              <p className="tribute-description">
                Our music school is a tribute to the legendary Odia singer, music director, and lyricist Late Swaroop Naik, whose contributions have left a lasting impact on the musical heritage of Odisha. Established in his memory, the school carries forward his vision by nurturing talent with dedication, creativity, and discipline.
              </p>
              <p className="tribute-quote">
                "Guided by his musical philosophy, every note echoes his legacy, inspiring students to carry his timeless spirit into the future."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;