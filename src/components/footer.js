import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
 
    <div>
      <h2 className="text-white text-2xl font-bold mb-4">Fashionista</h2>
      <p>Discover quality fashion curated just for you.</p>
    </div>

  
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul>
        <li><Link to="/products" className="hover:underline">About Us</Link></li>
        <li><Link to="/navbar" className="hover:underline">FAQ</Link></li>
        <li><Link to="/login" className="hover:underline">Contact Us</Link></li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
      <p>Subscribe to our newsletter for the latest trends and offers.</p>
      
    </div>

   
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
      <p>123 Fashion Jodhpur</p>
      <p>+000000000</p>
      <p>support@fashionista.com</p>
      <div className="mt-4">
   
      <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-gray-300 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-300 text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-300 text-2xl" />
          </a>
        </div>
      </div>

    </div>
  </div>
  <p className="text-center text-gray-500 mt-8">&copy; 2024 Fashionista. All rights reserved.</p>
</footer>
  )
}
export default Footer 
