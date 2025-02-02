import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RippleContainer } from '../RippleEffect';

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <ShoppingCart className="w-24 h-24 text-[#ffce79]/30 mb-6" />
      <h2 className="text-2xl font-semibold text-[#ffce79] mb-2">Your cart is empty</h2>
      <p className="text-white/60 mb-8">Add some items to your cart to continue shopping</p>
      <RippleContainer>
        <button
          onClick={() => navigate('/')}
          className="bg-[#ffce79] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#ffce79]/90 transition-colors"
        >
          Continue Shopping
        </button>
      </RippleContainer>
    </div>
  );
};