import React from 'react';

function BookAppointment() {
  return (
    <div id='book' className="bg-blue-50 py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">📅 Book an Appointment</h2>

      <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="+977-98XXXXXXXX"
            className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
            required
          />
        </div>

        {/* Appointment Date and Time */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Preferred Date</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Preferred Time</label>
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
              required
            />
          </div>
        </div>

        {/* Department */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Department</label>
          <select className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500">
            <option>General Medicine</option>
            <option>Pediatrics</option>
            <option>Dermatology</option>
            <option>Cardiology</option>
            <option>Gynecology</option>
            <option>Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;
