import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { RippleContainer } from '../../../components/RippleEffect';
import { AddToCartButton } from '../../../components/shared/AddToCartButton';
import { ProductModal } from '../../../components/Products/ProductModal';
import { Product } from '../types';
import { formatPrice } from '../../../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
}

type Size = '250g' | '1KG';

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<Size>('250g');

  const prices = {
    '250g': 50,
    '1KG': 200
  };

  const cartProduct = {
    id: `${product.id}-${selectedSize}`,
    title: `${product.title} - ${selectedSize}`,
    price: prices[selectedSize],
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
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">Select Size:</label>
              <div className="grid grid-cols-2 gap-2">
                {(['250g', '1KG'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-[#ffce79] text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-2xl font-bold text-[#ffce79]">
              {formatPrice(prices[selectedSize])}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <RippleContainer>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-white/10 text-[#ffce79] px-4 py-2 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="w-5 h-5" />
                  <span>Details</span>
                </button>
              </RippleContainer>
              <div className="w-full sm:w-auto">
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