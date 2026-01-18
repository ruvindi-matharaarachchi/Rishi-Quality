import { motion } from 'framer-motion';
import { Star, ShoppingCart, Plus } from 'lucide-react';
import { products } from '../data/dummyData';

const ProductGrid = () => {
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
    <section className="py-16 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Best Sellers
          </h2>
          <p className="text-xl text-white/70">
            Our most loved meals, crafted with premium ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-dark rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/5 hover:border-glow-orange"
            >
              {/* Product Image - Circular */}
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
      </div>
    </section>
  );
};

export default ProductGrid;
