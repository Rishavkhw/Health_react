import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-blue-100 py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">About Us</h2>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
        Welcome to <span className="font-semibold text-blue-700">MyHealth Clinic</span> – your trusted partner in healthcare. 
        We are dedicated to providing compassionate, high-quality, and affordable healthcare services to every individual and family.
      </p>


       {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">💼 What We Offer</h3>
          <p className="text-gray-700">
                   <ul className="list-disc list-inside text-gray-700 max-w-xl mx-auto space-y-2">
          <li>Experienced and certified doctors</li>
          <li>Friendly staff and clean facilities</li>
          <li>24/7 support and online consultations</li>
          <li>Affordable pricing and packages</li>
          <li>Modern medical equipment</li>
          <li>Convenient appointment scheduling</li>
        </ul>
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">💡 Why Choose Us</h3>
          <p className="text-gray-700">
            <ul className="list-disc list-inside text-gray-700 max-w-xl mx-auto space-y-2">
          <li>General health checkups</li>
          <li>Diagnostic laboratory services</li>
          <li>Emergency care</li>
          <li>Specialist consultations</li>
          <li>Online appointment booking</li>
        </ul>
          </p>
        </div>

         <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">🎯 Our Mission</h3>
          <p className="text-gray-700">
            To enhance lives through exceptional healthcare services that are accessible, reliable, and innovative.
          </p>
        </div>
         <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">🌟 Our Vision</h3>
          <p className="text-gray-700">
            To become the leading private clinic in Nepal, setting new standards in patient care and medical excellence.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
