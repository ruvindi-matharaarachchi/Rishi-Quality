import { motion } from 'framer-motion';
import { Leaf, Truck, Heart, Recycle } from 'lucide-react';
import { features } from '../data/dummyData';

const iconMap = {
  Leaf,
  Truck,
  Heart,
  Recycle,
};

const FeatureSection = () => {
  return (
    <section className="py-16 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-white/70">
            We're committed to your health and the planet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Leaf;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group text-center p-8 glass-dark rounded-2xl hover:bg-black/40 transition-all duration-300 shadow-2xl border border-white/5 hover:border-glow-orange hover:glow-orange"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600/20 to-accent-orange/20 rounded-2xl mb-6 group-hover:from-primary-600 group-hover:to-accent-orange transition-all border border-glow-orange"
                >
                  <IconComponent className="w-8 h-8 text-accent-orange group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
