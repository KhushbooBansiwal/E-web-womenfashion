import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import Navbar from "./components/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

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
