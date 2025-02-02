import React from 'react';

export const PaymentBadges = () => {
  return (
    <div className="mt-4 space-y-2">
      <p className="text-white/60 text-sm text-center">Secure payment with</p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <img 
          src="https://res.cloudinary.com/dinbxrql6/image/upload/v1710834029/visa_badge_white_vkd4kx.png" 
          alt="Visa" 
          className="h-6 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img 
          src="https://res.cloudinary.com/dinbxrql6/image/upload/v1710834029/mastercard_badge_white_ypc6ev.png" 
          alt="Mastercard" 
          className="h-6 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img 
          src="https://res.cloudinary.com/dinbxrql6/image/upload/v1710834029/apple_pay_badge_white_kq9wdp.png" 
          alt="Apple Pay" 
          className="h-6 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img 
          src="https://res.cloudinary.com/dinbxrql6/image/upload/v1710834029/amex_badge_white_uktpao.png" 
          alt="American Express" 
          className="h-6 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img 
          src="https://res.cloudinary.com/dinbxrql6/image/upload/v1710834029/paypal_badge_white_vdvitz.png" 
          alt="PayPal" 
          className="h-6 opacity-60 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
};