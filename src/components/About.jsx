import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
                alt="Chef preparing fine dining dish" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold -z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 -z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Our Story</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Culinary Heritage Meets Modern Luxury</h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                Founded on the principles of exquisite taste and uncompromising quality, Bayt El Talleh brings the rich tapestry of Middle Eastern cuisine into a contemporary fine-dining setting. 
              </p>
              <p>
                Our master chefs source only the finest, freshest ingredients to craft dishes that are both a visual masterpiece and a celebration of authentic flavors. Every spice blend is meticulously crafted in-house, ensuring an unforgettable culinary journey.
              </p>
              <p>
                Whether you are joining us for an intimate dinner or a grand celebration, we promise an atmosphere of elegance, warmth, and impeccable service.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80" 
                alt="Head Chef" 
                className="w-16 h-16 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <h5 className="text-white font-medium text-lg">Tariq Al-Fayed</h5>
                <p className="text-gold text-sm uppercase tracking-wider">Executive Chef</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
