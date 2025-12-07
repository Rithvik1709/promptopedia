import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './PromptsLibrary.css';

const PromptsLibrary = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState(null);

  const prompts = [
    {
      id: 1,
      title: "Professional Portrait",
      category: "Photography",
      image: "Portrait",
      prompt: "Enhance this portrait with professional studio lighting, soft bokeh background, natural skin tones, sharp focus on eyes, gentle shadows, and cinematic color grading"
    },
    {
      id: 2,
      title: "Golden Hour Landscape",
      category: "Nature",
      image: "Landscape",
      prompt: "Transform this landscape into a golden hour masterpiece with warm sunset colors, dramatic sky, enhanced depth of field, vibrant but natural tones, and atmospheric haze"
    },
    {
      id: 3,
      title: "Minimalist Product Shot",
      category: "Commercial",
      image: "Product",
      prompt: "Create a clean minimalist product photograph with pure white background, soft diffused lighting, crisp details, subtle shadows for depth, and professional color accuracy"
    },
    {
      id: 4,
      title: "Impressionist Art Style",
      category: "Artistic",
      image: "Art",
      prompt: "Apply impressionist painting style with visible brush strokes, vibrant color palette, light-focused composition, soft edges, and dreamy atmospheric quality"
    },
    {
      id: 5,
      title: "Cinematic Film Look",
      category: "Film",
      image: "Cinema",
      prompt: "Add cinematic film aesthetic with anamorphic lens flares, teal and orange color grading, enhanced contrast, film grain texture, and widescreen composition"
    },
    {
      id: 6,
      title: "Vintage 70s Aesthetic",
      category: "Retro",
      image: "Vintage",
      prompt: "Apply authentic 1970s vintage look with faded warm colors, soft focus, subtle vignette, film grain, and nostalgic color cast with yellowed highlights"
    },
    {
      id: 7,
      title: "HDR Architecture",
      category: "Architecture",
      image: "Building",
      prompt: "Enhance architectural photography with HDR processing, balanced exposure in highlights and shadows, vibrant colors, crystal clear details, and geometric precision"
    },
    {
      id: 8,
      title: "Fashion Editorial",
      category: "Fashion",
      image: "Fashion",
      prompt: "Create high-fashion editorial look with dramatic lighting, bold contrast, vibrant color grading, sharp focus on subject, and professional magazine-quality finish"
    },
    {
      id: 9,
      title: "Moody Dark Portrait",
      category: "Portrait",
      image: "Moody",
      prompt: "Transform into moody dark portrait with dramatic chiaroscuro lighting, deep shadows, desaturated colors, high contrast, and emotional atmospheric depth"
    },
    {
      id: 10,
      title: "Food Photography",
      category: "Commercial",
      image: "Food",
      prompt: "Enhance food photography with appetizing colors, natural lighting from top-left, shallow depth of field, crisp details, and professional restaurant-quality presentation"
    },
    {
      id: 11,
      title: "Ethereal Fantasy",
      category: "Fantasy",
      image: "Fantasy",
      prompt: "Create ethereal fantasy aesthetic with dreamy soft focus, magical light particles, pastel color palette, mystical atmosphere, and otherworldly glow effects"
    },
    {
      id: 12,
      title: "Street Photography",
      category: "Documentary",
      image: "Street",
      prompt: "Enhance with authentic street photography style: high contrast black and white or gritty colors, candid feel, strong composition, urban atmosphere, and photojournalistic quality"
    },
    {
      id: 13,
      title: "Neon Cyberpunk",
      category: "Sci-Fi",
      image: "Cyberpunk",
      prompt: "Transform with cyberpunk aesthetic featuring neon lights, vibrant pink and blue colors, urban night scene, futuristic atmosphere, and high-tech dystopian feel"
    },
    {
      id: 14,
      title: "Soft Pastel Portrait",
      category: "Portrait",
      image: "Pastel",
      prompt: "Apply soft pastel aesthetic with gentle colors, dreamy lighting, reduced contrast, airy feel, romantic atmosphere, and delicate skin tones"
    },
    {
      id: 15,
      title: "Black & White Classic",
      category: "Classic",
      image: "BW",
      prompt: "Convert to timeless black and white with rich tonal range, balanced contrast, deep blacks, bright highlights, and classic photographic quality"
    }
  ];

  const handleCopy = async (prompt, id) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="library-page">
      {/* Header */}
      <header className="library-header">
        <div className="library-header-content">
          <div className="library-brand" onClick={() => navigate('/')}>
            <h1>PROMPTOPEDIA</h1>
            <p>Prompts Library</p>
          </div>
          <div className="library-user-section">
            <span className="user-email">{user?.email}</span>
            <button className="sign-out-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="library-main">
        <div className="library-container">
          <div className="library-intro">
            <h2>Welcome to Your Prompt Library</h2>
            <p>Hover over any card to reveal the full prompt. Click the copy button to use it with Gemini.</p>
          </div>

          <div className="prompts-grid">
            {prompts.map((item) => (
              <div key={item.id} className="prompt-card">
                <div className="card-front">
                  <div className="card-image">
                    <span className="image-placeholder">{item.image}</span>
                  </div>
                  <div className="card-info">
                    <span className="card-category">{item.category}</span>
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                </div>
                
                <div className="card-back">
                  <div className="prompt-content">
                    <p className="prompt-text">{item.prompt}</p>
                    <button
                      className={`copy-btn ${copiedId === item.id ? 'copied' : ''}`}
                      onClick={() => handleCopy(item.prompt, item.id)}
                    >
                      {copiedId === item.id ? '✓ Copied!' : 'Copy Prompt'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="library-footer">
        <p>© 2024 Promptopedia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PromptsLibrary;
