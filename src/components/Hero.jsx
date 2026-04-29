import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-dark/70 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-gold tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-4">Welcome to</h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Bayt El Talleh
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Authentic Taste, Premium Experience
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark uppercase tracking-widest text-sm font-bold transition-all duration-300"
            >
              View Menu
            </a>
            <a 
              href="#reservation" 
              className="w-full sm:w-auto px-8 py-4 bg-gold border border-gold text-dark hover:bg-gold-light uppercase tracking-widest text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
            >
              Book Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-gray-400 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
