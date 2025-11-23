import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BentoGridVideoSection } from './components/BentoGridVideoSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { ProductCard } from './components/ProductCard';
import { CategoryPage } from './components/CategoryPage';
import { FilteredProductsPage } from './components/FilteredProductsPage';
import { FavoritesPage } from './components/FavoritesPage';
import { CheckoutPage } from './components/CheckoutPage';
import { PaymentPage } from './components/PaymentPage';
import { motion } from 'motion/react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  size?: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  category?: string;
  description?: string;
  colors?: string[];
  sizes?: string[];
  fabric?: string;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<'home' | 'category' | 'filtered' | 'favorites' | 'checkout' | 'payment'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [checkoutData, setCheckoutData] = useState<any>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Royal Silk Saree',
      price: 12500,
      image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Elegant Kanjivaram',
      price: 18500,
      image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Wedding Gold Saree',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Designer Party Wear',
      price: 15500,
      image: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      name: 'Festive Banarasi',
      price: 16500,
      image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      name: 'Modern Casual Saree',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const addToFavorites = (product: Product) => {
    setFavoriteItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems; // Already in favorites
      }
      return [...prevItems, product];
    });
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCurrentPage('category');
  };

  const handleFilteredProductsClick = (categoryName?: string) => {
    setSelectedCategory(categoryName || 'All');
    setCurrentPage('filtered');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedCategory('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePayment = (formData: any) => {
    setCheckoutData(formData);
    setCurrentPage('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Filtered Products Page
  if (currentPage === 'filtered') {
    return (
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <Navbar 
          cartItems={cartItems} 
          onUpdateCart={setCartItems} 
          onAllProductsClick={() => handleFilteredProductsClick('All')} 
          onFavoritesClick={() => setCurrentPage('favorites')}
          onHomeClick={handleBackToHome}
          onCheckoutClick={handleCheckout}
        />
        <FilteredProductsPage 
          onBack={handleBackToHome} 
          initialCategory={selectedCategory}
          onAddToCart={addToCart}
          onAddToFavorites={addToFavorites}
        />
      </div>
    );
  }

  // Render Category Page
  if (currentPage === 'category') {
    return (
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <Navbar 
          cartItems={cartItems} 
          onUpdateCart={setCartItems} 
          onAllProductsClick={() => handleFilteredProductsClick('All')} 
          onFavoritesClick={() => setCurrentPage('favorites')}
          onHomeClick={handleBackToHome}
          onCheckoutClick={handleCheckout}
        />
        <CategoryPage categoryName={selectedCategory} onBack={handleBackToHome} />
      </div>
    );
  }

  // Render Favorites Page
  if (currentPage === 'favorites') {
    return (
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <Navbar 
          cartItems={cartItems} 
          onUpdateCart={setCartItems} 
          onAllProductsClick={() => handleFilteredProductsClick('All')} 
          onFavoritesClick={() => setCurrentPage('favorites')}
          onHomeClick={handleBackToHome}
          onCheckoutClick={handleCheckout}
        />
        <FavoritesPage 
          onBack={handleBackToHome} 
          favoriteItems={favoriteItems}
          onAddToCart={addToCart}
          onRemoveFromFavorites={(productId) => {
            setFavoriteItems(prev => prev.filter(item => item.id !== productId));
          }}
        />
      </div>
    );
  }

  // Render Checkout Page
  if (currentPage === 'checkout') {
    return (
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <Navbar 
          cartItems={cartItems} 
          onUpdateCart={setCartItems} 
          onAllProductsClick={() => handleFilteredProductsClick('All')} 
          onFavoritesClick={() => setCurrentPage('favorites')}
          onHomeClick={handleBackToHome}
          onCheckoutClick={handleCheckout}
        />
        <CheckoutPage onBack={handleBackToHome} checkoutData={checkoutData} handlePayment={handlePayment} />
      </div>
    );
  }

  // Render Payment Page
  if (currentPage === 'payment') {
    return (
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <Navbar 
          cartItems={cartItems} 
          onUpdateCart={setCartItems} 
          onAllProductsClick={() => handleFilteredProductsClick('All')} 
          onFavoritesClick={() => setCurrentPage('favorites')}
          onHomeClick={handleBackToHome}
          onCheckoutClick={handleCheckout}
        />
        <PaymentPage onBack={handleBackToHome} checkoutData={checkoutData} />
      </div>
    );
  }

  // Render Home Page
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar 
        cartItems={cartItems} 
        onUpdateCart={setCartItems} 
        onAllProductsClick={() => handleFilteredProductsClick('All')} 
        onFavoritesClick={() => setCurrentPage('favorites')}
        onHomeClick={handleBackToHome}
        onCheckoutClick={handleCheckout}
      />
      
      {/* Auto-Scrolling Hero Banner */}
      <HeroBanner />
      
      {/* Why Choose Vaarahi Silks Section - Added Right After Hero */}
      <WhyChooseSection />
      
      {/* Bento Grid Video Section - Category Videos Playing Automatically */}
      <BentoGridVideoSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* About Section */}
      <AboutSection onCategoryClick={handleCategoryClick} onFilteredClick={handleFilteredProductsClick} />

      {/* Blog/Products Section */}
      <section id="blog" className="py-24 px-6 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-6xl mb-6"
              style={{
                background: 'linear-gradient(135deg, #4a0e0e 0%, #2d0a0a 50%, #000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Featured Collection
            </motion.h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Handpicked sarees for every occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  {...product}
                  onAddToCart={() => addToCart(product)}
                  onAddToFavorites={() => addToFavorites(product)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-6xl mb-6"
              style={{
                background: 'linear-gradient(135deg, #4a0e0e 0%, #2d0a0a 50%, #000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Why Choose Us
            </motion.h2>
          </motion.div>

          {/* Stats Section - Added at Top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { value: '30+', label: 'Years Experience' },
              { value: '1000+', label: 'Happy Customers' },
              { value: '500+', label: 'Saree Designs' },
              { value: '100%', label: 'Authentic Silk' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#4a0e0e] to-[#2d0a0a] shadow-xl"
              >
                <motion.div
                  className="text-4xl md:text-5xl mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-amber-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                'Authentic handloom sarees from master weavers',
                'Wide range of traditional and contemporary designs',
                'Free shipping across India',
                'Easy returns and exchanges',
                'Dedicated customer support'
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 flex items-center justify-center text-black flex-shrink-0"
                  >
                    ✓
                  </motion.div>
                  <span className="text-gray-700">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-square bg-gradient-to-br from-[#4a0e0e] to-black flex items-center justify-center">
                  <span className="text-amber-400 text-6xl">✦</span>
                </div>
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600/20 rounded-full blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4a0e0e] via-[#2d0a0a] to-black text-amber-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            VAARAHI SILKS
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-600 mb-6"
          >
            Weaving dreams since 1990
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-amber-700 text-sm"
          >
            © 2025 Vaarahi Silks. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}