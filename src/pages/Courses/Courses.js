import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaMicrophone,
  FaGuitar,
  FaHeadphones,
  FaMusic,
  FaCompactDisc,
  FaStar,
  FaTheaterMasks,
  FaGraduationCap,
  FaCertificate,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa';
import './Courses.css';

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'all');

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('all');
    }
  }, [category]);

  useEffect(() => {
    ScrollTrigger.refresh();
    
    gsap.fromTo(
      '.course-card-full',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.courses-full-grid',
          start: 'top 80%',
        },
      }
    );
  }, [activeCategory]);

  const categories = [
    { id: 'all', name: 'All Courses', icon: <FaMusic /> },
    { id: 'grooming', name: 'Grooming Courses', icon: <FaMicrophone /> },
    { id: 'teaching', name: 'Teaching Courses', icon: <FaGraduationCap /> },
    { id: 'specialized', name: 'Specialized Courses', icon: <FaStar /> },
  ];

  const allCourses = [
    // Grooming Courses
    {
      id: 1,
      category: 'grooming',
      icon: <FaMicrophone />,
      title: 'Reality Show Grooming',
      subtitle: 'Prepare for TV Auditions',
      description:
        'Comprehensive training for TV auditions and competitive performances. Learn stage presence, camera handling, and performance techniques.',
      features: [
        'Audition preparation techniques',
        'Camera presence training',
        'Performance psychology',
        'Mock audition sessions',
        'Feedback and improvement',
      ],
      duration: '3-6 Months',
      level: 'All Levels',
    },
    {
      id: 2,
      category: 'grooming',
      icon: <FaTheaterMasks />,
      title: 'Stage Performance',
      subtitle: 'Master Live Performances',
      description:
        'Develop commanding stage presence and learn live performance techniques including mic handling, audience engagement, and show management.',
      features: [
        'Stage presence mastery',
        'Mic handling techniques',
        'Audience engagement',
        'Live sound management',
        'Performance choreography',
      ],
      duration: '3-6 Months',
      level: 'Beginner to Advanced',
    },
    {
      id: 3,
      category: 'grooming',
      icon: <FaHeadphones />,
      title: 'Studio Singing',
      subtitle: 'Professional Recording Skills',
      description:
        'Learn voice control, studio etiquette, and professional recording techniques for studio sessions and commercial projects.',
      features: [
        'Voice modulation control',
        'Studio etiquette',
        'Recording techniques',
        'Dubbing skills',
        'Commercial singing',
      ],
      duration: '4-6 Months',
      level: 'Intermediate to Advanced',
    },
    {
      id: 4,
      category: 'grooming',
      icon: <FaStar />,
      title: 'Karaoke Singing',
      subtitle: 'Hobby & Performance Style',
      description:
        'Perfect for hobbyists looking to improve performance style and confidence. Learn to sing along with backing tracks professionally.',
      features: [
        'Pitch accuracy training',
        'Style development',
        'Confidence building',
        'Song interpretation',
        'Entertainment skills',
      ],
      duration: '2-4 Months',
      level: 'Beginner',
    },
    // Teaching Courses
    {
      id: 5,
      category: 'teaching',
      icon: <FaMusic />,
      title: 'Hindustani Classical Vocal',
      subtitle: 'Traditional Indian Music',
      description:
        'Deep dive into the rich tradition of Hindustani classical music with certified curriculum from recognized academies.',
      features: [
        'Raag and Taal fundamentals',
        'Bandish training',
        'Alap and Taan techniques',
        'Classical compositions',
        'Exam preparation',
      ],
      duration: '1-5 Years',
      level: 'Beginner to Advanced',
      certification: 'Akhila Bhartiya Gandharv Mahavidyalaya Mandal',
    },
    {
      id: 6,
      category: 'teaching',
      icon: <FaGuitar />,
      title: 'Western Music',
      subtitle: 'Contemporary & Classical Western',
      description:
        'Learn western vocal techniques, music theory, and contemporary styles including pop, jazz, and classical western music.',
      features: [
        'Western vocal techniques',
        'Music theory & notation',
        'Contemporary styles',
        'Sight reading',
        'Harmony and composition',
      ],
      duration: '1-3 Years',
      level: 'Beginner to Advanced',
    },
    {
      id: 7,
      category: 'teaching',
      icon: <FaGraduationCap />,
      title: 'Music Theory & Notation',
      subtitle: 'Foundation Knowledge',
      description:
        'Comprehensive study of Indian and Western music notation systems, theory fundamentals, and academic preparation.',
      features: [
        'Indian notation system',
        'Western notation system',
        'Theory fundamentals',
        'Ear training',
        'Academic exam prep',
      ],
      duration: '6 Months - 2 Years',
      level: 'All Levels',
      certification: 'Odisha Sangeet Natak Academy',
    },
    // Specialized Courses
    {
      id: 8,
      category: 'specialized',
      icon: <FaCompactDisc />,
      title: 'Music Production',
      subtitle: 'Create Professional Music',
      description:
        'Hands-on course covering DAWs, beat-making, mixing, and mastering. Learn to produce professional-quality music.',
      features: [
        'DAW mastery (FL Studio, Logic Pro)',
        'Beat making & composition',
        'Mixing techniques',
        'Mastering fundamentals',
        'Sound design',
      ],
      duration: '6-12 Months',
      level: 'Beginner to Intermediate',
    },
    {
      id: 9,
      category: 'specialized',
      icon: <FaCertificate />,
      title: 'Exam Preparation',
      subtitle: 'Certification Programs',
      description:
        'Dedicated preparation for certification exams from recognized music academies and institutions.',
      features: [
        'Gandharv Mahavidyalaya exams',
        'Sangeet Natak Academy exams',
        'Theory and practical prep',
        'Mock examinations',
        'Personalized guidance',
      ],
      duration: 'As per Exam Schedule',
      level: 'All Levels',
      certification: 'Multiple Certifications Available',
    },
  ];

  const filteredCourses =
    activeCategory === 'all'
      ? allCourses
      : allCourses.filter((course) => course.category === activeCategory);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="courses-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <motion.div
            className="courses-hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="page-label">Our Programs</span>
            <h1>
              Explore Our <span>Courses</span>
            </h1>
            <p>
              Structured programs in vocal and instrumental music, as well as
              professional grooming for real-world musical careers.
            </p>
          </motion.div>
        </div>
        <div className="hero-decoration">
          <span className="floating-note n1">♪</span>
          <span className="floating-note n2">♫</span>
          <span className="floating-note n3">♩</span>
        </div>
      </section>

      {/* Category Filter */}
      <section className="courses-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-main section">
        <div className="container">
          <div className="courses-full-grid">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                className="course-card-full"
                whileHover={{ y: -10 }}
                layout
              >
                <div className="course-header">
                  <div className="course-icon-large">{course.icon}</div>
                  <div className="course-meta">
                    <span className="course-category-tag">
                      {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                    </span>
                    <span className="course-level">{course.level}</span>
                  </div>
                </div>

                <h3 className="course-title-full">{course.title}</h3>
                <p className="course-subtitle-full">{course.subtitle}</p>
                <p className="course-desc-full">{course.description}</p>

                <div className="course-features">
                  <h4>What You'll Learn:</h4>
                  <ul>
                    {course.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="course-footer">
                  <div className="course-info">
                    <div className="info-item">
                      <span className="info-label">Duration</span>
                      <span className="info-value">{course.duration}</span>
                    </div>
                    {course.certification && (
                      <div className="info-item">
                        <span className="info-label">Certification</span>
                        <span className="info-value cert">{course.certification}</span>
                      </div>
                    )}
                  </div>
                  <Link to="/#contact" className="course-enroll-btn">
                    Enroll Now <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Certifications</span>
            <h2 className="section-title">
              Recognized <span>Certifications</span>
            </h2>
            <p className="section-subtitle">
              Get certified from prestigious academies
            </p>
          </div>

          <div className="cert-cards">
            <motion.div
              className="cert-card"
              whileHover={{ y: -5 }}
            >
              <div className="cert-icon">🎓</div>
              <h3>Akhila Bhartiya Gandharv Mahavidyalaya Mandal</h3>
              <p>University Grants Commission (UGC) Recognized</p>
              <span className="cert-badge">Government Recognized</span>
            </motion.div>

            <motion.div
              className="cert-card"
              whileHover={{ y: -5 }}
            >
              <div className="cert-icon">🏛️</div>
              <h3>Odisha Sangeet Natak Academy</h3>
              <p>Government of Odisha</p>
              <span className="cert-badge">State Recognized</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta-section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Musical Journey?</h2>
            <p>
              Whether you dream of becoming a playback singer, a composer, a live
              performer, or simply want to deepen your relationship with music —
              you'll find your rhythm here.
            </p>
            <div className="cta-buttons">
              <a href="tel:9937023166" className="btn-primary">
                Call Us: 9937023166
              </a>
              <Link to="/#contact" className="btn-secondary">
                Send Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Courses;