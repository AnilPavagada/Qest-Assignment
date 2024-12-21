import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Business Size</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Entrepreneurs</a></li>
            <li><a href="#" className="hover:text-white">SMBs</a></li>
            <li><a href="#" className="hover:text-white">Growth Business</a></li>
            <li><a href="#" className="hover:text-white">Household Services</a></li>
            <li><a href="#" className="hover:text-white">Enterprise</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Business Type</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Health & Wellness</a></li>
            <li><a href="#" className="hover:text-white">Sports</a></li>
            <li><a href="#" className="hover:text-white">Learning Activities</a></li>
            <li><a href="#" className="hover:text-white">Household Services</a></li>
            <li><a href="#" className="hover:text-white">Miscellaneous</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Download</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white"><img src={assets.Applelogo} alt="" /> Business App</a></li>
            <li><a href="#" className="hover:text-white"><img src={assets.Logo} alt="" /> User App</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contact us</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="mailto:support@Rmax.com" className="hover:text-white">support@Rmax.com</a></li>
            <li><a href="tel:+918459671235" className="hover:text-white">+91-8459671235</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Copyright, All Rights Reserved @RMax</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white"><img src={assets.Twitter} alt="" /></a>
          <a href="#" className="hover:text-white"><img src={assets.Facebook} alt="" /></a>
          <a href="#" className="hover:text-white"><img src={assets.Instagram} alt="" /></a>
          <a href="#" className="hover:text-white"><img src={assets.Linkedin} alt="" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
