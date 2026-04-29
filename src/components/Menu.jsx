import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  starters: [
    { name: 'Truffle Hummus', desc: 'Creamy chickpea puree, black truffle oil, pine nuts', price: '$18', img: 'https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?auto=format&fit=crop&q=80' },
    { name: 'Wagyu Kibbeh', desc: 'Premium wagyu beef, burghul, middle eastern spices', price: '$24', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80' },
    { name: 'Smoked Moutabal', desc: 'Charred eggplant, tahini, pomegranate seeds', price: '$16', img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4859?auto=format&fit=crop&q=80' },
    { name: 'Gold Leaf Fattoush', desc: 'Mixed greens, sumac dressing, crispy bread, 24k gold leaf', price: '$22', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80' },
  ],
  mains: [
    { name: 'Royal Mixed Grill', desc: 'Lamb chops, shish tawook, wagyu kebab, garlic sauce', price: '$65', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80' },
    { name: 'Saffron Sea Bass', desc: 'Pan-seared sea bass, saffron risotto, tahini foam', price: '$58', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80' },
    { name: 'Slow-Cooked Lamb Shank', desc: 'Braised for 12 hours, oriental rice, toasted nuts', price: '$52', img: 'https://images.unsplash.com/photo-1544025162-83b3815b81a8?auto=format&fit=crop&q=80' },
  ],
  desserts: [
    { name: 'Pistachio Baklava', desc: 'Filo pastry, rich pistachio filling, rose water syrup', price: '$15', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80' },
    { name: 'Saffron Milk Cake', desc: 'Sponge cake soaked in saffron milk, whipped cream', price: '$18', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80' },
  ],
  drinks: [
    { name: 'Rose Water Lemonade', desc: 'Fresh lemon, rose water, mint, agave', price: '$12', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80' },
    { name: 'Pomegranate Spritz', desc: 'Fresh pomegranate, sparkling water, lime', price: '$14', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80' },
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Our Menu</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Culinary Masterpieces</h2>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm md:text-base uppercase tracking-widest font-medium pb-2 border-b-2 transition-all duration-300 ${
                activeCategory === cat 
                  ? 'border-gold text-gold' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {menuData[activeCategory].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-6 group">
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{item.name}</h3>
                      <span className="text-gold font-bold ml-4">{item.price}</span>
                    </div>
                    <div className="w-full border-b border-white/10 mb-3"></div>
                    <p className="text-gray-400 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-block border border-gold text-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-dark transition-all">
            Download Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
