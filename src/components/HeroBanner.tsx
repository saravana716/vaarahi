import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1739773375246-621154fc080f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaWxrJTIwc2FyZWV8ZW58MXx8fHwxNzYyNTM2NjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Silk Collection',
      subtitle: 'Handcrafted Perfection',
      description: 'Experience the finest silk sarees woven by master artisans',
      buttonText: 'Explore Collection'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1762068863008-dbeb2e2c6896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBzYXJlZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYyNjMzNjExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bridal Elegance',
      subtitle: 'Wedding Collection 2025',
      description: 'Make your special day unforgettable with our exclusive bridal sarees',
      buttonText: 'View Bridal Range'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1761125050322-bbfc155571bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHNhcmVlJTIwYmVhdXRpZnVsfGVufDF8fHx8MTc2MjYzMzYxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Traditional Heritage',
      subtitle: 'Timeless Beauty',
      description: 'Celebrate tradition with authentic handloom masterpieces',
      buttonText: 'Discover More'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI1MzY2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Designer Collection',
      subtitle: 'Contemporary Fashion',
      description: 'Modern designs that blend tradition with contemporary style',
      buttonText: 'Shop Now'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1574705477102-1ff256153d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXJlZSUyMGNvbGxlY3Rpb24lMjBwcmVtaXVtfGVufDF8fHx8MTc2MjYzMzYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Premium Range',
      subtitle: 'Exclusive Designs',
      description: 'Curated collection for the discerning connoisseur',
      buttonText: 'View Premium'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(timer);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.8
    })
  };

  const textVariants = {
    enter: {
      y: 50,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1
    },
    exit: {
      y: -50,
      opacity: 0
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden max-w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 7, ease: 'linear' }}
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
            
            {/* Animated Gradient Overlay */}
            <motion.div
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(74, 14, 14, 0.3) 0%, transparent 50%)',
                  'linear-gradient(45deg, transparent 50%, rgba(74, 14, 14, 0.3) 100%)',
                  'linear-gradient(45deg, rgba(74, 14, 14, 0.3) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <div className="max-w-2xl">
                {/* Subtitle */}
                <motion.div
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-3 flex items-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="text-amber-400" size={18} />
                  </motion.div>
                  <span className="text-amber-400 tracking-[0.2em] text-xs md:text-sm uppercase">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 2px 8px rgba(255, 215, 0, 0.4))'
                  }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base md:text-lg text-amber-100 mb-6 leading-relaxed max-w-xl"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-amber-600 to-yellow-500 text-black px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base overflow-hidden shadow-xl shadow-amber-900/50"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {slides[currentSlide].buttonText}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.button>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-8 flex items-center gap-6 md:gap-8"
                >
                  {[
                    { number: '30+', label: 'Years' },
                    { number: '10k+', label: 'Customers' },
                    { number: '500+', label: 'Designs' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-center"
                    >
                      <div className="text-xl md:text-2xl text-amber-400 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-amber-600 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Decorative Particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-amber-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto bg-black/30 backdrop-blur-md hover:bg-amber-600/80 text-amber-400 hover:text-black p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl border border-amber-400/30"
        >
          <ChevronLeft size={28} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto bg-black/30 backdrop-blur-md hover:bg-amber-600/80 text-amber-400 hover:text-black p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl border border-amber-400/30"
        >
          <ChevronRight size={28} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="group relative"
          >
            {/* Indicator Background */}
            <div className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'w-12 bg-gradient-to-r from-amber-600 to-yellow-500' 
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`} />
            
            {/* Progress Bar for Active Slide */}
            {currentSlide === index && (
              <motion.div
                className="absolute top-0 left-0 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
                key={`progress-${index}`}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-24 md:top-32 right-6 md:right-12 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-amber-400/30"
      >
        <span className="text-amber-400 text-lg md:text-xl">
          <span className="text-2xl md:text-3xl">{(currentSlide + 1).toString().padStart(2, '0')}</span>
          <span className="text-amber-600 mx-2">/</span>
          <span className="text-amber-600">{slides.length.toString().padStart(2, '0')}</span>
        </span>
      </motion.div>

      {/* Pause Indicator */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-amber-400/50"
          >
            <span className="text-amber-400 text-sm">Paused</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Corner Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-amber-400/30 rounded-tl-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-amber-400/30 rounded-br-3xl"
      />


    </div>
  );
}