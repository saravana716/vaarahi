# Vaarahi Silks - Premium Silk Sarees E-Commerce Website

A luxury e-commerce website for Vaarahi Silks featuring premium silk sarees with a maroon-black gradient color scheme, gold accents, and modern animations.

## Features

- 🛍️ **Full E-Commerce Flow**: Complete shopping experience from browsing to checkout
- 🎨 **Luxury Design**: Maroon-black gradient with gold accents throughout
- ✨ **Smooth Animations**: Trendy Motion (Framer Motion) animations on all components
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🛒 **Shopping Cart**: Sidebar cart with add/remove/update quantity functionality
- ❤️ **Wishlist/Favorites**: Save products for later
- 🔍 **Search Functionality**: Search products easily
- 🎯 **Product Filtering**: Filter by category, price, color, fabric
- 💳 **Checkout Flow**: Complete checkout with payment gateway integration
- 🎉 **Success Animation**: Confetti celebration on successful order
- 📦 **Multiple Categories**: Browse different saree categories
- 🎬 **Video Section**: Watch and shop video swiper
- 🎠 **Auto-Scrolling Sections**: Hero banner and features carousel

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.0** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Radix UI** - Accessible UI components
- **Sonner** - Toast notifications

## Project Structure

```
vaarahi-silks/
├── public/               # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # ShadCN UI components
│   │   ├── figma/      # Figma-specific components
│   │   ├── Navbar.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── FilteredProductsPage.tsx
│   │   ├── FavoritesPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── PaymentPage.tsx
│   │   └── ... (other components)
│   ├── styles/         # Global styles
│   │   └── globals.css
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite config
└── README.md          # This file
```

## Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn or pnpm

### Steps

1. **Extract/Clone the project**
   ```bash
   cd vaarahi-silks
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The production-ready files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Key Features Breakdown

### Homepage
- Auto-scrolling hero banner with 5 slides
- Features section with 8 cards (auto-scroll in groups of 3)
- About section with stats, values, and features
- Categories section with bento grid layout
- Video swiper section
- New arrivals with 2x2 scrollable grid
- 4-category grid with unique hover effects
- Filter products section
- Help section with service cards
- Featured products collection
- Footer

### Product Pages
- Filtered products page with advanced filtering
- Category-specific pages
- Product detail modals
- Add to cart and favorites functionality

### User Flow
- Browse products → Add to cart/favorites
- View cart in sidebar
- Proceed to checkout
- Fill shipping details
- Choose payment method
- Success screen with confetti

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- No horizontal scrolling on any device
- Touch-friendly interactions

## Color Scheme

- **Primary Maroon**: `#4a0e0e`
- **Dark Maroon**: `#2d0a0a`
- **Black**: `#000000`
- **Gold/Amber**: `#ffd700`, `#fbbf24`
- **White**: `#ffffff`
- **Background**: White with amber/gold accents

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with lazy loading
- Code splitting
- Tree shaking
- Minification in production
- Fast Vite dev server with HMR

## Contributing

This is a commercial project for Vaarahi Silks. For any modifications or contributions, please contact the development team.

## License

© 2025 Vaarahi Silks. All rights reserved.

## Support

For any issues or questions, please contact the development team.

---

**Built with ❤️ for Vaarahi Silks**
