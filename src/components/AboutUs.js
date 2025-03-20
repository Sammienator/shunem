import React from 'react';
import OwnerImage from '../assets/owner.jpg'; // Replace with the actual path to the owner's image

function AboutUs() {
  return (
    <section className="py-16 bg-spa-beige text-spa-brown text-center">
      {/* Hero Section */}
      <div className="relative bg-spa-brown text-white py-20" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-spa-gold mb-4">About Shunem Therapy</h1>
          <p className="text-xl">
            A sanctuary of peace and rejuvenation, born from a vision to empower and heal through the art of wellness.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-12" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-bold text-spa-gold mb-6">Our Story</h2>
        <p className="text-lg mb-4">
          Shunem Therapy was founded in 2018 by Aisha Mugo, a passionate advocate for holistic wellness and female empowerment. Inspired by her own journey of self-discovery and healing, Aisha envisioned a space where individuals could escape the chaos of daily life and reconnect with their inner peace.
        </p>
        <p className="text-lg">
          Starting as a small studio in Nairobi, Shunem Therapy has grown into a beloved sanctuary, offering a range of luxurious treatments that blend traditional African healing practices with modern spa techniques. Every detail, from the calming decor to the carefully curated services, reflects Aisha’s commitment to creating a nurturing environment for all.
        </p>
      </div>

      {/* Mission and Values Section */}
      <div className="bg-white py-12" data-aos="fade-up" data-aos-delay="400">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-spa-gold mb-6">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-spa-brown mb-2">Empowerment</h3>
              <p>
                We believe in empowering our clients to embrace their natural beauty and inner strength through personalized care and transformative experiences.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-spa-brown mb-2">Holistic Healing</h3>
              <p>
                Our treatments are designed to nurture the mind, body, and soul, using natural products and techniques that promote overall well-being.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-spa-brown mb-2">Community</h3>
              <p>
                We are committed to building a supportive community where everyone feels valued, respected, and cared for, both within our spa and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder's Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-12" data-aos="fade-up" data-aos-delay="600">
        <h2 className="text-3xl font-bold text-spa-gold mb-6">Meet Our Founder: Aisha Mugo.</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={OwnerImage}
              alt="Aisha Mugo, Founder of Shunem Therapy"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <p className="text-lg mb-4">
              Aisha Mugo is the heart and soul of Shunem Therapy. As a single mother and a survivor of personal challenges, Aisha discovered the healing power of self-care and wellness during a difficult period in her life. She turned her passion for helping others into a mission to create a space where women, and everyone else, can find solace, strength, and empowerment.
            </p>
            <p className="text-lg">
              Aisha’s vision for Shunem Therapy goes beyond providing spa services—it’s about fostering a movement of self-love and community support. Her leadership has not only transformed the lives of countless clients but also inspired a team of dedicated professionals who share her commitment to making a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-spa-brown text-white py-12" data-aos="fade-up" data-aos-delay="800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-spa-gold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-6">
            At Shunem Therapy, we invite you to be part of our story. Whether you’re seeking relaxation, rejuvenation, or a deeper connection with yourself, we’re here to support you every step of the way.
          </p>
          <a
            href="/services"
            className="bg-spa-gold text-spa-brown px-6 py-3 rounded-lg hover:bg-spa-aqua transition"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;