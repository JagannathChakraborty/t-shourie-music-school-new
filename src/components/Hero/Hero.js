import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FaPlay, FaMusic, FaHeadphones } from 'react-icons/fa';
import MusicAnimation from '../MusicAnimation/MusicAnimation';

// Image Imports
import heroImg from '../../assets/images/hero/hero-main.jpg';
import heroImg1 from '../../assets/images/hero/hero-main1.jpg';
import heroImg2 from '../../assets/images/hero/hero-main2.jpg';

import './Hero.css';

const SLIDES = [
  {
    src: heroImg,
    alt: 'T. Shourie School of Music - Performance',
    kenBurns: { scale: [1, 1.15], x: ['0%', '3%'], y: ['0%', '-3%'] },
  },
  {
    src: heroImg1,
    alt: 'T. Shourie School of Music - Students',
    kenBurns: { scale: [1, 1.12], x: ['0%', '-3%'], y: ['0%', '2%'] },
  },
  {
    src: heroImg2,
    alt: 'T. Shourie School of Music - Studio',
    kenBurns: { scale: [1, 1.18], x: ['0%', '2%'], y: ['0%', '-2%'] },
  },
];

const SLIDE_DURATION = 3000;
const CROSSFADE_DURATION = 1;

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 1.05,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: CROSSFADE_DURATION, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: CROSSFADE_DURATION, ease: [0.4, 0, 0.2, 1] },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: CROSSFADE_DURATION, ease: [0.4, 0, 0.2, 1] },
    },
  },
};

const Hero = () => {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimerRef = useRef(null);

  // GSAP entrance animations (unchanged)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title-line',
        { y: 120, opacity: 0, skewY: 7 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3,
        }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1 }
      );

      gsap.fromTo(
        '.hero-cta-group',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.2 }
      );

      gsap.fromTo(
        '.stat-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          delay: 1.4,
        }
      );

      gsap.fromTo(
        '.hero-image-container',
        { x: 100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.5,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Preload images
  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Auto-play slideshow
  const advanceSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    slideTimerRef.current = setInterval(advanceSlide, SLIDE_DURATION);
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [advanceSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    slideTimerRef.current = setInterval(advanceSlide, SLIDE_DURATION);
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <MusicAnimation />
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            className="hero-badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaMusic className="badge-icon" />
            <span>Established 2015</span>
          </motion.div>

          <h1 className="hero-title">
            <div className="hero-title-line">
              <span className="title-word">Where</span>{' '}
              <span className="title-word highlight">Passion</span>
            </div>
            <div className="hero-title-line">
              <span className="title-word">Meets</span>{' '}
              <span className="title-word highlight">Practice</span>
            </div>
          </h1>

          <p className="hero-subtitle">
            T. Shourie School of Music is a space where music is more than just
            a subject — it's a way of life. One of Odisha's leading music
            schools for learners of all ages and levels.
          </p>

          <div className="hero-cta-group">
            <Link to="/courses" className="btn-primary">
              <span>Explore Courses</span>
              <FaPlay className="btn-icon" />
            </Link>
            <Link to="/why-us" className="btn-secondary">
              <FaHeadphones className="btn-icon" />
              <span>Why Choose Us</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Courses Offered</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <motion.div
            className="hero-image-container"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero-image-wrapper">
              <div className="image-frame">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentSlide}
                    className="slideshow-slide"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <motion.img
                      src={SLIDES[currentSlide].src}
                      alt={SLIDES[currentSlide].alt}
                      animate={{
                        scale: SLIDES[currentSlide].kenBurns.scale,
                        x: SLIDES[currentSlide].kenBurns.x,
                        y: SLIDES[currentSlide].kenBurns.y,
                      }}
                      transition={{
                        duration: SLIDE_DURATION / 1000,
                        ease: 'linear',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="slideshow-progress">
                  <motion.div
                    className="slideshow-progress-fill"
                    key={`progress-${currentSlide}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: SLIDE_DURATION / 1000,
                      ease: 'linear',
                    }}
                  />
                </div>

                <div className="slideshow-indicators">
                  {SLIDES.map((_, index) => (
                    <button
                      key={index}
                      className={`slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
            </div>
          </motion.div>

          <motion.div
            className="floating-note note-1"
            animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ♪
          </motion.div>
          <motion.div
            className="floating-note note-2"
            animate={{ y: [0, -25, 0], rotate: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            ♫
          </motion.div>
          <motion.div
            className="floating-note note-3"
            animate={{ y: [0, -35, 0], rotate: [0, 25, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            ♩
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
