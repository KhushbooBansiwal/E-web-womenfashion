import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fashionista</h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/products" className="hover:text-gray-300 transition">Products</Link>
          <Link to="/cart" className="hover:text-gray-300 transition flex items-center">
            <FaShoppingCart className="mr-1" />
            {totalQuantity > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">{totalQuantity}</span>
        )}
        
          </Link>
          <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700 text-white space-y-4 mt-3 p-3">
          <Link to="/" className="block hover:text-gray-300 transition">Home</Link>
          <Link to="/products" className="block hover:text-gray-300 transition">Products</Link>
          <Link to="/cart" className="flex items-center hover:text-gray-300 transition">
            <FaShoppingCart className="mr-1" />
            {totalQuantity > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">{totalQuantity}</span>
        )}
              <span className="bg-red-500 text-white rounded-full text-xs px-2 ml-2">
              </span>
          </Link>
          <Link to="/login" className="block hover:text-gray-300 transition">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
