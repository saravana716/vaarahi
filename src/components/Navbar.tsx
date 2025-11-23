import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, User, ShoppingBag, Menu, X, Minus, Plus, Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface NavbarProps {
  cartItems: CartItem[];
  onUpdateCart: (items: CartItem[]) => void;
  onAllProductsClick?: () => void;
  onFavoritesClick?: () => void;
  onHomeClick?: () => void;
  onCheckoutClick?: () => void;
}

export function Navbar({ cartItems, onUpdateCart, onAllProductsClick, onFavoritesClick, onHomeClick, onCheckoutClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'blog', 'content'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', isScroll: true },
    { name: 'About', href: '#about', isScroll: true },
    { name: 'All Products', href: '#products', isScroll: false },
    { name: 'Blog', href: '#blog', isScroll: true },
    { name: 'Content', href: '#content', isScroll: true }
  ];

  const updateQuantity = (id: number, delta: number) => {
    const newItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0);
    onUpdateCart(newItems);
  };

  const removeItem = (id: number) => {
    onUpdateCart(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden">
        {/* Announcement Bar */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 overflow-hidden relative w-full"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
          <div className="relative overflow-hidden py-2.5">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: 'linear',
              }}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-black px-8">
                  ✦ FREE SHIPPING ACROSS INDIA ✦ EXCLUSIVE OFFERS ✦
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Main Navbar */}
        <motion.nav
          className={`bg-gradient-to-r from-[#4a0e0e] via-[#2d0a0a] to-black transition-all duration-500 ${
            isScrolled ? 'shadow-2xl shadow-amber-900/50 backdrop-blur-md' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-amber-400 hover:text-amber-300 transition-colors z-50"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </motion.div>
              </motion.button>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    if (onHomeClick) {
                      onHomeClick();
                    } else {
                      scrollToSection('#home');
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block cursor-pointer"
                >
                  <motion.h1
                    className="text-3xl lg:text-4xl tracking-[0.2em]"
                    style={{
                      background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 12px rgba(255, 215, 0, 0.4))'
                    }}
                  >
                    VAARAHI
                  </motion.h1>
                  <motion.div 
                    className="text-xs tracking-[0.3em] text-center mt-0.5 text-amber-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    SILKS
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-2 flex-1 justify-center mx-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.isScroll) {
                        scrollToSection(link.href);
                      } else {
                        onAllProductsClick?.();
                      }
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-5 py-2.5 transition-all duration-300 group cursor-pointer ${
                      activeSection === link.href.substring(1)
                        ? 'text-amber-300'
                        : 'text-amber-400'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/30 to-amber-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Active/Hover underline */}
                    <motion.div
                      className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-300 ${
                        activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      style={{ transform: 'translateX(-50%)' }}
                    />
                    
                    {/* Glow effect */}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-amber-500/20 rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Action Icons */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-3 lg:gap-4"
              >
                {/* Search Button */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-amber-400 hover:text-amber-300 transition-colors relative group p-2"
                >
                  <motion.div
                    animate={{ rotate: isSearchOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isSearchOpen ? <X size={22} /> : <Search size={22} />}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-amber-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"
                  />
                </motion.button>
                
                {/* User Button */}
                <motion.button
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-amber-400 hover:text-amber-300 transition-colors relative group p-2"
                >
                  <User size={22} />
                  <motion.div
                    className="absolute inset-0 bg-amber-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"
                  />
                </motion.button>
                
                {/* Favorites Button */}
                <motion.button
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onFavoritesClick}
                  className="text-amber-400 hover:text-amber-300 transition-colors relative group p-2 hidden sm:block"
                >
                  <motion.div
                    whileHover={{
                      scale: [1, 1.2, 1],
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-amber-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"
                  />
                </motion.button>
                
                {/* Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsCartOpen(true)}
                  className="text-amber-400 hover:text-amber-300 transition-colors relative group p-2"
                >
                  <ShoppingBag size={22} />
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 bg-gradient-to-br from-amber-400 to-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <motion.div
                    className="absolute inset-0 bg-amber-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden overflow-hidden border-t border-amber-900/30"
              >
                <div className="px-6 py-6 space-y-2 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.isScroll) {
                          scrollToSection(link.href);
                        } else {
                          onAllProductsClick?.();
                        }
                      }}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block py-3 pl-4 border-l-2 transition-all duration-300 ${
                        activeSection === link.href.substring(1)
                          ? 'text-amber-300 border-amber-400'
                          : 'text-amber-400 border-transparent hover:border-amber-400'
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-r from-[#2d0a0a] to-black border-t border-amber-900/30 overflow-hidden"
            >
              <div className="max-w-3xl mx-auto px-6 py-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for sarees, collections..."
                    className="w-full bg-black/50 border-2 border-amber-900/50 focus:border-amber-500 rounded-xl pl-12 pr-4 py-4 text-amber-100 placeholder-amber-700 outline-none transition-all duration-300"
                    autoFocus
                  />
                  {searchQuery && (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 hover:text-amber-300"
                    >
                      <X size={20} />
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
          style={{ transformOrigin: 'center' }}
        />
      </div>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Cart Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-gradient-to-b from-[#2d0a0a] to-black shadow-2xl z-50 flex flex-col"
            >
              {/* Cart Header */}
              <div className="bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] p-6 border-b border-amber-900/30">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl text-amber-400">Shopping Cart</h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsCartOpen(false)}
                    className="text-amber-400 hover:text-amber-300 transition-colors p-2"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <p className="text-amber-600 text-sm mt-1">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </p>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence mode="popLayout">
                  {cartItems.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="text-center py-12"
                    >
                      <ShoppingBag size={64} className="mx-auto text-amber-900/50 mb-4" />
                      <p className="text-amber-600">Your cart is empty</p>
                    </motion.div>
                  ) : (
                    cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50, height: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-black/40 rounded-xl p-4 border border-amber-900/30 hover:border-amber-700/50 transition-all duration-300"
                      >
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-amber-900/30 to-[#4a0e0e]/30 flex-shrink-0 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-amber-300 mb-1 truncate">{item.name}</h3>
                            <p className="text-amber-500 mb-3">₹{item.price.toLocaleString()}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 bg-black/50 rounded-lg p-1">
                                <motion.button
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="text-amber-400 hover:text-amber-300 p-1"
                                >
                                  <Minus size={16} />
                                </motion.button>
                                <span className="text-amber-200 w-8 text-center">{item.quantity}</span>
                                <motion.button
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="text-amber-400 hover:text-amber-300 p-1"
                                >
                                  <Plus size={16} />
                                </motion.button>
                              </div>
                              
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-400 transition-colors p-2"
                              >
                                <Trash2 size={18} />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] p-6 border-t border-amber-900/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-400">Total:</span>
                    <motion.span
                      key={totalPrice}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="text-2xl text-amber-300"
                    >
                      ₹{totalPrice.toLocaleString()}
                    </motion.span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-black py-4 rounded-xl hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-amber-900/50"
                    onClick={onCheckoutClick}
                  >
                    Proceed to Checkout
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}