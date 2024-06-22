// ContactUs.js

import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log(formData);
        // Example: You could send this data to an API or handle it in another way
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-gray-100 p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
