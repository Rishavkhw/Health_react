import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-zinc-500 text-white py-3">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
   
        <div>
          <h3 className="text-xl font-semibold mb-2">ABC Clinic</h3>
          <p>123 Health Street, Dharan</p>
          <p>Phone: +977-9800000000</p>
          <p>Email: contact@clinic.com</p>
        </div>

        <div>-
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className='pb-2'>
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/services" className="hover:text-blue-300">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold pb-3">Opening Hours</h3>
          <p>Sun - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 2:00 PM</p>
        </div>
      </div>

      <div className="border-t border-gray-400 pt-1.5 text-center text-sm">
        © {new Date().getFullYear()} ABC Clinic. All rights reserved.
      </div>
      </footer>
    </div>
  )
}

export default Footer