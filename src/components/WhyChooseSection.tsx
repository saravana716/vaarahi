import { motion } from 'motion/react';
import { Award, Shield, Heart, Sparkles, TrendingUp, Users } from 'lucide-react';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: '100% authentic silk sarees handpicked from master weavers',
      gradient: 'from-amber-600 to-yellow-500'
    },
    {
      icon: Shield,
      title: 'Trusted Brand',
      description: '30+ years of excellence in silk saree manufacturing',
      gradient: 'from-red-600 to-rose-500'
    },
    {
      icon: Heart,
      title: 'Crafted with Love',
      description: 'Every saree tells a story of passion and dedication',
      gradient: 'from-pink-600 to-rose-500'
    },
    {
      icon: Sparkles,
      title: 'Exquisite Designs',
      description: '500+ unique designs blending tradition with modernity',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Latest Trends',
      description: 'Stay ahead with our contemporary saree collections',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Happy Customers',
      description: 'Over 10,000+ satisfied customers across India',
      gradient: 'from-green-600 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4a0e0e] to-[#2d0a0a] mb-6 shadow-2xl"
          >
            <span className="text-4xl">✦</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #4a0e0e 0%, #2d0a0a 50%, #000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Why Choose Vaarahi Silks?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Experience the perfect blend of tradition, quality, and contemporary elegance
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100/50 hover:border-amber-300 overflow-hidden h-full">
                  {/* Background Animation */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(74, 14, 14, 0.03) 0%, rgba(45, 10, 10, 0.05) 100%)`
                    }}
                  />

                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full blur-sm"
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-xl mb-6 relative z-10`}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl mb-3 bg-gradient-to-r from-[#4a0e0e] to-[#2d0a0a] bg-clip-text text-transparent">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${reason.gradient}`}
                  />

                  {/* Corner Decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#4a0e0e] via-[#3d0c0c] to-[#2d0a0a] text-amber-400 px-10 py-5 rounded-full shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 border border-amber-400/30"
          >
            <span className="text-lg">Explore Our Collection</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
