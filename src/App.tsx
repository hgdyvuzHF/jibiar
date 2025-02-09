import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import IPhoneCarousel from './components/iPhone';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ParticlesBackground from './components/ParticlesBackground';
import ProductDetail from './components/Products/ProductDetail';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ThankYouPage from './pages/ThankYouPage';
import { CartProvider } from './context/CartContext';
import FreeShippingBanner from './components/FreeShippingBanner';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen relative">
          <ParticlesBackground />
          <div className="relative z-10">
            <FreeShippingBanner />
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Products />
                  <IPhoneCarousel />
                  <Testimonials />
                  <Contact />
                </>
              } />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
            </Routes>
            <Footer />
            <WhatsAppButton />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;