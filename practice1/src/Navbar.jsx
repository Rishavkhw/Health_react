import React from 'react'

function Navbar() {
  return (
    <div>
     <div className="mx-auto px-6 py-4 flex items-center justify-between bg-zinc-500">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-300">MyHealth</div>

        {/* Menu */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#services" className="hover:text-blue-300">SERVICES & PRICING</a></li>
          <li><a href="#contact" className="hover:text-blue-300">CONTACT</a></li>
          <li><a href="#about" className="hover:text-blue-300">ABOUT US</a></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar
