import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Fashioninsta</h1>
      <div className="md:space-x-6">
        <Link to="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-300 transition">
          Products
        </Link>
        <Link to="/cart" className="hover:text-gray-300 transition">
          Cart
        </Link>
        <Link to="/login" className="hover:text-gray-300 transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
