import React, { createContext, useContext, useState } from 'react';

type PaymentMethod = 'card' | 'paypal' | 'cod';

interface PaymentContextType {
  selectedMethod: PaymentMethod;
  setSelectedMethod: (method: PaymentMethod) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('cod');

  return (
    <PaymentContext.Provider value={{ selectedMethod, setSelectedMethod }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};