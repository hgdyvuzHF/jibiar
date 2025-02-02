import React from 'react';
import { use3DEffect } from '../../hooks/use3DEffect';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const TestimonialCard = ({ name, role, content, rating, avatar }: TestimonialProps) => {
  const { ref, transform } = use3DEffect(15);

  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur-md p-8 rounded-xl transition-all duration-300 
        border border-white/20 shadow-xl animate-slide-up"
      style={{
        transform: `
          perspective(1000px)
          rotateX(${transform.rotateX}deg)
          rotateY(${transform.rotateY}deg)
          scale(${transform.scale})
        `,
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        willChange: 'transform',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        boxShadow: `
          0 10px 30px rgba(0,0,0,0.3),
          inset 0 0 20px rgba(255,255,255,0.05)
        `
      }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#ffce79] text-[#ffce79]" />
          ))}
        </div>
        <p className="text-white/90 mb-6 text-lg italic">{content}</p>
        <div className="border-t border-white/10 pt-4 flex items-center space-x-4">
          <div className="relative">
            <img 
              src={avatar} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover border-2 border-[#ffce79]"
            />
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
          </div>
          <div>
            <p className="font-semibold text-[#ffce79]">{name}</p>
            <p className="text-white/70 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};