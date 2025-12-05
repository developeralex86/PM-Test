# Premier Markets Home Page

A modern, responsive landing page for Premier Markets built with React, TypeScript, and Tailwind CSS.

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/developeralex86/PM-Test
cd PM-Test
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Production Build

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
PM-Test/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── MarketTicker.tsx # Animated market data ticker
│   │   ├── MarketsSection.tsx # Markets overview
│   │   ├── TradersSection.tsx # Social proof section
│   │   ├── OurMarketsSection.tsx # Markets with tabs and chart
│   │   ├── EmpowerSection.tsx # Features grid
│   │   ├── WithdrawalsSection.tsx # Withdrawals info
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   ├── TestimonialCard.tsx # Individual testimonial component
│   │   ├── Footer.tsx       # Footer with links
│   │   ├── BuyerSellerStats.tsx # Buyer/Seller statistics
│   │   ├── CryptoCard.tsx   # Cryptocurrency card component
│   │   ├── CTASection.tsx   # Call-to-action section
│   │   ├── GoldCard.tsx     # Gold trading card component
│   │   ├── MarketChart.tsx  # Market chart visualization
│   │   ├── MarketUpdateSection.tsx # Market updates section
│   │   ├── NavDropdownButton.tsx # Navigation dropdown button
│   │   ├── TimeframeSelector.tsx # Chart timeframe selector
│   │   ├── TradingBanner.tsx # Trading promotional banner
│   │   └── ui/              # UI icon components
│   │       ├── arrow-*.tsx  # Various arrow icons
│   │       ├── coin.tsx     # Coin icon
│   │       ├── globe.tsx    # Globe icon
│   │       ├── shield.tsx   # Shield icon
│   │       └── ...          # Other icon components
│   ├── assets/              # Images and static assets
│   │   ├── fonts/           # Custom fonts (Gilroy)
│   │   └── *.png            # Image assets
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── constants.tsx        # Application constants
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
│   └── vite.svg
├── dist/                    # Production build output
├── package.json
├── eslint.config.js         # ESLint configuration
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # TypeScript app configuration
├── tsconfig.node.json       # TypeScript node configuration
└── vite.config.ts           # Vite configuration
```

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Swiper** - Touch slider for testimonials carousel
- **React Icons** - Icon library

## 📝 Assumptions Made

### Design & Branding
- **Primary Color**: Used `#E31E24` (red) as the main brand color based on Figma designs
- **Typography**: Implemented Inter font from Google Fonts for modern, professional appearance
- **Spacing**: Interpreted spacing and padding based on visual hierarchy in Figma screenshots
- **Icons**: Used react-icons library for consistent iconography where specific icons weren't provided

### Functionality
- **Navigation Dropdowns**: Implemented dropdown menus as placeholders (no actual dropdown content as it wasn't specified)
- **Market Data**: Used placeholder/mock data for market tickers and charts
- **Chart Visualization**: Created simplified SVG chart visualization as actual trading data integration wasn't required
- **Responsive Breakpoints**: Used standard Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

### Content
- **Copy Text**: Used descriptive placeholder text where exact copy wasn't visible in Figma
- **Testimonials**: Created realistic testimonial content based on visible snippets
- **Market Pairs**: Used common trading pairs (USD/EUR, XAU/USD, BTC, ETH) as examples

### Technical
- **No Backend**: Built as a static frontend application as specified
- **No Authentication**: Buttons are styled but don't implement actual registration/login
- **Browser Support**: Targeted modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
- **Accessibility**: Implemented semantic HTML and keyboard navigation where applicable

## 🎯 Future Improvements

### With More Time, I Would:

#### Performance Optimizations
- Implement lazy loading for images and components
- Add code splitting for better initial load times
- Optimize animations for lower-end devices
- Implement service worker for offline capability

#### Enhanced Features
- **Real Market Data Integration**: Connect to actual trading APIs for live market data
- **Interactive Charts**: Implement full-featured trading charts with TradingView or similar
- **Functional Dropdowns**: Build complete navigation menus with proper content
- **Form Validation**: Add proper form handling for registration/demo account
- **Multi-language Support**: Implement i18n for multiple languages
- **Dark Mode**: Add theme toggle for dark/light modes

#### Accessibility Improvements
- Comprehensive ARIA labels and roles
- Screen reader optimization
- Keyboard navigation enhancements
- Focus management for modals and dropdowns
- Color contrast improvements for WCAG AAA compliance

#### Testing
- Unit tests with Vitest
- Component tests with React Testing Library
- E2E tests with Playwright or Cypress
- Visual regression testing
- Performance testing and monitoring

#### Code Quality
- Implement Storybook for component documentation
- Add ESLint and Prettier configurations
- Set up Husky for pre-commit hooks
- Add comprehensive TypeScript types for all props
- Implement error boundaries for better error handling

#### Design Enhancements
- Add micro-interactions and hover effects
- Implement scroll-triggered animations
- Create loading states and skeletons
- Add page transitions
- Implement progressive image loading

#### SEO & Analytics
- Add meta tags and Open Graph data
- Implement structured data (JSON-LD)
- Set up Google Analytics or similar
- Add sitemap and robots.txt
- Optimize for Core Web Vitals


---

**Note**: This is a frontend-only implementation. All interactive elements are styled but not connected to backend services.
