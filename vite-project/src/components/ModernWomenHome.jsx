import React from "react";
import { Link } from "react-router-dom";
import SpotlightSection from "./SpotlightSection";
import BestDealsSection from "./BestDealsSection";

// Images
import navbarLogo from "../assets/Frame 2.png";
import bgImage from "../assets/Slider.png";
import searchImg from "../assets/Frame 1652.png";

import creator1 from "../assets/Frame 1646.png";
import creator2 from "../assets/Frame 1657.png";      
import lipstickImg from "../assets/Group 140991.png"; 
  
export default function ModernWomenHome() {
  return (
    <div className="min-h-screen w-full font-sans bg-white">

      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
        <img 
          src={navbarLogo} 
          alt="Navbar"
          className="w-full object-cover"
        />
      </nav>

      {/* HERO SECTION */}
     <section
  className="
    relative 
    w-full 
    min-h-[900px] 
    pt-48 
    pb-40 
    px-6 
    md:pl-20 
    lg:pl-28 
    xl:pl-36 
    text-white 
    bg-cover 
    bg-center
  "
  style={{ backgroundImage: `url(${bgImage})` }}
>


        {/* SEARCH BAR */}
        <img 
          src={searchImg} 
          alt="Search Bar"
          className="w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] mb-16"
        />

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold Ivy Mode leading-tight max-w-2xl">
          Where Every Shade <br /> Tells a Story.
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-xl mt-6 text-gray-200 text-sm md:text-base leading-relaxed">
          Each Month, We Celebrate A Creator Who Inspires Our Community With Creativity,
          Authenticity, And Style. Their Unique Voice And Passion For Beauty Continue To
          Make Waves Across Social Media.
        </p>

        {/* SHOP BUTTON */}
        <button className="mt-10 bg-black text-white px-8 md:px-10 py-3 rounded-full font-semibold">
          Shop More
        </button>

       {/* RIGHT SIDE CREATOR IMAGES — DESKTOP ONLY */}
<div
  className="
    hidden
    md:flex
    flex-col
    gap-6
    absolute 
    right-10 
    top-[22%]
  "
>
  <img 
    src={creator1} 
    alt="Creator 1"
    className="w-[150px] h-[180px] rounded-2xl object-cover shadow-lg"
  />

  <img 
    src={creator2} 
    alt="Creator 2"
    className="w-[150px] h-[180px] rounded-2xl object-cover shadow-lg"
  />
</div>

{/* RIGHT SIDE CREATOR IMAGES — MOBILE VERSION */}
<div className="md:hidden flex justify-center gap-5 mt-10">
  <img 
    src={creator1}
    alt="Creator 1"
    className="w-[120px] h-[130px] rounded-2xl object-cover shadow-md"
  />

  <img 
    src={creator2}
    alt="Creator 2"
    className="w-[120px] h-[130px] rounded-2xl object-cover shadow-md"
  />
</div>

        {/* LIPSTICK IMAGE — DESKTOP ONLY */}
<img
  src={lipstickImg}
  alt="Lipsticks"
  className="
    hidden
    md:block
    absolute
    bottom-0
    right-[15%]
    w-[350px]
    lg:w-[420px]
    xl:w-[500px]
    object-contain
  "
/>

      </section>
      {/* MOBILE LIPSTICK BELOW HERO SECTION */}
<div className="md:hidden w-full flex justify-center mt-6 mb-10">
  <img 
    src={lipstickImg}
    alt="Lipsticks"
    className="w-[230px] object-contain"
  />
</div>


      {/* OTHER SECTIONS */}
      <SpotlightSection />
      <BestDealsSection />

    </div>
  );
}











