import React  from "react";
import img1 from "../assets/img1.jpg"

const Home = () => {
    return(
        <div className=" bg-gray-50">
           <section
  className="relative w-full h-[80vh] bg-center bg-no-repeat bg-cover"
  style={{
    backgroundImage: `url(${img1})`,
  }}
>


                <div className="absolute inset-0 bg-green-700 opacity-30"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 ">Discover Your Style</h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">Curated women’s fashion, just for you.</p>
          <button className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition">
            Shop Now
          </button>
                </div>
            </section>
            
        </div>
    )
}
 export default Home