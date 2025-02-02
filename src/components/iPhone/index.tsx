import React from 'react';
import { Frame } from './Frame';
import { Carousel } from './Carousel';
import { LocationCard } from './LocationCard';

const images = [
  'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958266/Design_sans_titre_3_chljo6.png',
  'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958266/Design_sans_titre_3_chljo6.png',
  'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958266/Design_sans_titre_2_qnwmrt.png',
  'https://res.cloudinary.com/dinbxrql6/image/upload/v1734958267/Leonardo_Phoenix_10_Create_a_captivating_35second_video_reel_f_0_mwlzhy.jpg'
];

const IPhoneCarousel = () => {
  return (
    <div id="gallery" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#ffce79] text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="mb-12 md:mb-0">
            <Frame>
              <Carousel images={images} />
            </Frame>
          </div>
          <LocationCard />
        </div>
      </div>
    </div>
  );
};

export default IPhoneCarousel;