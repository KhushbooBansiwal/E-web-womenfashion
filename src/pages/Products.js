import React, { useState } from "react";
import pimg1 from "../assets/pimg1.jpg";
import pimg2 from "../assets/pimg2.jpg";
import pimg3 from "../assets/pimg3.jpg";
import pimg4 from "../assets/pimg4.jpg";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartslice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(pimg1);
  const [productName, setProductName] = useState("Jacket");
  const [productPrice, setProductPrice] = useState(2999); // Price as a number

  const handleImageClick = (image, name, price) => {
    setMainImage(image);
    setProductName(name);
    setProductPrice(price);
  };

  const handleAddToCart = (name, price) => {
    const product = { name, price, image: mainImage };
    dispatch(addItemToCart(product));
    alert(`${name} added to cart!`);
  };

  // Product data with numeric prices
  const products = [
    { image: pimg1, name: "Jacket", price: 2999 },
    { image: pimg2, name: "Girl Woolen Top", price: 3499 },
    { image: pimg3, name: "One-Piece Cotton Dress", price: 3999 },
    { image: pimg4, name: "T-shirt", price: 2499 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={mainImage}
            alt={productName}
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="flex space-x-4 mt-4 justify-center">
            {products.map((product, index) => (
              <img
                key={index}
                src={product.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover rounded-md cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-75"
                onClick={() =>
                  handleImageClick(product.image, product.name, product.price)
                }
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-green-600">
            {productName}
          </h1>
          <p className="text-lg text-gray-600">₹{productPrice.toLocaleString()}</p>
          <p className="text-gray-500">
            This stylish product is perfect for any casual occasion. Made from
            breathable material, it offers a comfortable fit for the warmer
            months.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => handleAddToCart(productName, productPrice)}
              className="w-full lg:w-1/2 py-3 bg-green-600 text-white rounded-md transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-green-600">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={product.image}
                alt={`Related Product ${index + 1}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-green-700 mt-2">₹{product.price.toLocaleString()}</p>
                <button
                  onClick={() => handleAddToCart(product.name, product.price)}
                  className="w-full py-2 bg-green-600 text-white rounded-md transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
