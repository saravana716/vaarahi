import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Category {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

interface CategoriesGridSectionProps {
  onCategoryClick?: (categoryName: string) => void;
}

export function CategoriesGridSection({ onCategoryClick }: CategoriesGridSectionProps) {
  const categories: Category[] = [
    {
      id: 1,
      title: 'New Arrivals',
      subtitle: 'Latest Collection 2024',
      image: 'https://images.unsplash.com/photo-1761125135351-268e72e39158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHNhcmVlJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjM3OTA4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-[#8B0000]/90 to-[#5c0000]/90'
    },
    {
      id: 2,
      title: 'Trending',
      subtitle: 'Most Popular Styles',
      image: 'https://images.unsplash.com/photo-1756483571456-6fa86cb1ae53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHNhcmVlfGVufDF8fHx8MTc2Mzc5MDg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-amber-600/90 to-amber-800/90'
    },
    {
      id: 3,
      title: 'Clearance',
      subtitle: 'Up to 50% Off',
      image: 'https://images.unsplash.com/photo-1758797316117-8d133af25f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBpbmRpYW4lMjBzYXJlZXxlbnwxfHx8fDE3NjM3OTA4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-[#8B0000]/90 to-amber-700/90'
    },
    {
      id: 4,
      title: 'Casual & Workwear',
      subtitle: 'Everyday Elegance',
      image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2lsayUyMHNhcmVlfGVufDF8fHx8MTc2Mzc5MDg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-amber-700/90 to-[#8B0000]/90'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#8B0000]/10 to-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-500/10 to-[#8B0000]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-4 py-2 rounded-full mb-4"
          >
            <Sparkles size={18} />
            <span className="text-sm uppercase tracking-wider">Shop by Category</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #8B0000 0%, #d4af37 50%, #8B0000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Explore Our Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
          >
            Discover exquisite sarees crafted for every occasion
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} onCategoryClick={onCategoryClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CategoryCardProps {
  category: Category;
  index: number;
  onCategoryClick?: (categoryName: string) => void;
}

function CategoryCard({ category, index, onCategoryClick }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: 'spring',
        bounce: 0.4
      }}
      whileHover={{ y: -12 }}
      className="group relative cursor-pointer"
      onClick={() => onCategoryClick?.(category.title)}
    >
      <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
        {/* Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-t ${category.color} transition-opacity duration-500`}
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.8 }}
        />

        {/* Gold Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          initial={{ boxShadow: '0 0 0 0px rgba(212, 175, 55, 0)' }}
          whileHover={{
            boxShadow: '0 0 0 4px rgba(212, 175, 55, 0.8)',
            transition: { duration: 0.3 }
          }}
        />

        {/* Sparkle Effect on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(6)].map((_, i) => (
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
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut'
              }}
            />
          ))}
        </motion.div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          style={{ width: '50%' }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30"
          >
            <span className="text-white text-xs uppercase tracking-wider">Exclusive</span>
          </motion.div>

          {/* Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            <h3 className="text-white text-3xl md:text-4xl mb-2 group-hover:scale-105 transition-transform origin-left">
              {category.title}
            </h3>
            <p className="text-white/90 text-sm md:text-base mb-4">
              {category.subtitle}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.5 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-[#8B0000] px-6 py-3 rounded-full w-fit shadow-lg group-hover:shadow-xl transition-all"
          >
            <span>Explore Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
        </div>

        {/* Corner Accent */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-amber-400 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <motion.div
          className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-amber-400 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    </motion.div>
  );
}