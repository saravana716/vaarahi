import { motion } from 'motion/react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Video,
  MessageCircle,
  Heart,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export function Footer() {
  const shopLinks = [
    { name: 'Traditional Sarees', href: '#traditional' },
    { name: 'Wedding Sarees', href: '#wedding' },
    { name: 'Designer & Party Wear Sarees', href: '#designer' },
    { name: 'Festive Wear Sarees', href: '#festive' },
    { name: 'Casual & Workwear Sarees', href: '#casual' },
    { name: 'Dhoti & Kanduvā', href: '#dhoti' },
    { name: 'Our Stores', href: '#stores' }
  ];

  const helpfulLinks = [
    { name: 'Terms Of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Contact Information', href: '#contact' },
    { name: 'Contact Us', href: '#contact-us' },
    { name: 'About Us', href: '#about' },
    { name: 'Shipping Policy', href: '#shipping' },
    { name: 'Return Policy', href: '#return' },
    { name: 'Our Management', href: '#management' },
    { name: 'Blogs', href: '#blogs' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const quickContactButtons = [
    { icon: Video, label: 'Video Call', href: '#video', gradient: 'from-[#8B0000] to-[#5c0000]' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919100003343', gradient: 'from-green-600 to-green-700' },
    { icon: Phone, label: 'Call Now', href: 'tel:+919100003343', gradient: 'from-amber-600 to-amber-700' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1a0505] via-[#2d0a0a] to-[#0a0202] text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.3, 1, 1.3]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-[#8B0000]/20 to-amber-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Saree Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 20px,
          rgba(212, 175, 55, 0.1) 20px,
          rgba(212, 175, 55, 0.1) 40px
        )`
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 md:py-20 border-b border-amber-400/20">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <h3 className="text-3xl md:text-4xl mb-2" style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5b8 50%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Vaarahi Silks
              </h3>
              <div className="flex items-center gap-2">
                <Sparkles className="text-amber-400" size={16} />
                <span className="text-amber-200 text-sm">Since 1990</span>
              </div>
            </motion.div>

            <p className="text-amber-100/70 mb-6 leading-relaxed text-sm">
              Honoring the timeless beauty of sarees by creating exquisite, high-quality designs that seamlessly blend tradition with modern elegance.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-gradient-to-br hover:from-amber-600 hover:to-yellow-500 transition-all duration-300 ${social.color}`}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href="tel:+919100003343"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-amber-100/70 hover:text-amber-400 transition-colors text-sm group"
              >
                <div className="bg-gradient-to-br from-amber-600 to-yellow-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={14} />
                </div>
                <span>+91 9100003343</span>
              </motion.a>
              <motion.a
                href="mailto:support@vaarahisilks.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-amber-100/70 hover:text-amber-400 transition-colors text-sm group"
              >
                <div className="bg-gradient-to-br from-[#8B0000] to-[#5c0000] p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={14} />
                </div>
                <span>support@vaarahisilks.com</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-amber-100/70 text-sm group"
              >
                <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-2 rounded-lg group-hover:scale-110 transition-transform mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>Hyderabad, Telangana, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl md:text-2xl mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-amber-100/70 hover:text-amber-400 transition-colors text-sm group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl md:text-2xl mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Helpful Links
            </h4>
            <ul className="space-y-3">
              {helpfulLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-amber-100/70 hover:text-amber-400 transition-colors text-sm group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Mission */}
            <div>
              <h4 className="text-xl md:text-2xl mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Mission
              </h4>
              <p className="text-amber-100/70 text-sm leading-relaxed">
                Our mission is to honor the timeless beauty of sarees by creating exquisite, high-quality designs that seamlessly blend tradition with a modern touch. We aim to provide our customers with a luxurious and memorable shopping experience that truly celebrates elegance.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h4 className="text-xl md:text-2xl mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Vision
              </h4>
              <p className="text-amber-100/70 text-sm leading-relaxed">
                We aspire to be Hyderabad's go-to destination for premium sarees, inspiring people worldwide to appreciate India's rich heritage and craftsmanship. At the same time, we're committed to supporting artisans and promoting sustainable practices in the textile industry.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-b border-amber-400/20"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {quickContactButtons.map((button, index) => {
              const Icon = button.icon;
              return (
                <motion.a
                  key={button.label}
                  href={button.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 bg-gradient-to-r ${button.gradient} px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <Icon size={18} />
                  <span className="text-sm">{button.label}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-amber-100/60 text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} Vaarahi Silks. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-amber-100/60 text-sm"
            >
              <span>Crafted with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Heart className="text-red-500 fill-red-500" size={16} />
              </motion.div>
              <span>for Indian Heritage</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-2 bg-gradient-to-r from-[#8B0000] via-amber-500 to-[#8B0000]" />
    </footer>
  );
}
