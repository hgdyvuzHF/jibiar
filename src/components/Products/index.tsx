import React from 'react';
import { ProductGrid } from './ProductGrid';
import { productData } from './data';

const Products = () => {
  return (
    <div id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#ffce79] text-center mb-12">Our Products</h2>
        <div className="relative">
          <ProductGrid products={productData} />
        </div>
      </div>
    </div>
  );
};

export default Products;