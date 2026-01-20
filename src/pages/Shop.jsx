import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Plus, Search, Filter } from 'lucide-react';
import { products, categories } from '../data/dummyData';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || true; // You can add category filtering logic
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-dark-200">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Shop
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Discover our premium selection of healthy meals
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-12 pr-4 py-4 glass-dark rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['All', ...categories.map(cat => cat.name)].map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-orange text-white glow-red'
                    : 'glass text-white/70 hover:text-white hover:bg-black/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-white/70">No products found</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group glass-dark rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/5 hover:border-glow-orange"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-900 flex items-center justify-center p-8">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-glow-orange">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-full"
                      />
                    </div>
                    {product.badge && (
                      <div
                        className={`absolute top-4 left-4 px-3 py-1.5 rounded-md text-xs font-semibold ${
                          product.badge === 'New'
                            ? 'bg-gradient-to-r from-primary-600 to-accent-orange text-white glow-red'
                            : product.badge === 'Popular'
                            ? 'bg-yellow-400 text-gray-900'
                            : 'bg-gradient-to-r from-primary-600 to-accent-orange text-white'
                        }`}
                      >
                        {product.badge}
                      </div>
                    )}
                    {/* Quick Add Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-4 right-4 w-10 h-10 glass rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border-glow-orange hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-orange"
                    >
                      <Plus className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">{renderStars(product.rating)}</div>
                      <span className="text-sm text-white/70 font-medium">
                        {product.rating}
                      </span>
                    </div>

                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">
                        ${product.price.toFixed(2)}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-orange text-white rounded-full font-medium hover:from-primary-700 hover:to-orange-600 transition-all glow-red flex items-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
