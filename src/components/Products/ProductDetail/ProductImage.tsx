import React from 'react';
import { use3DEffect } from '../../../hooks/use3DEffect';

interface ProductImageProps {
  image: string;
  title: string;
}

export const ProductImage = ({ image, title }: ProductImageProps) => {
  const { ref, transform } = use3DEffect(15);

  return (
    <div
      ref={ref}
      className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm"
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
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-xl"
        style={{ transform: 'translateZ(20px)' }}
      />
    </div>
  );
};