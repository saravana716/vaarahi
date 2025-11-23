# 📂 Complete Folder Structure - Vaarahi Silks

Detailed breakdown of the entire project structure with explanations.

## 🌳 Full Directory Tree

```
vaarahi-silks/
│
├── 📁 public/                          # Static assets (optional)
│   └── vite.svg                       # Vite logo (default)
│
├── 📁 src/                            # Source code directory
│   │
│   ├── 📁 components/                 # React components
│   │   │
│   │   ├── 📁 ui/                    # ShadCN UI components (36 files)
│   │   │   ├── accordion.tsx         # Accordion component
│   │   │   ├── alert-dialog.tsx      # Alert dialog modal
│   │   │   ├── alert.tsx             # Alert notifications
│   │   │   ├── aspect-ratio.tsx      # Aspect ratio container
│   │   │   ├── avatar.tsx            # User avatar
│   │   │   ├── badge.tsx             # Badge labels
│   │   │   ├── breadcrumb.tsx        # Breadcrumb navigation
│   │   │   ├── button.tsx            # Button component
│   │   │   ├── calendar.tsx          # Date picker calendar
│   │   │   ├── card.tsx              # Card container
│   │   │   ├── carousel.tsx          # Carousel slider
│   │   │   ├── chart.tsx             # Chart components
│   │   │   ├── checkbox.tsx          # Checkbox input
│   │   │   ├── collapsible.tsx       # Collapsible sections
│   │   │   ├── command.tsx           # Command palette
│   │   │   ├── context-menu.tsx      # Right-click menu
│   │   │   ├── dialog.tsx            # Modal dialog
│   │   │   ├── drawer.tsx            # Side drawer
│   │   │   ├── dropdown-menu.tsx     # Dropdown menu
│   │   │   ├── form.tsx              # Form components
│   │   │   ├── hover-card.tsx        # Hover card tooltip
│   │   │   ├── input-otp.tsx         # OTP input field
│   │   │   ├── input.tsx             # Text input
│   │   │   ├── label.tsx             # Form label
│   │   │   ├── menubar.tsx           # Menu bar
│   │   │   ├── navigation-menu.tsx   # Navigation menu
│   │   │   ├── pagination.tsx        # Pagination controls
│   │   │   ├── popover.tsx           # Popover tooltip
│   │   │   ├── progress.tsx          # Progress bar
│   │   │   ├── radio-group.tsx       # Radio button group
│   │   │   ├── resizable.tsx         # Resizable panels
│   │   │   ├── scroll-area.tsx       # Scrollable area
│   │   │   ├── select.tsx            # Select dropdown
│   │   │   ├── separator.tsx         # Visual separator
│   │   │   ├── sheet.tsx             # Sheet/sidebar
│   │   │   ├── sidebar.tsx           # Sidebar component
│   │   │   ├── skeleton.tsx          # Loading skeleton
│   │   │   ├── slider.tsx            # Range slider
│   │   │   ├── sonner.tsx            # Toast notifications
│   │   │   ├── switch.tsx            # Toggle switch
│   │   │   ├── table.tsx             # Data table
│   │   │   ├── tabs.tsx              # Tab navigation
│   │   │   ├── textarea.tsx          # Multiline text input
│   │   │   ├── toggle-group.tsx      # Toggle button group
│   │   │   ├── toggle.tsx            # Toggle button
│   │   │   ├── tooltip.tsx           # Tooltip
│   │   │   ├── use-mobile.ts         # Mobile detection hook
│   │   │   └── utils.ts              # Utility functions
│   │   │
│   │   ├── 📁 figma/                # Figma-specific components
│   │   │   └── ImageWithFallback.tsx # Image component with fallback
│   │   │
│   │   ├── AboutSection.tsx          # About section with stats
│   │   ├── CategoriesGridSection.tsx # 4-category grid with animations
│   │   ├── CategoriesSection.tsx     # Bento grid categories
│   │   ├── CategoryPage.tsx          # Individual category page
│   │   ├── CheckoutPage.tsx          # Checkout form page
│   │   ├── FavoritesPage.tsx         # Wishlist/favorites page
│   │   ├── FeaturesSection.tsx       # Auto-scrolling features carousel
│   │   ├── FilterProductsSection.tsx # Products with price filters
│   │   ├── FilteredProductsPage.tsx  # Advanced product filtering page
│   │   ├── Footer.tsx                # Website footer
│   │   ├── HelpSection.tsx           # Help/service cards
│   │   ├── HeroBanner.tsx            # Auto-scrolling hero carousel
│   │   ├── Navbar.tsx                # Navigation bar with cart
│   │   ├── NewArrivalsSection.tsx    # New arrivals with 2x2 grid
│   │   ├── PaymentPage.tsx           # Payment gateway page
│   │   ├── ProductCard.tsx           # Individual product card
│   │   └── VideoSwiperSection.tsx    # Video carousel section
│   │
│   ├── 📁 styles/                    # Stylesheets
│   │   └── globals.css               # Global CSS + Tailwind config
│   │
│   ├── App.tsx                       # Main application component
│   └── main.tsx                      # Application entry point
│
├── 📄 .eslintrc.cjs                  # ESLint configuration
├── 📄 .gitignore                     # Git ignore rules
├── 📄 index.html                     # HTML template
├── 📄 package.json                   # Dependencies & scripts
├── 📄 package-lock.json              # Locked dependency versions
├── 📄 tsconfig.json                  # TypeScript configuration
├── 📄 tsconfig.node.json             # TypeScript Node configuration
├── 📄 vite.config.ts                 # Vite build configuration
├── 📄 README.md                      # Project documentation
├── 📄 INSTALLATION.md                # Installation guide
├── 📄 QUICKSTART.md                  # Quick start guide
└── 📄 FOLDER_STRUCTURE.md            # This file
```

---

## 📋 File Descriptions

### Root Level Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies, scripts, and metadata |
| `package-lock.json` | Locked versions of dependencies for consistency |
| `tsconfig.json` | TypeScript compiler options |
| `tsconfig.node.json` | TypeScript config for Node.js files |
| `vite.config.ts` | Vite bundler configuration |
| `.eslintrc.cjs` | ESLint linting rules |
| `.gitignore` | Files to exclude from Git |
| `index.html` | Entry HTML file |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `INSTALLATION.md` | Detailed installation instructions |
| `QUICKSTART.md` | Quick 3-step setup guide |
| `FOLDER_STRUCTURE.md` | This comprehensive structure guide |

---

## 📁 Directory Breakdown

### `/src` - Source Code

Main application source code directory.

#### `/src/components` - React Components

All React components organized by functionality.

**Main Pages:**
- `App.tsx` - Root component with routing
- `CategoryPage.tsx` - Category listing page
- `FilteredProductsPage.tsx` - Advanced product filtering
- `FavoritesPage.tsx` - Wishlist page
- `CheckoutPage.tsx` - Checkout form
- `PaymentPage.tsx` - Payment processing

**Sections:**
- `Navbar.tsx` - Top navigation with cart
- `HeroBanner.tsx` - Auto-scrolling hero carousel
- `FeaturesSection.tsx` - Features with auto-scroll
- `AboutSection.tsx` - About with stats & values
- `CategoriesSection.tsx` - Bento grid categories
- `CategoriesGridSection.tsx` - 4-category animated grid
- `VideoSwiperSection.tsx` - Video swiper carousel
- `NewArrivalsSection.tsx` - New arrivals 2x2 grid
- `FilterProductsSection.tsx` - Product filters
- `HelpSection.tsx` - Service cards
- `Footer.tsx` - Site footer

**Components:**
- `ProductCard.tsx` - Product display card

#### `/src/components/ui` - ShadCN Components

Pre-built, accessible UI components from ShadCN library. These provide:
- Consistent styling
- Accessibility features
- Keyboard navigation
- ARIA attributes
- Theme support

#### `/src/components/figma` - Figma Components

Components specific to Figma imports:
- `ImageWithFallback.tsx` - Smart image loading with fallback

#### `/src/styles` - Stylesheets

- `globals.css` - Global styles, Tailwind config, CSS variables

---

## 🎨 Component Hierarchy

```
App.tsx (Root)
│
├── Navbar
│   ├── Search
│   ├── Cart Sidebar
│   └── Mobile Menu
│
├── Home Page
│   ├── HeroBanner (Auto-scroll carousel)
│   ├── FeaturesSection (8 cards, scroll 3 at a time)
│   ├── AboutSection
│   │   ├── Stats Grid (4 stats)
│   │   ├── Values Grid (6 values)
│   │   ├── Features Grid (3 features)
│   │   ├── CategoriesSection (Bento grid)
│   │   ├── VideoSwiperSection
│   │   ├── NewArrivalsSection
│   │   ├── CategoriesGridSection (4 categories)
│   │   ├── FilterProductsSection
│   │   ├── HelpSection
│   │   └── Footer
│   ├── Featured Products (6 cards)
│   └── Why Choose Us
│
├── Category Page
│   ├── Banner
│   ├── Product Grid
│   └── Product Modal
│
├── Filtered Products Page
│   ├── Filters Sidebar
│   │   ├── Category Filter
│   │   ├── Price Filter
│   │   ├── Color Filter
│   │   └── Fabric Filter
│   ├── Sort Dropdown
│   ├── Product Grid (20 products)
│   └── Product Modal
│
├── Favorites Page
│   ├── Favorites Grid
│   └── Product Actions
│
├── Checkout Page
│   ├── Form (Contact, Shipping, Billing)
│   └── Order Summary
│
└── Payment Page
    ├── Payment Methods
    ├── Order Summary
    └── Success Screen (with confetti)
```

---

## 🗂️ Component Types

### 1. Page Components
Full-page views with complete layouts.

**Files:**
- `CategoryPage.tsx`
- `FilteredProductsPage.tsx`
- `FavoritesPage.tsx`
- `CheckoutPage.tsx`
- `PaymentPage.tsx`

### 2. Section Components
Major sections of the homepage.

**Files:**
- `AboutSection.tsx`
- `FeaturesSection.tsx`
- `CategoriesSection.tsx`
- `CategoriesGridSection.tsx`
- `VideoSwiperSection.tsx`
- `NewArrivalsSection.tsx`
- `FilterProductsSection.tsx`
- `HelpSection.tsx`

### 3. Layout Components
Navigation and structure.

**Files:**
- `Navbar.tsx`
- `Footer.tsx`
- `HeroBanner.tsx`

### 4. UI Components
Reusable UI elements.

**Files:**
- `ProductCard.tsx`
- All `/components/ui/*` files

---

## 📦 What Gets Compiled

### Development (`npm run dev`)
- Vite dev server
- Hot Module Replacement (HMR)
- Source maps for debugging
- Fast refresh

### Production (`npm run build`)
```
dist/
├── assets/
│   ├── index-[hash].js      # Bundled JavaScript
│   └── index-[hash].css     # Bundled CSS
└── index.html               # Optimized HTML
```

---

## 🔄 Data Flow

```
App.tsx (State)
    ↓
  Products Data
  Cart State
  Favorites State
    ↓
  Props ↓
    ↓
 Components
    ↓
  User Actions
    ↓
 Event Handlers
    ↓
 Update State
    ↓
  Re-render
```

---

## 🎯 Key Features by File

| Feature | Primary Files |
|---------|--------------|
| **Shopping Cart** | `Navbar.tsx`, `App.tsx` |
| **Product Filtering** | `FilteredProductsPage.tsx` |
| **Favorites/Wishlist** | `FavoritesPage.tsx`, `App.tsx` |
| **Checkout Flow** | `CheckoutPage.tsx`, `PaymentPage.tsx` |
| **Auto-Scrolling** | `HeroBanner.tsx`, `FeaturesSection.tsx` |
| **Product Display** | `ProductCard.tsx` |
| **Categories** | `CategoriesSection.tsx`, `CategoriesGridSection.tsx` |
| **Video Content** | `VideoSwiperSection.tsx` |
| **Help/Services** | `HelpSection.tsx` |

---

## 🎨 Styling Architecture

### Tailwind CSS 4.0
- Utility-first CSS framework
- Configured in `globals.css`
- Custom CSS variables for theming

### Global Styles
Located in `/src/styles/globals.css`:
- CSS custom properties (variables)
- Tailwind base styles
- Custom utility classes
- Typography system
- Scrollbar styles

### Component Styles
- Inline Tailwind classes
- No separate CSS files per component
- Dynamic styles using `style` prop for gradients

---

## 🔧 Configuration Files Explained

### `package.json`
- **dependencies**: Runtime packages
- **devDependencies**: Development tools
- **scripts**: Command shortcuts

### `tsconfig.json`
- TypeScript compiler options
- Module resolution
- Path aliases (`@/*` → `/src/*`)

### `vite.config.ts`
- Build tool configuration
- Development server settings
- Plugin configuration (React, Tailwind)

### `.eslintrc.cjs`
- Code quality rules
- TypeScript-specific rules
- React-specific rules

---

## 📊 File Count Summary

```
Total Components:     26 files
UI Components:        36 files
Figma Components:      1 file
Pages:                 5 files
Sections:              9 files
Config Files:          7 files
Documentation:         4 files
```

---

## 🎓 Understanding the Structure

### Why This Structure?

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: UI components can be used anywhere
3. **Maintainability**: Easy to find and update files
4. **Scalability**: Can easily add new features
5. **Type Safety**: TypeScript for better development

### Best Practices Followed

✅ Component-based architecture  
✅ Separation of concerns  
✅ Type-safe with TypeScript  
✅ Consistent naming conventions  
✅ Clear folder hierarchy  
✅ Reusable UI components  
✅ Centralized state management  

---

## 🚀 Adding New Components

### 1. Create Component File

```typescript
// src/components/MyNewComponent.tsx
export function MyNewComponent() {
  return <div>My Component</div>;
}
```

### 2. Import in App.tsx

```typescript
import { MyNewComponent } from './components/MyNewComponent';
```

### 3. Use in JSX

```jsx
<MyNewComponent />
```

---

## 📝 Notes

- All components are in TypeScript (`.tsx`)
- UI components are from ShadCN library
- State management in `App.tsx`
- No external state management library (Redux, etc.)
- Uses React Hooks for state
- Styling with Tailwind CSS

---

## 🎉 Summary

This structure provides:
- ✅ Clear organization
- ✅ Easy navigation
- ✅ Scalable architecture
- ✅ Type-safe development
- ✅ Fast development experience
- ✅ Production-ready build

---

**Need to find something?** Use this guide as a reference!

**Want to add features?** Follow the existing patterns!

**Ready to build?** Start with `/src/components/`!

🚀 Happy coding!
