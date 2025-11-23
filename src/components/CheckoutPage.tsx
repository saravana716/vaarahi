import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Package, MapPin, Phone, Mail, User, CreditCard, ShoppingBag, Sparkles } from 'lucide-react';

interface CheckoutPageProps {
  onBack: () => void;
  checkoutData: any;
  handlePayment: (data: any) => void;
}

export function CheckoutPage({ onBack, checkoutData, handlePayment }: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      handlePayment(formData);
    }
  };

  // Mock cart items
  const cartItems = [
    { id: 1, name: 'Royal Kanjivaram Silk', price: 18500, quantity: 1, image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?w=200' },
    { id: 2, name: 'Premium Banarasi Silk', price: 16500, quantity: 1, image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?w=200' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-amber-50/30">
      {/* Header Banner */}
      <section className="relative h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#6b0000] to-[#4a0000]">
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
            style={{ width: '50%' }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back</span>
          </motion.button>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="mb-3"
          >
            <ShoppingBag className="text-amber-400" size={48} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5b8 50%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Checkout
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Form */}
            <div className="lg:col-span-2">
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-400/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-[#8B0000] to-amber-600 p-3 rounded-xl">
                      <User className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
                      Contact Information
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${errors.firstName ? 'border-red-400' : 'border-gray-200'} focus:border-amber-400 focus:outline-none transition-colors`}
                        placeholder="Enter first name"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${errors.lastName ? 'border-red-400' : 'border-gray-200'} focus:border-amber-400 focus:outline-none transition-colors`}
                        placeholder="Enter last name"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-amber-400 focus:outline-none transition-colors`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 ${errors.phone ? 'border-red-400' : 'border-gray-200'} focus:border-amber-400 focus:outline-none transition-colors`}
                          placeholder="10-digit mobile number"
                          maxLength={10}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-400/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-[#8B0000] to-amber-600 p-3 rounded-xl">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
                      Shipping Address
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={3}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${errors.address ? 'border-red-400' : 'border-gray-200'} focus:border-amber-400 focus:outline-none transition-colors resize-none`}
                        placeholder="House no., Building name, Street"
                      />
                      {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Landmark (Optional)
                      </label>
                      <input
                        type="text"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none transition-colors"
                        placeholder="Near popular location"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 ${errors.city ? 'border-red-400' : 'border-gray-200'} focus:border-amber-400 focus:outline-none transition-colors`}
                          placeholder="City"
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          State <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 ${errors.state ? 'border-red-400' : 'border-gray-200'} focus:border-amber-400 focus:outline-none transition-colors`}
                          placeholder="State"
                        />
                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                      </div>

                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Pincode <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 ${errors.pincode ? 'border-red-400' : 'border-gray-200'} focus:border-amber-400 focus:outline-none transition-colors`}
                          placeholder="6-digit code"
                          maxLength={6}
                        />
                        {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#8B0000] to-amber-600 text-white py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-lg"
                >
                  <CreditCard size={24} />
                  <span>Proceed to Payment</span>
                </motion.button>
              </motion.form>
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-[#8B0000] via-[#6b0000] to-[#4a0000] rounded-2xl shadow-2xl p-6 sticky top-6 border-2 border-amber-400/30 overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Package className="text-amber-400" size={28} />
                    <h3 className="text-2xl text-amber-100">Order Summary</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-amber-100 text-sm">{item.name}</p>
                          <p className="text-amber-400 text-xs">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-amber-100">₹{item.price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-amber-400/30 pt-4 mb-6">
                    <div className="flex justify-between text-amber-100">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-amber-100">
                      <span>Shipping</span>
                      <span className="text-green-400">FREE</span>
                    </div>
                    <div className="flex justify-between text-amber-100">
                      <span>Tax (5%)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xl border-t-2 border-amber-400/50 pt-4">
                    <span className="text-amber-100">Total</span>
                    <span className="text-amber-400">₹{total.toLocaleString()}</span>
                  </div>

                  <div className="mt-6 bg-amber-400/10 rounded-xl p-4 border border-amber-400/30">
                    <div className="flex items-start gap-2">
                      <Sparkles className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                      <p className="text-amber-100 text-sm">
                        Free shipping on all orders. Estimated delivery: 3-5 business days
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
