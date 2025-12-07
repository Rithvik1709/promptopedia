import React, { useState } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const examples = [
    {
      id: 1,
      title: "Portrait Enhancement",
      beforeAlt: "Original portrait photo",
      afterAlt: "Enhanced portrait with professional lighting"
    },
    {
      id: 2,
      title: "Landscape Transformation",
      beforeAlt: "Original landscape photo",
      afterAlt: "Enhanced landscape with dramatic sunset"
    },
    {
      id: 3,
      title: "Product Photography",
      beforeAlt: "Original product photo",
      afterAlt: "Professional product shot with white background"
    }
  ];

  const [currentExample, setCurrentExample] = useState(0);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="before-after-slider">
      <div className="slider-container">
        <div className="section-header">
          <h2 className="section-title">See the Transformation</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Drag the slider to compare before and after results</p>
        </div>

        <div className="slider-navigation">
          {examples.map((example, index) => (
            <button
              key={example.id}
              className={`nav-btn ${currentExample === index ? 'active' : ''}`}
              onClick={() => {
                setCurrentExample(index);
                setSliderPosition(50);
              }}
            >
              {example.title}
            </button>
          ))}
        </div>

        <div
          className="comparison-container"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchEnd={handleMouseUp}
        >
          <div className="image-container">
            {/* Before Image */}
            <div className="image-wrapper before-image">
              <div className="placeholder-image before">
                <span className="placeholder-text">BEFORE</span>
                <p className="placeholder-desc">{examples[currentExample].beforeAlt}</p>
              </div>
              <div className="image-label before-label">Before</div>
            </div>

            {/* After Image */}
            <div 
              className="image-wrapper after-image"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="placeholder-image after">
                <span className="placeholder-text">AFTER</span>
                <p className="placeholder-desc">{examples[currentExample].afterAlt}</p>
              </div>
              <div className="image-label after-label">After</div>
            </div>

            {/* Slider Handle */}
            <div
              className="slider-handle"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={(e) => {
                setIsDragging(true);
              }}
            >
              <div className="handle-line"></div>
              <div className="handle-circle">
                <div className="handle-arrows">
                  <span className="arrow-left">‹</span>
                  <span className="arrow-right">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-instructions">
          <p>Click and drag the slider or use the navigation buttons to explore different examples</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
