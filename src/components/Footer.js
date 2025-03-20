import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-spa-brown text-white p-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-spa-gold">Shunem Therapy</h3>
          <p>123 Spa Lane, Nairobi, Kenya</p>
          <p>Email: info@shunemtherapy.com | Phone: +254 123 456 789</p>
        </div>
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#b" className="text-spa-gold hover:text-spa-aqua"><FaFacebook size={24} /></a>
          <a href="#b" className="text-spa-gold hover:text-spa-aqua"><FaInstagram size={24} /></a>
          <a href="#b" className="text-spa-gold hover:text-spa-aqua"><FaTwitter size={24} /></a>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-bold text-spa-gold mb-2">Subscribe to Our Newsletter</h4>
        <form onSubmit={handleNewsletterSubmit} className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold"
            required
          />
          <button type="submit" className="bg-spa-gold text-spa-brown p-2 rounded-lg hover:bg-spa-aqua transition">
            Subscribe
          </button>
        </form>
      </div>
      <div className="mt-4">
        <a href="#B" className="text-spa-gold hover:text-spa-aqua">Back to Top</a>
      </div>
      <div className="mt-4 text-sm">
        <p>&copy; The Sammienator Inc. 2025</p>
      </div>
    </footer>
  );
}

export default Footer;