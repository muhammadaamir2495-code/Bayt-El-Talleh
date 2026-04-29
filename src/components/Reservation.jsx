import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation request submitted! We will contact you shortly to confirm.');
    // Here you would normally handle the API submission
  };

  return (
    <section id="reservation" className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Book a Table</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Experience Elegance</h2>
            <p className="text-gray-400 font-light mb-10 leading-relaxed">
              Reserve your table at Bayt El Talleh and prepare for an unforgettable dining experience. For parties larger than 8 or special events, please contact us directly.
            </p>
            
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <Clock className="text-gold" />
                <div>
                  <h5 className="font-semibold text-white">Opening Hours</h5>
                  <p className="text-sm">Monday - Sunday: 1:00 PM - 12:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gold" />
                <div>
                  <h5 className="font-semibold text-white">Direct Reservation</h5>
                  <p className="text-sm">+971 50 123 4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 md:p-10 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-dark/50 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Time</label>
                  <input 
                    type="time" 
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Guests</label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num} className="bg-dark">{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Special Requests (Optional)</label>
                <textarea 
                  name="requests"
                  rows="3"
                  value={formData.requests}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Anniversary, dietary requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold text-dark font-bold uppercase tracking-widest py-4 rounded-md hover:bg-gold-light transition-all transform hover:-translate-y-1"
              >
                Reserve Table
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Reservation;
