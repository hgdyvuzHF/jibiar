import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#ffce79]">Contact</h2>
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 animate-on-scroll ${
            isVisible ? 'animate-slide-up' : ''
          }`}
        >
          <div className="space-y-8 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold text-[#ffce79]">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#ffce79]" />
                <span className="text-white">contact@futuristic.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#ffce79]" />
                <span className="text-white">+971 50 257 0918</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#ffce79]" />
                <span className="text-white">Downtown Dubai</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#ffce79]">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffce79]/50 focus:border-transparent transition-all duration-300 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#ffce79]">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffce79]/50 focus:border-transparent transition-all duration-300 text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#ffce79]">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffce79]/50 focus:border-transparent transition-all duration-300 resize-none text-white"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ffce79] text-black font-semibold py-3 px-4 rounded-lg hover:bg-[#ffce79]/90 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#ffce79]/50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;