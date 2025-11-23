# Vaarahi Silks - Installation Guide

Complete step-by-step guide to set up and run the Vaarahi Silks e-commerce website locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher) - [Download Here](https://nodejs.org/)
- **npm** (comes with Node.js) OR **yarn** OR **pnpm**
- A code editor like **VS Code** (recommended)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Check Your Node.js Version

```bash
node --version
```

Should output v18.0.0 or higher.

## 📦 Project Structure

```
vaarahi-silks/
├── public/                      # Static assets
├── src/                         # Source code
│   ├── components/             # React components
│   │   ├── ui/                # ShadCN UI components
│   │   ├── figma/             # Figma components
│   │   ├── AboutSection.tsx
│   │   ├── CategoriesGridSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── FavoritesPage.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── FilterProductsSection.tsx
│   │   ├── FilteredProductsPage.tsx
│   │   ├── Footer.tsx
│   │   ├── HelpSection.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewArrivalsSection.tsx
│   │   ├── PaymentPage.tsx
│   │   ├── ProductCard.tsx
│   │   └── VideoSwiperSection.tsx
│   ├── styles/
│   │   └── globals.css         # Global styles
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── .eslintrc.cjs               # ESLint configuration
├── .gitignore                  # Git ignore file
├── index.html                  # HTML template
├── package.json                # Dependencies
├── README.md                   # Project documentation
├── tsconfig.json               # TypeScript config
├── tsconfig.node.json          # TypeScript Node config
└── vite.config.ts              # Vite configuration
```

## 🚀 Installation Steps

### Step 1: Extract/Unzip the Project

Extract the project folder to your desired location:

```bash
# Example: Extract to Desktop
cd ~/Desktop
unzip vaarahi-silks.zip
cd vaarahi-silks
```

### Step 2: Install Dependencies

Choose ONE of the following package managers:

**Option A: Using npm (recommended)**
```bash
npm install
```

**Option B: Using yarn**
```bash
yarn install
```

**Option C: Using pnpm**
```bash
pnpm install
```

This will install all required dependencies listed in `package.json`. The installation may take 2-5 minutes depending on your internet speed.

### Step 3: Start Development Server

**Using npm:**
```bash
npm run dev
```

**Using yarn:**
```bash
yarn dev
```

**Using pnpm:**
```bash
pnpm dev
```

### Step 4: Open in Browser

The development server will automatically open your default browser at:

```
http://localhost:3000
```

If it doesn't open automatically, manually navigate to the URL above.

You should see the Vaarahi Silks homepage with the maroon-gold luxury design!

## 🛠️ Available Scripts

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The production files will be generated in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This will start a local server to preview your production build.

### Lint Code

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 🔧 Configuration

### Vite Configuration (`vite.config.ts`)

The project uses Vite as the build tool with the following configuration:

- React plugin for JSX support
- Tailwind CSS 4.0 plugin
- Path alias: `@` → `/src`
- Development server on port 3000
- Auto-open browser on dev start

### TypeScript Configuration (`tsconfig.json`)

- Target: ES2020
- JSX: react-jsx (automatic runtime)
- Strict mode enabled
- Path mapping: `@/*` → `./src/*`

### Tailwind CSS 4.0

The project uses the latest Tailwind CSS v4.0 with:
- Custom CSS variables for theming
- Responsive design utilities
- Custom scrollbar styles
- Animation utilities

## 📁 Important Files

### Entry Point (`src/main.tsx`)

The application entry point that renders the React app.

### Main App (`src/App.tsx`)

The main application component containing:
- State management for cart and favorites
- Page routing (home, products, checkout, etc.)
- Product data
- Event handlers

### Global Styles (`src/styles/globals.css`)

Contains:
- CSS variables for theming
- Tailwind base styles
- Custom utility classes
- Typography styles
- Scrollbar styles

### HTML Template (`index.html`)

The base HTML file where the React app is mounted.

## 🌐 Port Configuration

By default, the app runs on `http://localhost:3000`

To change the port, edit `vite.config.ts`:

```typescript
server: {
  port: 3001, // Change to your desired port
  open: true,
}
```

## 🐛 Troubleshooting

### Issue: Port Already in Use

If port 3000 is already in use:

1. Kill the process using port 3000
2. Or change the port in `vite.config.ts`
3. Or Vite will automatically use the next available port

### Issue: Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript Errors

```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Issue: Build Fails

```bash
# Clean dist folder and rebuild
rm -rf dist
npm run build
```

### Issue: Slow Performance

1. Make sure you're running in development mode
2. Check browser console for errors
3. Disable browser extensions
4. Clear browser cache

## 💡 Tips & Best Practices

### 1. Use VS Code Extensions

Recommended VS Code extensions:
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **ES7+ React/Redux/React-Native snippets** - React snippets

### 2. Development Workflow

```bash
# Terminal 1: Run dev server
npm run dev

# Terminal 2: Watch for lint errors
npm run lint
```

### 3. Hot Module Replacement (HMR)

Changes to components will automatically update without full page reload. Just save your file and see changes instantly!

### 4. Component Organization

- Keep components in `/src/components`
- Use ShadCN components from `/src/components/ui`
- Create new components with `.tsx` extension

### 5. Styling Guidelines

- Use Tailwind utility classes
- Avoid inline styles except for dynamic gradients
- Follow existing color scheme (maroon, gold, black)

## 📦 Building for Production

### Step 1: Create Production Build

```bash
npm run build
```

### Step 2: Test Production Build Locally

```bash
npm run preview
```

### Step 3: Deploy

The `dist/` folder contains all static files ready for deployment. You can deploy to:

- **Vercel** (recommended for Vite apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3**
- Any static hosting service

## 🔐 Environment Variables

If you need to add environment variables:

1. Create `.env` file in root
2. Add variables with `VITE_` prefix:

```env
VITE_API_URL=https://api.example.com
VITE_PAYMENT_KEY=your_key_here
```

3. Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📚 Dependencies Overview

### Core Dependencies

- **react** & **react-dom** - UI library
- **motion** - Animations (Framer Motion)
- **lucide-react** - Icon library

### UI Components

- **@radix-ui/** - Accessible component primitives
- **class-variance-authority** - CSS variant management
- **tailwind-merge** - Tailwind class merging

### Forms

- **react-hook-form** - Form handling
- **date-fns** - Date formatting

### Dev Dependencies

- **vite** - Build tool
- **typescript** - Type checking
- **@vitejs/plugin-react** - React support for Vite
- **@tailwindcss/vite** - Tailwind CSS v4 plugin
- **eslint** - Code linting

## 📞 Support

For any issues or questions:

1. Check the troubleshooting section above
2. Review the README.md file
3. Check package.json for correct dependencies
4. Ensure Node.js version is v18+

## ✅ Verification Checklist

After installation, verify:

- [ ] All dependencies installed without errors
- [ ] Development server starts successfully
- [ ] Homepage loads with maroon-gold design
- [ ] No console errors in browser
- [ ] Navigation works (Home, About, Products, etc.)
- [ ] Shopping cart opens/closes
- [ ] Product cards display correctly
- [ ] Animations are smooth
- [ ] Responsive on mobile/tablet/desktop
- [ ] No horizontal scrolling

## 🎉 Success!

If you see the Vaarahi Silks homepage with:
- ✅ Maroon-black gradient navbar
- ✅ Gold accents
- ✅ Auto-scrolling hero banner
- ✅ Smooth animations
- ✅ Functional shopping cart

**Congratulations! Your installation is complete!** 🎊

---

**Ready to customize?** Start editing files in `/src/components/` and see changes live!

**Need help?** Review the README.md for feature documentation.

**Happy coding!** 🚀
