import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft } from 'react-icons/fa';

import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Kuldeep Pattnaik',
    role: 'Playback Singer',
    quote:
      'I had an amazing experience learning at this music institute. The faculty gave me the guidance and confidence to pursue a professional career in playback singing. Every lesson was a step closer to my dream.',
  },
  {
    name: 'Suman Dash',
    role: 'Playback Singer',
    quote:
      'For anyone who dreams of coming into the limelight, this is the place to be. The training I received here shaped my voice, my discipline, and my stage presence. I owe my career to the foundation built at this school.',
  },
  {
    name: 'Manyatha Acharya',
    role: 'Professional Singer',
    quote:
      'Joining this institute has been a truly life-changing experience. The personalized mentorship and exposure to real-world performance opportunities helped me grow as an artist beyond what I ever imagined.',
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials-section section" ref={sectionRef}>
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
            Testimonials
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our <span>Students</span> Say
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from our alumni who have gone on to achieve remarkable success
            in the music industry
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
