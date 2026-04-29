import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1544025162-83b3815b81a8?auto=format&fit=crop&q=80", alt: "Slow Cooked Lamb", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80", alt: "Royal Mixed Grill", colSpan: "col-span-2", rowSpan: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?auto=format&fit=crop&q=80", alt: "Hummus", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80", alt: "Fattoush", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80", alt: "Dessert", colSpan: "col-span-1", rowSpan: "row-span-1" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Visual Journey</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Our Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg group ${img.colSpan} ${img.rowSpan}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
