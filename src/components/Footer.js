import React from 'react';
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
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#api">API</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:info@promptopedia.com">info@promptopedia.com</a>
              </li>
              <li>
                <span className="contact-label">Support:</span>
                <a href="mailto:support@promptopedia.com">support@promptopedia.com</a>
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
              <a href="#github" className="social-link" aria-label="GitHub">GitHub</a>
              <a href="#discord" className="social-link" aria-label="Discord">Discord</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Promptopedia. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
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
