import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { RippleContainer } from '../RippleEffect';
import { use3DEffect } from '../../hooks/use3DEffect';
import { formatPrice } from '../../utils/formatCurrency';

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { ref, transform } = use3DEffect(15);
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
          <div
            ref={ref}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm"
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
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-xl"
              style={{ transform: 'translateZ(20px)' }}
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#ffce79]">{product.title}</h1>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#ffce79] text-[#ffce79]" />
              ))}
              <span className="text-white/60 text-sm">(150 reviews)</span>
            </div>

            <div className="text-2xl font-bold text-[#ffce79]">
              {formatPrice(product.price, { includeTax: true })}
            </div>

            <div className="prose prose-invert">
              <p className="text-white/90 text-lg">{product.description}</p>
              
              <h3 className="text-[#ffce79] text-xl font-semibold mt-6 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-white/80 flex items-center">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-white/20 rounded-lg">
                  <button className="px-4 py-2 text-[#ffce79] hover:bg-white/5 rounded-l-lg transition-colors">
                    -
                  </button>
                  <span className="px-4 py-2 text-white border-x border-white/20">1</span>
                  <button className="px-4 py-2 text-[#ffce79] hover:bg-white/5 rounded-r-lg transition-colors">
                    +
                  </button>
                </div>
                <span className="text-white/60">10 in stock</span>
              </div>

              <RippleContainer>
                <button className="w-full bg-[#ffce79] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ffce79]/90 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </RippleContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;