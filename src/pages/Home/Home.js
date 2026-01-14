import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Principal from '../../components/Principal/Principal';
import Mission from '../../components/Mission/Mission';
import CoursesPreview from '../../components/CoursesPreview/CoursesPreview';
import Faculty from '../../components/Faculty/Faculty';
import Brahmadarsan from '../../components/Brahmadarsan/Brahmadarsan';
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import ContactForm from '../../components/ContactForm/ContactForm';

import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on page load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="home-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <About />
      <Principal />
      <Mission />
      <CoursesPreview />
      <Faculty />
      <Brahmadarsan />
      <ServicesPreview />
      <WhyChooseUs />
      <ContactForm />
    </motion.div>
  );
};

export default Home;