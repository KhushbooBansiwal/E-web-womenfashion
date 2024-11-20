import React from "react";
import cs1 from "../assets/cs1.jpg";
import cs2 from "../assets/cs2.jpg";
import cs3 from "../assets/cs3.jpg";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 border-green-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-lg text-green-600 mt-4">Feedback from customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 ">
        <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-green-100 transition-transform hover:scale-105">
          <img
            src={cs1}
            alt="Customer 1"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Emily R.</h3>
          <p className="text-gray-600 mt-2">
            "Amazing quality and super fast shipping! Will definitely buy
            again."
          </p>
          <div className="flex justify-center mt-4 ">
            <span className="text-yellow-500 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-green-100 transition-transform hover:scale-105">
          <img
            src={cs2}
            alt="Customer 2"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">John D.</h3>
          <p className="text-gray-600 mt-2">
            "Excellent service and quality! I love my new products."
          </p>
          <div className="flex justify-center mt-4">
            <span className="text-yellow-500 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-green-100 transition-transform hover:scale-105">
          <img
            src={cs3}
            alt="Customer 3"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Sarah P.</h3>
          <p className="text-gray-600 mt-2">
            "Best online shopping experience I've had. Highly recommend!"
          </p>
          <div className="flex justify-center mt-4">
            <span className="text-yellow-500 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
