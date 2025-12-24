# Hygrosphere Marketing Website

A production-ready marketing website for Hygrosphere, a three-in-one solar water station for off-grid communities. Built for the Conrad Challenge submission.

## Features

- **6 Complete Pages**: Home, How It Works, Impact, Technology, Team, Contact
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Stack**: React + Vite + React Router
- **Accessible**: Semantic HTML, proper ARIA labels, keyboard navigation
- **Smooth Animations**: Scroll reveal effects and hover states
- **Judge-Focused**: Clear validation status, technical documentation, impact metrics

## Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:3000`

## Project Structure

```
hygrosphere-website/
├── src/
│   ├── components/       # Header, Footer
│   ├── pages/           # All 6 pages
│   ├── utils/           # Scroll reveal utility
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & design system
├── public/              # Static assets
├── index.html
├── package.json
└── vite.config.js
```

## Pages

1. **Home** - Hero, problem overview, 3-step summary, competitive advantage, judges section
2. **How It Works** - Detailed technical explanations with SVG diagrams
3. **Impact** - Problem stats, comparison table, SDG alignment, use cases
4. **Technology** - Specifications, performance metrics, cost analysis, manufacturing
5. **Team** - Founder bios, timeline, values
6. **Contact** - Partnership form with validation

## Design System

- **Colors**: Primary (blue), Secondary (green), Accent (orange)
- **Typography**: Inter font family with consistent scale
- **Spacing**: CSS custom properties for consistent spacing
- **Components**: Reusable button, card, and form styles

## Key Features for Judges

- Clear validation status indicators (✅ tested, 🔄 in progress, 📋 planned)
- Detailed technical documentation with references
- Performance metrics table with validation methods
- Cost analysis and scalability information
- Impact projections and SDG alignment
- Competitive differentiation clearly stated

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Contact form currently logs to console (update with backend API)
- Email placeholder in contact section (update with actual contact)
- All performance metrics are clearly labeled as targets/prototype results
- SVG illustrations are simple and can be replaced with photos/detailed diagrams

## License

Built for Conrad Challenge submission.

