import React from "react";

import img1 from "../assets/deal1.png";
import img2 from "../assets/deal2.png";
import img3 from "../assets/deal3.png";
import img4 from "../assets/deal4.png";

export default function BestDealsSection() {
  return (
    <section className="w-full bg-[#F8F6F4] py-20 px-4 md:px-20 overflow-hidden">

      {/* TOP HEADING */}
      <div className="text-center mb-14">
        <div className="text-gray-500 text-xl mb-2">★ ★ ★</div>

        <p className="text-gray-600 tracking-widest text-sm">BEST DEALS</p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
          Luxe Lips Collection
        </h2>
      </div>

      {/* PRODUCT ROW */}
      <div
  className="
    flex
    justify-center
    items-start
    gap-6 sm:gap-8 md:gap-10 
    overflow-x-auto md:overflow-visible 
    no-scrollbar 
    w-full
    max-w-[1200px]
    mx-auto
    px-2
  "
>


        {/* ------ SMALL CARD ------ */}
        <div className="
          bg-white 
          rounded-3xl 
          shadow-md 
          w-[160px] sm:w-[190px] md:w-[220px] 
          h-[260px] sm:h-[300px] md:h-[330px] 
          flex justify-center
 
          p-4 sm:p-6
          shrink-0
        ">
          <img src={img1} className="w-[70%] sm:w-[75%] md:w-[80%] object-contain" />
        </div>

        {/* ------ SMALL CARD ------ */}
        <div className="
          bg-white 
          rounded-3xl 
          shadow-md 
          w-[160px] sm:w-[190px] md:w-[220px] 
          h-[260px] sm:h-[300px] md:h-[330px]
          flex items-center justify-center 
          p-4 sm:p-6
          shrink-0
        ">
          <img src={img2} className="w-[65%] sm:w-[70%] md:w-[75%] object-contain" />
        </div>

        {/* ------ CENTER BIG CARD ------ */}
        <div className="
          rounded-3xl 
          shadow-lg 
          w-[230px] sm:w-[260px] md:w-[310px] 
          h-[340px] sm:h-[380px] md:h-[420px]
          bg-gradient-to-b 
          from-[#8B4934] to-[#5A2E24] 
          p-6 
          text-white 
          shrink-0
        ">
          <span className="bg-black text-white px-3 py-1 text-[10px] sm:text-xs rounded-full">
            Limited Edition
          </span>

          <div className="flex justify-center mt-6 sm:mt-10">
            <img src={img3} className="w-[60%] sm:w-[65%] md:w-[70%] object-contain" />
          </div>

          <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold leading-tight">
            Matte Lipstick (Dark Shade)
          </h3>

          <div className="flex items-center text-xs sm:text-sm text-gray-200 mt-2 gap-2 sm:gap-3">
            <span className="line-through">₹3500</span>
            <span className="font-semibold text-white">₹2300</span>
            <span className="ml-auto text-white">⭐ 5.0</span>
          </div>

          <button className="mt-4 sm:mt-6 w-full bg-white text-black py-2 rounded-full text-xs sm:text-sm font-semibold">
            Add to cart
          </button>
        </div>

        {/* ------ SMALL CARD ------ */}
        <div className="
          bg-white 
          rounded-3xl 
          shadow-md 
          w-[160px] sm:w-[190px] md:w-[220px] 
          h-[260px] sm:h-[300px] md:h-[330px]
          flex items-center justify-center 
          p-4 sm:p-6
          shrink-0
        ">
          <img src={img4} className="w-[70%] sm:w-[75%] md:w-[80%] object-contain" />
        </div>

        {/* ------ SMALL CARD ------ */}
        <div className="
          bg-white 
          rounded-3xl 
          shadow-md 
          w-[160px] sm:w-[190px] md:w-[220px] 
          h-[260px] sm:h-[300px] md:h-[330px]
          flex items-center justify-center 
          p-4 sm:p-6
          shrink-0
        ">
          <img src={img2} className="w-[65%] sm:w-[70%] md:w-[75%] object-contain" />
        </div>
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-12">
        <button className="bg-black text-white px-10 py-3 rounded-full text-sm sm:text-base hover:bg-gray-900">
          View All
        </button>
      </div>

    </section>
  );
}

