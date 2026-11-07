import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import './Navbar.scss';

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll-aware background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="logo-container" aria-label="CrossTech Home">
            {theme === 'dark' ? (
              <img alt="CrossTech Logo" className="logo-img-dark" src="/logo-dark.svg" style={{ height: '28px', width: 'auto' }} />
            ) : (
              <img alt="CrossTech Logo" className="logo-icon" src="/logo-light.svg" style={{ height: '28px', width: 'auto' }} />
            )}
            <span className="logo-text">CROSSTECH</span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </nav>

          {/* Right actions */}
          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            {/* Hamburger — mobile only */}
            <button
              className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'mobile-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation Menu">
        <div className="mobile-drawer-header">
          <Link to="/" className="logo-container" onClick={() => setMenuOpen(false)}>
            <span className="logo-text">CROSSTECH</span>
          </Link>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Link to="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
            Get a Free Consultation →
          </Link>
          <div className="mobile-drawer-tagline">Building digital excellence for clients worldwide</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
