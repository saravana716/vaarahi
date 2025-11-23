import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star, Heart, ShoppingCart, Eye, X, Filter, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  subcategory: string;
  badge?: string;
  description: string;
  colors: string[];
  sizes: string[];
  fabric: string;
}

interface FilteredProductsPageProps {
  onBack: () => void;
  initialCategory?: string;
  onAddToCart: (product: any) => void;
  onAddToFavorites: (product: any) => void;
}

export function FilteredProductsPage({ onBack, initialCategory = 'All', onAddToCart, onAddToFavorites }: FilteredProductsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategory !== 'All' ? [initialCategory] : []);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Expanded sections
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    color: true,
    fabric: true
  });

  // All products data
  const allProducts: Product[] = [
    // Premium Collection
    {
      id: 1,
      name: 'Royal Kanjivaram Silk',
      price: 18500,
      originalPrice: 22000,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Premium Collection',
      subcategory: 'Kanjivaram',
      badge: 'BESTSELLER',
      description: 'Exquisite Kanjivaram silk saree with intricate gold zari work.',
      colors: ['Maroon', 'Gold', 'Navy'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Silk'
    },
    {
      id: 2,
      name: 'Premium Banarasi Silk',
      price: 16500,
      originalPrice: 19500,
      rating: 4.9,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Premium Collection',
      subcategory: 'Banarasi',
      badge: 'NEW',
      description: 'Luxurious Banarasi silk with traditional motifs.',
      colors: ['Red', 'Gold', 'Green'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Silk'
    },
    {
      id: 3,
      name: 'Elegant Designer Saree',
      price: 12500,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Designer',
      subcategory: 'Contemporary',
      description: 'Contemporary designer saree blending modern aesthetics.',
      colors: ['Blue', 'Pink', 'Purple'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Georgette'
    },
    {
      id: 4,
      name: 'Soft Silk Collection',
      price: 9500,
      originalPrice: 12000,
      rating: 4.6,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Casual',
      subcategory: 'Soft Silk',
      badge: 'SALE',
      description: 'Soft silk saree perfect for everyday elegance.',
      colors: ['Cream', 'Peach', 'Mint'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Soft Silk'
    },
    {
      id: 5,
      name: 'Wedding Special Saree',
      price: 25000,
      originalPrice: 30000,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Premium Collection',
      subcategory: 'Wedding',
      badge: 'EXCLUSIVE',
      description: 'Ultra-premium wedding saree with heavy embroidery.',
      colors: ['Red', 'Gold', 'Maroon'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Silk'
    },
    {
      id: 6,
      name: 'Cotton Blend Casual',
      price: 3500,
      rating: 4.5,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Casual',
      subcategory: 'Cotton',
      description: 'Comfortable cotton blend for daily wear.',
      colors: ['White', 'Blue', 'Yellow'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Cotton'
    },
    {
      id: 7,
      name: 'Festive Georgette',
      price: 8500,
      originalPrice: 11000,
      rating: 4.7,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festive',
      subcategory: 'Party Wear',
      badge: 'TRENDING',
      description: 'Vibrant georgette saree for festivals.',
      colors: ['Orange', 'Pink', 'Green'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Georgette'
    },
    {
      id: 8,
      name: 'Chiffon Elegance',
      price: 6500,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Designer',
      subcategory: 'Chiffon',
      description: 'Lightweight chiffon with modern prints.',
      colors: ['Lavender', 'Aqua', 'Coral'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Chiffon'
    },
    // Additional Premium Collection Products
    {
      id: 9,
      name: 'Royal Heritage Saree',
      price: 22000,
      originalPrice: 26000,
      rating: 4.9,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Premium Collection',
      subcategory: 'Heritage',
      badge: 'BESTSELLER',
      description: 'Regal heritage saree with intricate traditional patterns.',
      colors: ['Maroon', 'Gold', 'Burgundy'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Silk'
    },
    {
      id: 10,
      name: 'Luxury Patola Silk',
      price: 28000,
      originalPrice: 32000,
      rating: 5.0,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Premium Collection',
      subcategory: 'Patola',
      badge: 'EXCLUSIVE',
      description: 'Authentic Patola silk with double ikat weaving.',
      colors: ['Red', 'Gold', 'Purple'],
      sizes: ['6.0m', '6.5m'],
      fabric: 'Silk'
    },
    {
      id: 11,
      name: 'Bridal Couture Collection',
      price: 35000,
      originalPrice: 42000,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Premium Collection',
      subcategory: 'Bridal',
      badge: 'NEW',
      description: 'Bridal couture saree with heavy zardozi work.',
      colors: ['Red', 'Maroon', 'Gold'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Silk'
    },
    {
      id: 12,
      name: 'Designer Cocktail Saree',
      price: 14500,
      rating: 4.7,
      reviews: 201,
      image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Designer',
      subcategory: 'Party Wear',
      badge: 'TRENDING',
      description: 'Modern cocktail saree with sequin embellishments.',
      colors: ['Black', 'Gold', 'Silver'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Georgette'
    },
    {
      id: 13,
      name: 'Chanderi Elegance',
      price: 7500,
      originalPrice: 9500,
      rating: 4.6,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festive',
      subcategory: 'Chanderi',
      description: 'Lightweight Chanderi cotton silk saree.',
      colors: ['Cream', 'Gold', 'Pink'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Chanderi'
    },
    {
      id: 14,
      name: 'Tussar Silk Treasure',
      price: 11500,
      rating: 4.8,
      reviews: 143,
      image: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festive',
      subcategory: 'Tussar',
      badge: 'SALE',
      description: 'Natural tussar silk with hand-painted designs.',
      colors: ['Beige', 'Olive', 'Rust'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Tussar Silk'
    },
    {
      id: 15,
      name: 'Linen Cotton Blend',
      price: 4500,
      rating: 4.4,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1758120221788-d576fa58f520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNhcmVlfGVufDF8fHx8MTc2MjYzMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Casual',
      subcategory: 'Linen',
      description: 'Breathable linen cotton for summer comfort.',
      colors: ['White', 'Sky Blue', 'Lemon'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Linen'
    },
    {
      id: 16,
      name: 'Organza Dream',
      price: 13500,
      originalPrice: 16000,
      rating: 4.7,
      reviews: 132,
      image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Designer',
      subcategory: 'Organza',
      badge: 'NEW',
      description: 'Sheer organza saree with delicate embroidery.',
      colors: ['Mint', 'Peach', 'Lavender'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Organza'
    },
    {
      id: 17,
      name: 'Mysore Silk Classic',
      price: 19500,
      originalPrice: 23000,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1731068381691-dd9f121114e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwc2FyZWUlMjBnb2xkfGVufDF8fHx8MTc2MjYzMzM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Premium Collection',
      subcategory: 'Mysore',
      badge: 'BESTSELLER',
      description: 'Pure Mysore silk with royal elegance.',
      colors: ['Teal', 'Gold', 'Purple'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Silk'
    },
    {
      id: 18,
      name: 'Contemporary Fusion',
      price: 10500,
      rating: 4.6,
      reviews: 223,
      image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MjU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Designer',
      subcategory: 'Fusion',
      description: 'Indo-western fusion saree with contemporary style.',
      colors: ['Navy', 'Wine', 'Charcoal'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Mixed Fabric'
    },
    {
      id: 19,
      name: 'Handloom Cotton',
      price: 5500,
      rating: 4.5,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1762320562013-45bd4f133fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzYXJlZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI2MzMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Casual',
      subcategory: 'Handloom',
      description: 'Traditional handloom cotton saree.',
      colors: ['Indigo', 'Mustard', 'Terracotta'],
      sizes: ['5.5m', '6.0m'],
      fabric: 'Cotton'
    },
    {
      id: 20,
      name: 'Festival Special',
      price: 9500,
      originalPrice: 12500,
      rating: 4.7,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1648396004864-f74eb58e8d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwc2FyZWUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festive',
      subcategory: 'Traditional',
      badge: 'SALE',
      description: 'Festive saree perfect for celebrations.',
      colors: ['Green', 'Red', 'Orange'],
      sizes: ['5.5m', '6.0m', '6.5m'],
      fabric: 'Silk Blend'
    }
  ];

  const categories = ['Premium Collection', 'Designer', 'Casual', 'Festive'];
  const priceRanges = [
    { label: 'Under ₹5,000', min: 0, max: 5000 },
    { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
    { label: '₹10,000 - ₹15,000', min: 10000, max: 15000 },
    { label: '₹15,000 - ₹20,000', min: 15000, max: 20000 },
    { label: 'Above ₹20,000', min: 20000, max: Infinity }
  ];
  const availableColors = ['Red', 'Gold', 'Maroon', 'Blue', 'Green', 'Pink', 'Purple', 'White', 'Cream', 'Orange'];
  const fabrics = ['Silk', 'Soft Silk', 'Cotton', 'Georgette', 'Chiffon', 'Chanderi', 'Tussar Silk', 'Linen', 'Organza', 'Mixed Fabric', 'Silk Blend'];

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }

    // Price filter
    if (selectedPriceRanges.length > 0) {
      const matchesPrice = selectedPriceRanges.some(rangeLabel => {
        const range = priceRanges.find(r => r.label === rangeLabel);
        return range && product.price >= range.min && product.price < range.max;
      });
      if (!matchesPrice) return false;
    }

    // Color filter
    if (selectedColors.length > 0) {
      const matchesColor = selectedColors.some(color => 
        product.colors.includes(color)
      );
      if (!matchesColor) return false;
    }

    // Fabric filter
    if (selectedFabrics.length > 0 && !selectedFabrics.includes(product.fabric)) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges(prev =>
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleFabric = (fabric: string) => {
    setSelectedFabrics(prev =>
      prev.includes(fabric) ? prev.filter(f => f !== fabric) : [...prev, fabric]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSelectedColors([]);
    setSelectedFabrics([]);
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-4 border-b-2 border-amber-400/50">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Filter className="text-amber-400" size={20} />
          </motion.div>
          <h3 className="text-xl text-amber-100">
            Filters
          </h3>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearAllFilters}
          className="text-xs text-amber-300 hover:text-amber-100 transition-colors uppercase tracking-wide bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm"
        >
          Clear All
        </motion.button>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full pb-3 border-b border-amber-400/30 text-amber-100 hover:text-amber-300 transition-colors"
        >
          <span>Category</span>
          <motion.div
            animate={{ rotate: expandedSections.category ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {expandedSections.category ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </motion.div>
        </button>
        <AnimatePresence>
          {expandedSections.category && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 mt-3 overflow-hidden"
            >
              {categories.map((category, index) => (
                <motion.label
                  key={category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 cursor-pointer group bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-all"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                  <span className="text-sm text-amber-100 group-hover:text-amber-300 transition-colors">
                    {category}
                  </span>
                </motion.label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Price Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full pb-3 border-b border-amber-400/30 text-amber-100 hover:text-amber-300 transition-colors"
        >
          <span>Price Range</span>
          <motion.div
            animate={{ rotate: expandedSections.price ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {expandedSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </motion.div>
        </button>
        <AnimatePresence>
          {expandedSections.price && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 mt-3 overflow-hidden"
            >
              {priceRanges.map((range, index) => (
                <motion.label
                  key={range.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 cursor-pointer group bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-all"
                >
                  <input
                    type="checkbox"
                    checked={selectedPriceRanges.includes(range.label)}
                    onChange={() => togglePriceRange(range.label)}
                    className="w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                  <span className="text-sm text-amber-100 group-hover:text-amber-300 transition-colors">
                    {range.label}
                  </span>
                </motion.label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Color Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={() => toggleSection('color')}
          className="flex items-center justify-between w-full pb-3 border-b border-amber-400/30 text-amber-100 hover:text-amber-300 transition-colors"
        >
          <span>Color</span>
          <motion.div
            animate={{ rotate: expandedSections.color ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {expandedSections.color ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </motion.div>
        </button>
        <AnimatePresence>
          {expandedSections.color && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-2 mt-3 overflow-hidden"
            >
              {availableColors.map((color, index) => (
                <motion.button
                  key={color}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleColor(color)}
                  className={`px-3 py-1.5 rounded-full text-xs border-2 transition-all ${
                    selectedColors.includes(color)
                      ? 'border-amber-400 bg-amber-400/20 text-amber-100 shadow-lg shadow-amber-500/30'
                      : 'border-white/20 text-amber-100/70 hover:border-amber-400/50 hover:bg-white/5'
                  }`}
                >
                  {color}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Fabric Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={() => toggleSection('fabric')}
          className="flex items-center justify-between w-full pb-3 border-b border-amber-400/30 text-amber-100 hover:text-amber-300 transition-colors"
        >
          <span>Fabric Type</span>
          <motion.div
            animate={{ rotate: expandedSections.fabric ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {expandedSections.fabric ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </motion.div>
        </button>
        <AnimatePresence>
          {expandedSections.fabric && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 mt-3 overflow-hidden"
            >
              {fabrics.map((fabric, index) => (
                <motion.label
                  key={fabric}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 cursor-pointer group bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-all"
                >
                  <input
                    type="checkbox"
                    checked={selectedFabrics.includes(fabric)}
                    onChange={() => toggleFabric(fabric)}
                    className="w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                  <span className="text-sm text-amber-100 group-hover:text-amber-300 transition-colors">
                    {fabric}
                  </span>
                </motion.label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-white">
        {/* Top Banner */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#6b0000] to-[#4a0000]">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1703145219083-6037d97decb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYXJlZSUyMGJhbm5lcnxlbnwxfHx8fDE3NjM4MDk0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />

            {/* Animated shine */}
            <motion.div
              animate={{ x: ['-100%', '200%'], opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
              style={{ width: '50%' }}
            />
            
            {/* Floating particles */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0 }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-amber-300 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
              className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-500 rounded-full blur-sm"
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
              transition={{ type: 'spring', duration: 0.8 }}
              className="mb-4"
            >
              <Sparkles className="text-amber-400" size={48} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl mb-4"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5b8 50%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Explore Our Collection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-amber-100 text-lg md:text-xl max-w-2xl"
            >
              Discover handcrafted sarees that blend tradition with elegance
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="w-full bg-gradient-to-r from-[#8B0000] to-amber-600 text-white py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <Filter size={18} />
                <span>Show Filters</span>
              </button>
            </div>

            <div className="flex gap-8">
              {/* Left Sidebar - Filters (Desktop) */}
              <div className="hidden lg:block w-80 flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-gradient-to-br from-[#8B0000] via-[#6b0000] to-[#4a0000] rounded-2xl shadow-2xl p-6 sticky top-6 border-2 border-amber-400/30 overflow-hidden"
                >
                  {/* Animated Background Pattern */}
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
                    className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl"
                  />
                  
                  <div className="relative z-10">
                    <FilterSection />
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Products */}
              <div className="flex-1">
                {/* Sort and Results */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <p className="text-gray-600">
                    Showing <span className="text-[#8B0000]">{sortedProducts.length}</span> results
                  </p>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-400 focus:outline-none bg-white"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                {/* Products Grid */}
                {sortedProducts.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {sortedProducts.map((product, index) => (
                      <FilterProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        onClick={() => handleProductClick(product)}
                        onAddToFavorites={onAddToFavorites}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="text-gray-400 mb-4">
                      <Sparkles size={64} className="mx-auto opacity-30" />
                    </div>
                    <h3 className="text-2xl text-gray-600 mb-2">No products found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your filters</p>
                    <button
                      onClick={clearAllFilters}
                      className="bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
              className="fixed left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 overflow-y-auto lg:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
                    Filters
                  </h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <FilterSection />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl lg:max-w-5xl w-full p-0 bg-white border-2 border-amber-400/50 max-h-[90vh] overflow-y-auto [&>button]:hidden">
          <DialogTitle className="sr-only">
            {selectedProduct?.name || 'Product Details'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedProduct ? `View details for ${selectedProduct.name}` : 'Product details dialog'}
          </DialogDescription>

          <AnimatePresence>
            {selectedProduct && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-50 bg-gradient-to-r from-[#8B0000] to-amber-600 text-white p-2 rounded-full shadow-xl hover:scale-110 transition-all"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square"
                    >
                      <ImageWithFallback
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-6">
                    {selectedProduct.badge && (
                      <span className="inline-block bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-3 py-1 rounded-full text-xs uppercase">
                        {selectedProduct.badge}
                      </span>
                    )}

                    <h2 className="text-3xl lg:text-4xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
                      {selectedProduct.name}
                    </h2>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(selectedProduct.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
                        ₹{selectedProduct.price.toLocaleString()}
                      </span>
                      {selectedProduct.originalPrice && (
                        <>
                          <span className="text-xl text-gray-400 line-through">
                            ₹{selectedProduct.originalPrice.toLocaleString()}
                          </span>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            Save ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString()}
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Select Color</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all ${
                              selectedColor === color
                                ? 'border-amber-400 bg-amber-50 text-amber-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Select Length</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all ${
                              selectedSize === size
                                ? 'border-amber-400 bg-amber-50 text-amber-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-[#8B0000] to-amber-600 text-white px-6 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                        onClick={() => onAddToCart(selectedProduct)}
                      >
                        <ShoppingCart size={18} />
                        <span>Add to Cart</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white border-2 border-amber-400 text-amber-600 p-4 rounded-xl shadow-lg hover:bg-amber-50 transition-all duration-300"
                        onClick={() => onAddToFavorites(selectedProduct)}
                      >
                        <Heart size={18} />
                      </motion.button>
                    </div>
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

interface FilterProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
  onAddToFavorites: (product: Product) => void;
}

function FilterProductCard({ product, index, onClick, onAddToFavorites }: FilterProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      onAddToFavorites(product);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        {product.badge && (
          <div className="absolute top-2 left-2 z-20 bg-[#8B0000] text-white px-2 py-1 rounded-full text-[9px] uppercase tracking-wider shadow-lg">
            {product.badge}
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-2 right-2 z-20 bg-white/95 backdrop-blur-sm p-1.5 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          onClick={handleFavoriteClick}
        >
          <Heart 
            size={14} 
            className={`transition-all ${isFavorited ? 'text-red-500 fill-red-500' : 'text-[#8B0000]'}`}
          />
        </motion.button>

        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/70 via-transparent to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] flex gap-2"
          >
            <button className="flex-1 bg-white text-[#8B0000] py-2 rounded-lg shadow-2xl hover:bg-amber-50 transition-all flex items-center justify-center gap-1 text-xs">
              <Eye size={14} />
              <span>View</span>
            </button>
            <button className="bg-gradient-to-r from-[#8B0000] to-amber-600 text-white p-2 rounded-lg shadow-2xl hover:shadow-amber-500/50 transition-all">
              <ShoppingCart size={14} />
            </button>
          </motion.div>
        </div>

        <div className="p-3 bg-gradient-to-b from-white to-amber-50/20">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              {product.subcategory}
            </span>
            <div className="flex items-center gap-1">
              <Star size={11} className="text-amber-500 fill-amber-500" />
              <span className="text-[10px] text-gray-700">{product.rating}</span>
            </div>
          </div>

          <h3 className="text-sm mb-1.5 line-clamp-1 text-gray-900 group-hover:text-[#8B0000] transition-colors">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2">
            <span className="text-lg bg-gradient-to-r from-[#8B0000] to-amber-600 bg-clip-text text-transparent">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-2xl border-2 border-amber-400 pointer-events-none"
        />
      </div>
    </motion.div>
  );
}