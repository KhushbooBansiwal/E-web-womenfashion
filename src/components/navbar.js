import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cardcontext"; // Import the useCart hook
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart(); // Get cart count from the context

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
            Cart
            {cartCount > 0 && (
              <span className="bg-red-500 text-white rounded-full text-xs px-2 ml-2">
                {cartCount}
              </span>
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
        <div className="md:hidden bg-green-700 text-white space-y-4 mt-4 p-4">
          <Link to="/" className="block hover:text-gray-300 transition">Home</Link>
          <Link to="/products" className="block hover:text-gray-300 transition">Products</Link>
          <Link to="/cart" className="flex items-center hover:text-gray-300 transition">
            <FaShoppingCart className="mr-1" />
            Cart
            {cartCount > 0 && (
              <span className="bg-red-500 text-white rounded-full text-xs px-2 ml-2">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="block hover:text-gray-300 transition">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
