import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958266/Design_sans_titre_3_chljo6.png',
  'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958266/Design_sans_titre_3_chljo6.png',
  'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958266/Design_sans_titre_2_qnwmrt.png',
  'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958267/Leonardo_Phoenix_10_Create_a_captivating_35second_video_reel_f_0_mwlzhy.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 3;
  const maxIndex = Math.max(0, images.length - imagesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div id="galerie" className="relative bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-[#ffce79] text-center mb-12">Galerie</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 relative group px-2"
                  style={{ aspectRatio: '16/9' }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#ffce79] p-2 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#ffce79] p-2 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;