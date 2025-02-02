import { useState, useMemo } from 'react';
import { Product, Filters, SortOption } from '../types';
import { productData } from '../data';

export const useProducts = () => {
  const [filters, setFilters] = useState<Filters>({
    maxPrice: 100,
    categories: []
  });
  const [sorting, setSorting] = useState<SortOption>('featured');

  const filteredProducts = useMemo(() => {
    return productData.filter(product => {
      if (product.price > filters.maxPrice) return false;
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) return false;
      return true;
    });
  }, [filters]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sorting) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sorting]);

  return {
    products: sortedProducts,
    filters,
    sorting,
    updateFilters: setFilters,
    updateSorting: setSorting
  };
};