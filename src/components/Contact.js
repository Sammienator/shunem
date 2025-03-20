import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send to EmailJS
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID');
      alert('Message sent successfully!');
      reset();
    } catch (err) {
      alert('Failed to send message: ' + err.message);
    }
  };

  return (
    <section className="py-16 bg-spa-brown text-white text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-spa-gold mb-12">Get in Touch</h2>
      <div className="max-w-lg mx-auto px-4">
        <p className="text-lg mb-6">
          Have a question or need more information? We’d love to hear from you! Fill out the form below, and we’ll get back to you soon.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input {...register('name', { required: true })} className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input {...register('email', { required: true })} type="email" className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone (Optional)</label>
            <input {...register('phone')} type="tel" className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              {...register('message', { required: true })}
              placeholder="Tell us how we can assist you..."
              className="mt-1 block w-full p-3 rounded-lg bg-spa-beige text-spa-brown border border-spa-gold"
              rows="4"
            />
          </div>
          <button type="submit" className="w-full bg-spa-gold text-spa-brown p-3 rounded-lg hover:bg-spa-aqua transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;