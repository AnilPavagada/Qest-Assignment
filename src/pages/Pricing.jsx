import React, { useState } from 'react';
import FrameSix from '../Components/Framesix';

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <section>
    <div>
      {/* Navbar */}
      <nav className="bg-white p-4 text-black" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-10">Flexible Plans Transparent Pricing</h1>
          <p className="text-lg mb-10">Find the Perfect Fit for You</p>
          <p
            className="text-white py-2 px-4 inline-block rounded"
            style={{ backgroundColor: '#F54F35' }}
          >
            30-days free trial with money-back guarantee.
          </p>
        </div>
      </nav>

      {/* Features Section */}
      <div className="bg-gray-50 py-10">
        <h2 className="text-center text-3xl font-bold mb-6">Compare our plans</h2>
        <div className="overflow-x-auto px-4">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Features</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Starter</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Users</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                <td className="border border-gray-300 px-4 py-2 text-center">15</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Branches</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                <td className="border border-gray-300 px-4 py-2 text-center">10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Courses</td>
                <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                <td className="border border-gray-300 px-4 py-2 text-center">15/branch</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Max. Students Allowed</td>
                <td className="border border-gray-300 px-4 py-2 text-center">25</td>
                <td className="border border-gray-300 px-4 py-2 text-center">500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Communication</td>
                <td className="border border-gray-300 px-4 py-2 text-center">25</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Bulk Updates</td>
                <td className="border border-gray-300 px-4 py-2 text-center">25</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">User Roles</td>
                <td className="border border-gray-300 px-4 py-2 text-center">25</td>
                <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            Get Started - Starter
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            Get Started - Premium
          </button>
        </div>

        <p className="text-center text-gray-500 mt-4">No credit card required</p>
      </div>
      <div className="mt-8">
              <FrameSix />
            </div>
    </div>
    </section>
  );
};

export default Pricing;
