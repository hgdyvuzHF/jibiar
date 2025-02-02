import React from 'react';
import { ProductGrid } from './components/ProductGrid';
import { ProductFilters } from './components/ProductFilters';
import { ProductSort } from './components/ProductSort';
import { useProducts } from './hooks/useProducts';

const ProductsPage = () => {
  const { products, filters, sorting, updateFilters, updateSorting } = useProducts();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#ffce79]">Our Products</h1>
          <ProductSort value={sorting} onChange={updateSorting} />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters filters={filters} onChange={updateFilters} />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;