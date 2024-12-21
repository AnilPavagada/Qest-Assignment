import React from "react";
import { assets } from "../assets/assets";

const FrameFour = () => {
  return (
    <div className="bg-[#FAFAFA] text-black min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Choose Plan That’s Right For You</h1>
          <p className="text-gray-400">
            Simple and transparent pricing. Start for free, upgrade when you love it.{" "}
            <span className="text-red-500">30 day free trial</span> in a button
          </p>
          <div className="mt-4">
            <span className="text-gray-400 mr-2">Running a Growth Business or Enterprise?</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">Talk to Sales</button>
          </div>
        </div>

        {/* Toggle Section */}
        <div className="flex justify-center items-center mb-10">
          <span className="text-gray-400 mr-4">Monthly</span>
          <button className="bg-gray-700 text-white rounded-full px-3 py-1">
            <span className="bg-white w-4 h-4 rounded-full block"></span>
          </button>
          <span className="text-gray-400 ml-4">Yearly</span>
          <img src={assets.Tag} alt="" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Starter Plan */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h2 className="text-red-500 font-bold text-lg">STARTER</h2>
            <p className="text-4xl font-bold mt-4 mb-2">
              $17 <span className="text-lg font-normal">/ month</span>
            </p>
            <p className="text-gray-500 mb-4">billed monthly</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Commercial License
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> 100+ HTML UI Elements
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Unlimited Domain Support
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">✖</span> 6 Month Premium Support
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">✖</span> Life Time Updates
              </li>
            </ul>
            <button className="bg-red-100 text-red-500 px-4 py-2 w-full rounded-md font-bold">
              Get Started →
            </button>
            <p className="text-gray-400 text-sm mt-2 text-center">No credit card required</p>
          </div>

          {/* Premium Plan */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h2 className="text-red-500 font-bold text-lg">PREMIUM</h2>
            <p className="text-4xl font-bold mt-4 mb-2">
              $88 <span className="text-lg font-normal">/ month</span>
            </p>
            <p className="text-gray-500 mb-4">billed monthly</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Commercial License
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> 100+ HTML UI Elements
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Unlimited Domain Support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> 6 Month Premium Support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Life Time Updates
              </li>
            </ul>
            <button className="bg-red-100 text-red-500 px-4 py-2 w-full rounded-md font-bold">
              Get Started →
            </button>
            <p className="text-gray-400 text-sm mt-2 text-center">No credit card required</p>
          </div>
        </div>

        {/* Additional Link */}
        <div className="text-center mt-8">
          <a href="#" className="text-blue-400 underline">
            Explore In-Depth Differences
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameFour;
