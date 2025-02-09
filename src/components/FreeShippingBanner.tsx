import React from 'react';
import { Truck } from 'lucide-react';
import { formatPrice } from '../utils/formatCurrency';

const SHIPPING_THRESHOLD = 400;

const FreeShippingBanner = () => {
  return (
    <div 
      className="bg-[#ffce79] text-black py-1.5 sm:py-2 fixed top-0 w-full z-[60]"
      style={{ height: 'var(--banner-height, 28px)' }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium">
          <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="text-center">
            <span className="hidden sm:inline">Free shipping on orders over </span>
            <span className="sm:hidden">Free shipping over </span>
            {formatPrice(SHIPPING_THRESHOLD)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingBanner;