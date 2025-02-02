import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: string) => {
    setIsMenuOpen(false);
    
    switch (item.toLowerCase()) {
      case 'home':
        navigate('/');
        break;
      case 'products':
        navigate('/products');
        break;
      default:
        if (location.pathname !== '/') {
          navigate('/');
          // Attendre que la navigation soit terminée avant de faire défiler
          setTimeout(() => {
            const element = document.getElementById(item.toLowerCase());
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          const element = document.getElementById(item.toLowerCase());
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dinbxrql6/image/upload/v1734958853/file_l1ci75.png" 
              alt="Logo" 
              className="h-8 w-auto cursor-pointer"
              onClick={() => handleNavigation('home')}
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {['Home', 'Products', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="text-[#ffce79] hover:text-[#ffce79]/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <CartIcon />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <CartIcon />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#ffce79] hover:text-[#ffce79]/80 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Products', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-[#ffce79] hover:text-[#ffce79]/80 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;