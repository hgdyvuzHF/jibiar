import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { RippleContainer } from '../../RippleEffect';
import { use3DEffect } from '../../../hooks/use3DEffect';

const reviews = [
  {
    id: 1,
    author: "Alex M.",
    rating: 5,
    date: "2024-03-15",
    content: "Un produit exceptionnel ! Le goût est incroyable et dure pendant des heures.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    author: "Sophie K.",
    rating: 5,
    date: "2024-03-10",
    content: "Excellente qualité et un goût extraordinaire. Je recommande vivement !",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    author: "Mohammed R.",
    rating: 5,
    date: "2024-03-08",
    content: "Le meilleur tabac que j'ai jamais essayé. La saveur est parfaitement équilibrée.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const ReviewCard = ({ review }) => {
  const { ref, transform } = use3DEffect(10);

  return (
    <div
      ref={ref}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
      style={{
        transform: `
          perspective(1000px)
          rotateX(${transform.rotateX}deg)
          rotateY(${transform.rotateY}deg)
          scale(${transform.scale})
        `
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={review.avatar}
            alt={review.author}
            className="w-12 h-12 rounded-full border-2 border-[#ffce79]"
          />
          <div>
            <h4 className="font-semibold text-[#ffce79]">{review.author}</h4>
            <div className="flex items-center space-x-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? "fill-[#ffce79] text-[#ffce79]"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <span className="text-sm text-white/60">
          {new Date(review.date).toLocaleDateString()}
        </span>
      </div>
      <p className="mt-4 text-white/80">{review.content}</p>
    </div>
  );
};

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold text-[#ffce79] mb-4">Écrire un avis</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-white/80 mb-2">Note</label>
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                onMouseEnter={() => setHoveredRating(i + 1)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(i + 1)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-6 h-6 transition-colors ${
                    i < (hoveredRating || rating)
                      ? "fill-[#ffce79] text-[#ffce79]"
                      : "text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="review" className="block text-white/80 mb-2">
            Votre avis
          </label>
          <textarea
            id="review"
            rows={4}
            className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ffce79]/50"
            placeholder="Partagez votre expérience..."
          />
        </div>
        <RippleContainer>
          <button className="flex items-center space-x-2 bg-[#ffce79] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#ffce79]/90 transition-colors">
            <Send className="w-4 h-4" />
            <span>Envoyer</span>
          </button>
        </RippleContainer>
      </div>
    </div>
  );
};

export const ProductReviews = () => {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-[#ffce79] mb-12">Avis Clients</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold text-[#ffce79]">4.8</div>
              <div>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ffce79] text-[#ffce79]" />
                  ))}
                </div>
                <p className="text-white/60 text-sm mt-1">Basé sur 128 avis</p>
              </div>
            </div>
          </div>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};