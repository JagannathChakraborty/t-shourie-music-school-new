import { useEffect, useState, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ThreeBackground from './components/ThreeBackground/ThreeBackground';

import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Gallery from './pages/Gallery/Gallery';
import Services from './pages/Services/Services';
import WhyUs from './pages/WhyUs/WhyUs';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      // Navigate to a hash section (e.g. /#contact)
      const id = location.hash.slice(1);
      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80;
          const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          if (lenisRef.current) {
            lenisRef.current.scrollTo(top, { immediate: true });
          } else {
            window.scrollTo({ top, behavior: 'instant' });
          }
        }
      };
      // Multiple attempts to handle page transition delays reliably
      const t1 = setTimeout(scrollToHash, 100);
      const t2 = setTimeout(scrollToHash, 600);
      const t3 = setTimeout(scrollToHash, 1200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <ThreeBackground />
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:category" element={<Courses />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-us" element={<WhyUs />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;