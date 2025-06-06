import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-blue-100 py-12 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Contact Us
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Need Help?
          </h3>
          <p className="text-gray-700 mb-4">
            Our health support team is available 24/7 to assist you.
          </p>
          <ul className="text-gray-700 space-y-4 mb-6">
            <li>
              <strong>📞 Phone:</strong> +977-9876543210
            </li>
            <li>
              <strong>📧 Email:</strong> support@healthapp.com
            </li>
            <li>
              <strong>🏥 Address:</strong> 123 Health Street Dharan, Nepal
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex pl-1 space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:text-pink-700 text-xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-600 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-pink-700 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
