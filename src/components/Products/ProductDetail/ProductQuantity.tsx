import React from 'react';

interface ProductQuantityProps {
  value: number;
  onChange: (value: number) => void;
}

export const ProductQuantity = ({ value, onChange }: ProductQuantityProps) => {
  const increment = () => onChange(Math.min(value + 1, 10));
  const decrement = () => onChange(Math.max(value - 1, 1));

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center border border-white/20 rounded-lg">
        <button 
          onClick={decrement}
          className="px-4 py-2 text-[#ffce79] hover:bg-white/5 rounded-l-lg transition-colors"
          disabled={value <= 1}
        >
          -
        </button>
        <span className="px-4 py-2 text-white border-x border-white/20">{value}</span>
        <button 
          onClick={increment}
          className="px-4 py-2 text-[#ffce79] hover:bg-white/5 rounded-r-lg transition-colors"
          disabled={value >= 10}
        >
          +
        </button>
      </div>
      <span className="text-white/60">In stock</span>
    </div>
  );
};