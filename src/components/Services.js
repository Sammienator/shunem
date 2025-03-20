import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { FaSpa, FaHands, FaBath, FaCut } from 'react-icons/fa';

function Services() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send to EmailJS
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID');
      alert('Booking request sent successfully!');
      reset();
    } catch (err) {
      alert('Failed to send booking request: ' + err.message);
    }
  };

  const services = [
    {
      icon: <FaSpa />,
      title: 'Skincare Products',
      desc: 'Enhance your skincare routine with our premium products designed to nourish and rejuvenate. Choose from a curated selection to achieve a radiant, natural glow.',
      details: [
        { name: 'Cinnibar Green Products', price: 'KShs 4,000/=' },
        { name: 'Jani Products', price: 'KShs 3,500/=' },
        { name: 'Mary Kay Products', price: 'KShs 3,000/=' },
      ],
    },
    {
      icon: <FaHands />,
      title: 'Massage Therapies (90 Minutes)',
      desc: 'Relax and unwind with our expertly crafted massage sessions tailored to your needs. Each treatment is designed to relieve stress and promote overall wellness.',
      details: [
        { name: 'Swedish Relaxing Massage', price: 'KShs 5,000/=' },
        { name: 'Light Pressure Massage (Aroma Therapy)', price: 'KShs 6,000/=' },
        { name: 'Medium Pressure Massage (Deep Tissue)', price: 'KShs 6,500/=' },
        { name: 'Relaxing Massage (Hot Stone)', price: 'KShs 7,000/=' },
      ],
    },
    {
      icon: <FaCut />,
      title: 'Waxing Services',
      desc: 'Achieve smooth, radiant skin with our professional waxing services for all areas of the body. Our techniques ensure minimal discomfort and long-lasting results.',
      details: [
        { name: 'Under Arm', stripWax: 'KShs 500/=', hotWax: 'KShs 700/=' },
        { name: 'Brazilian', stripWax: 'KShs 3,000/=', hotWax: '-' },
        { name: 'Bikini', stripWax: 'KShs 2,000/=', hotWax: '-' },
        { name: 'Face', stripWax: 'KShs 500/=', hotWax: 'KShs 1,000/=' },
        { name: 'Arm', stripWax: '-', hotWax: '-' },
        { name: 'Leg', stripWax: 'KShs 2,000/=', hotWax: '-' },
      ],
    },
    {
      icon: <FaBath />,
      title: 'Body Scrubs',
      desc: 'Exfoliate and nourish your skin with our invigorating scrubs that leave you feeling refreshed. These treatments remove dead skin cells and enhance skin texture.',
      details: [
        { name: 'Cinnabar Green Products', price: 'KShs 2,000/=' },
        { name: 'Coffee Scrub', price: 'KShs 1,500/=' },
      ],
    },
  ];

  return (
    <section className="py-16 bg-spa-beige text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-spa-gold mb-12">Our Services at Shunem Therapy</h2>
      <div className="max-w-4xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={index} className="mb-12" data-aos="zoom-in" data-aos-delay={index * 200}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-spa-gold text-4xl mb-4 mx-auto flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-spa-brown mb-2">{service.title}</h3>
              <p className="text-spa-brown mb-4">{service.desc}</p>
              {service.title === 'Waxing Services' ? (
                <table className="w-full text-left text-spa-brown mx-auto">
                  <thead>
                    <tr>
                      <th className="p-2">Service</th>
                      <th className="p-2">Strip Wax</th>
                      <th className="p-2">Hot Wax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.details.map((item, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">{item.stripWax}</td>
                        <td className="p-2">{item.hotWax}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <ul className="text-spa-brown text-center">
                  {service.details.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      {item.name} – {item.price}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-spa-gold mb-4">Book Your Appointment</h3>
          <p className="text-spa-brown mb-6">
            Ready to experience the ultimate relaxation and beauty treatments? Schedule your session at Shunem Therapy today.
          </p>
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-spa-brown">Name</label>
                <input {...register('name', { required: true })} className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-spa-brown">Email</label>
                <input {...register('email', { required: true })} type="email" className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-spa-brown">Phone</label>
                <input {...register('phone', { required: true })} type="tel" className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-spa-brown">Preferred Date</label>
                <input {...register('date', { required: true })} type="date" className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-spa-brown">Service</label>
                <select {...register('service', { required: true })} className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold">
                  <option value="Skincare Products">Skincare Products</option>
                  <option value="Massage Therapies">Massage Therapies</option>
                  <option value="Waxing Services">Waxing Services</option>
                  <option value="Body Scrubs">Body Scrubs</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-spa-brown">Additional Details</label>
                <textarea
                  {...register('details')}
                  placeholder="E.g., I’d like a Swedish Relaxing Massage, or I’d prefer a Brazilian wax with strip wax."
                  className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold"
                  rows="4"
                />
              </div>
              <button type="submit" className="w-full bg-spa-gold text-spa-brown p-3 rounded-lg hover:bg-spa-aqua transition">Submit Booking</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;