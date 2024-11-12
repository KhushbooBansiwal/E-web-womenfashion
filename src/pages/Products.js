import React, { useState } from "react";
import pimg1 from "../assets/pimg1.jpg";
import pimg2 from "../assets/pimg2.jpg";
import pimg3 from "../assets/pimg3.jpg";
import pimg4 from "../assets/pimg4.jpg";

const ProductPage = () => {
  const [mainImage, setMainImage] = useState(pimg1);
  const [productName, setProductName] = useState("Jacket");
  const [productPrice, setProductPrice] = useState("₹2,999");

  const handleImageClick = (image, name, price) => {
    setMainImage(image);
    setProductName(name);
    setProductPrice(price);
  };

  const addToCart = () => {
    alert("Product added to cart!");
  };

  const buyNow = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={mainImage}
            alt="Product"
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="flex space-x-4 mt-4 justify-center">
            {[pimg1, pimg2, pimg3, pimg4].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover rounded-md cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-75"
                onClick={() => {
                  const names = ["Jacket", "Girl Woolen Top", "One-Piece Cotton Dress", "T-shirt"];
                  const prices = ["₹2,999", "₹3,499", "₹3,999", "₹2,499"];
                  handleImageClick(img, names[index], prices[index]);
                }}
                />
            )) }
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-green-600">{productName}</h1>
          <p className="text-lg text-gray-600">{productPrice}</p>
          <p className="text-gray-500">
            This stylish summer shirt is perfect for any casual occasion. Made from breathable cotton material, it offers a comfortable fit for the warmer months.
          </p>

          {/* Rating Section */}
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(200 reviews)</span>
          </div>

          {/* Quantity Selector */}
          <div>
            <label htmlFor="quantity" className="text-lg text-gray-700">Quantity:</label>
            <select id="quantity" className="mt-2 p-2 border border-gray-300 rounded-md transition-all duration-300 ease-in-out hover:border-green-500">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={addToCart}
              className="w-full lg:w-1/2 py-3 bg-green-600 text-white rounded-md transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-105"
            >
              Add to Cart
            </button>
            <button
              onClick={buyNow}
              className="w-full lg:w-1/2 py-3 bg-blue-600 text-white rounded-md transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-green-600">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {/* Related Product Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={pimg1}
              alt="Related Product 1"
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => handleImageClick(pimg1, "Jacket", "₹2,999")}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Jacket</h3>
              <p className="text-green-700 mt-2">₹2,999</p>
            </div>
          </div>

          {/* Related Product Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={pimg2}
              alt="Related Product 2"
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => handleImageClick(pimg2, "Girl Woolen Top", "₹3,499")}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Girl Woolen Top</h3>
              <p className="text-green-700 mt-2">₹3,499</p>
            </div>
          </div>

          {/* Related Product Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={pimg3}
              alt="Related Product 3"
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => handleImageClick(pimg3, "One-Piece Cotton Dress", "₹3,999")}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">One-Piece Cotton Dress</h3>
              <p className="text-green-700 mt-2">₹3,999</p>
            </div>
          </div>

          {/* Related Product Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={pimg4}
              alt="Related Product 4"
              className="w-full h-56 object-cover border-green-100  transition-transform duration-300 ease-in-out  hover:scale-105"
              onClick={() => handleImageClick(pimg4, "T-shirt", "$24.99")}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">T-shirt</h3>
              <p className=" mt-2 text-green-700 ">₹2,499</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;