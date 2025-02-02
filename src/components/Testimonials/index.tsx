import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: "Sarah L.",
    role: "Loyal Customer",
    content: "An exceptional experience! The flavors are intense and refined.",
    rating: 5,
    avatar: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734962711/DALL_E_2024-12-23_15.03.54_-_A_minimalistic_and_clean_avatar_design_featuring_a_smiling_face_in_a_circular_frame._The_avatar_should_have_a_professional_and_approachable_appearance_afgqr9.webp"
  },
  {
    name: "Michael R.",
    role: "Connoisseur",
    content: "The quality is unmatched. Highly recommended!",
    rating: 5,
    avatar: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734962710/DALL_E_2024-12-23_15.04.37_-_A_vibrant_and_artistic_avatar_design_featuring_a_stylized_smiling_face_in_a_circular_frame._The_style_should_be_colorful_modern_and_dynamic_suitabl_bw8jgu.webp"
  },
  {
    name: "Karim B.",
    role: "Passionate Enthusiast",
    content: "Best value for money in the market. Impeccable service.",
    rating: 5,
    avatar: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734962710/DALL_E_2024-12-23_15.04.56_-_A_whimsical_and_creative_avatar_design_featuring_a_smiling_face_in_a_circular_frame._The_style_should_include_playful_elements_and_pastel_colors_evok_ywkcnc.webp"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#ffce79] text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;