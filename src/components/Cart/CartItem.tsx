import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { RippleContainer } from '../RippleEffect';
import { formatPrice } from '../../utils/formatCurrency';

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export const CartItem = ({ id, title, price, image, quantity }: CartItemProps) => {
  const { dispatch } = useCart();
  const priceTTC = price * 1.05; // Add 5% VAT
  const totalHT = price * quantity;
  const totalTTC = priceTTC * quantity;

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  return (
    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
      <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#ffce79]">{title}</h3>
        <div className="space-y-1">
          <p className="text-white/80">{formatPrice(price)}</p>
          <p className="text-sm text-white/60">{formatPrice(priceTTC, { includeTax: true })}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <RippleContainer>
          <button
            onClick={() => handleUpdateQuantity(quantity - 1)}
            className="p-1 text-[#ffce79] hover:bg-white/5 rounded transition-colors"
          >
            <Minus size={18} />
          </button>
        </RippleContainer>
        <span className="text-white min-w-[2rem] text-center">{quantity}</span>
        <RippleContainer>
          <button
            onClick={() => handleUpdateQuantity(quantity + 1)}
            className="p-1 text-[#ffce79] hover:bg-white/5 rounded transition-colors"
          >
            <Plus size={18} />
          </button>
        </RippleContainer>
        <RippleContainer>
          <button
            onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: id })}
            className="p-1 text-red-500 hover:bg-white/5 rounded transition-colors ml-2"
          >
            <Trash2 size={18} />
          </button>
        </RippleContainer>
      </div>
    </div>
  );
};