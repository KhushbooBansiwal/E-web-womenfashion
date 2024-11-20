import React, { useRef } from "react";
import img1 from "../assets/img1.jpg";
import FeaturedProducts from "../components/featuredProducts";
import Testimonials from "../components/testimonials";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

const Home = () => {
  const featuredProductsRef = useRef(null);

  const handleShopNow = () => {
    if (featuredProductsRef.current) {
      featuredProductsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="absolute inset-0 bg-green-700 opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Curated women’s fashion, just for you.
          </p>
          <button
            aria-label="Shop Now"
            onClick={handleShopNow}
            className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full transition-transform duration-300 ease-in-out hover:bg-green-600 hover:text-white hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </section>

      <div ref={featuredProductsRef}>
        <FeaturedProducts />
      </div>

      <Testimonials />

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;
