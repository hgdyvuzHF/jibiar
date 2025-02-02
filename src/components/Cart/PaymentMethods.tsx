import React from 'react';
import { CreditCard, Truck, Wallet, Clock } from 'lucide-react';
import { usePayment } from '../../context/PaymentContext';

const paymentMethods = [
  {
    id: 'card',
    name: 'Credit Card',
    icon: CreditCard,
    description: 'Pay securely with your credit card',
    disabled: true,
    comingSoon: true
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: Wallet,
    description: 'Fast and secure payment with PayPal',
    disabled: true,
    comingSoon: true
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    icon: Truck,
    description: 'Pay when you receive your order',
    disabled: false,
    comingSoon: false
  }
] as const;

export const PaymentMethods = () => {
  const { selectedMethod, setSelectedMethod } = usePayment();

  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 mb-4">
      <h3 className="text-xl font-semibold text-[#ffce79] mb-4">Payment Method</h3>
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`relative rounded-lg border ${
              method.disabled 
                ? 'border-white/5 bg-white/5 cursor-not-allowed opacity-70'
                : selectedMethod === method.id
                ? 'border-[#ffce79] bg-[#ffce79]/5'
                : 'border-white/10 hover:border-white/20'
            } p-4 transition-all duration-200 ${!method.disabled && 'cursor-pointer'}`}
            onClick={() => !method.disabled && setSelectedMethod(method.id as any)}
          >
            <div className="flex items-start md:items-center gap-3">
              <div className={`flex-shrink-0 text-[#ffce79] p-2 rounded-full ${
                selectedMethod === method.id ? 'bg-[#ffce79]/10' : 'bg-white/5'
              }`}>
                <method.icon className="w-6 h-6" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-[#ffce79] font-medium">{method.name}</h4>
                  {method.comingSoon && (
                    <span className="flex items-center text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-white/60 text-sm">{method.description}</p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <div className={`w-6 h-6 rounded-full border-2 ${
                  selectedMethod === method.id
                    ? 'border-[#ffce79] bg-[#ffce79]'
                    : 'border-white/20'
                } flex items-center justify-center`}>
                  {selectedMethod === method.id && (
                    <div className="w-2 h-2 rounded-full bg-black" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};