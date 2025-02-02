import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { RippleContainer } from '../RippleEffect';
import { AddToCartButton } from '../shared/AddToCartButton';
import { ProductModal } from './ProductModal';
import { Product } from '../types';
import { formatPrice } from '../../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image
  };

  return (
    <>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white transform transition-all duration-300 hover:scale-105 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4 text-[#ffce79] line-clamp-1">{product.title}</h3>
        
        <div className="mb-4 rounded-lg overflow-hidden aspect-square">
          <img 
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-grow flex flex-col">
          <p className="text-lg text-white/80 mb-4 line-clamp-2">{product.description}</p>
          
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 2).map((feature, index) => (
              <li key={index} className="text-white/70 line-clamp-1">{feature}</li>
            ))}
          </ul>
          
          <div className="mt-auto space-y-4">
            <div className="text-2xl font-bold text-[#ffce79]">{formatPrice(product.price)}</div>
            
            <div className="grid grid-cols-2 gap-2">
              <RippleContainer>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-white/10 text-[#ffce79] px-4 py-2 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="w-5 h-5" />
                  <span>Details</span>
                </button>
              </RippleContainer>
              <div className="w-full">
                <AddToCartButton product={cartProduct} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};