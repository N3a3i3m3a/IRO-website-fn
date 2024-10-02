"use client";
import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed

export default function PurchaseForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    quantity: '',
    price: '',
    category: '',
    status: '',
    additionalSpec: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the API request and log the response
      const response = await axios.post('http://localhost:5000/api/Inventory/requests/createReq', formData);
      
      // Log the entire response object
      console.log('Full API Response:', response);
  
      // Log specific parts of the response, like the data
      console.log('Response Data:', response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
  

  return (
    <section className='p-2'>
      <form onSubmit={handleSubmit} className=" mx-auto max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md">
        <p className='text-xl mb-6 flex justify-center items-center'>New product request form</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-md mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 text-sm py-2 border rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full text-sm px-3 py-1 border rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-3 text-sm py-1 border rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 text-sm py-1 border rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 text-sm py-1 border rounded-md"
            >
              <option value="">Select Category</option>
              <option value="Category1">Category 1</option>
              <option value="Category2">Category 2</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-1 text-sm border rounded-md"
            >
              <option value="">Select Status</option>
              <option value="Pending">New</option>
              <option value="Approved">Second hand</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Additional specification</label>
            <textarea
              name="additionalSpec"
              placeholder="Additional specification"
              value={formData.additionalSpec}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
