import React from 'react';
import './App.css';
import Hero from './components/Hero';
import HowToUse from './components/HowToUse';
import SneakPeak from './components/SneakPeak';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <HowToUse />
      <SneakPeak />
      <BeforeAfterSlider />
      <Footer />
    </div>
  );
}

export default App;
