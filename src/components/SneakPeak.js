import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SneakPeak.css';

const SneakPeak = () => {
  const navigate = useNavigate();
  const examples = [
    {
      title: "Pencil Sketch Portrait",
      category: "Art",
      useCase: "Portfolio showcases, gallery previews",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765098180/WhatsApp_Image_2025-12-07_at_2.07.50_PM_nxh6ee.jpg"
    },
    {
      title: "Festive Fashion Illustration",
      category: "Fashion",
      useCase: "Editorial spreads, campaign moodboards",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765098179/WhatsApp_Image_2025-12-07_at_2.07.50_PM_1_oadecd.jpg"
    },
    {
      title: "Notebook Portrait Sketch",
      category: "Art",
      useCase: "Editorial concepts, social posts",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765098180/WhatsApp_Image_2025-12-07_at_2.07.48_PM_1_wtv4yd.jpg"
    },
    {
      title: "Artistic Style Transfer",
      category: "Art",
      useCase: "Creative projects, wall art",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765097105/WhatsApp_Image_2025-12-07_at_2.07.48_PM_yssnee.jpg"
    },
    {
      title: "Autumn Fashion",
      category: "Fashion",
      useCase: "Lookbook concepts, seasonal campaigns",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765098179/WhatsApp_Image_2025-12-07_at_2.07.49_PM_1_ifm0e5.jpg"
    },
    {
      title: "Bold Ink Portrait",
      category: "Art",
      useCase: "Poster art, social highlights",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765098179/WhatsApp_Image_2025-12-07_at_2.07.51_PM_idcrf0.jpg"
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
              {example.image && (
                <div className="card-image-container">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    loading="lazy"
                    decoding="async"
                    className="card-preview-image"
                  />
                </div>
              )}
              <div className="card-header">
                <span className="category-badge">{example.category}</span>
              </div>
              <h3 className="card-title">{example.title}</h3>
              <div className="card-footer">
                <span className="use-case-label">Best for:</span>
                <span className="use-case-text">{example.useCase}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <button className="btn-explore" onClick={() => navigate('/login')}>Explore All Prompts</button>
        </div>
      </div>
    </section>
  );
};

export default SneakPeak;
