import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

const products = [
  {
    title: 'Jibiar 452',
    image: 'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958843/jibiar_452_20241221_22374472_ttpre7.jpg',
    description: 'Une expérience unique de saveurs orientales',
    features: [
      '✨ Arômes intenses et raffinés',
      '🌟 Qualité premium',
      '💨 Fumée douce et agréable'
    ],
    price: 49.99
  },
  {
    title: 'Jibiar 457',
    image: 'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958844/jibiar_457_20241221_22333941_bvhylm.jpg',
    description: 'La quintessence du luxe oriental',
    features: [
      '🌺 Notes florales délicates',
      '⭐ Edition limitée',
      '🎯 Goût persistant'
    ],
    price: 59.99
  },
  {
    title: 'Jibiar 78',
    image: 'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958846/jibiar_78_20241221_222914179_ixeach.jpg',
    description: 'L\'excellence à l\'état pur',
    features: [
      '🌟 Saveurs exceptionnelles',
      '💫 Longue durée',
      '✨ Qualité supérieure'
    ],
    price: 54.99
  },
  {
    title: 'Jibiar Gold',
    image: 'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958846/jibiar_78_20241221_222910290_elhuts.jpg',
    description: 'Une expérience premium inégalée',
    features: [
      '👑 Edition Gold',
      '🎯 Goût intense',
      '⭐ Qualité exclusive'
    ],
    price: 64.99
  }
];

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 2;
  const maxIndex = Math.ceil(products.length / productsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex(current => current >= maxIndex ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(current => current <= 0 ? maxIndex : current - 1);
  };

  const currentProducts = products.slice(
    currentIndex * productsPerPage,
    (currentIndex * productsPerPage) + productsPerPage
  );

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-8">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute -left-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#ffce79] p-3 rounded-full transition-colors"
        aria-label="Previous products"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#ffce79] p-3 rounded-full transition-colors"
        aria-label="Next products"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};