import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart  from './pages/Cart';
import Login from "./pages/Login";
import Navbar from "./components/navbar";
import Register from './components/register';
import { CartProvider } from './contexts/cardcontext';

const App = () => {

  return (
    <CartProvider>
    <Router>
      <Navbar  />
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
     <Route path="/register" element={<Register />}></Route>
      </Routes>
      
    </Router>
    </CartProvider>
  );
};
document.getElementById('root')
export default App;
