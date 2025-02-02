import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#ffce79] mb-8">Terms & Conditions</h1>
        
        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Products and Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All products are subject to availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Product descriptions and images are for illustration purposes only</li>
              <li>We reserve the right to limit the quantity of items purchased</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Ordering and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are subject to acceptance and availability</li>
              <li>Payment must be made in full at the time of ordering</li>
              <li>We accept major credit cards and other payment methods as specified</li>
              <li>All payments are processed securely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Shipping and Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery times are estimates only</li>
              <li>Shipping costs are calculated at checkout</li>
              <li>Risk of loss and title pass to you upon delivery</li>
              <li>International orders may be subject to customs duties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Returns and Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Returns must be initiated within 14 days of delivery</li>
              <li>Products must be unused and in original packaging</li>
              <li>Refunds will be processed within 5-10 business days</li>
              <li>Shipping costs for returns are the customer's responsibility</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of FBD UAE LLC and is protected by copyright and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Limitation of Liability</h2>
            <p>FBD UAE LLC shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;