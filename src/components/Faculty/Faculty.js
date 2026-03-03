import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMusic } from 'react-icons/fa';

// Image Imports
import siddharthImg from '../../assets/images/faculty/siddharth-choudhury.jpg';
import hrishikeshImg from '../../assets/images/faculty/hrishikesh-prasad.jpg';
import ushaImg from '../../assets/images/faculty/usha-jena.jpg';
import divyashaImg from '../../assets/images/faculty/divyasha-mohanty.jpg';
import bidyalaxmiImg from '../../assets/images/faculty/bidyalaxmi-moharana.jpg';

import './Faculty.css';

gsap.registerPlugin(ScrollTrigger);

const Faculty = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faculty-intro',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faculty-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.faculty-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faculty-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const facultyMembers = [
    {
      id: 1,
      name: 'Pandit Siddharth Shankar Choudhury',
      role: 'Head of Music',
      specialization: 'Hindustani Classical',
      credential: 'Disciple of Ustad Rashid Khan',
      image: siddharthImg,
    },
    {
      id: 2,
      name: 'Hrishikesh Prasad',
      role: 'Faculty',
      specialization: 'Music Production Course',
      credential: 'DAWs, Beat-making, Mixing & Mastering',
      image: hrishikeshImg,
    },
    {
      id: 3,
      name: 'Usha Jena',
      role: 'Faculty',
      specialization: 'Akhila Bhartiya Gandharv Mahavidyalaya Mandal',
      credential: 'UGC Certified Curriculum',
      image: ushaImg,
    },
    {
      id: 4,
      name: 'Divyasha Mohanty',
      role: 'Faculty',
      specialization: 'Odisha Literature & Cultural Department',
      credential: 'Government of Odisha Certified',
      image: divyashaImg,
    },
    {
      id: 5,
      name: 'Bidyalaxmi Moharana',
      role: 'Faculty',
      specialization: 'Specialized Courses',
      credential: 'Professional Grooming Expert',
      image: bidyalaxmiImg,
    },
  ];

  return (
    <section className="faculty-section section" ref={sectionRef}>
      <div className="faculty-bg-pattern"></div>

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
            Our Faculty
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Meet Our <span>Expert Team</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dedicated instructors with professional expertise and passion for teaching
          </motion.p>
        </div>

        {/* Faculty Intro */}
        <div className="faculty-intro">
          <p>
            Our team of dedicated and experienced instructors brings a blend of professional expertise and deep-rooted passion for teaching. Trained in both Indian classical and Western music traditio[...]
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="faculty-grid">
          {facultyMembers.map((member) => (
            <div className="faculty-card" key={member.id}>
              <div className="faculty-image-wrapper">
                <div className="faculty-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="faculty-overlay">
                  <div className="faculty-social">
                    <a
                      href="tel:9937023166"
                      className="social-link"
                      aria-label="Call"
                    >
                      <FaMusic />
                    </a>
                  </div>
                </div>
                <div className="faculty-badge">
                  <FaMusic />
                </div>
              </div>

              <div className="faculty-info">
                <h3 className="faculty-name">{member.name}</h3>
                <span className="faculty-role">{member.role}</span>
                <div className="faculty-details">
                  <p className="faculty-specialization">{member.specialization}</p>
                  <p className="faculty-credential">{member.credential}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty CTA */}
        <motion.div
          className="faculty-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h3>Learn from the Best</h3>
            <p>
              Join our school and get personalized guidance from industry experts who have dedicated their lives to music.
            </p>
          </div>
          <a href="tel:9937023166" className="btn-primary">
            <span>Enroll Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;