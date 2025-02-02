import React from 'react';
import { Star } from 'lucide-react';
import { use3DEffect } from '../../../hooks/use3DEffect';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: TestimonialCardProps[] = [
  {
    name: "Sarah L.",
    role: "Verified Buyer",
    content: "This flavor is absolutely amazing! The quality and taste are unmatched.",
    rating: 5,
    avatar: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734962711/DALL_E_2024-12-23_15.03.54_-_A_minimalistic_and_clean_avatar_design_featuring_a_smiling_face_in_a_circular_frame._The_avatar_should_have_a_professional_and_approachable_appearance_afgqr9.webp"
  },
  {
    name: "Michael R.",
    role: "Shisha Enthusiast",
    content: "Perfect blend of flavors. Will definitely buy again!",
    rating: 5,
    avatar: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734962710/DALL_E_2024-12-23_15.04.37_-_A_vibrant_and_artistic_avatar_design_featuring_a_stylized_smiling_face_in_a_circular_frame._The_style_should_be_colorful_modern_and_dynamic_suitabl_bw8jgu.webp"
  },
  {
    name: "Karim B.",
    role: "Regular Customer",
    content: "Outstanding quality and service. My go-to choice!",
    rating: 5,
    avatar: "https://res.cloudinary.com/dinbxrql6/image/upload/v1734962710/DALL_E_2024-12-23_15.04.56_-_A_whimsical_and_creative_avatar_design_featuring_a_smiling_face_in_a_circular_frame._The_style_should_include_playful_elements_and_pastel_colors_evok_ywkcnc.webp"
  },
  {
    name: "Emma D.",
    role: "Premium Member",
    content: "The smoothest smoke I've ever experienced. The flavors are rich and long-lasting!",
    rating: 5,
    avatar: "https://res.cloudinary.com/dinbxrql6/image/upload/v1710834029/avatar-4_zlxz6d.jpg"
  }
];

const TestimonialCard = ({ name, role, content, rating, avatar }: TestimonialCardProps) => {
  const { ref, transform } = use3DEffect(15);

  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur-md p-6 rounded-xl transition-all duration-300 
        border border-white/20 shadow-xl"
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
      <div style={{ transform: 'translateZ(20px)' }}>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#ffce79] text-[#ffce79]" />
          ))}
        </div>
        <p className="text-white/90 mb-4 text-sm italic">{content}</p>
        <div className="flex items-center space-x-3">
          <img 
            src={avatar} 
            alt={name} 
            className="w-10 h-10 rounded-full object-cover border border-[#ffce79]"
          />
          <div>
            <p className="font-semibold text-[#ffce79] text-sm">{name}</p>
            <p className="text-white/70 text-xs">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductTestimonials = () => {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-[#ffce79] text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};