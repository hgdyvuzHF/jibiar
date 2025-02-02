import React from 'react';
import { RippleContainer } from '../RippleEffect';
import { ShoppingBag } from 'lucide-react';
import { PaymentMethods } from './PaymentMethods';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatCurrency';

interface CartSummaryProps {
  total: number;
  itemCount: number;
}

export const CartSummary = ({ total, itemCount }: CartSummaryProps) => {
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const handleCheckout = () => {
    dispatch({ type: 'CLEAR_CART' });
    navigate('/thank-you');
  };

  return (
    <div className="space-y-4">
      <PaymentMethods />
      
      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
        <h3 className="text-xl font-semibold text-[#ffce79] mb-4">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-white/80">
            <span>Items ({itemCount})</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-white/80">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="border-t border-white/10 pt-3">
            <div className="flex justify-between text-lg font-semibold text-[#ffce79]">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
          <RippleContainer>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#ffce79] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ffce79]/90 transition-colors flex items-center justify-center space-x-2 mt-4"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Proceed to Payment</span>
            </button>
          </RippleContainer>
        </div>
      </div>
    </div>
  );
};