import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="logo-circle">
            <span className="logo-letter">T</span>
          </div>
          <div className="logo-text">T. Shourie</div>
          <div className="logo-subtext">School of Music</div>
        </motion.div>

        <div className="loader-music-notes">
          {[...Array(7)].map((_, i) => (
            <motion.span
              key={i}
              className="music-note"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, -80, -140],
                x: [0, (i - 3) * 25, (i - 3) * 40],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeOut',
              }}
            >
              {i % 2 === 0 ? '♪' : '♫'}
            </motion.span>
          ))}
        </div>

        <div className="loader-progress">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <span className="progress-text">{progress}%</span>
        </div>

        <motion.p
          className="loader-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Where Passion Meets Practice
        </motion.p>

        <div className="loader-waves">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="wave-bar"
              animate={{
                scaleY: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <div className="loader-pattern">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="pattern-circle"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;