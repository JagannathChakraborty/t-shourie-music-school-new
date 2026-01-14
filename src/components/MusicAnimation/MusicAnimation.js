import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MusicAnimation.css';

const MusicAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const bars = container.querySelectorAll('.sound-bar');

    bars.forEach((bar, index) => {
      gsap.to(bar, {
        scaleY: Math.random() * 0.5 + 0.5,
        duration: 0.3 + Math.random() * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.1
      });
    });
  }, []);

  return (
    <div className="music-animation" ref={containerRef}>
      <div className="sound-bars">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sound-bar"
            style={{
              height: `${Math.random() * 60 + 40}%`,
            }}
          />
        ))}
      </div>

      <div className="music-symbols">
        {['♪', '♫', '♩', '♬', '𝄞'].map((symbol, i) => (
          <span
            key={i}
            className="music-symbol"
            style={{
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {symbol}
          </span>
        ))}
      </div>

      <div className="circular-waves">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="wave-circle"
            style={{ animationDelay: `${i * 1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicAnimation;