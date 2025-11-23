import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Heart, ShoppingCart, Filter, X, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
}

interface FilterOption {
  id: string;
  label: string;
  min: number;
  max: number;
}

interface FilterProductsSectionProps {
  onFilteredClick?: (categoryName?: string) => void;
}

export function FilterProductsSection({ onFilteredClick }: FilterProductsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Products', min: 0, max: Infinity },
    { id: 'under10k', label: 'Under ₹10,000', min: 0, max: 10000 },
    { id: 'under20k', label: 'Under ₹20,000', min: 0, max: 20000 },
    { id: 'under30k', label: 'Under ₹30,000', min: 0, max: 30000 },
    { id: 'above30k', label: 'Above ₹30,000', min: 30000, max: Infinity }
  ];

  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Royal Kanjivaram Silk',
      price: 18500,
      originalPrice: 22000,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Kanjivaram',
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'Premium Banarasi Silk',
      price: 16500,
      originalPrice: 19500,
      rating: 4.9,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Banarasi',
      badge: 'NEW'
    },
    {
      id: 3,
      name: 'Elegant Designer Saree',
      price: 8500,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Designer'
    },
    {
      id: 4,
      name: 'Soft Silk Collection',
      price: 14500,
      originalPrice: 17000,
      rating: 4.6,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Soft Silk'
    },
    {
      id: 5,
      name: 'Bridal Special Edition',
      price: 35000,
      originalPrice: 42000,
      rating: 5.0,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Bridal',
      badge: 'PREMIUM'
    },
    {
      id: 6,
      name: 'Festive Celebration',
      price: 9500,
      rating: 4.8,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festive'
    },
    {
      id: 7,
      name: 'Traditional Cotton Silk',
      price: 7500,
      originalPrice: 9500,
      rating: 4.5,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Cotton Silk'
    },
    {
      id: 8,
      name: 'Luxury Wedding Collection',
      price: 45000,
      originalPrice: 52000,
      rating: 5.0,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Wedding',
      badge: 'EXCLUSIVE'
    },
    {
      id: 9,
      name: 'Modern Fusion Saree',
      price: 12500,
      rating: 4.7,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Fusion',
      badge: 'TRENDING'
    },
    {
      id: 10,
      name: 'Classic Chanderi',
      price: 11500,
      originalPrice: 14000,
      rating: 4.6,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Chanderi'
    },
    {
      id: 11,
      name: 'Heritage Patola',
      price: 28500,
      originalPrice: 32000,
      rating: 4.9,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Patola',
      badge: 'BESTSELLER'
    },
    {
      id: 12,
      name: 'Contemporary Linen',
      price: 6500,
      rating: 4.4,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Linen'
    }
  ];

  const selectedFilter = filterOptions.find(f => f.id === activeFilter);
  const filteredProducts = allProducts.filter(product => {
    if (!selectedFilter) return true;
    return product.price >= selectedFilter.min && product.price < selectedFilter.max;
  });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
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
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#8B0000]/10 to-amber-400/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-4 py-2 rounded-full mb-4"
          >
            <Filter size={18} />
            <span className="text-sm uppercase tracking-wider">Filter by Price</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-3"
            style={{
              background: 'linear-gradient(135deg, #8B0000 0%, #d4af37 50%, #8B0000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Premium Collection
          </motion.h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16"
        >
          {filterOptions.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + index * 0.1,
                type: 'spring',
                bounce: 0.5
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 text-sm md:text-base ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#8B0000] to-amber-600 text-white shadow-xl'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-400 shadow-md'
              }`}
            >
              {activeFilter === filter.id && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-gradient-to-r from-[#8B0000] to-amber-600 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                )}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-sm md:text-base">
            Showing <span className="text-[#8B0000]">{filteredProducts.length}</span> products
          </p>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredProducts.map((product, index) => (
              <FilterProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              console.log('Button clicked!', onFilteredClick);
              if (onFilteredClick) {
                onFilteredClick('Premium Collection');
              }
            }}
            className="bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 text-base md:text-lg inline-flex items-center gap-3"
          >
            <span>View All Products with Filters</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

interface FilterProductCardProps {
  product: Product;
  index: number;
}

function FilterProductCard({ product, index }: FilterProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
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
          className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={16} className="text-[#8B0000]" />
        </motion.button>

        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/70 via-transparent to-transparent"
          />

          {/* Quick Actions */}
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

        {/* Product Info */}
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

        {/* Gold Border on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-2xl border-2 border-amber-400 pointer-events-none"
        />
      </div>
    </motion.div>
  );
}