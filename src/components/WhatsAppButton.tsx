import React from 'react';
import { MessageCircle } from 'lucide-react';
import { RippleContainer } from './RippleEffect';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/971502570918', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <RippleContainer>
        <button
          onClick={handleClick}
          className="bg-[#25D366] hover:bg-[#22c35e] text-white p-4 rounded-full shadow-lg 
            transform hover:scale-110 transition-all duration-300 
            flex items-center justify-center group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-10 right-0 bg-black/80 text-white text-sm py-1 px-3 rounded-lg 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
          </span>
        </button>
      </RippleContainer>
    </div>
  );
};

export default WhatsAppButton;