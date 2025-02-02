import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { use3DEffect } from '../../hooks/use3DEffect';

export const SocialIcons = () => {
  const { ref: fbRef, transform: fbTransform } = use3DEffect(20);
  const { ref: igRef, transform: igTransform } = use3DEffect(20);

  return (
    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[200px]">
      <h3 className="text-[#ffce79] text-center mb-4 font-semibold">Follow Us On</h3>
      <div className="flex justify-center gap-6">
        <div
          ref={fbRef}
          className="p-3 rounded-xl bg-gradient-to-br from-[#4267B2]/90 to-[#4267B2]/70 backdrop-blur-sm cursor-pointer transition-all duration-300"
          style={{
            transform: `
              perspective(1000px)
              rotateX(${fbTransform.rotateX}deg)
              rotateY(${fbTransform.rotateY}deg)
              scale(${fbTransform.scale})
            `,
            boxShadow: '0 10px 20px rgba(66, 103, 178, 0.2)',
            transformStyle: 'preserve-3d'
          }}
        >
          <Facebook className="w-6 h-6 text-white" style={{ transform: 'translateZ(20px)' }} />
        </div>
        <div
          ref={igRef}
          className="p-3 rounded-xl bg-gradient-to-br from-[#E4405F]/90 to-[#E4405F]/70 backdrop-blur-sm cursor-pointer transition-all duration-300"
          style={{
            transform: `
              perspective(1000px)
              rotateX(${igTransform.rotateX}deg)
              rotateY(${igTransform.rotateY}deg)
              scale(${igTransform.scale})
            `,
            boxShadow: '0 10px 20px rgba(228, 64, 95, 0.2)',
            transformStyle: 'preserve-3d'
          }}
        >
          <Instagram className="w-6 h-6 text-white" style={{ transform: 'translateZ(20px)' }} />
        </div>
      </div>
    </div>
  );
};