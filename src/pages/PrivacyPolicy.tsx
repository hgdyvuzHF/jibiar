import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#ffce79] mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Introduction</h2>
            <p>At FBD UAE LLC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Billing and shipping address</li>
              <li>Payment information</li>
              <li>Order history</li>
              <li>Device information and browsing data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and updates</li>
              <li>Respond to customer service requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Data Protection</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:<br />
            Email: privacy@fbduae.com<br />
            Phone: +971 4 123 4567</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;