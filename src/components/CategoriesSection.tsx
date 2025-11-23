import { motion } from 'motion/react';
import { Sparkles, Crown, Heart, ShoppingBag, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CategoriesSection() {
  const categories = [
    {
      id: 1,
      title: 'Soft Silk',
      subtitle: 'Lightweight Elegance',
      description: 'Delicate and comfortable silk sarees perfect for everyday elegance',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1645654731316-a350fdcf3bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwc2lsayUyMHNhcmVlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjI2MzY2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 2,
      title: 'Premium Luxury',
      subtitle: 'Royal Collection',
      description: 'Exquisite designs with pure gold and silver zari work',
      icon: Crown,
      image: 'https://images.unsplash.com/photo-1728381031272-ba3f537feadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcmVtaXVtJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzNjYxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-amber-600 to-yellow-500',
      bgColor: 'from-amber-50 to-yellow-50',
      gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      title: 'Bridal Collection',
      subtitle: 'Wedding Special',
      description: 'Make your special day unforgettable with our exclusive bridal sarees featuring intricate embellishments',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1688789913221-071a44294edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjB3ZWRkaW5nJTIwc2FyZWV8ZW58MXx8fHwxNzYyNjM2NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-600 to-rose-500',
      bgColor: 'from-red-50 to-rose-50',
      gridClass: 'md:col-span-1 md:row-span-2', // Center featured box
      featured: true
    },
    {
      id: 4,
      title: 'Casual Wear',
      subtitle: 'Everyday Comfort',
      description: 'Trendy and comfortable cotton silk sarees for daily elegance',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1692107271822-50cc09b2bf73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBjb3R0b24lMjBzYXJlZXxlbnwxfHx8fDE3NjI2MzY2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-600 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 5,
      title: 'Festive Special',
      subtitle: 'Celebration Ready',
      description: 'Vibrant colors and rich designs for every festive occasion',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1761125064798-530c13c32b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwdHJhZGl0aW9uYWwlMjBzYXJlZXxlbnwxfHx8fDE3NjI2MzY2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      gridClass: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-amber-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-amber-300/40 to-orange-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.3, 1, 1.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-pink-300/40 to-purple-300/40 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] px-6 py-2 rounded-full">
              <Sparkles className="text-amber-400" size={20} />
              <span className="text-amber-400 uppercase tracking-wider text-sm">Our Collections</span>
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #4a0e0e 0%, #2d0a0a 50%, #000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Explore Our Categories
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto"
          >
            Discover our exquisite collection of sarees, carefully curated for every occasion and style
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isFeatured = category.featured;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${category.gridClass} group relative`}
              >
                <div className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-200/50 hover:border-amber-400/80 h-full ${isFeatured ? 'min-h-[500px]' : 'min-h-[280px]'}`}>
                  {/* Image Background */}
                  <div className="absolute inset-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient Overlays */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                    
                    {/* Animated Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                    {/* Top Section - Icon */}
                    <div className="flex justify-between items-start">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg backdrop-blur-sm`}
                      >
                        <Icon className="text-white" size={isFeatured ? 32 : 24} />
                      </motion.div>

                      {/* Featured Badge */}
                      {isFeatured && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, type: 'spring' }}
                          className="bg-gradient-to-r from-amber-600 to-yellow-500 text-black px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg"
                        >
                          Popular
                        </motion.div>
                      )}
                    </div>

                    {/* Bottom Section - Text */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="mb-2">
                          <span className={`text-xs md:text-sm uppercase tracking-wider bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {category.subtitle}
                          </span>
                        </div>
                        
                        <h3 className={`${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} mb-3 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent`}>
                          {category.title}
                        </h3>
                        
                        <p className={`text-amber-100/90 leading-relaxed ${isFeatured ? 'text-base md:text-lg' : 'text-sm'}`}>
                          {category.description}
                        </p>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`mt-4 inline-flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        Explore Now
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Decorative Corner Accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                  />
                  <motion.div
                    className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${category.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                  />

                  {/* Floating Particles */}
                  {isFeatured && (
                    <>
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 0
                        }}
                        className={`absolute top-20 right-20 w-2 h-2 bg-gradient-to-br ${category.color} rounded-full blur-sm`}
                      />
                      <motion.div
                        animate={{
                          y: [0, 20, 0],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: 1
                        }}
                        className={`absolute bottom-32 left-20 w-3 h-3 bg-gradient-to-br ${category.color} rounded-full blur-sm`}
                      />
                    </>
                  )}

                  {/* Border Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500`}
                    style={{ zIndex: -1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Can't decide? View our complete collection
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] text-amber-400 px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-400/20 hover:border-amber-400/50"
          >
            View All Collections
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
