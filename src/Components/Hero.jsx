import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative bg-[#FAFAFA] text-gray-800 py-16 px-8">
      {/* Background Circles */}
     {/*<div className="absolute top-10 left-10 w-48 h-48 rounded-full border-dashed border-2 border-gray-500"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-500 opacity-20"></div>*/}

      <div className="relative max-w-4xl mx-auto text-center">
        {/* AI Box */}
        <div className="inline-flex items-center bg-white text-black px-4 py-2 rounded-full shadow-md mb-8">
          <span className="font-bold text-sm">AI<br/> <img src={assets.RMax} alt="" /></span>
          <span className="ml-2 text-gray-600 text-sm">
            Curious? Let AI Uncover the Answers!
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Maximize Your Impact <br />
          <span className="text-red-500">Business with RMax </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-4 text-lg">
          Enhance your business with RMax's all-in-one platform—streamlining
          client engagement,<br/> automating workflows, and fueling growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition">
            Get Started
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
            Book A Demo
          </button>
        </div>

        {/* Features */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="bg-white text-black px-6 py-3 rounded-lg shadow-lg">
            Seemless Onboarding
          </div>
          <div className="bg-white text-black px-6 py-3 rounded-lg shadow-lg">
            Client Engagement
          </div>
          <div className="bg-white text-black px-6 py-3 rounded-lg shadow-lg">
            Generate Report
          </div>
          <div className="bg-white text-black px-6 py-3 rounded-lg shadow-lg">
            Revenue Growth
          </div>
        </div>
         {/* Logo in Bottom Right */}
      <div className="absolute bottom-0 right-0">
        <img
          src={assets.Fab}
          alt="RMax Logo"
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>
      </div>
    </section>
  );
};

export default Hero;
