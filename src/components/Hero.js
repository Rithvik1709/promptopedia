import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="logo-section">
          <h1 className="logo-title">PROMPTOPEDIA</h1>
          <div className="logo-underline"></div>
          <p className="subtitle">The Free Encyclopedia of Gemini Prompts</p>
        </div>
        
        <div className="auth-buttons">
          <button className="btn btn-signin">Sign In</button>
          <button className="btn btn-signup">Sign Up</button>
        </div>
        
        <div className="hero-description">
          <p>
            A comprehensive collection of carefully curated Gemini prompts designed to enhance 
            and transform your images with artificial intelligence. Discover the perfect prompt 
            for your creative vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
