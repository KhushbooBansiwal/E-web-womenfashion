import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import img1 from "../assets/fp1.jpg";
import img2 from "../assets/fp2.jpg";
import img3 from "../assets/fp3.jpg";
import img4 from "../assets/img4luxbg.jpg";

const FeaturedProducts = () => {
  const [added, setAdded] = useState([false, false, false, false]);

  const handleAddToCart = (index) => {
    const updatedState = [...added];
    updatedState[index] = true;
    setAdded(updatedState);
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[img1, img2, img3, img4].map((img, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-lg border-4 border-green-100 transition-transform hover:scale-105"
          >
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Product {index + 1}
              </h3>
              <p className="text-gray-700 mb-4">$29.99</p>
              <button
                onClick={() => handleAddToCart(index)}
                className={`add-to-cart-btn text-white py-2 px-6 rounded-full flex items-center justify-center space-x-2 transition-transform duration-300 ease-in-out ${
                  added[index]
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                disabled={added[index]}
              >
                <FaShoppingCart />
                <span>{added[index] ? "Added" : "Add to Cart"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
