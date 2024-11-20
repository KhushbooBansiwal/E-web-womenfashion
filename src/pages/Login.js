import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (email === "test@example.com" && password === "password") {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url(..assets/img2jewl.jpg)" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 hover:border-2 hover:border-green-100">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          Welcome Back
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaEnvelope className="text-gray-500 ml-2" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaLock className="text-gray-500 ml-2" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-green-700 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
