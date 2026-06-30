import React from 'react';
import { useTheme } from '../../ThemeContext';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          {theme === 'dark' ? (
            <img 
              alt="Cresstech Logo" 
              className="logo-img-dark" 
              src="/logo-dark.svg"
              style={{ height: '28px', width: 'auto' }}
            />
          ) : (
            <img 
              alt="Cresstech Logo" 
              className="logo-icon" 
              src="/logo-light.svg"
              style={{ height: '28px', width: 'auto' }}
            />
          )}
          <span className="logo-text">CROSSTECH</span>
        </div>

        <nav className="nav-links">
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#" className="btn-primary">Contact Us</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
