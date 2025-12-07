import React from 'react';
import './HowToUse.css';

const HowToUse = () => {
  const steps = [
    {
      number: "01",
      title: "Browse the Collection",
      description: "Explore our extensive library of Gemini prompts, organized by category and use case. Each prompt is documented with detailed descriptions and expected outcomes."
    },
    {
      number: "02",
      title: "Select Your Prompt",
      description: "Choose a prompt that matches your creative vision. Review the examples and variations to find the perfect fit for your image enhancement needs."
    },
    {
      number: "03",
      title: "Apply to Gemini",
      description: "Copy the prompt and paste it into Google's Gemini AI with your image. The AI will analyze and enhance your image based on the prompt instructions."
    },
    {
      number: "04",
      title: "Refine & Iterate",
      description: "Experiment with different prompts and variations. Save your favorites and share your results with the community to help others discover new possibilities."
    }
  ];

  return (
    <section className="how-to-use">
      <div className="how-to-container">
        <div className="section-header">
          <h2 className="section-title">How to Use</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
