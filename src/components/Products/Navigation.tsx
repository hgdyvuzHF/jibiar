import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentPage: number;
  totalPages: number;
}

export const Navigation = ({ onPrevious, onNext, currentPage, totalPages }: NavigationProps) => {
  return (
    <>
      <button
        onClick={onPrevious}
        disabled={currentPage === 0}
        className={`absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
          currentPage === 0
            ? 'bg-black/30 text-white/30 cursor-not-allowed'
            : 'bg-black/50 hover:bg-black/70 text-[#ffce79] hover:scale-110'
        }`}
        aria-label="Previous products"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={`absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
          currentPage === totalPages - 1
            ? 'bg-black/30 text-white/30 cursor-not-allowed'
            : 'bg-black/50 hover:bg-black/70 text-[#ffce79] hover:scale-110'
        }`}
        aria-label="Next products"
      >
        <ChevronRight size={24} />
      </button>
    </>
  );
};