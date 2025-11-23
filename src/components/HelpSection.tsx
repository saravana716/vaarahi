import { motion } from 'motion/react';
import { Phone, Package, Mail, Video, ChevronRight, Sparkles, HeadphonesIcon } from 'lucide-react';

export function HelpSection() {
  const helpItems = [
    {
      icon: Phone,
      title: 'Get in touch',
      description: '24/7 Available customer service +91 9100003343',
      buttonText: 'Call Us',
      buttonIcon: Phone,
      href: 'tel:+919100003343',
      gradient: 'from-[#8B0000] to-[#5c0000]',
      iconGradient: 'from-amber-500 to-yellow-600'
    },
    {
      icon: Package,
      title: 'Track your order',
      description: 'Want to know if your order is processed and dispatched?',
      buttonText: 'Order Tracking',
      buttonIcon: Package,
      href: '#track',
      gradient: 'from-amber-600 to-amber-700',
      iconGradient: 'from-[#8B0000] to-[#5c0000]'
    },
    {
      icon: Mail,
      title: 'For Sale Inquiry',
      description: 'Don\'t hesitate support@vaarahisilks.com',
      buttonText: 'Email Us',
      buttonIcon: Mail,
      href: 'mailto:support@vaarahisilks.com',
      gradient: 'from-[#8B0000] to-[#6b0000]',
      iconGradient: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'You can schedule a Video Call.',
      buttonText: 'Video Call',
      buttonIcon: Video,
      href: '#video',
      gradient: 'from-amber-700 to-amber-800',
      iconGradient: 'from-[#8B0000] to-[#4a0000]'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-amber-50/30 to-amber-100/40 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#8B0000]/10 to-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-amber-500/10 to-[#8B0000]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-5 py-2 rounded-full mb-4 shadow-xl"
          >
            <HeadphonesIcon size={20} />
            <span className="text-sm uppercase tracking-wider">Customer Support</span>
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
            Need Help?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
          >
            We're here to assist you with any questions or concerns
          </motion.p>
        </motion.div>

        {/* Help Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {helpItems.map((item, index) => {
            const Icon = item.icon;
            const ButtonIcon = item.buttonIcon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: 'spring',
                  bounce: 0.4
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-100/50 hover:border-amber-400/50 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        rgba(139, 0, 0, 0.1) 10px,
                        rgba(139, 0, 0, 0.1) 20px
                      )`
                    }} />
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.iconGradient} shadow-lg mb-4`}
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl mb-2 bg-gradient-to-r from-[#8B0000] to-[#4a0000] bg-clip-text text-transparent">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Button */}
                      <motion.a
                        href={item.href}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-3 bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                      >
                        <ButtonIcon size={18} />
                        <span>{item.buttonText}</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        >
                          <ChevronRight size={18} />
                        </motion.div>
                      </motion.a>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/10 to-transparent"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Gold Border Glow on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ boxShadow: '0 0 0 0px rgba(212, 175, 55, 0)' }}
                  whileHover={{
                    boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.5)',
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-amber-50 px-6 py-3 rounded-full border-2 border-amber-200">
            <Sparkles className="text-[#8B0000]" size={20} />
            <span className="text-gray-700 text-sm">Available 24/7 for your convenience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
