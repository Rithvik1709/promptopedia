# Promptopedia

A modern, Wikipedia-style landing page for Gemini prompts designed to enhance images. Built with React and styled with a clean black and white aesthetic.

## Features

- **Hero Section**: Eye-catching header with Sign In/Sign Up buttons and project description
- **How to Use**: Step-by-step guide on using Gemini prompts (4 steps with hover effects)
- **Sneak Peak**: Showcase of 6 example prompt categories with detailed cards
- **Before/After Slider**: Interactive comparison slider to demonstrate image transformations
- **Footer**: Comprehensive footer with contact information, quick links, and social media

## Design Highlights

- Clean black and white color scheme
- Wikipedia-inspired typography using Libre Baskerville (serif) and Inter (sans-serif)
- Modern UI with smooth transitions and hover effects
- Fully responsive design for mobile and desktop
- Interactive elements with engaging animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd promptopedia
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
promptopedia/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── HowToUse.js
│   │   ├── HowToUse.css
│   │   ├── SneakPeak.js
│   │   ├── SneakPeak.css
│   │   ├── BeforeAfterSlider.js
│   │   ├── BeforeAfterSlider.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Components

### Hero
Landing section with branding, authentication buttons, and introductory text.

### HowToUse
Four-step guide explaining how to use Gemini prompts with interactive hover cards.

### SneakPeak
Grid of 6 example prompt categories including:
- Portrait Enhancement
- Landscape Transformation
- Product Photography
- Artistic Style Transfer
- Vintage Film Look
- HDR Enhancement

### BeforeAfterSlider
Interactive slider with three different examples demonstrating image transformations.

### Footer
Comprehensive footer with:
- About section
- Quick links
- Resources
- Contact information
- Social media links

## Customization

### Colors
The project uses a black and white theme. To customize colors, edit the CSS files in the components folder.

### Fonts
- **Headings**: Libre Baskerville (serif)
- **Body**: Inter (sans-serif)

Fonts are loaded from Google Fonts in `public/index.html`.

### Content
Edit the component files to update text, add more examples, or modify the layout.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions:
- Email: info@promptopedia.com
- Support: support@promptopedia.com
