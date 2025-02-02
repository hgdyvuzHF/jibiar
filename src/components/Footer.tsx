import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 text-[#ffce79] border-t border-[#ffce79]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="https://res.cloudinary.com/dinbxrql6/image/upload/v1734958853/file_l1ci75.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
            <p className="text-sm text-[#ffce79]/80">
              Discover the excellence and refinement of our premium products.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Gallery', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-[#ffce79]/80 hover:text-[#ffce79] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[#ffce79]/80">
              <li>📍 Downtown Dubai</li>
              <li>📞 +971 50 257 0918</li>
              <li>✉️ contact@fbduae.com</li>
              <li>🕒 Open 7 days a week, 10am - 10pm</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#ffce79] text-[#ffce79]/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#ffce79] text-[#ffce79]/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#ffce79] text-[#ffce79]/80 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#ffce79]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#ffce79]/60">
              © {currentYear} All rights reserved
            </p>
            <div className="flex space-x-6">
              <Link to="/legal-notice" className="text-sm text-[#ffce79]/60 hover:text-[#ffce79] transition-colors">
                Legal Notice
              </Link>
              <Link to="/privacy-policy" className="text-sm text-[#ffce79]/60 hover:text-[#ffce79] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-sm text-[#ffce79]/60 hover:text-[#ffce79] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;