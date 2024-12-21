import React from 'react';

const Table = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Column 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-sm font-bold mb-2">Contact Info</h2>
            <p className="text-2xl font-semibold text-Black-600">We are always happy to assist you</p>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-2">Email Address</h3>
            <p className="font-medium mb-4">Support@RMax.com</p>
            <h3 className="text-lg font-bold mb-2">Assistance Hours</h3>
            <p className="font-medium">Monday - Friday 6 am to 8 pm EST</p>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-2">Contact Number</h3>
            <p className="font-medium mb-4">+91-8657491236</p>
            <h3 className="text-lg font-bold mb-2">Assistance Hours</h3>
            <p className="font-medium">Monday - Friday 6 am to 8 pm EST</p>
          </div>

        </div>
        {/* Reduced spacing below the table */}
        <div className="mt-1"></div>
      </div>
    </div>
  );
};

export default Table;
