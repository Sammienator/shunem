import React, { useState, useEffect } from 'react';
import Spa1 from '../assets/spa15.jpg'; // Adjust paths
import Spa2 from '../assets/spa16.jpg';
import Spa3 from '../assets/spa18.jpg';
import Spa4 from '../assets/spa14.jpg';

function Hero() {
  const images = [Spa1, Spa2, Spa3, Spa4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Change every 10 seconds (was 7000)
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-4000 ease-out" // Increased duration to 2000ms (2 seconds)
        style={{ backgroundImage: `url(${images[currentImage]})`, opacity: 1 }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-4">Welcome to Shunem Therapy</h1>
        <p className="text-xl mb-6">Indulge in Relaxation and Rejuvenation</p>
        <a href="/services" className="bg-spa-gold text-spa-brown px-6 py-3 rounded-lg hover:bg-spa-aqua transition">Book Your Escape</a>
      </div>
    </section>
  );
}

export default Hero;