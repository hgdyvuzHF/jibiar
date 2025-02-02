import React, { useEffect, useRef } from 'react';
import { particlesConfig } from './config';

declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any[];
  }
}

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticles = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.async = true;
        
        script.onload = () => {
          if (window.particlesJS) {
            window.particlesJS('particles-js', particlesConfig);
          }
        };

        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      } catch (error) {
        console.error('Failed to load particles.js:', error);
      }
    };

    loadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{
        backgroundColor: '#000000',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      }}
    />
  );
};

export default ParticlesBackground;