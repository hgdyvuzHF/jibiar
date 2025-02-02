import React from 'react';
import { MapPin } from 'lucide-react';
import { FormInput } from './FormInput';

export const ShippingForm = () => {
  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 mb-4">
      <div className="flex items-center space-x-2 mb-6">
        <MapPin className="text-[#ffce79] w-5 h-5" />
        <h3 className="text-xl font-semibold text-[#ffce79]">Shipping Information</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput label="First Name" placeholder="John" required />
        <FormInput label="Last Name" placeholder="Doe" required />
      </div>
      
      <div className="mt-4">
        <FormInput label="Email" type="email" placeholder="john@example.com" required />
      </div>
      
      <div className="mt-4">
        <FormInput label="Phone" type="tel" placeholder="+1 (555) 000-0000" required />
      </div>
      
      <div className="mt-4">
        <FormInput label="Address" placeholder="123 Main St" required />
      </div>
      
      <div className="mt-4">
        <FormInput label="City" placeholder="New York" required />
      </div>
      
      <div className="mt-4">
        <FormInput label="Country" placeholder="United States" required />
      </div>
    </div>
  );
};