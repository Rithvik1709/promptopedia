import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Hero from '../components/Hero';
import HowToUse from '../components/HowToUse';
import SneakPeak from '../components/SneakPeak';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Footer from '../components/Footer';

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Hero />
      {!user && (
        <>
          <HowToUse />
          <SneakPeak />
          <BeforeAfterSlider />
        </>
      )}
      {user && null}
      <Footer />
    </>
  );
};

export default LandingPage;
