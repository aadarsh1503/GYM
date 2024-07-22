import React from 'react';

const Navbar = () => (
  <div className="bg-gray-100">
  <header className="header bg-blue-900 text-white p-4 flex justify-between items-center rounded-b-lg shadow-lg transition duration-500 ease-in-out ">
    <div id="logo" className="flex items-center">
      <img src="logo1.png" alt="Logo" className="h-10 mr-2 rounded-full shadow-lg" />
      <div id="gym_name" className="text-2xl font-bold">Evexia Gym</div>
    </div>
    <nav id="navbar" className="space-x-4">
      <a href="#home" className="hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110">Home</a>
      <a href="#facility" className="hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110">Programs</a>
      <a href="#about_us" className="hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110">About Us</a>
      <a href="#membership" className="hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110">Membership</a>
      <a href="#contact_us" className="hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110">Contact Us</a>
    </nav>
  </header>
</div>
);

export default Navbar;
