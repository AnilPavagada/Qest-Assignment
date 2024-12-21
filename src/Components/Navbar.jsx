import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  GlobeAltIcon,
  
  BriefcaseIcon,
  BookOpenIcon,
  CalendarIcon,
  CreditCardIcon,
  ChartBarIcon,
  SparklesIcon,
  InboxIcon,
  UserGroupIcon,
  AcademicCapIcon,
  StarIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline"; // Heroicons

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="absolute w-full h-[54px] top-0 left-0 flex items-center justify-between bg-white shadow-md px-8 md:px-24 rounded-b-md z-50">
      {/* Logo Section */}
      <Link to="/">
        <img
          src={assets.RMax} // Replace with the actual path to your logo
          alt="RMax Logo"
          className="w-8 h-8"
        />
      </Link>

      {/* Menu Items */}
      <ul className="hidden md:flex items-center space-x-6">
        <NavLink to="/" className="text-gray-600 hover:text-black cursor-pointer">
          <p>Home</p>
        </NavLink>

        {/* Features with Dropdown */}
        <li className="relative group">
          <button className="text-gray-600 hover:text-black cursor-pointer flex items-center">
            Features <span className="ml-1 text-sm">&#9662;</span>
          </button>
          <div className="absolute left-0 hidden w-[700px] bg-white border border-gray-200 shadow-lg group-hover:flex z-50">
            <div className="flex flex-wrap w-full p-4">
              {/* Discover Section */}
              <div className="w-1/3 mb-4">
                <h4 className="font-semibold text-gray-800">Discover</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <GlobeAltIcon className="w-5 h-5 text-gray-500" />
                    <span>Custom Branded Website</span>
                  </li>
                 {/*<li className="flex items-center space-x-2">
                    <DeviceMobileIcon className="w-5 h-5 text-gray-500" />
                    <span>User Mobile App</span>
                  </li>*/}
                  <li className="flex items-center space-x-2">
                    <BriefcaseIcon className="w-5 h-5 text-gray-500" />
                    <span>Business Webpage</span>
                  </li>
                </ul>
              </div>

              {/* Manage Section */}
              <div className="w-1/3 mb-4">
                <h4 className="font-semibold text-gray-800">Manage</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <BookOpenIcon className="w-5 h-5 text-gray-500" />
                    <span>Courses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CalendarIcon className="w-5 h-5 text-gray-500" />
                    <span>Appointments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CreditCardIcon className="w-5 h-5 text-gray-500" />
                    <span>Payments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChartBarIcon className="w-5 h-5 text-gray-500" />
                    <span>Reporting Tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SparklesIcon className="w-5 h-5 text-gray-500" />
                    <span>Events</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <InboxIcon className="w-5 h-5 text-gray-500" />
                    <span>Communication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <UserGroupIcon className="w-5 h-5 text-gray-500" />
                    <span>Staff Roles</span>
                  </li>
                </ul>
              </div>

              {/* Grow Section */}
              <div className="w-1/3 mb-4">
                <h4 className="font-semibold text-gray-800">Grow</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <StarIcon className="w-5 h-5 text-gray-500" />
                    <span>AI Marketing Tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-gray-500" />
                    <span>Social Media Integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <AcademicCapIcon className="w-5 h-5 text-gray-500" />
                    <span>CRM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* See All Features Button */}
            <div className="w-full border-t border-gray-200 flex flex-col items center p-4">
              <button className=" w-full py-2 text-center text-sm font-medium text-white bg-red-500 hover:bg-red-600">
                See all features &gt;
              </button>
              <button
    className="w-full mt-2 py-2 text-center text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-100"
    onClick={() => alert("Custom Action Button Clicked")}
  >
    Custom Action
  </button>
            </div>
          </div>
        </li>

        <NavLink to="/pricing" className="text-gray-600 hover:text-black cursor-pointer">
          <p>Pricing</p>
        </NavLink>
      
      <li className="text-gray-600 hover:text-black cursor-pointer flex items-center">
          Solutions <span className="ml-1 text-sm">&#9662;</span>
        </li>
      
        </ul>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="border border-gray-400 text-gray-600 px-4 py-1 rounded hover:bg-gray-100">
          Login
        </button>
        <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
          Try For Free
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
