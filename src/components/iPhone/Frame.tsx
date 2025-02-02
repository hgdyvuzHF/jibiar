import React from 'react';
import { use3DEffect } from '../../hooks/use3DEffect';
import { SocialIcons } from './SocialIcons';

interface FrameProps {
  children: React.ReactNode;
}

export const Frame = ({ children }: FrameProps) => {
  const { ref, transform } = use3DEffect(15);

  return (
    <div 
      ref={ref}
      className="relative mx-auto transition-all duration-300 ease-out"
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
      {/* iPhone Frame */}
      <div className="relative mx-auto border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl md:h-[700px] md:w-[350px]"
        style={{
          background: 'linear-gradient(145deg, #3a3a3a, #1a1a1a)',
          borderColor: '#2a2a2a',
          boxShadow: `
            0 0 20px rgba(0, 0, 0, 0.5),
            inset 0 0 15px rgba(0, 0, 0, 0.3),
            inset 0 0 30px rgba(255, 255, 255, 0.05)
          `
        }}
      >
        {/* iPhone Notch */}
        <div className="absolute top-0 inset-x-0">
          <div className="mx-auto h-6 w-40 rounded-b-3xl"
            style={{
              background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)'
            }}
          ></div>
        </div>
        
        {/* Power Button */}
        <div className="absolute -right-[14px] top-[120px] h-[32px] w-[3px] rounded-r"
          style={{
            background: 'linear-gradient(90deg, #2a2a2a, #1a1a1a)'
          }}
        ></div>
        
        {/* Volume Buttons */}
        <div className="absolute -left-[14px] top-[120px] h-[32px] w-[3px] rounded-l"
          style={{
            background: 'linear-gradient(270deg, #2a2a2a, #1a1a1a)'
          }}
        ></div>
        <div className="absolute -left-[14px] top-[170px] h-[32px] w-[3px] rounded-l"
          style={{
            background: 'linear-gradient(270deg, #2a2a2a, #1a1a1a)'
          }}
        ></div>
        
        {/* Screen Content */}
        <div className="relative h-full w-full bg-white overflow-hidden rounded-[2rem]">
          {children}
        </div>

        {/* Metallic Highlights */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] border border-white/5"></div>
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-[2.5rem]"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.1))'
            }}
          ></div>
        </div>
      </div>

      {/* Social Media Icons */}
      <SocialIcons />
    </div>
  );
};