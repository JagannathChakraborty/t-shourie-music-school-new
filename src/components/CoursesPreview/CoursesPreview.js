import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaMusic,
  FaMicrophone,
  FaHeadphones,
  FaGuitar,
  FaCompactDisc,
  FaTv,
  FaTheaterMasks,
  FaRecordVinyl,
  FaArrowRight,
  FaCertificate,
  FaGraduationCap,
} from 'react-icons/fa';
import './CoursesPreview.css';

gsap.registerPlugin(ScrollTrigger);

const CoursesPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.course-category',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.courses-categories',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.course-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.courses-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.certification-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.certifications-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      id: 'grooming',
      title: 'Grooming Courses',
      subtitle: 'Professional Training',
      icon: <FaMicrophone />,
      color: 'primary',
    },
    {
      id: 'teaching',
      title: 'Teaching Courses',
      subtitle: 'Classical Training',
      icon: <FaMusic />,
      color: 'secondary',
    },
    {
      id: 'specialized',
      title: 'Specialized Courses',
      subtitle: 'Advanced Programs',
      icon: <FaHeadphones />,
      color: 'gold',
    },
  ];

  const groomingCourses = [
    {
      icon: <FaTv />,
      title: 'Reality Shows',
      description: 'Training for TV auditions and competitive performance',
    },
    {
      icon: <FaTheaterMasks />,
      title: 'Stage Shows',
      description: 'Stage presence, live performance techniques, mic handling',
    },
    {
      icon: <FaRecordVinyl />,
      title: 'Studio Singing',
      description: 'Voice control, studio etiquette, recording techniques',
    },
    {
      icon: <FaMicrophone />,
      title: 'Karaoke Singing',
      description: 'For hobbyists looking to improve performance & style',
    },
    {
      icon: <FaCompactDisc />,
      title: 'Music Production',
      description: 'Hands-on course covering DAWs, beat-making, mixing & mastering',
    },
  ];

  const teachingCourses = [
    {
      icon: <FaMusic />,
      title: 'Hindustani Classical',
      description: 'Traditional Indian classical music training',
    },
    {
      icon: <FaGuitar />,
      title: 'Western Music',
      description: 'Western vocal and instrumental techniques',
    },
  ];

  const specializedCourses = [
    {
      title: 'Vocal Music',
      items: ['Classical', 'Semi-Classical', 'Light Music'],
    },
    {
      title: 'Music Theory & Notation',
      items: ['Indian Format', 'Western Format'],
    },
  ];

  const certifications = [
    {
      icon: <FaCertificate />,
      title: 'Akhila Bhartiya Gandharv Mahavidyalaya Mandal',
      subtitle: 'University Grants Commission (UGC)',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Odisha Sangeet Natak Academy',
      subtitle: 'Government of Odisha',
    },
  ];

  return (
    <section className="courses-preview-section section" ref={sectionRef}>
      <div className="courses-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
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
            Our Courses
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore Our <span>Programs</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Structured programs in vocal and instrumental music, as well as professional grooming for real-world musical careers
          </motion.p>
        </div>

        {/* Course Categories */}
        <div className="courses-categories">
          {categories.map((category) => (
            <Link
              to={`/courses/${category.id}`}
              className={`course-category category-${category.color}`}
              key={category.id}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-content">
                <h3>{category.title}</h3>
                <span>{category.subtitle}</span>
              </div>
              <div className="category-arrow">
                <FaArrowRight />
              </div>
            </Link>
          ))}
        </div>

        {/* Grooming Courses */}
        <div className="courses-block">
          <div className="block-header">
            <div className="block-icon">
              <FaMicrophone />
            </div>
            <div className="block-title">
              <h3>Grooming For</h3>
              <p>Professional training for aspiring performers</p>
            </div>
          </div>

          <div className="courses-grid">
            {groomingCourses.map((course, index) => (
              <div className="course-card" key={index}>
                <div className="course-icon">{course.icon}</div>
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <div className="course-hover-line"></div>
              </div>
            ))}
          </div>

          <p className="courses-note">
            These programs are perfect for students who dream of stepping into the music industry, as well as those who want to shine in local shows, content creation, or digital platforms like YouTube and Instagram.
          </p>
        </div>

        {/* Teaching Courses */}
        <div className="courses-block teaching-block">
          <div className="block-header">
            <div className="block-icon">
              <FaMusic />
            </div>
            <div className="block-title">
              <h3>Teaching Courses</h3>
              <p>Classical music training by expert instructors</p>
            </div>
          </div>

          <div className="courses-grid teaching-grid">
            {teachingCourses.map((course, index) => (
              <div className="course-card teaching-card" key={index}>
                <div className="course-icon">{course.icon}</div>
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <div className="course-hover-line"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Courses */}
        <div className="courses-block specialized-block">
          <div className="block-header">
            <div className="block-icon">
              <FaHeadphones />
            </div>
            <div className="block-title">
              <h3>Specialized Courses</h3>
              <p>Advanced and core music programs</p>
            </div>
          </div>

          <div className="specialized-grid">
            {specializedCourses.map((course, index) => (
              <div className="specialized-card" key={index}>
                <h4>{course.title}</h4>
                <ul>
                  {course.items.map((item, idx) => (
                    <li key={idx}>
                      <FaMusic className="list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications-section">
          <h3 className="certifications-title">Exam Preparation & Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div className="certification-card" key={index}>
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h4>{cert.title}</h4>
                  <span>{cert.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="courses-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h3>Ready to Start Your Musical Journey?</h3>
            <p>Explore all our courses and find the perfect program for your goals.</p>
          </div>
          <Link to="/courses" className="btn-primary">
            <span>View All Courses</span>
            <FaArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesPreview;