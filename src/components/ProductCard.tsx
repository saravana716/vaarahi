import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
  onAddToFavorites?: () => void;
}

export function ProductCard({ name, price, image, onAddToCart, onAddToFavorites }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleToggleFavorite = () => {
    setIsLiked(!isLiked);
    if (onAddToFavorites && !isLiked) {
      onAddToFavorites();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-900/30 transition-all duration-500 cursor-pointer bg-gradient-to-br from-white to-amber-50"
    >
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden relative bg-gradient-to-br from-[#4a0e0e]/5 to-amber-900/10">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Heart Icon */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            handleToggleFavorite();
          }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg z-10"
        >
          <motion.div
            animate={{ 
              scale: isLiked ? [1, 1.3, 1] : 1,
              rotate: isLiked ? [0, -10, 10, 0] : 0
            }}
            transition={{ duration: 0.4 }}
          >
            <Heart 
              size={20} 
              className={`transition-colors duration-300 ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
            />
          </motion.div>
        </motion.button>

        {/* Quick View Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-black py-3 rounded-xl hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            <span>{isAdded ? 'Added to Cart!' : 'Add to Cart'}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <motion.h3 
          className="text-lg mb-2 text-[#4a0e0e] group-hover:text-[#2d0a0a] transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {name}
        </motion.h3>
        
        <div className="flex items-center justify-between">
          <motion.p 
            className="text-2xl bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            ₹{price.toLocaleString()}
          </motion.p>
          
          <motion.div
            className="flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-amber-500 text-sm">★</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* New Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="absolute top-4 left-4 bg-gradient-to-r from-[#4a0e0e] to-black text-amber-400 px-3 py-1 rounded-full text-xs shadow-lg"
        >
          NEW
        </motion.div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
  );
}