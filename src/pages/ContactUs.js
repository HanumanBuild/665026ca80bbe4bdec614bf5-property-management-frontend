import React, { useState } from 'react';
import api from '../services/api';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/contact', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Failed to submit contact form');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
      {responseMessage && <p className="mt-4 text-lg">{responseMessage}</p>}
    </div>
  );
}

export default ContactUs;