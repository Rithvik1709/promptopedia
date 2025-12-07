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
      title: "Impressionist Art Style",
      category: "Artistic",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765097105/WhatsApp_Image_2025-12-07_at_2.07.48_PM_yssnee.jpg",
      prompt: "Apply impressionist painting style with visible brush strokes, vibrant color palette, light-focused composition, soft edges, and dreamy atmospheric quality"
    },
    {
      id: 2,
      title: "Contemplative Window Portrait",
      category: "Portrait",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765106349/WhatsApp_Image_2025-12-07_at_4.46.21_PM_1_dgz3b4.jpg",
      prompt: "A cinematic close-up portrait of a stylish individual standing by a large glass window, gazing thoughtfully at their reflection. The person wears a black turtleneck sweater layered under a fitted dark blazer, creating a sleek and elegant look. The lighting is soft and natural, coming from the window, gently illuminating one side of the face while casting subtle shadows on the other, emphasizing depth and texture. The background is softly blurred, highlighting the calm and introspective mood of the scene. The reflection in the glass adds a sense of duality and contemplation."
    },
    {
      id: 3,
      title: "Gallery Self-Portrait",
      category: "Art",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765106349/WhatsApp_Image_2025-12-07_at_4.46.22_PM_2_fejuzb.jpg",
      prompt: "A man dressed in a tailored black suit stands with his back to the viewer, positioned at the center of a bright, minimalist art gallery. Soft, diffused daylight streams in from unseen skylights, illuminating the clean white walls and subtle geometric lines of the modern architectural space. In front of him hangs a large portrait-a painterly, expressive rendition of his own face. The artwork features loose, confident brushstrokes, rich texture, and a slightly abstract, emotional interpretation of his features. The atmosphere is quiet and contemplative, emphasizing the surreal moment of the man observing himself. Ensure the face in the portrait matches the man with 100% accuracy, maintaining clear resemblance while preserving the artistic, painterly style."
    },
    {
      id: 4,
      title: "Urban Noir Portrait",
      category: "Photography",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765106349/WhatsApp_Image_2025-12-07_at_4.46.22_PM_1_e9vlgr.jpg",
      prompt: "Black-and-white cinematic portrait of a young man walking through a busy city street at night. He stands sharply in focus while the crowd around him is blurred with dynamic motion, creating a dramatic sense of isolation and introspection. Soft urban lights glow in the background, forming abstract bokeh streaks. His expression is intense and thoughtful, hair slightly tousled, wearing a dark coat over a partially unbuttoned shirt. High-contrast lighting, moody atmosphere, shallow depth of field, dramatic blur, film-noir aesthetic, ultra-realistic 8K detail, poster-style composition."
    },
    {
      id: 5,
      title: "Creative Levitation Studio",
      category: "Commercial",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765106348/WhatsApp_Image_2025-12-07_at_4.46.22_PM_pggomd.jpg",
      prompt: "Create a cinematic levitation portrait of a man sitting midair while working on a laptop. Replace the face with the uploaded person's face while keeping the same body pose, outfit, and styling. The subject wears a modern black blazer, grey pants, and white sneakers. The scene is a minimal studio room with soft natural light from large windows, creating long directional shadows. Surround the subject with floating creative tools: multiple cameras, headphones, notebooks, sketchbooks, and professional software icons - Adobe Photoshop (PS), Adobe Lightroom (LR/LS), Adobe Premiere Pro (PR), and Adobe After Effects (AE). The icons should appear as glowing floating tiles, evenly distributed around the subject with a clean, futuristic look. Use dramatic cinematic lighting, crisp shadows, and cool-toned color grading. Style: ultra-sharp, realistic composite photography, high-end digital retouching, soft DOF, clean minimal background. Emphasize: realistic levitation, symmetrical floating objects, rim light on the subject, dynamic composition, modern creative-professional aesthetic."
    },
    {
      id: 6,
      title: "Vintage Driver Portrait",
      category: "Photography",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765106348/WhatsApp_Image_2025-12-07_at_4.46.20_PM_1_qsprpo.jpg",
      prompt: "Create a hyper-realistic portrait of a man (use the uploaded picture as reference for the face) sitting in the driver's seat of a car, wearing a black shirt, combined with a faded light gray jacket and light gray wide-leg pants. White shoes should be visible, complementing the casual look. Round sunglasses with dark lenses should be positioned on the nose, highlighting a confident and slightly ironic facial expression. Relaxed posture: one arm on the sports steering wheel, the other supporting the head, conveying a relaxed look. The interior of the car should include side windows showing urban scenery (trees, buildings and part of another vehicle), and a black textured seat. Soft natural lighting, simulating daylight coming through the windows, creating a contrast between the warm colors of the clothing and the neutral environment of the car. Vintage style, with desaturated tones and slightly grainy textures, evoking a nostalgic atmosphere. Dominant tones of gray, white and black, with a balance between external light and internal shadows. Slightly elevated perspective, framing that includes the top of the knees to the head, with the steering wheel partially visible on the right."
    },
    {
      id: 7,
      title: "Dark Knight Contemplation",
      category: "Art",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765106348/WhatsApp_Image_2025-12-07_at_4.46.21_PM_lc36hk.jpg",
      prompt: "A dynamic, cinematic portrait of a man with hair styled exactly like the reference photo, wearing a sleek black suit and a black turtleneck. Captured in a medium-close vertical profile as he tilts his head slightly backward in a moment of transcendence and deep contemplation. Dozens of shadowy bats swirl around him in chaotic, dramatic motion, evoking the iconic aura of Batman as their wings slice through the air. Soft white fog curls around his silhouette, adding depth and mystery against a deep black background. Tiny particles of light drift like glowing embers and floating dust, subtly illuminating the bats' wings as they pass. Hyper-detailed, atmospheric, dramatic rim-lighting, soft DOF, dark cinematic aesthetic."
    },
    {
      id: 8,
      title: "Paper Dreams - Little Prince",
      category: "Art",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765106348/WhatsApp_Image_2025-12-07_at_4.46.20_PM_2_nmqlig.jpg",
      prompt: "A surreal, artistic portrait of a young man (use the uploaded picture as reference for the face) lying peacefully sideways in a whimsical, handcrafted paper world. The scene is composed entirely of origami-style elements — folded paper textures, geometric shapes, and layered blue paper waves forming a circular, dreamlike pool around him. The man is wearing a bright blue shirt and cream-colored pants, styled to look as if they are made from folded paper. He has a calm, serene expression and holds a red rose gently to his chest, symbolizing love or dreams. His bare feet rest softly against the paper surface. A long yellow scarf swirls around him gracefully, resembling a ribbon flowing in the air and wrapping around his neck - reminiscent of The Little Prince. Surrounding him are playful origami animals, including a fox and a raccoon plays with each other, and several colorful fish, all crafted from paper in shades of orange, gray, yellow, and blue. The overall scene has a magical, handcrafted atmosphere, combining dreamlike surrealism with paper art aesthetics. Lighting is soft yet dramatic, emphasizing textures and shadows in the folds of the paper. The color palette is dominated by deep blues, accented with yellow, red, and orange, creating visual warmth and harmony. The background features a circular whirlpool-like composition that draws focus toward the subject's peaceful face, suggesting themes of imagination, innocence, and serenity. The image has a cinematic, fairytale-like quality, with high contrast, fine detail, and realistic shadows enhancing the tactile paper effect."
    },
    {
      id: 9,
      title: "VHS Retro Glitch",
      category: "Style",
      image: "https://res.cloudinary.com/dif9bbthf/image/upload/v1765098180/WhatsApp_Image_2025-12-07_at_2.07.49_PM_ppgfil.jpg",
      prompt: "Overlay strong VHS tape distortion while preserving original image clarity underneath. Include jittering horizontal tears, warped frame edges, rainbow chroma shifts, grain, and static bursts. Deep crushed shadows with purple-blue hues. Maintain photo identity — only add film degradation."
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
                    {item.image && item.image.startsWith('http') ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <span className="image-placeholder">{item.image}</span>
                    )}
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
        <p>© 2025 Promptopedia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PromptsLibrary;
