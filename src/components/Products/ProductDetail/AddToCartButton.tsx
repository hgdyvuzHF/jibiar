import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { RippleContainer } from '../../RippleEffect';

interface AddToCartButtonProps {
  onAddToCart: () => void;
}

export const AddToCartButton = ({ onAddToCart }: AddToCartButtonProps) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    setShowSuccess(true);
    onAddToCart();
  };

  return (
    <RippleContainer>
      <button 
        onClick={handleClick}
        disabled={showSuccess}
        className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2
          ${showSuccess 
            ? 'bg-green-500 text-white' 
            : 'bg-[#ffce79] text-black hover:bg-[#ffce79]/90'}`}
      >
        {showSuccess ? (
          <>
            <Check className="w-5 h-5" />
            <span>Added to Cart!</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            <span>Add to Cart</span>
          </>
        )}
      </button>
    </RippleContainer>
  );
};