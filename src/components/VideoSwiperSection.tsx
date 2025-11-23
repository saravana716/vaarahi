import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

interface VideoCard {
  id: number;
  category: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
}

export function VideoSwiperSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoCard | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const videoCards: VideoCard[] = [
    {
      id: 1,
      category: 'Soft Silk',
      thumbnail: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Soft Silk Collection'
    },
    {
      id: 2,
      category: 'Premium Luxury',
      thumbnail: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      title: 'Premium Luxury Range'
    },
    {
      id: 3,
      category: 'Bridal Collection',
      thumbnail: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Bridal Elegance'
    },
    {
      id: 4,
      category: 'Casual Wear',
      thumbnail: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      title: 'Casual Comfort'
    },
    {
      id: 5,
      category: 'Festive Special',
      thumbnail: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Festive Celebrations'
    },
    {
      id: 6,
      category: 'Kanjivaram',
      thumbnail: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      title: 'Kanjivaram Heritage'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex >= videoCards.length ? 0 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, videoCards.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? videoCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === videoCards.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % videoCards.length;
      cards.push({ ...videoCards[index], position: i });
    }
    return cards;
  };

  return (
    <>
      <section className="py-20 md:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-amber-400/20 to-yellow-300/20 rounded-full blur-3xl"
        />

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
                <Play className="text-amber-400" size={20} />
                <span className="text-amber-400 uppercase tracking-wider text-sm">Video Collection</span>
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
              Watch And Shop
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
            >
              Explore our exquisite collection through stunning videos
            </motion.p>
          </motion.div>

          {/* Video Swiper */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] text-amber-400 p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 -translate-x-1/2"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] text-amber-400 p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 translate-x-1/2"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Cards Container */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <div className="flex items-center justify-center gap-4 md:gap-6 h-full px-12 md:px-20">
                <AnimatePresence mode="popLayout">
                  {getVisibleCards().map((card) => (
                    <motion.div
                      key={`${card.id}-${card.position}`}
                      initial={{ opacity: 0, scale: 0.8, x: 100 }}
                      animate={{
                        opacity: 1,
                        scale: card.position === 0 ? 1 : 0.85,
                        x: 0,
                        zIndex: card.position === 0 ? 10 : 5
                      }}
                      exit={{ opacity: 0, scale: 0.8, x: -100 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="flex-shrink-0 cursor-pointer"
                      style={{
                        width: card.position === 0 ? '280px' : '240px',
                      }}
                      onClick={() => setSelectedVideo(card)}
                      onMouseEnter={() => setIsAutoPlaying(false)}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                      <motion.div
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="relative group"
                      >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30 group-hover:border-amber-400/60 transition-all duration-300">
                          {/* Thumbnail */}
                          <div className="relative h-[320px] md:h-[400px] overflow-hidden">
                            <motion.img
                              src={card.thumbnail}
                              alt={card.category}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Play Button */}
                            <motion.div
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.2 }}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                              <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-4 md:p-6 rounded-full shadow-2xl">
                                <Play className="text-black" size={32} fill="currentColor" />
                              </div>
                            </motion.div>

                            {/* Category Badge */}
                            <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute top-4 left-4 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] px-4 py-2 rounded-full backdrop-blur-sm"
                            >
                              <span className="text-amber-400 text-xs md:text-sm uppercase tracking-wider">
                                {card.category}
                              </span>
                            </motion.div>

                            {/* Title at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                              <h3 className="text-white text-lg md:text-xl text-center">
                                {card.title}
                              </h3>
                            </div>
                          </div>

                          {/* Shine Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {videoCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-amber-600 to-yellow-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-2 border-amber-400/50 overflow-hidden [&>button]:hidden">
          {/* Hidden accessibility elements */}
          <DialogTitle className="sr-only">
            {selectedVideo?.title || 'Video Player'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedVideo ? `Watch ${selectedVideo.category} video - ${selectedVideo.title}` : 'Video player dialog'}
          </DialogDescription>
          
          <AnimatePresence>
            {selectedVideo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-50 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] text-amber-400 p-2 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>

                {/* Video Header */}
                <div className="bg-gradient-to-r from-[#4a0e0e] via-[#3d0c0c] to-[#2d0a0a] p-6 border-b border-amber-400/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-2 rounded-lg">
                      <Play className="text-black" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                        {selectedVideo.title}
                      </h3>
                      <p className="text-amber-600 text-sm">{selectedVideo.category}</p>
                    </div>
                  </div>
                </div>

                {/* Video Player */}
                <div className="relative bg-black aspect-video">
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Video Footer */}
                <div className="bg-gradient-to-r from-[#4a0e0e] via-[#3d0c0c] to-[#2d0a0a] p-6 border-t border-amber-400/30">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-600 to-yellow-500 text-black px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Shop This Collection
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 text-amber-400 border border-amber-400/50 px-6 py-3 rounded-full shadow-xl hover:bg-white/20 transition-all duration-300"
                    >
                      View Details
                    </motion.button>
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