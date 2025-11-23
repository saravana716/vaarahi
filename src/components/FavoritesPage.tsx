import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, ShoppingCart, X, Sparkles, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
}

interface FavoritesPageProps {
  onBack: () => void;
  favoriteItems: Product[];
  onAddToCart: (product: Product) => void;
  onRemoveFromFavorites: (productId: number) => void;
}

export function FavoritesPage({ onBack, favoriteItems, onAddToCart, onRemoveFromFavorites }: FavoritesPageProps) {
  const [localFavorites, setLocalFavorites] = useState(favoriteItems);

  const removeFromFavorites = (id: number) => {
    setLocalFavorites(prevItems => prevItems.filter(item => item.id !== id));
    onRemoveFromFavorites(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-amber-50/30">
      {/* Hero Banner */}
      <section className="relative h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#6b0000] to-[#4a0000]">
          {/* Animated Background Pattern */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"
          />

          {/* Floating Hearts */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="absolute"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
            >
              <Heart className="text-amber-400/30 fill-amber-400/30" size={20 + i * 2} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to Home</span>
          </motion.button>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="mb-4"
          >
            <Heart className="text-amber-400 fill-amber-400" size={64} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5b8 50%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            My Favorites
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-amber-100 text-lg md:text-xl max-w-2xl"
          >
            {localFavorites.length > 0 
              ? `${localFavorites.length} ${localFavorites.length === 1 ? 'item' : 'items'} you've fallen in love with`
              : 'Your wishlist is empty'}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {localFavorites.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {localFavorites.map((product, index) => (
                <FavoriteCard
                  key={product.id}
                  product={product}
                  index={index}
                  onRemove={() => removeFromFavorites(product.id)}
                  onAddToCart={() => onAddToCart(product)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="mb-6">
                <Heart className="w-32 h-32 mx-auto text-gray-300" />
              </div>
              <h2 className="text-3xl mb-4 text-gray-800">No Favorites Yet</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Start adding items you love to your wishlist!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Explore Collection
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

interface FavoriteCardProps {
  product: Product;
  index: number;
  onRemove: () => void;
  onAddToCart: () => void;
}

function FavoriteCard({ product, index, onRemove, onAddToCart }: FavoriteCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-amber-400/50">
        {/* Remove Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onRemove}
          className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-[#8B0000] hover:text-white transition-all"
        >
          <X size={18} />
        </motion.button>

        {/* Image Section */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-gray-50">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/80 via-[#8B0000]/40 to-transparent"
          />

          {/* Hover Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] flex gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAddToCart}
              className="flex-1 bg-white text-[#8B0000] py-3 rounded-xl shadow-2xl hover:bg-amber-50 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </motion.button>
          </motion.div>

          {/* Animated Heart Badge */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-3 left-3 bg-gradient-to-r from-[#8B0000] to-amber-600 p-2 rounded-full shadow-lg"
          >
            <Heart className="text-white fill-white" size={16} />
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4 bg-gradient-to-b from-white to-amber-50/20">
          <div className="flex items-center justify-between mb-2">
            {product.category && (
              <span className="text-xs uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-1 rounded-full border border-amber-200">
                {product.category}
              </span>
            )}
            {product.rating && (
              <div className="flex items-center gap-1">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span className="text-sm text-gray-700">{product.rating}</span>
              </div>
            )}
          </div>

          <h3 className="text-lg mb-2 line-clamp-1 text-gray-900 group-hover:text-[#8B0000] transition-colors">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2">
            <span className="text-2xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {product.description && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        {/* Animated Border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-2xl border-2 border-amber-400 pointer-events-none"
        />
      </div>
    </motion.div>
  );
}