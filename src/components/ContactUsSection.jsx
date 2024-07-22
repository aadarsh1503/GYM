import React from 'react';

const ContactUsSection = () => (
  <section id="contact_us" className="p-8 bg-gray-200">
    <div id="contact_us_heading" className="text-4xl font-bold mb-4">Contact Us</div>
    <form className="bg-white p-4 rounded shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-lg mb-2">Message</label>
        <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"></textarea>
      </div>
      <button type="submit" className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600">Submit</button>
    </form>
  </section>
);

export default ContactUsSection;
