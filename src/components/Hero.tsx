import React, { useEffect, useRef } from 'react';
import { AnimatedText } from './AnimatedText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="accueil" className="relative h-screen overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://res.cloudinary.com/dinbxrql6/image/upload/v1734955825/DALL_E_2024-12-23_13.06.47_-_A_futuristic_digital_painting_of_a_city_skyline_at_night_inspired_by_Dubai_with_modern_skyscrapers_illuminated_by_golden_and_blue_lights_and_a_hookah_ervoub.webp"
          alt="Futuristic Dubai Skyline"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      </div>
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-6">
          <AnimatedText 
            as="h1" 
            className="text-5xl md:text-7xl font-bold text-[#ffce79]"
            type="chars"
            animation="slideUp"
          >
            JIBIAR - #TheArtOfShisha
          </AnimatedText>
          <AnimatedText 
            as="p" 
            className="text-xl md:text-2xl max-w-2xl mx-auto px-4 tracking-[0.2em]"
            type="words"
            animation="fadeIn"
          >
            Discover        our        new        flavours
          </AnimatedText>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default Hero;