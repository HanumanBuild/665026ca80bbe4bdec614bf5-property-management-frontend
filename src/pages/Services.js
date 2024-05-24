import React, { useState } from 'react';
import api from '../services/api';

function Services() {
  const [formData, setFormData] = useState({ name: '', email: '', serviceType: '', description: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/service-request', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Failed to submit service request');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-lg">Property Maintenance</li>
        <li className="text-lg">Tenant Management</li>
        <li className="text-lg">Financial Reporting</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Request a Service</h2>
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
          <label className="block text-lg mb-2">Service Type</label>
          <input
            type="text"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
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

export default Services;