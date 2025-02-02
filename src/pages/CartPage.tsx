import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/Cart/CartItem';
import { CartSummary } from '../components/Cart/CartSummary';
import { EmptyCart } from '../components/Cart/EmptyCart';
import { ShippingForm } from '../components/Cart/ShippingForm';
import { BillingForm } from '../components/Cart/BillingForm';
import { PaymentProvider } from '../context/PaymentContext';

const CartPage = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  if (state.items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <PaymentProvider>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#ffce79] mb-8">Shopping Cart</h1>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-4 mb-8">
                {state.items.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
              <ShippingForm />
              <BillingForm />
            </div>
            <div>
              <CartSummary total={state.total} itemCount={itemCount} />
            </div>
          </div>
        </div>
      </div>
    </PaymentProvider>
  );
};

export default CartPage;