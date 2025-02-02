import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RippleContainer } from '../../RippleEffect';
import { ShoppingCart } from 'lucide-react';
import { use3DEffect } from '../../../hooks/use3DEffect';

interface RelatedProduct {
  title: string;
  image: string;
  price: number;
  description: string;
}

const RelatedProductCard = ({ product }: { product: RelatedProduct }) => {
  const { ref, transform } = use3DEffect(15);
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
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
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-[#ffce79] mb-2">{product.title}</h3>
      <p className="text-white/80 text-sm mb-4 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-[#ffce79]">€{product.price}</span>
        <RippleContainer>
          <button 
            onClick={() => navigate(`/product/${product.title.toLowerCase().replace(/\s+/g, '-')}`)}
            className="bg-[#ffce79] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#ffce79]/90 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </RippleContainer>
      </div>
    </div>
  );
};

export const RelatedProducts = () => {
  const relatedProducts = [
    {
      title: "Jibiar Gold Plus",
      image: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734958846/jibiar_78_20241221_222910290_elhuts.jpg",
      price: 69.99,
      description: "Premium blend with enhanced flavors"
    },
    {
      title: "Jibiar Silver",
      image: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734958846/jibiar_78_20241221_222914179_ixeach.jpg",
      price: 54.99,
      description: "Classic blend for everyday enjoyment"
    },
    {
      title: "Jibiar Diamond",
      image: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734958844/jibiar_457_20241221_22333941_bvhylm.jpg",
      price: 79.99,
      description: "Luxury blend with exclusive aromas"
    }
  ];

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-[#ffce79] mb-8">You Might Also Like</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedProducts.map((product, index) => (
          <RelatedProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};