import React from 'react';
import { Filters } from '../types';

interface ProductFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export const ProductFilters = ({ filters, onChange }: ProductFiltersProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-xl font-semibold text-[#ffce79] mb-6">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-white font-medium mb-3">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="100"
              value={filters.maxPrice}
              onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-white/60 text-sm">
              <span>0€</span>
              <span>{filters.maxPrice}€</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            {['Premium', 'Limited Edition', 'Classic'].map((category) => (
              <label key={category} className="flex items-center space-x-2 text-white/80">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...filters.categories, category]
                      : filters.categories.filter(c => c !== category);
                    onChange({ ...filters, categories: newCategories });
                  }}
                  className="form-checkbox rounded text-[#ffce79]"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};