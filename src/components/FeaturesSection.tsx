import { motion, useInView } from 'motion/react';
import { Award, Heart, Sparkles, Shield, Star, Gem, Zap, Crown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function FeaturesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Crafted with the finest silk for unparalleled luxury',
      color: 'from-amber-600 to-yellow-500'
    },
    {
      icon: Heart,
      title: 'Handmade With Love',
      description: 'Expertly woven with care and passion by skilled artisans',
      color: 'from-red-600 to-rose-500'
    },
    {
      icon: Sparkles,
      title: 'Authentic Sarees',
      description: 'Authentic handloom sarees preserving rich traditions',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secured Packaging',
      description: 'Delivered safely with thoughtful and secure packaging',
      color: 'from-green-600 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Customer Favorite',
      description: 'Highly rated by thousands of satisfied customers',
      color: 'from-purple-600 to-pink-500'
    },
    {
      icon: Gem,
      title: 'Exquisite Details',
      description: 'Intricate embellishments and fine craftsmanship',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping across the nation',
      color: 'from-yellow-600 to-amber-500'
    },
    {
      icon: Crown,
      title: 'Royal Collection',
      description: 'Inspired by heritage and designed for royalty',
      color: 'from-indigo-600 to-purple-500'
    }
  ];

  // Auto-scroll functionality - scroll by 3 cards every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const nextIndex = (activeIndex + 3) % features.length;
        setActiveIndex(nextIndex);
        
        const container = scrollContainerRef.current;
        const cardWidth = container.offsetWidth / 3; // Width per card (3 cards visible)
        container.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth'
        });
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(timer);
  }, [activeIndex, features.length]);

  // Handle manual scroll to update active index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.offsetWidth / 3;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50/50 to-white relative overflow-hidden w-full">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-amber-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 md:gap-6 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide w-full"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === activeIndex || index === activeIndex + 1 || index === activeIndex + 2;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: isActive ? 1.02 : 0.98,
                  y: isActive ? -8 : 0
                }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative snap-start flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-20px)]"
                style={{
                  minWidth: '280px',
                  maxWidth: '400px'
                }}
              >
                {/* Card Container with Maroon Gradient Background */}
                <div className="relative bg-gradient-to-br from-[#4a0e0e] via-[#3d0c0c] to-[#2d0a0a] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-400/20 hover:border-amber-400/50 overflow-hidden h-full">
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ pointerEvents: 'none' }}
                  />

                  {/* Active Glow Effect */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-amber-400/15 to-transparent pointer-events-none"
                    />
                  )}

                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <motion.div
                      animate={{ 
                        rotate: isActive ? [0, -10, 10, -10, 0] : 0,
                        scale: isActive ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    
                    {/* Icon Glow Effect */}
                    <motion.div
                      animate={{
                        scale: isActive ? [1, 1.3, 1] : [1, 1.2, 1],
                        opacity: isActive ? [0.4, 0.7, 0.4] : [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl -z-10 opacity-30`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <motion.h3
                      animate={{
                        scale: isActive ? 1.02 : 1
                      }}
                      className="text-lg md:text-xl mb-2 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    animate={{
                      width: isActive ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
                  />

                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${feature.color} rounded-full blur-sm`}
                  />
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                    className={`absolute bottom-8 right-8 w-1.5 h-1.5 bg-gradient-to-br ${feature.color} rounded-full blur-sm`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {features.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                if (scrollContainerRef.current) {
                  const cardWidth = scrollContainerRef.current.offsetWidth / 3;
                  scrollContainerRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                  });
                }
              }}
              animate={{
                scale: index === activeIndex ? 1.2 : 1,
                opacity: index === activeIndex ? 1 : 0.5
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-gradient-to-r from-amber-600 to-yellow-500' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}