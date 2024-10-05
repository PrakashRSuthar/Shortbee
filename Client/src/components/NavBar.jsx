import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
      <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/50" alt="Logo" className="h-10" />
          <h1 className="text-lg font-bold">SmartBees 🐝</h1>
        </div>
        {/* Profile Links */}
        <div className="flex space-x-4 items-center">
            <Link to="/home" className="text-sm text-gray-700">Home</Link>
            <Link to="/payment" className="text-sm text-gray-700">Payment</Link>
            <Link to="/post" className="text-sm text-gray-700">Post a Job</Link>
            <Link to="/services" className="text-sm text-gray-700">Services</Link>
          <input type="text" placeholder="Search in site" className="border border-gray-300 px-3 py-1 rounded-md" />
          <div className="flex items-center">
            <button className="w-10 h-10 rounded-full bg-purple-500 text-white">MG</button>
          </div>
        </div>
        
      </div>
    </nav>
    );
};

export default NavBar;
