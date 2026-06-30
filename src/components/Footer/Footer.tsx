import React from 'react';
import { useTheme } from '../../ThemeContext';
import './Footer.scss';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            {theme === 'dark' ? (
              <img 
                alt="CrossTech Logo" 
                className="footer-logo logo-img-dark" 
                src="/logo-dark.svg"
                style={{ height: '64px', width: 'auto' }}
              />
            ) : (
              <img 
                alt="CrossTech Logo" 
                className="footer-logo" 
                src="/logo-light.svg"
                style={{ height: '64px', width: 'auto' }}
              />
            )}
            <span className="footer-title">CROSSTECH</span>
          </div>
          
          <div className="footer-links">
            <a href="#" className="link-hover-pink">Privacy Policy</a>
            <a href="#" className="link-hover-pink">Terms of Service</a>
            <a href="#" className="link-hover-royal">LinkedIn</a>
            <a href="#" className="link-hover-sky">Twitter</a>
          </div>
          
          <div className="footer-copyright">
            © 2024 Cresstech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
