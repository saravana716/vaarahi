import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Heart, Star, Sparkles, TrendingUp, Eye, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image1: string;
  image2: string;
  description: string;
  category: string;
  colors: string[];
  sizes: string[];
  badge?: string;
}

export function NewArrivalsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  const products: Product[] = [
    {
      id: 1,
      name: 'Royal Kanjivaram Silk',
      price: 18500,
      originalPrice: 22000,
      rating: 4.8,
      reviews: 124,
      image1: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Exquisite Kanjivaram silk saree with intricate gold zari work. Perfect for weddings and special occasions.',
      category: 'Kanjivaram',
      colors: ['Maroon', 'Gold', 'Navy'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'Premium Banarasi Silk',
      price: 16500,
      originalPrice: 19500,
      rating: 4.9,
      reviews: 98,
      image1: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Luxurious Banarasi silk with traditional motifs and gold thread embroidery.',
      category: 'Banarasi',
      colors: ['Red', 'Gold', 'Green'],
      sizes: ['5.5m', '6.0m'],
      badge: 'NEW'
    },
    {
      id: 3,
      name: 'Elegant Designer Saree',
      price: 12500,
      rating: 4.7,
      reviews: 156,
      image1: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Contemporary designer saree blending modern aesthetics with traditional craftsmanship.',
      category: 'Designer',
      colors: ['Blue', 'Pink', 'Purple'],
      sizes: ['5.5m', '6.0m', '6.5m']
    },
    {
      id: 4,
      name: 'Soft Silk Collection',
      price: 14500,
      originalPrice: 17000,
      rating: 4.6,
      reviews: 87,
      image1: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Soft silk saree with delicate patterns, perfect for everyday elegance.',
      category: 'Soft Silk',
      colors: ['Cream', 'Peach', 'Mint'],
      sizes: ['5.5m', '6.0m'],
      badge: 'NEW'
    },
    {
      id: 5,
      name: 'Bridal Special Edition',
      price: 25000,
      originalPrice: 30000,
      rating: 5.0,
      reviews: 45,
      image1: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Premium bridal collection with heavy embroidery and precious stone work.',
      category: 'Bridal',
      colors: ['Red', 'Maroon', 'Gold'],
      sizes: ['6.0m', '6.5m'],
      badge: 'PREMIUM'
    },
    {
      id: 6,
      name: 'Festive Celebration',
      price: 13500,
      rating: 4.8,
      reviews: 112,
      image1: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      image2: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Vibrant festive collection perfect for celebrations and special gatherings.',
      category: 'Festive',
      colors: ['Orange', 'Yellow', 'Green'],
      sizes: ['5.5m', '6.0m', '6.5m']
    }
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
  };

  return (
    <>
      <section className="py-20 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[800px]">
            {/* Left Side - Static Banner */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5 relative"
            >
              <div className="lg:sticky lg:top-24 h-[500px] lg:h-full lg:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-amber-400/30">
                {/* Background with Texture - Maroon/Gold Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4a0e0e] via-[#3d0c0c] to-[#2d0a0a]">
                  {/* Saree Texture Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255, 215, 0, 0.1) 10px,
                      rgba(255, 215, 0, 0.1) 20px
                    )`
                  }} />
                  
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute top-20 right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-600/20 rounded-full blur-3xl"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 md:p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.3 }}
                    className="mb-8"
                  >
                    <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-4 rounded-2xl shadow-2xl">
                      <Sparkles className="text-black" size={40} />
                    </div>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-7xl text-center mb-6 tracking-wider"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #f4e5b8 50%, #d4af37 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    NEW
                    <br />
                    ARRIVALS
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-6"
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-amber-100 text-center text-base md:text-lg mb-8 max-w-sm"
                  >
                    Discover our latest collection of handcrafted silk sarees
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 md:px-6 py-3 rounded-full border border-amber-400/30"
                  >
                    <TrendingUp className="text-amber-400" size={20} />
                    <span className="text-amber-200 text-xs md:text-sm">Fresh stock added weekly</span>
                  </motion.div>

                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 border-t-2 border-l-2 border-amber-400/40 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 border-b-2 border-r-2 border-amber-400/40 rounded-br-3xl" />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Scrollable Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5"
            >
              <div className="h-auto lg:h-full lg:overflow-y-auto lg:pr-2 scrollbar-thin scrollbar-thumb-amber-400/50 scrollbar-track-amber-100/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                  {products.map((product, index) => (
                    <ModernProductCard
                      key={product.id}
                      product={product}
                      index={index}
                      onClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl lg:max-w-5xl w-full p-0 bg-white border-2 border-amber-400/50 max-h-[90vh] overflow-y-auto [&>button]:hidden">
          <DialogTitle className="sr-only">
            {selectedProduct?.name || 'Product Details'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedProduct ? `View details for ${selectedProduct.name}` : 'Product details dialog'}
          </DialogDescription>

          <AnimatePresence>
            {selectedProduct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] text-amber-400 p-2 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
                  {/* Left - Images */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square w-full"
                    >
                      <ImageWithFallback
                        src={selectedProduct.image1}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="grid grid-cols-3 gap-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative rounded-xl overflow-hidden shadow-lg aspect-square cursor-pointer hover:scale-105 transition-transform"
                      >
                        <ImageWithFallback
                          src={selectedProduct.image2}
                          alt={`${selectedProduct.name} view 2`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative rounded-xl overflow-hidden shadow-lg aspect-square cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                      >
                        <span className="text-gray-400 text-xs md:text-sm">View 3</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative rounded-xl overflow-hidden shadow-lg aspect-square cursor-pointer hover:scale-105 transition-transform bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                      >
                        <span className="text-gray-400 text-xs md:text-sm">+2</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right - Details */}
                  <div className="space-y-4 md:space-y-6">
                    {selectedProduct.badge && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block"
                      >
                        <span className="bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] text-amber-400 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                          {selectedProduct.badge}
                        </span>
                      </motion.div>
                    )}

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent"
                    >
                      {selectedProduct.name}
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(selectedProduct.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-xs md:text-sm">
                        {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap items-baseline gap-2 md:gap-3"
                    >
                      <span className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent">
                        ₹{selectedProduct.price.toLocaleString()}
                      </span>
                      {selectedProduct.originalPrice && (
                        <>
                          <span className="text-base md:text-xl text-gray-400 line-through">
                            ₹{selectedProduct.originalPrice.toLocaleString()}
                          </span>
                          <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                            Save ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString()}
                          </span>
                        </>
                      )}
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-700 text-sm md:text-base leading-relaxed"
                    >
                      {selectedProduct.description}
                    </motion.p>

                    {/* Color Selection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-xs md:text-sm uppercase tracking-wide text-gray-600 mb-2 md:mb-3">Select Color</h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {selectedProduct.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`px-3 md:px-4 py-2 rounded-lg border-2 transition-all text-xs md:text-sm ${
                              selectedColor === color
                                ? 'border-amber-400 bg-amber-50 text-amber-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Size Selection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-xs md:text-sm uppercase tracking-wide text-gray-600 mb-2 md:mb-3">Select Length</h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 md:px-4 py-2 rounded-lg border-2 transition-all text-xs md:text-sm ${
                              selectedSize === size
                                ? 'border-amber-400 bg-amber-50 text-amber-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-3 md:gap-4 pt-2 md:pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] text-amber-400 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                      >
                        <ShoppingCart size={18} />
                        <span className="hidden sm:inline">Add to Cart</span>
                        <span className="sm:hidden">Add</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white border-2 border-amber-400 text-amber-600 p-3 md:p-4 rounded-xl shadow-lg hover:bg-amber-50 transition-all duration-300"
                      >
                        <Heart size={18} />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Modern Product Card Component
interface ProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

function ModernProductCard({ product, index, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-20 bg-[#8B0000] text-white px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider shadow-lg">
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Heart size={16} className="text-[#4a0e0e]" />
        </motion.button>

        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="image1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={product.image1}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ) : (
              <motion.div
                key="image2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={product.image2}
                  alt={`${product.name} alternate view`}
                  className="w-full h-full object-cover scale-105"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#4a0e0e]/80 via-[#4a0e0e]/30 to-transparent"
          />

          {/* Quick View Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)]"
          >
            <button className="w-full bg-white text-[#4a0e0e] py-3 rounded-xl shadow-2xl hover:bg-amber-50 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <Eye size={18} />
              <span>Quick View</span>
            </button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4 bg-gradient-to-b from-white to-amber-50/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star size={13} className="text-amber-500 fill-amber-500" />
              <span className="text-xs text-gray-700">{product.rating}</span>
            </div>
          </div>

          <h3 className="text-base md:text-lg mb-2 line-clamp-1 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl md:text-2xl bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* View Details Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="flex items-center gap-1 text-amber-700 text-sm"
          >
            <span>View Details</span>
            <ChevronRight size={16} />
          </motion.div>
        </div>

        {/* Gold Accent Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-amber-400/40 transition-all duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
