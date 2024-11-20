import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-gray-200 py-8 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Sign up for exclusive deals, updates, and more.
        </p>
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-l-lg border-t mr-0  border-green-300  text-gray-800  bg-white"
          />
          <button
            onClick={handleSignup}
            className="bg-green-700 border-green-300 hover:bg-green-600  text-white font-bold py-2 px-4 rounded-r-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
