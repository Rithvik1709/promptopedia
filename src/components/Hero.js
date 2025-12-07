import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignIn = () => {
    if (user) {
      signOut();
    } else {
      navigate('/login');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleGoToLibrary = () => {
    navigate('/library');
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="logo-section">
          <h1 className="logo-title">PROMPTOPEDIA</h1>
          <div className="logo-underline"></div>
          <p className="subtitle">The Free Encyclopedia of Gemini Prompts</p>
        </div>
        
        <div className="auth-buttons">
          {user ? (
            <>
              <div className="user-welcome">
                Welcome, {user.email}
              </div>
              <button className="btn btn-signup" onClick={handleGoToLibrary}>
                Browse Library
              </button>
              <button className="btn btn-signin" onClick={handleSignIn}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-signin" onClick={handleSignIn}>
                Sign In
              </button>
              <button className="btn btn-signup" onClick={handleSignUp}>
                Sign Up
              </button>
            </>
          )}
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
