import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&h=1080&fit=crop)',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Dark Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />

      {/* Floating Particles Effect */}
      {[...Array(5)].map((_, i) => {
        const randomX = (i * 20) % 100;
        const randomY = (i * 30) % 100;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-orange/30 rounded-full"
            initial={{
              x: `${randomX}%`,
              y: `${randomY}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${randomY}%`, `${randomY - 10}%`],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        );
      })}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(249,115,22,0.5)",
                  "0 0 20px rgba(255,255,255,0.5)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Cleaner ingredients.
              <br />
              <motion.span 
                className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200%",
                }}
              >
                Better meals
              </motion.span>
              {' '}— delivered.
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
          >
            Wholesome, plant-based meals made from real fruits and vegetables — ready whenever you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.08,
                y: -3,
                boxShadow: "0 15px 40px rgba(220, 38, 38, 0.5)",
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-orange text-white rounded-full font-semibold text-lg hover:from-primary-700 hover:to-orange-600 transition-all glow-red flex items-center justify-center gap-2 shadow-2xl"
            >
              Get Started
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.08,
                y: -3,
                borderColor: "rgba(249, 115, 22, 0.8)",
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-black/50 transition-all border-glow-orange flex items-center justify-center gap-2 shadow-xl"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 flex items-center justify-center"
              >
                <Play className="w-5 h-5" />
              </motion.div>
              Browse Meals
            </motion.button>
          </motion.div>
        </div>
      </div>


      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-200 to-transparent" />
    </section>
  );
};

export default Hero;
