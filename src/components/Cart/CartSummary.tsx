import React from 'react';
import { RippleContainer } from '../RippleEffect';
import { ShoppingBag } from 'lucide-react';
import { PaymentMethods } from './PaymentMethods';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatCurrency';

const PRICES = {
  '250g': {
    ht: 50,
    ttc: 52.5
  },
  '1KG': {
    ht: 200,
    ttc: 210
  }
} as const;

const SHIPPING_THRESHOLD = 400; // Seuil pour la livraison gratuite (HT)
const SHIPPING_FEE = 20; // Frais de livraison en AED

export const CartSummary = ({ total, itemCount }: { total: number; itemCount: number }) => {
  const navigate = useNavigate();
  const { dispatch, state } = useCart();

  // Calculate totals based on the fixed prices
  const totals = state.items.reduce((acc, item) => {
    const size = item.title.includes('1KG') ? '1KG' : '250g';
    const priceHT = PRICES[size].ht;
    const priceTTC = PRICES[size].ttc;
    
    return {
      ht: acc.ht + (priceHT * item.quantity),
      ttc: acc.ttc + (priceTTC * item.quantity)
    };
  }, { ht: 0, ttc: 0 });

  // Determine if shipping is free based on total HT
  const isShippingFree = totals.ht >= SHIPPING_THRESHOLD;
  const shippingFee = isShippingFree ? 0 : SHIPPING_FEE;

  // Calculate final totals including shipping
  const finalTotals = {
    ht: totals.ht + (isShippingFree ? 0 : SHIPPING_FEE),
    ttc: totals.ttc + (isShippingFree ? 0 : SHIPPING_FEE * 1.05) // Shipping fee also has VAT
  };

  const handleCheckout = () => {
    dispatch({ type: 'CLEAR_CART' });
    navigate('/thank-you');
  };

  return (
    <div className="space-y-4">
      <PaymentMethods />
      
      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
        <h3 className="text-xl font-semibold text-[#ffce79] mb-4">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-white/80">
            <span>Items ({itemCount})</span>
            <div className="text-right">
              <div>{formatPrice(totals.ht)}</div>
              <div className="text-sm text-white/60">{formatPrice(totals.ttc, { includeTax: true })}</div>
            </div>
          </div>

          <div className="flex justify-between text-white/80">
            <span>Shipping</span>
            <div className="text-right">
              {isShippingFree ? (
                <span className="text-green-400">Free</span>
              ) : (
                <>
                  <div>{formatPrice(SHIPPING_FEE)}</div>
                  <div className="text-sm text-white/60">
                    {formatPrice(SHIPPING_FEE * 1.05, { includeTax: true })}
                  </div>
                </>
              )}
            </div>
          </div>

          {!isShippingFree && (
            <div className="text-sm text-white/60 italic">
              Add {formatPrice(SHIPPING_THRESHOLD - totals.ht)} more for free shipping
            </div>
          )}

          <div className="border-t border-white/10 pt-3">
            <div className="flex justify-between text-lg font-semibold text-[#ffce79]">
              <span>Total</span>
              <div className="text-right">
                <div>{formatPrice(finalTotals.ht)}</div>
                <div className="text-sm">{formatPrice(finalTotals.ttc, { includeTax: true })}</div>
              </div>
            </div>
          </div>

          <RippleContainer>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#ffce79] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ffce79]/90 transition-colors flex items-center justify-center space-x-2 mt-4"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Proceed to Payment</span>
            </button>
          </RippleContainer>
        </div>
      </div>
    </div>
  );
};