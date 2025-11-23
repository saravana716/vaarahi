import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CreditCard, Smartphone, Building2, Wallet, CheckCircle, Lock, Sparkles } from 'lucide-react';

interface PaymentPageProps {
  onBack: () => void;
  checkoutData: any;
}

export function PaymentPage({ onBack, checkoutData }: PaymentPageProps) {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'upi' | 'netbanking' | 'wallet' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const [upiId, setUpiId] = useState('');

  const paymentMethods = [
    {
      id: 'card' as const,
      icon: CreditCard,
      title: 'Credit/Debit Card',
      description: 'Visa, Mastercard, Amex, Rupay'
    },
    {
      id: 'upi' as const,
      icon: Smartphone,
      title: 'UPI',
      description: 'Google Pay, PhonePe, Paytm'
    },
    {
      id: 'netbanking' as const,
      icon: Building2,
      title: 'Net Banking',
      description: 'All major banks supported'
    },
    {
      id: 'wallet' as const,
      icon: Wallet,
      title: 'Wallet',
      description: 'Paytm, PhonePe, Amazon Pay'
    }
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 3000);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardData(prev => ({ ...prev, number: formatCardNumber(value) }));
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\//g, '');
    if (value.length <= 4 && /^\d*$/.test(value)) {
      const formatted = value.length >= 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
      setCardData(prev => ({ ...prev, expiry: formatted }));
    }
  };

  const totalAmount = 35175; // Mock total

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-amber-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="mb-8 inline-block"
          >
            <CheckCircle className="w-32 h-32 text-green-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Payment Successful!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-xl mb-8"
          >
            Thank you for your order. We'll send you a confirmation email shortly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-amber-200"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Order ID</span>
              <span className="text-xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
                VRS{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Amount Paid</span>
              <span className="text-2xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
                ₹{totalAmount.toLocaleString()}
              </span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all text-lg"
          >
            Continue Shopping
          </motion.button>

          {/* Confetti Animation */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, x: 0, opacity: 1 }}
              animate={{
                y: 800,
                x: Math.random() * 400 - 200,
                opacity: 0,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'easeOut'
              }}
              className="absolute top-0 left-1/2"
              style={{
                width: 10,
                height: 10,
                backgroundColor: ['#8B0000', '#d4af37', '#059669', '#f59e0b'][Math.floor(Math.random() * 4)],
                borderRadius: Math.random() > 0.5 ? '50%' : '0'
              }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-amber-50/30">
      {/* Header Banner */}
      <section className="relative h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#6b0000] to-[#4a0000]">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
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
            <Lock className="text-amber-400" size={48} />
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
            Secure Payment
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Amount Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[#8B0000] to-[#6b0000] rounded-2xl shadow-2xl p-8 mb-8 text-center relative overflow-hidden border-2 border-amber-400/30"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"
            />
            
            <div className="relative z-10">
              <p className="text-amber-100 mb-2">Total Amount</p>
              <motion.h2
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl md:text-6xl text-amber-400"
              >
                ₹{totalAmount.toLocaleString()}
              </motion.h2>
              <div className="mt-4 flex items-center justify-center gap-2 text-amber-100 text-sm">
                <Lock size={16} />
                <span>Secured by 256-bit SSL encryption</span>
              </div>
            </div>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-amber-400/20"
          >
            <h3 className="text-2xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent mb-6">
              Choose Payment Method
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {paymentMethods.map((method, index) => (
                <motion.button
                  key={method.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedMethod === method.id
                      ? 'border-amber-400 bg-amber-50 shadow-lg'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <method.icon className={selectedMethod === method.id ? 'text-[#8B0000]' : 'text-gray-500'} size={24} />
                    <span className={selectedMethod === method.id ? 'text-[#8B0000]' : 'text-gray-800'}>
                      {method.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </motion.button>
              ))}
            </div>

            {/* Payment Form */}
            <AnimatePresence mode="wait">
              {selectedMethod === 'card' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      value={cardData.number}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none"
                      maxLength={19}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      value={cardData.name}
                      onChange={(e) => setCardData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Name on card"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={handleExpiryChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">CVV</label>
                      <input
                        type="password"
                        value={cardData.cvv}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value.length <= 3 && /^\d*$/.test(value)) {
                            setCardData(prev => ({ ...prev, cvv: value }));
                          }
                        }}
                        placeholder="123"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none"
                        maxLength={3}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedMethod === 'upi' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <label className="block text-sm text-gray-700 mb-2">UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none"
                  />
                </motion.div>
              )}

              {selectedMethod === 'netbanking' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <label className="block text-sm text-gray-700 mb-2">Select Bank</label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none">
                    <option>Select your bank</option>
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>
                  </select>
                </motion.div>
              )}

              {selectedMethod === 'wallet' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <label className="block text-sm text-gray-700 mb-2">Select Wallet</label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none">
                    <option>Select your wallet</option>
                    <option>Paytm</option>
                    <option>PhonePe</option>
                    <option>Amazon Pay</option>
                    <option>Google Pay</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            {selectedMethod && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full mt-6 bg-gradient-to-r from-[#8B0000] to-amber-600 text-white py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <Lock size={24} />
                    <span>Pay ₹{totalAmount.toLocaleString()}</span>
                  </>
                )}
              </motion.button>
            )}
          </motion.div>

          {/* Security Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3"
          >
            <Sparkles className="text-green-600" size={24} />
            <div className="text-sm text-green-800">
              <p>Your payment information is secure and encrypted.</p>
              <p className="text-xs text-green-600 mt-1">PCI DSS Compliant | 100% Secure Transactions</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
