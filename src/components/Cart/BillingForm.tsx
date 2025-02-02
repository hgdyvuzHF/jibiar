import React, { useState } from 'react';
import { Receipt } from 'lucide-react';
import { FormInput } from './FormInput';
import { CardFields } from './CardFields';
import { usePayment } from '../../context/PaymentContext';

export const BillingForm = () => {
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const { selectedMethod } = usePayment();

  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
      <div className="flex items-center space-x-2 mb-6">
        <Receipt className="text-[#ffce79] w-5 h-5" />
        <h3 className="text-xl font-semibold text-[#ffce79]">Billing Information</h3>
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2 text-white cursor-pointer">
          <input
            type="checkbox"
            checked={sameAsShipping}
            onChange={(e) => setSameAsShipping(e.target.checked)}
            className="form-checkbox rounded border-white/20 bg-white/5 text-[#ffce79] focus:ring-[#ffce79]"
          />
          <span>Same as shipping address</span>
        </label>
      </div>

      {!sameAsShipping && (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="First Name" placeholder="John" required />
            <FormInput label="Last Name" placeholder="Doe" required />
          </div>
          
          <div className="mt-4">
            <FormInput label="Address" placeholder="123 Main St" required />
          </div>
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <FormInput label="City" placeholder="New York" required />
            <FormInput label="Postal Code" placeholder="10001" required />
          </div>
          
          <div className="mt-4">
            <FormInput label="Country" placeholder="United States" required />
          </div>
        </>
      )}

      {selectedMethod === 'card' && <CardFields />}
    </div>
  );
};