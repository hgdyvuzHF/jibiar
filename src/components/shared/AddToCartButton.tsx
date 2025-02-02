import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { RippleContainer } from '../RippleEffect';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface CartProduct {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface AddToCartButtonProps {
  product: CartProduct;
  quantity?: number;
  variant?: 'compact' | 'full';
  redirectToCart?: boolean;
}

export const AddToCartButton = ({ 
  product, 
  quantity = 1,
  variant = 'compact',
  redirectToCart = false
}: AddToCartButtonProps) => {
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity
      }
    });

    setShowSuccess(true);
    
    if (redirectToCart) {
      setTimeout(() => {
        navigate('/cart');
      }, 1000);
    } else {
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }
  };

  return (
    <RippleContainer>
      <button 
        onClick={handleAddToCart}
        disabled={showSuccess}
        className={`
          font-semibold transition-all duration-300
          flex items-center justify-center space-x-2 rounded-lg
          ${variant === 'full' ? 'w-full px-6 py-3' : 'px-4 py-2'}
          ${showSuccess 
            ? 'bg-green-500 text-white' 
            : 'bg-[#ffce79] text-black hover:bg-[#ffce79]/90'}
        `}
      >
        {showSuccess ? (
          <>
            <Check className="w-5 h-5" />
            <span>Added!</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            <span>{variant === 'full' ? 'Add to Cart' : 'Add'}</span>
          </>
        )}
      </button>
    </RippleContainer>
  );
};