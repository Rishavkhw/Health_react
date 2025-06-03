import React from 'react'

function Hero() {
      return (
    <section className="bg-blue-100 h-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16">

      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to Your Clinic
        </h1>
        <p className="text-lg text-gray-700">
          Providing professional and compassionate healthcare for you and your family.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
          Book Appointment
        </button>
      </div>
    
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <img
          src="doctor.png"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default Hero
