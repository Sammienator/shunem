import React from 'react';
import Spa1 from '../assets/spa16.jpg'; // Adjust paths
import Spa2 from '../assets/spa18.jpg';
import Spa3 from '../assets/spa14.jpg';

function Gallery() {
  const galleryItems = [
    {
      img: Spa1,
      desc: 'A serene massage room with calming decor, perfect for relaxation.',
    },
    {
      img: Spa2,
      desc: 'Our luxurious hot stone therapy setup, designed to melt away stress.',
    },
    {
      img: Spa3,
      desc: 'A tranquil space for skincare treatments, ensuring a radiant glow.',
    },
  ];

  return (
    <section className="py-16 bg-spa-beige text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-spa-gold mb-12">Gallery</h2>
      <div className="max-w-7xl mx-auto px-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center mb-12`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="md:w-1/2">
              <img
                src={item.img}
                alt={`Spa ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <p className="text-spa-brown">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;