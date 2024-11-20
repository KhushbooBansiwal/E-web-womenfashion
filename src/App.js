import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
// import Register from "./pages/Register"; // Ensure this file path is correct
import Navbar from "./components/navbar"; // Ensure file name matches case

const App = () => {
  return (
    <Router>
      {/* Navbar visible across all pages */}
      <Navbar />

      {/* Main application routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Product Listing Page */}
        <Route path="/products" element={<Products />} />

        {/* Shopping Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        {/* <Route path="/register" element={<Register />} /> */}

        {/* Fallback for unmatched routes */}
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen text-xl font-bold">
              Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
