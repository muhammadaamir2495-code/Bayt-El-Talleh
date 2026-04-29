import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Miller",
    role: "Food Critic",
    text: "An absolute masterpiece of Middle Eastern cuisine. The attention to detail in both the plating and the flavor profiles is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "James Henderson",
    role: "Local Guide",
    text: "The ambiance transports you directly to a luxurious oriental palace. The Royal Mixed Grill is a must-try. Phenomenal service.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Regular Guest",
    text: "We celebrated our anniversary here and they made it truly special. The Saffron Sea Bass is the best I've ever had.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Quote className="w-16 h-16 text-gold/20 mx-auto mb-8" />
        
        <div className="relative h-[300px] md:h-[250px]">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: index === current ? 1 : 0, 
                x: index === current ? 0 : 50,
                pointerEvents: index === current ? 'auto' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white font-serif italic mb-8 leading-relaxed">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gold"
                />
                <div className="text-left">
                  <h5 className="text-white font-medium">{test.name}</h5>
                  <p className="text-gold text-sm">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? 'w-8 bg-gold' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
