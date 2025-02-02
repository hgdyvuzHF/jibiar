import React from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import { FormInput } from './FormInput';

export const CardFields = () => {
  return (
    <div className="mt-6 border-t border-white/10 pt-6">
      <div className="flex items-center space-x-2 mb-4">
        <CreditCard className="text-[#ffce79] w-5 h-5" />
        <h4 className="text-lg font-semibold text-[#ffce79]">Card Details</h4>
      </div>

      <div className="space-y-4">
        <FormInput
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <FormInput
              label="Expiry Date"
              placeholder="MM/YY"
              required
            />
            <Calendar className="absolute right-3 top-9 w-5 h-5 text-white/40" />
          </div>

          <div className="relative">
            <FormInput
              label="CVC"
              placeholder="123"
              required
            />
            <Lock className="absolute right-3 top-9 w-5 h-5 text-white/40" />
          </div>
        </div>

        <FormInput
          label="Cardholder Name"
          placeholder="John Doe"
          required
        />
      </div>
    </div>
  );
};