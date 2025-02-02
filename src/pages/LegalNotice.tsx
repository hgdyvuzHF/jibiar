import React from 'react';

const LegalNotice = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#ffce79] mb-8">Legal Notice</h1>
        
        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Company Information</h2>
            <p>FBD UAE LLC<br />
            Downtown Dubai<br />
            United Arab Emirates</p>
            <p className="mt-2">
              Email: contact@fbduae.com<br />
              Phone: +971 4 123 4567
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Legal Registration</h2>
            <p>Registered in Dubai, UAE<br />
            Commercial Register: 123456789<br />
            VAT ID: AE123456789</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Responsible for Content</h2>
            <p>Managing Director: John Doe<br />
            Content Manager: Jane Smith</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Disclaimer</h2>
            <p>The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ffce79] mb-4">Copyright</h2>
            <p>© 2024 FBD UAE LLC. All rights reserved. All content, including but not limited to text, images, graphics, logos, and button icons, is the property of FBD UAE LLC or its content suppliers and is protected by international copyright laws.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;