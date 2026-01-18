import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { categories } from '../data/dummyData';

const CategorySection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
      // Update current page based on scroll position
      const page = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentPage(page);
    }
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <section className="py-20 bg-dark-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Shop by Category
          </h2>
          <p className="text-lg text-white/60">
            Browse our curated collection
          </p>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="relative">
          {showLeftArrow && (
            <motion.button
              onClick={() => scroll('left')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/10 hidden md:flex"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>
          )}
          {showRightArrow && (
            <motion.button
              onClick={() => scroll('right')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/10 hidden md:flex"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          )}

          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-hide pb-8"
          >
            <div className="flex gap-8 min-w-max">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ 
                    y: -16, 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="group cursor-pointer flex-shrink-0"
                >
                  <div className="flex flex-col items-center gap-4 w-48">
                    {/* Card with Orange Glow Frame */}
                    <div className="relative w-full">
                      {/* Orange Glow Frame - Always Visible */}
                      <motion.div 
                        className="absolute -inset-3 bg-gradient-to-br from-accent-orange/60 via-orange-500/50 to-accent-orange/60 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                        animate={{
                          opacity: [0.7, 0.8, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Additional Glow Layer on Hover */}
                      <div className="absolute -inset-2 bg-accent-orange/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      
                      {/* Card Container */}
                      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-accent-orange/30 group-hover:shadow-[0_25px_60px_rgba(249,115,22,0.4)] transition-all duration-300">
                        <div className="aspect-square relative overflow-hidden bg-gray-800">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Name */}
                    <h3 className="text-white text-lg font-bold text-center group-hover:text-accent-orange transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollRef.current;
                  if (container) {
                    container.scrollTo({
                      left: index * container.clientWidth,
                      behavior: 'smooth',
                    });
                  }
                }}
                className={`transition-all duration-300 ${
                  currentPage === index
                    ? 'w-8 h-2 bg-accent-orange rounded-full'
                    : 'w-2 h-2 bg-white/20 rounded-full hover:bg-white/30'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
