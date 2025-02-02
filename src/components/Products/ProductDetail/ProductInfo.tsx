import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { ProductQuantity } from './ProductQuantity';
import { AddToCartButton } from '../../shared/AddToCartButton';

interface ProductInfoProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  image: string;
}

export const ProductInfo = ({ title, price, description, features, image }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: title.toLowerCase().replace(/\s+/g, '-'),
    title,
    price,
    image
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-[#ffce79]">{title}</h1>
      
      <div className="flex items-center space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#ffce79] text-[#ffce79]" />
        ))}
        <span className="text-white/60 text-sm">(150 reviews)</span>
      </div>

      <div className="text-2xl font-bold text-[#ffce79]">{price}€</div>

      <div className="prose prose-invert">
        <p className="text-white/90 text-lg">{description}</p>
        
        <h3 className="text-[#ffce79] text-xl font-semibold mt-6 mb-4">Features</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-white/80 flex items-center">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 space-y-4">
        <ProductQuantity value={quantity} onChange={setQuantity} />
        <AddToCartButton 
          product={product}
          quantity={quantity}
          variant="full"
        />
      </div>
    </div>
  );
};