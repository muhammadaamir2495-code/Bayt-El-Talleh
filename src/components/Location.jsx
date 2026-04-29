import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section id="contact" className="py-0 flex flex-col lg:flex-row bg-dark">
      {/* Contact Info Side */}
      <div className="w-full lg:w-1/3 p-12 lg:p-20 flex flex-col justify-center bg-dark-lighter z-10 border-r border-white/5">
        <h4 className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Visit Us</h4>
        <h2 className="font-serif text-4xl text-white mb-10">Our Location</h2>
        
        <div className="space-y-8">
          <div>
            <h5 className="text-white font-medium mb-2 flex items-center gap-2">
              <MapPin size={18} className="text-gold" />
              Address
            </h5>
            <p className="text-gray-400 font-light leading-relaxed">
              123 Luxury Avenue,<br />
              Downtown District,<br />
              Dubai, UAE
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-medium mb-2">Parking</h5>
            <p className="text-gray-400 font-light leading-relaxed">
              Complimentary valet parking available for all our guests at the main entrance.
            </p>
          </div>

          <a 
            href="#" 
            className="inline-block mt-4 border border-gold text-gold px-6 py-2 uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-dark transition-all"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Map Side */}
      <div className="w-full lg:w-2/3 h-[400px] lg:h-auto grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115530.82565611488!2d55.15570059952563!3d25.192451378393524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0, minHeight: '400px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
