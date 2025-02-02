import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentPage === index 
              ? 'bg-[#ffce79] scale-110' 
              : 'bg-white/20 hover:bg-white/40'
          }`}
          aria-label={`Page ${index + 1}`}
        />
      ))}
    </div>
  );
};