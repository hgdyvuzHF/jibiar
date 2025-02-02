import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { ProductReviews } from './ProductReviews';
import { RelatedProducts } from './RelatedProducts';

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black/95 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#ffce79] hover:text-[#ffce79]/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <ProductImage image={product.image} title={product.title} />
          <ProductInfo {...product} />
        </div>

        <RelatedProducts />
        <ProductReviews />
      </div>
    </div>
  );
};

export default ProductDetail;