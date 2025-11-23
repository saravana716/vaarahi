import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star, Heart, ShoppingCart, Eye, Sparkles, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

interface CategoryData {
  id: number;
  name: string;
  quote: string;
  description: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  image2?: string;
  category: string;
  badge?: string;
  description: string;
  colors: string[];
  sizes: string[];
}

interface CategoryPageProps {
  categoryName: string;
  onBack: () => void;
}

export function CategoryPage({ categoryName, onBack }: CategoryPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  // Category data with quotes and products
  const categoriesData: Record<string, CategoryData> = {
    'New Arrivals': {
      id: 1,
      name: 'New Arrivals',
      quote: 'Embrace the Latest Trends in Timeless Elegance',
      description: 'Discover our newest collection of handcrafted silk sarees, fresh from the looms of master artisans',
      products: [
        {
          id: 1,
          name: 'Royal Kanjivaram Silk',
          price: 18500,
          originalPrice: 22000,
          rating: 4.8,
          reviews: 124,
          image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
          image2: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Kanjivaram',
          badge: 'BESTSELLER',
          description: 'Exquisite Kanjivaram silk saree with intricate gold zari work. Perfect for weddings and special occasions.',
          colors: ['Maroon', 'Gold', 'Navy'],
          sizes: ['5.5m', '6.0m', '6.5m']
        },
        {
          id: 2,
          name: 'Premium Banarasi Silk',
          price: 16500,
          originalPrice: 19500,
          rating: 4.9,
          reviews: 98,
          image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
          image2: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Banarasi',
          badge: 'NEW',
          description: 'Luxurious Banarasi silk with traditional motifs and gold thread embroidery.',
          colors: ['Red', 'Gold', 'Green'],
          sizes: ['5.5m', '6.0m']
        },
        {
          id: 3,
          name: 'Elegant Designer Saree',
          price: 12500,
          rating: 4.7,
          reviews: 156,
          image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
          image2: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Designer',
          description: 'Contemporary designer saree blending modern aesthetics with traditional craftsmanship.',
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
          image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Soft Silk',
          badge: 'NEW',
          description: 'Soft silk saree with delicate patterns, perfect for everyday elegance.',
          colors: ['Cream', 'Peach', 'Mint'],
          sizes: ['5.5m', '6.0m']
        }
      ]
    },
    'Trending': {
      id: 2,
      name: 'Trending',
      quote: 'Fashion Forward, Heritage Proud',
      description: 'Explore the most sought-after designs that blend contemporary style with traditional elegance',
      products: [
        {
          id: 5,
          name: 'Modern Fusion Saree',
          price: 15500,
          rating: 4.9,
          reviews: 234,
          image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Fusion',
          badge: 'TRENDING',
          description: 'Ultra-modern fusion design with traditional silk base.',
          colors: ['Black', 'Gold', 'Silver'],
          sizes: ['5.5m', '6.0m', '6.5m']
        },
        {
          id: 6,
          name: 'Contemporary Elegance',
          price: 13500,
          originalPrice: 16000,
          rating: 4.8,
          reviews: 189,
          image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Contemporary',
          badge: 'TRENDING',
          description: 'Sleek contemporary design perfect for modern celebrations.',
          colors: ['Teal', 'Rose', 'Lavender'],
          sizes: ['5.5m', '6.0m']
        }
      ]
    },
    'Clearance': {
      id: 3,
      name: 'Clearance',
      quote: 'Luxury Within Reach - Limited Time Offers',
      description: 'Exceptional sarees at unbeatable prices. Premium quality, incredible savings',
      products: [
        {
          id: 7,
          name: 'Classic Heritage Saree',
          price: 8500,
          originalPrice: 15000,
          rating: 4.6,
          reviews: 145,
          image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Heritage',
          badge: 'SALE',
          description: 'Traditional heritage design at clearance price.',
          colors: ['Red', 'Green', 'Blue'],
          sizes: ['5.5m', '6.0m', '6.5m']
        },
        {
          id: 8,
          name: 'Festival Special',
          price: 9500,
          originalPrice: 14000,
          rating: 4.5,
          reviews: 98,
          image: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Festival',
          badge: 'SALE',
          description: 'Vibrant festival saree with significant discount.',
          colors: ['Yellow', 'Orange', 'Pink'],
          sizes: ['5.5m', '6.0m']
        }
      ]
    },
    'Casual & Workwear': {
      id: 4,
      name: 'Casual & Workwear',
      quote: 'Everyday Elegance, Professional Grace',
      description: 'Comfortable and stylish sarees perfect for daily wear and professional settings',
      products: [
        {
          id: 9,
          name: 'Daily Wear Elegance',
          price: 6500,
          rating: 4.7,
          reviews: 267,
          image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Casual',
          description: 'Comfortable daily wear saree with elegant design.',
          colors: ['Beige', 'Grey', 'Navy'],
          sizes: ['5.5m', '6.0m', '6.5m']
        },
        {
          id: 10,
          name: 'Professional Chic',
          price: 7500,
          originalPrice: 9000,
          rating: 4.8,
          reviews: 178,
          image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
          category: 'Workwear',
          description: 'Sophisticated workwear saree for professional environments.',
          colors: ['Black', 'White', 'Charcoal'],
          sizes: ['5.5m', '6.0m']
        }
      ]
    }
  };

  const categoryData = categoriesData[categoryName] || categoriesData['New Arrivals'];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-white">
        {/* Top Banner Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background with Saree Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#6b0000] to-[#4a0000]">
            {/* Saree Design Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(212, 175, 55, 0.3) 20px,
                rgba(212, 175, 55, 0.3) 40px
              ), repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 20px,
                rgba(212, 175, 55, 0.3) 20px,
                rgba(212, 175, 55, 0.3) 40px
              )`
            }} />

            {/* Animated Shine Effects */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 2
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
              style={{ width: '50%' }}
            />

            {/* Sparkle Decorations */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut'
                }}
              />
            ))}

            {/* Gradient Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-20 right-20 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={onBack}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-0 left-4 md:left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all"
            >
              <ArrowLeft size={20} />
              <span className="text-sm md:text-base">Back</span>
            </motion.button>

            {/* Category Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 0.2 }}
              className="inline-flex mb-6 md:mb-8"
            >
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-4 md:p-6 rounded-3xl shadow-2xl">
                <Sparkles className="text-[#8B0000]" size={40} />
              </div>
            </motion.div>

            {/* Category Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5b8 50%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(212, 175, 55, 0.5)'
              }}
            >
              {categoryData.name}
            </motion.h1>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-amber-100 italic mb-2">
                "{categoryData.quote}"
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg lg:text-xl text-amber-100/90 max-w-3xl mx-auto mb-8 md:mb-10"
            >
              {categoryData.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 md:px-6 py-3 md:py-4">
                <div className="text-2xl md:text-3xl text-amber-400 mb-1">
                  {categoryData.products.length}+
                </div>
                <div className="text-xs md:text-sm text-amber-100">Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 md:px-6 py-3 md:py-4">
                <div className="text-2xl md:text-3xl text-amber-400 mb-1">
                  Premium
                </div>
                <div className="text-xs md:text-sm text-amber-100">Quality</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 md:px-6 py-3 md:py-4">
                <div className="text-2xl md:text-3xl text-amber-400 mb-1">
                  100%
                </div>
                <div className="text-xs md:text-sm text-amber-100">Authentic</div>
              </div>
            </motion.div>

            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-400/40" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-400/40" />
          </div>

          {/* Wave Separator */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-20 md:h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" opacity="0.3"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff" opacity="0.5"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#ffffff"></path>
            </svg>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 md:py-20 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              rgba(139, 0, 0, 0.1) 30px,
              rgba(139, 0, 0, 0.1) 60px
            )`
          }} />

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{
                background: 'linear-gradient(135deg, #8B0000 0%, #d4af37 50%, #8B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Complete Collection
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Handpicked designs crafted with precision and love
              </p>
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categoryData.products.map((product, index) => (
                <CategoryProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Product Details Modal */}
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
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-gradient-to-r from-[#8B0000] to-amber-600 text-white p-2 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square w-full"
                    >
                      <ImageWithFallback
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    {selectedProduct.badge && (
                      <span className="inline-block bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                        {selectedProduct.badge}
                      </span>
                    )}

                    <h2 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
                      {selectedProduct.name}
                    </h2>

                    <div className="flex items-center gap-2">
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
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
                      <span className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
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
                    </div>

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <div>
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
                    </div>

                    <div>
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
                    </div>

                    <div className="flex gap-3 md:gap-4 pt-2 md:pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                      >
                        <ShoppingCart size={18} />
                        <span>Add to Cart</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white border-2 border-amber-400 text-amber-600 p-3 md:p-4 rounded-xl shadow-lg hover:bg-amber-50 transition-all duration-300"
                      >
                        <Heart size={18} />
                      </motion.button>
                    </div>
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

interface CategoryProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

function CategoryProductCard({ product, index, onClick }: CategoryProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        {product.badge && (
          <div className="absolute top-3 left-3 z-20 bg-[#8B0000] text-white px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider shadow-lg">
            {product.badge}
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={16} className="text-[#8B0000]" />
        </motion.button>

        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/70 via-transparent to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] flex gap-2"
          >
            <button className="flex-1 bg-white text-[#8B0000] py-2.5 rounded-xl shadow-2xl hover:bg-amber-50 transition-all flex items-center justify-center gap-2 text-sm">
              <Eye size={16} />
              <span>View</span>
            </button>
            <button className="bg-gradient-to-r from-[#8B0000] to-amber-600 text-white p-2.5 rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all">
              <ShoppingCart size={16} />
            </button>
          </motion.div>
        </div>

        <div className="p-4 bg-gradient-to-b from-white to-amber-50/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-1 rounded-full border border-amber-200">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star size={13} className="text-amber-500 fill-amber-500" />
              <span className="text-xs text-gray-700">{product.rating}</span>
            </div>
          </div>

          <h3 className="text-base mb-2 line-clamp-1 text-gray-900 group-hover:text-[#8B0000] transition-colors">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2">
            <span className="text-xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-2xl border-2 border-amber-400 pointer-events-none"
        />
      </div>
    </motion.div>
  );
}