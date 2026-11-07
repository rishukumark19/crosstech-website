import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import { World } from '../ui/globe';
import './Hero.scss';

const CYCLING_WORDS = ['convert', 'grow', 'rank', 'impress', 'perform'];

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [wordIndex, setWordIndex] = useState(0);

  // Cycle words every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const globeConfig = useMemo(() => ({
    pointSize: 4,
    globeColor: theme === 'dark' ? "#0a0310" : "#e6e6e6",
    showAtmosphere: true,
    atmosphereColor: theme === 'dark' ? "#ffffff" : "#c4c4c4",
    atmosphereAltitude: 0.1,
    emissive: theme === 'dark' ? "#000000" : "#ffffff",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: theme === 'dark' ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
    ambientLight: theme === 'dark' ? "#38bdf8" : "#0ea5e9",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
    fogColor: theme === 'dark' ? "#0a0a0a" : "#ffffff",
  }), [theme]);

  const sampleArcs = useMemo(() => ([
    { order: 1, startLat: -15.785493, startLng: -47.909029, endLat: 38.89511, endLng: -77.03637, arcAlt: 0.1, color: "#ff007f" },
    { order: 1, startLat: -15.785493, startLng: -47.909029, endLat: 21.028511, endLng: 105.83416, arcAlt: 0.2, color: "#00f3ff" },
    { order: 1, startLat: -15.785493, startLng: -47.909029, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: "#7000ff" },
    { order: 2, startLat: 38.89511, startLng: -77.03637, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.1, color: "#ff007f" },
    { order: 3, startLat: 51.5072, startLng: -0.1276, endLat: 21.028511, endLng: 105.83416, arcAlt: 0.2, color: "#00f3ff" },
  ]), []);

  return (
    <section className="hero" data-section="Welcome">
      <div className="hero-container">
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Live status badge */}
          <div className="badge">
            <span className="badge-dot animate-pulse" />
            Actively building websites for clients
          </div>

          {/* Headline with cycling word */}
          <h1 className="hero-title">
            Websites that{' '}
            <span className="cycling-word-wrapper">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="gradient-text-pink cycling-word"
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {CYCLING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span className="gradient-text-blue">— built & maintained.</span>
          </h1>

          <div className="hero-description">
            <p>We build high-converting, lightning-fast digital experiences and provide 24/7 proactive maintenance.</p>
            <p>Dominate your market while we handle the tech.</p>
          </div>

          <div className="hero-actions">
            <Link to="/contact" className="btn-primary-large">
              Book Your Free Strategy Call
              <svg className="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link to="/work" className="btn-secondary-large">
              View Our Case Studies
              <svg className="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quick trust pills */}
          <div className="hero-trust-pills">
            <span className="trust-pill">✅ 500+ sites launched</span>
            <span className="trust-pill">⚡ Reply within 2 hrs</span>
            <span className="trust-pill">🔒 99.9% uptime</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{ position: 'relative', minHeight: '500px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="visual-wrapper" style={{ position: 'absolute', inset: 0 }}>
            <World globeConfig={globeConfig} data={sampleArcs} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
