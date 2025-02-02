import React, { useState } from 'react';
import { X, Star } from 'lucide-react';
import { ProductQuantity } from './ProductDetail/ProductQuantity';
import { AddToCartButton } from '../shared/AddToCartButton';
import { use3DEffect } from '../../hooks/use3DEffect';
import { formatPrice } from '../../utils/formatCurrency';

interface ProductVariant {
  size: '250g' | '1KG';
  price: number;
}

interface ProductModalProps {
  product: {
    id: string;
    title: string;
    image: string;
    description: string;
    features: string[];
    price: number;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { ref, transform } = use3DEffect(15);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<'250g' | '1KG'>('250g');

  if (!isOpen) return null;

  const variants: ProductVariant[] = [
    { size: '250g', price: product.price },
    { size: '1KG', price: product.price * 3.5 }
  ];

  const selectedPrice = variants.find(v => v.size === selectedVariant)?.price || product.price;

  const cartProduct = {
    id: `${product.id}-${selectedVariant}`,
    title: `${product.title} - ${selectedVariant}`,
    price: selectedPrice,
    image: product.image
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div 
        ref={ref}
        className="relative bg-black/90 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          transform: `
            perspective(1000px)
            rotateX(${transform.rotateX}deg)
            rotateY(${transform.rotateY}deg)
            scale(${transform.scale})
          `,
          transformStyle: 'preserve-3d'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="aspect-square rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#ffce79]">{product.title}</h2>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#ffce79] text-[#ffce79]" />
              ))}
              <span className="text-white/60 text-sm">(150 reviews)</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Select Size</h3>
              <div className="flex gap-4">
                {variants.map((variant) => (
                  <button
                    key={variant.size}
                    onClick={() => setSelectedVariant(variant.size)}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedVariant === variant.size
                        ? 'bg-[#ffce79] text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-2xl font-bold text-[#ffce79]">{formatPrice(selectedPrice)}</div>

            <div className="prose prose-invert">
              <p className="text-white/90 text-lg">{product.description}</p>
              
              <h3 className="text-[#ffce79] text-xl font-semibold mt-6 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-white/80 flex items-center">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 space-y-4">
              <ProductQuantity value={quantity} onChange={setQuantity} />
              <AddToCartButton 
                product={cartProduct}
                quantity={quantity}
                variant="full"
                redirectToCart
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};