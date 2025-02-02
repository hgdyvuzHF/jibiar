import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { RippleContainer } from './RippleEffect';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  const { state } = useCart();
  const navigate = useNavigate();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <RippleContainer>
        <button 
          onClick={() => navigate('/cart')}
          className="p-2 text-[#ffce79] hover:text-[#ffce79]/80 transition-colors relative group"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="w-6 h-6" strokeWidth={2} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#ffce79] text-black text-xs min-w-[20px] h-5 
              rounded-full flex items-center justify-center font-bold px-1 
              border-2 border-black/80 transform transition-transform duration-200 
              group-hover:scale-110"
            >
              {itemCount}
            </span>
          )}
          <span className="absolute -bottom-12 right-0 bg-black/90 text-[#ffce79] text-sm py-2 px-3 
            rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            whitespace-nowrap shadow-lg border border-[#ffce79]/20"
          >
            Your Cart ({itemCount} items)
          </span>
        </button>
      </RippleContainer>
    </div>
  );
};

export default CartIcon;