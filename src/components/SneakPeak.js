import React from 'react';
import './SneakPeak.css';

const SneakPeak = () => {
  const examples = [
    {
      title: "Portrait Enhancement",
      prompt: "Enhance this portrait with professional studio lighting, soft focus background, and vibrant but natural colors",
      category: "Photography",
      useCase: "Professional headshots, social media profiles"
    },
    {
      title: "Landscape Transformation",
      prompt: "Transform this landscape into a dramatic sunset scene with enhanced colors, golden hour lighting, and atmospheric depth",
      category: "Nature",
      useCase: "Travel photography, scenic prints"
    },
    {
      title: "Product Photography",
      prompt: "Create a clean, minimalist product shot with white background, professional lighting, and enhanced details",
      category: "Commercial",
      useCase: "E-commerce, marketing materials"
    },
    {
      title: "Artistic Style Transfer",
      prompt: "Apply an impressionist painting style with visible brush strokes, vibrant colors, and artistic interpretation",
      category: "Art",
      useCase: "Creative projects, wall art"
    },
    {
      title: "Vintage Film Look",
      prompt: "Add a vintage film aesthetic with grain, faded colors, vignette, and nostalgic 1970s color palette",
      category: "Style",
      useCase: "Retro content, artistic photography"
    },
    {
      title: "HDR Enhancement",
      prompt: "Enhance dynamic range with balanced highlights and shadows, vibrant colors, and crystal-clear details",
      category: "Technical",
      useCase: "Real estate, architectural photography"
    }
  ];

  return (
    <section className="sneak-peak">
      <div className="sneak-peak-container">
        <div className="section-header">
          <h2 className="section-title">Sneak Peak</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Explore our most popular prompt categories</p>
        </div>
        
        <div className="examples-grid">
          {examples.map((example, index) => (
            <div key={index} className="example-card">
              <div className="card-header">
                <span className="category-badge">{example.category}</span>
              </div>
              <h3 className="card-title">{example.title}</h3>
              <div className="prompt-box">
                <p className="prompt-text">"{example.prompt}"</p>
              </div>
              <div className="card-footer">
                <span className="use-case-label">Best for:</span>
                <span className="use-case-text">{example.useCase}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <button className="btn-explore">Explore All Prompts</button>
        </div>
      </div>
    </section>
  );
};

export default SneakPeak;
