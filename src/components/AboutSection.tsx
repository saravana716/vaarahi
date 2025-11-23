import { motion } from 'motion/react';
import { Award, Heart, Shield, Users, TrendingUp, Globe, Sparkles, Crown, Star, CheckCircle2, Scissors, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NewArrivalsSection } from './NewArrivalsSection';
import { CategoriesGridSection } from './CategoriesGridSection';
import { FilterProductsSection } from './FilterProductsSection';
import { HelpSection } from './HelpSection';
import { Footer } from './Footer';
import { CategoriesSection } from './CategoriesSection';
import { VideoSwiperSection } from './VideoSwiperSection';

interface AboutSectionProps {
  onCategoryClick?: (categoryName: string) => void;
  onFilteredClick?: (categoryName?: string) => void;
}

export function AboutSection({ onCategoryClick, onFilteredClick }: AboutSectionProps) {
  const stats = [
    { number: '30+', label: 'Years of Excellence', icon: Award },
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '500+', label: 'Unique Designs', icon: Sparkles },
    { number: '100%', label: 'Authentic Silk', icon: Shield }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion & Dedication',
      description: 'Every saree is crafted with love and meticulous attention to detail',
      color: 'from-red-600 to-rose-500'
    },
    {
      icon: Crown,
      title: 'Heritage & Tradition',
      description: 'Preserving centuries-old weaving techniques passed through generations',
      color: 'from-amber-600 to-yellow-500'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the finest silk threads and materials for luxurious comfort',
      color: 'from-purple-600 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Delivering Indian elegance to customers worldwide',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Blending traditional craftsmanship with contemporary designs',
      color: 'from-green-600 to-emerald-500'
    },
    {
      icon: CheckCircle2,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through quality and service',
      color: 'from-indigo-600 to-purple-500'
    }
  ];

  const features = [
    {
      icon: Scissors,
      title: 'Master Craftsmen',
      description: 'Our artisans are skilled masters with decades of experience',
      image: 'https://images.unsplash.com/photo-1640292343595-889db1c8262e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwd2VhdmluZyUyMHNpbGt8ZW58MXx8fHwxNzYyNjM2MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Sparkles,
      title: 'Exquisite Materials',
      description: 'Pure silk fabrics sourced from the finest producers',
      image: 'https://images.unsplash.com/photo-1758264839086-2bdecc06d9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHNpbGslMjBmYWJyaWMlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MjYzNjEwNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Crown,
      title: 'Royal Heritage',
      description: 'Designs inspired by royal Indian textile traditions',
      image: 'https://images.unsplash.com/photo-1758169744470-097641049fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoZXJpdGFnZSUyMHRleHRpbGV8ZW58MXx8fHwxNzYyNjM2MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Package,
      title: 'Careful Packaging',
      description: 'Each saree is beautifully packaged for a premium experience',
      image: 'https://images.unsplash.com/photo-1762186540868-a7f3328c161d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbG9vbSUyMHdlYXZpbmclMjBwcm9jZXNzfGVufDF8fHx8MTc2MjYzNjEwNXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="about" className="w-full overflow-hidden">
      {/* Stats Section */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-[#4a0e0e] via-[#3d0c0c] to-[#2d0a0a] rounded-2xl p-6 text-center shadow-xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300 overflow-hidden">
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                    
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-yellow-500 mb-3 shadow-lg"
                    >
                      <Icon className="text-black" size={24} />
                    </motion.div>
                    
                    <motion.div
                      className="text-3xl md:text-4xl bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-amber-100/70 text-xs md:text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center mb-12 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent"
          >
            Our Core Values
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100/50 hover:border-amber-300/50 overflow-hidden h-full">
                    {/* Background Gradient on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg mb-4`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    
                    <h4 className="text-xl mb-2 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>

                    {/* Bottom Accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.color} w-0 group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features with Images */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center mb-12 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent"
          >
            What Makes Us Special
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-400/50 bg-white">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full"
                      >
                        <ImageWithFallback
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Icon Badge */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-4 right-4 bg-gradient-to-br from-amber-600 to-yellow-500 p-3 rounded-xl shadow-lg"
                      >
                        <Icon className="text-black" size={24} />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl md:text-2xl mb-2 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-amber-400/20 to-transparent"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#4a0e0e] via-[#3d0c0c] to-[#2d0a0a] rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-400/20 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-4 rounded-2xl shadow-lg">
                  <Heart className="text-black" size={40} />
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl text-center mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Our Story
              </h3>
              
              <div className="space-y-4 text-amber-100/80 leading-relaxed max-w-4xl mx-auto">
                <p className="text-center text-base md:text-lg">
                  Established in 1990, Vaarahi Silks began as a small family venture with a vision to preserve and promote 
                  the rich tradition of Indian handloom sarees. What started in a modest workshop has now blossomed into 
                  one of the most trusted names in silk sarees across India.
                </p>
                <p className="text-center text-base md:text-lg">
                  Our founder's passion for authentic craftsmanship and commitment to quality has been the cornerstone 
                  of our success. Today, we work directly with master weavers from renowned silk-weaving regions, ensuring 
                  that each saree tells a story of heritage, artistry, and timeless elegance.
                </p>
                <p className="text-center text-base md:text-lg">
                  Every thread woven in our sarees carries the legacy of generations of skilled artisans, and every design 
                  reflects our dedication to preserving India's textile heritage while embracing contemporary aesthetics.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-600 to-yellow-500 text-black px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Explore Our Collection
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Section - Bento Grid Layout (Added) */}
      <div className="mt-20">
        <CategoriesSection onCategoryClick={onCategoryClick} />
      </div>

      {/* Video Swiper Section - Multiple Videos (Added) */}
      <div className="mt-20">
        <VideoSwiperSection />
      </div>

      {/* New Arrivals Section (Added) */}
      <div className="mt-20">
        <NewArrivalsSection />
      </div>

      {/* Categories Grid Section - Integrated after Story */}
      <div className="mt-20">
        <CategoriesGridSection onCategoryClick={onCategoryClick} />
      </div>

      {/* Filter Products Section - Integrated after Categories Grid */}
      <div className="mt-20">
        <FilterProductsSection onFilteredClick={onFilteredClick} />
      </div>

      {/* Help Section - Integrated after Filter Products */}
      <div className="mt-20">
        <HelpSection />
      </div>

      {/* Footer - Integrated after Help Section */}
      <div className="mt-20">
        <Footer />
      </div>
    </section>
  );
}