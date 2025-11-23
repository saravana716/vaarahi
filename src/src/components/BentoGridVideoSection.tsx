import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export function BentoGridVideoSection() {
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const categories = [
    {
      id: 1,
      name: 'Silk Sarees',
      description: 'Premium pure silk collection',
      video: 'https://player.vimeo.com/external/434045013.sd.mp4?s=d5ca0ac0d8b9c7d0e8f1a7c3f3e3c0b8c3e3c0b8&profile_id=164&oauth2_token_id=57447761',
      color: 'from-amber-600 to-yellow-500',
      size: 'large' // Takes 2x2 space
    },
    {
      id: 2,
      name: 'Wedding Collection',
      description: 'Bridal & festive wear',
      video: 'https://player.vimeo.com/external/454479522.sd.mp4?s=53ec4c6f1daf5c7b6b5e5c8e5c8e5c8e5c8e5c8e&profile_id=164&oauth2_token_id=57447761',
      color: 'from-rose-600 to-pink-500',
      size: 'medium' // Takes 1x2 space
    },
    {
      id: 3,
      name: 'Cotton Sarees',
      description: 'Comfortable daily wear',
      video: 'https://player.vimeo.com/external/455345735.sd.mp4?s=6f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c&profile_id=164&oauth2_token_id=57447761',
      color: 'from-green-600 to-emerald-500',
      size: 'medium' // Takes 1x2 space
    },
    {
      id: 4,
      name: 'Designer Sarees',
      description: 'Exclusive designer pieces',
      video: 'https://player.vimeo.com/external/370467553.sd.mp4?s=7f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c&profile_id=164&oauth2_token_id=57447761',
      color: 'from-purple-600 to-pink-500',
      size: 'small' // Takes 1x1 space
    },
    {
      id: 5,
      name: 'Party Wear',
      description: 'Glamorous evening sarees',
      video: 'https://player.vimeo.com/external/395928680.sd.mp4?s=8f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c&profile_id=164&oauth2_token_id=57447761',
      color: 'from-blue-600 to-cyan-500',
      size: 'small' // Takes 1x1 space
    },
    {
      id: 6,
      name: 'Handloom Special',
      description: 'Authentic handwoven sarees',
      video: 'https://player.vimeo.com/external/387761556.sd.mp4?s=9f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c4f3c&profile_id=164&oauth2_token_id=57447761',
      color: 'from-indigo-600 to-purple-500',
      size: 'small' // Takes 1x1 space
    }
  ];

  useEffect(() => {
    // Auto-play all videos when they come into view
    categories.forEach((category) => {
      const video = videoRefs.current[category.id];
      if (video) {
        video.play().catch(() => {
          // Auto-play might be blocked, set to false
          setPlayingVideos(prev => ({ ...prev, [category.id]: false }));
        });
        setPlayingVideos(prev => ({ ...prev, [category.id]: true }));
      }
    });
  }, []);

  const toggleVideo = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideos[id]) {
      video.pause();
      setPlayingVideos(prev => ({ ...prev, [id]: false }));
    } else {
      video.play();
      setPlayingVideos(prev => ({ ...prev, [id]: true }));
    }
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50/30 to-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #4a0e0e 0%, #2d0a0a 50%, #000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Explore by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl"
          >
            Discover our diverse collection of premium sarees
          </motion.p>
        </motion.div>

        {/* Bento Grid with Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${getSizeClass(category.size)} relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer`}
              onClick={() => toggleVideo(category.id)}
            >
              {/* Video Background */}
              <video
                ref={(el) => (videoRefs.current[category.id] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
                poster={`https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=800&fit=crop`}
              >
                <source src={category.video} type="video/mp4" />
              </video>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Vaarahi Silks Logo/Watermark */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                className="absolute top-4 right-4 z-20"
              >
                <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30">
                  <span className="text-amber-400 text-xs">VAARAHI SILKS</span>
                </div>
              </motion.div>

              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-4 rounded-full border-2 border-white/40 group-hover:bg-white/30 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleVideo(category.id);
                }}
              >
                {playingVideos[category.id] ? (
                  <Pause className="text-white" size={24} />
                ) : (
                  <Play className="text-white" size={24} />
                )}
              </motion.button>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs mb-3 shadow-lg`}
                  >
                    {category.name}
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl text-white mb-2 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    {category.description}
                  </p>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"
                />
              </div>

              {/* Border Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/50 rounded-3xl transition-all duration-300"
              />

              {/* Corner Accent */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute top-0 left-0 w-20 h-20 bg-amber-400/20 rounded-br-3xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Click on any category to pause/play the video
          </p>
        </motion.div>
      </div>
    </section>
  );
}
