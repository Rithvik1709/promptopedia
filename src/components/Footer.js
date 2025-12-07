import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">PROMPTOPEDIA</h3>
            <p className="footer-description">
              The comprehensive encyclopedia of Gemini prompts for image enhancement. 
              Empowering creators with AI-driven possibilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#browse">Browse Prompts</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#about">About</a></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#community">Submit a prompt</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:rithvikbng@gmail.com">rithvikbng@gmail.com</a>
              </li>
              <li>
                <span className="contact-label">Support:</span>
                <a href="mailto:rithvikbng@gmail.com">rithvikbng@gmail.com</a>
              </li>
              <li>
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com/promptopedia" target="_blank" rel="noopener noreferrer">
                  @promptopedia
                </a>
              </li>
            </ul>
            <div className="social-links">
              <a href="#twitter" className="social-link" aria-label="Twitter">𝕏</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Promptopedia. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="separator">•</span>
              <Link to="/terms">Terms of Service</Link>
              <span className="separator">•</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
