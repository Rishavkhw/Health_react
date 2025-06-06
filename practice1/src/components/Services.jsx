import React from 'react';

const services = [
  {
    name: 'General Consultation',
    description: 'Routine checkups and personalized health advice from experienced doctors.',
    price: 'Rs. 500',
  },
  {
    name: 'Specialist Visit',
    description: 'Consultation with specialists (cardiology, neurology, orthopedics, etc.)',
    price: 'Rs. 1200',
  },
  {
    name: 'Lab Tests',
    description: 'Basic and advanced diagnostics (blood, urine, X-ray, etc.)',
    price: 'Rs. 300 - Rs. 3000',
  },
  {
    name: 'Vaccination',
    description: 'All types of child and adult vaccines, including travel vaccines.',
    price: 'Rs. 800 - Rs. 2500',
  },
  {
    name: 'Health Packages',
    description: 'Comprehensive full-body checkups at discounted rates.',
    price: 'Rs. 2500 - Rs. 7000',
  },
  {
  name: 'Emergency Care',
  description: 'Immediate treatment and urgent medical attention, available during clinic hours.',
  price: 'Rs. 1500'
},
];

function Services() {
  return (
    <div className="bg-blue-100 min-h-screen py-12 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Services & Pricing
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-zinc-100 p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <p className="text-lg font-bold text-green-700">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
