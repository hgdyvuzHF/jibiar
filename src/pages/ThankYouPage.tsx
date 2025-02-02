import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ShoppingBag, Home } from 'lucide-react';
import { RippleContainer } from '../components/RippleEffect';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    // Clear cart or perform other cleanup here
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-[#ffce79] mb-4">Thank You for Your Purchase!</h1>
          
          <p className="text-xl text-white/80 mb-6">
            Your order #{orderNumber} has been successfully placed.
          </p>

          <div className="bg-white/5 rounded-lg p-6 mb-8">
            <h2 className="text-[#ffce79] font-semibold mb-2">What's Next?</h2>
            <p className="text-white/70">
              You will receive an email confirmation shortly with your order details.
              We will notify you when your order has been shipped.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RippleContainer>
              <button
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto bg-[#ffce79] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ffce79]/90 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Continue Shopping</span>
              </button>
            </RippleContainer>
            
            <RippleContainer>
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto bg-white/10 text-[#ffce79] px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
            </RippleContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;