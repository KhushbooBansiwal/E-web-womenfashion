import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const tax = (subtotal * 0.1).toFixed(2); // 10% tax
  const total = (subtotal + parseFloat(tax)).toFixed(2);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => dispatch(addItemToCart(item))}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  >
                    +
                  </button>
                  <span className="text-lg font-medium text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    -
                  </button>
                </div>
                <p className="text-lg font-bold text-gray-800 ml-4">
                  ₹{item.totalPrice.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Tax (10%):</span>
              <span>₹{tax}</span>
            </div>
            <div className="flex justify-between text-gray-800 font-bold text-lg border-t pt-2">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <button
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              onClick={() => alert("Proceeding to checkout...")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
