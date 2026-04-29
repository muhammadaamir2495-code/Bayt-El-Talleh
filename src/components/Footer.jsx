import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="font-serif text-2xl font-bold tracking-wider text-gold block mb-6">
              Bayt El Talleh
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevating Middle Eastern cuisine through modern luxury, preserving authentic flavors in every dish.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Quick Links</h5>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-gold text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold text-sm transition-colors">Our Story</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-gold text-sm transition-colors">Menu</a></li>
              <li><a href="#reservation" className="text-gray-400 hover:text-gold text-sm transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Contact</h5>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">123 Luxury Avenue, Dubai</li>
              <li className="text-gray-400 text-sm">+971 50 123 4567</li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                info@bayteltalleh.com
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Newsletter</h5>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-dark-lighter border border-white/20 px-4 py-2 text-sm text-white focus:outline-none focus:border-gold w-full rounded-l"
              />
              <button 
                type="button"
                className="bg-gold text-dark px-4 py-2 text-sm font-bold tracking-wider uppercase rounded-r hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Bayt El Talleh Restaurant. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
