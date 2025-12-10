import React from "react";

import spot1 from "../assets/spot1.png";
import spot2 from "../assets/spot2.png";
import spot3 from "../assets/spot3.png";

export default function SpotlightSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-20">

      {/* Heading */}
      <p className="text-gray-600 tracking-widest font-semibold text-sm mb-2">
        TRENDING
      </p>

      <h2 className="text-3xl md:text-5xl font-semibold mb-16">
        Spotlight of the Month
      </h2>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">

        {/* CARD 1 */}
        <div className="text-center">
          <div className="relative flex justify-center">
            
            {/* Background shape — tighter spacing */}
            <div className="bg-[#FAD4DD] rounded-t-[140px] w-[260px] h-[250px] absolute top-20"></div>

            {/* Main Image — closer & bigger */}
            <img
              src={spot1}
              alt="Influencer"
              className="relative z-10 w-[260px] h-[340px] object-contain"
            />
          </div>

          <h3 className="mt-6 text-lg font-bold">INFLUENCER OF THE MONTH</h3>

          <p className="text-gray-500 text-sm mt-2 leading-relaxed px-4">
            Each Month, We Celebrate A Creator Who Inspires Our Community With
            Creativity, Authenticity, And Style.
          </p>

          <button className="mt-6 border border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* CARD 2 */}
        <div className="text-center">
          <div className="relative flex justify-center">

            <div className="bg-[#F8AFC4] rounded-t-[140px] w-[260px] h-[250px] absolute top-20"></div>

            <img
              src={spot2}
              alt="Makeup"
              className="relative z-10 w-[260px] h-[340px] object-contain"
            />
          </div>

          <h3 className="mt-6 text-lg font-bold">MAKE UP OF THE MONTH</h3>

          <p className="text-gray-500 text-sm mt-2 leading-relaxed px-4">
            Each Month, We Celebrate A Creator Who Inspires Our Community.
          </p>

          <button className="mt-6 border border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* CARD 3 */}
        <div className="text-center">
          <div className="relative flex justify-center">

            <div className="bg-[#FF6A79] rounded-t-[140px] w-[260px] h-[250px] absolute top-20"></div>

            <img
              src={spot3}
              alt="Purchaser"
              className="relative z-10 w-[260px] h-[340px] object-contain"
            />
          </div>

          <h3 className="mt-6 text-lg font-bold">PURCHASER OF THE MONTH</h3>

          <p className="text-gray-500 text-sm mt-2 leading-relaxed px-4">
            Each Month, We Celebrate A Creator Who Inspires Our Community.
          </p>

          <button className="mt-6 bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800 transition">
            Apply
          </button>
        </div>

      </div>
    </section>
  );
}
