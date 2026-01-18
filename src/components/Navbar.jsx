import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Shop', 'Recipes', 'Blog', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          {/* Logo with Animation */}
          <motion.div
            initial={{ scale: 0, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="flex items-center cursor-pointer"
          >
            <motion.div
              className="relative"
            >
              <img 
                src="/logo.png" 
                alt="Rishi Quality Logo" 
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-24 h-24' : 'w-32 h-32'
                }`}
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="text-white/90 hover:text-white font-semibold text-base transition-colors relative group"
              >
                {link}
                <motion.span 
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent-orange via-primary-600 to-accent-orange"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                {/* Glow effect on hover */}
                <motion.span
                  className="absolute -bottom-2 left-0 h-0.5 bg-accent-orange blur-sm"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.08,
                x: -2,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 glass text-white rounded-full font-semibold hover:bg-black/50 transition-all border border-white/20 hover:border-white/40 shadow-lg"
            >
              Sign In
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ 
                scale: 1.08,
                x: -2,
                boxShadow: "0 10px 30px rgba(220, 38, 38, 0.4)",
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-orange text-white rounded-full font-semibold hover:from-primary-700 hover:to-orange-600 transition-all glow-red shadow-xl"
            >
              Sign Up
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-white transition-colors relative"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden pb-4 space-y-4 glass-dark rounded-2xl mt-4 p-6 overflow-hidden"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-accent-orange font-semibold py-3 transition-colors border-b border-white/10"
                >
                  {link}
                </motion.a>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/20">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 glass text-white rounded-full font-semibold hover:bg-black/50 transition-all border border-white/20"
                >
                  Sign In
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-orange text-white rounded-full font-semibold hover:from-primary-700 hover:to-orange-600 transition-all glow-red"
                >
                  Sign Up
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
