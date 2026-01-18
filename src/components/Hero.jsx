import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&h=1080&fit=crop)',
        }}
      />
      
      {/* Dark Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-red-950/70 to-black/80" />
      
      {/* Orange Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-900/20 to-transparent" />
      
      {/* Additional blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Cleaner ingredients.
              <br />
              <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                Better meals
              </span>
              {' '}— delivered.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
          >
            Wholesome, plant-based meals made from real fruits and vegetables — ready whenever you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-orange text-white rounded-full font-semibold text-lg hover:from-primary-700 hover:to-orange-600 transition-all glow-red flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-black/40 transition-all border-glow-orange flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Browse Meals
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Food Images with Glow */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/30 to-primary-600/30 blur-3xl rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop"
            alt="Fresh salad"
            className="relative w-64 h-64 object-cover rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-200 to-transparent" />
    </section>
  );
};

export default Hero;
