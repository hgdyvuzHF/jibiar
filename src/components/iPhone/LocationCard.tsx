import React from 'react';
import { use3DEffect } from '../../hooks/use3DEffect';
import { RippleContainer } from '../RippleEffect';

export const LocationCard = () => {
  const { ref, transform } = use3DEffect(15);

  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white h-full"
      style={{
        transform: `
          perspective(1000px)
          rotateX(${transform.rotateX}deg)
          rotateY(${transform.rotateY}deg)
          scale(${transform.scale})
        `,
        transformStyle: 'preserve-3d',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        boxShadow: `
          0 10px 30px rgba(0,0,0,0.3),
          inset 0 0 20px rgba(255,255,255,0.05)
        `
      }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-3xl font-bold mb-4 text-[#ffce79]">Our Location</h3>
        <div className="mb-6 rounded-lg overflow-hidden aspect-square">
          <img
            src="https://res.cloudinary.com/dinbxrql6/image/upload/v1734961178/DALL_E_2024-12-23_14.39.21_-_A_detailed_map_of_Dubai_with_a_clear_red_dot_marking_a_specific_location_featuring_major_landmarks_roads_and_waterways_in_a_high-resolution_and_re_cpcxqi.webp"
            alt="Dubai Map"
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          <p className="text-lg">Visit our showroom in the heart of Dubai</p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-[#ffce79]">📍</span>
              <span>Downtown Dubai</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#ffce79]">🕒</span>
              <span>Open 7 days a week, 10am - 10pm</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#ffce79]">📞</span>
              <span>+971 4 123 4567</span>
            </li>
          </ul>
          <RippleContainer>
            <button className="w-full bg-[#ffce79] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#ffce79]/90 transition-colors mt-4">
              Get Directions
            </button>
          </RippleContainer>
        </div>
      </div>
    </div>
  );
};