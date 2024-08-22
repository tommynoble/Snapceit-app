// src/pages/ScanReceipt.jsx
import React from 'react';

const ScanReceipt = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8"
         style={{
           background: 'var(--Good-Combination, linear-gradient(114deg, #DA53F0 30.63%, rgba(188, 47, 182, 0.82) 51.73%, #9E1588 75.17%))',
         }}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
        Scan Your Receipt
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-xl">
        Easily scan and manage your receipts with just a few taps.
      </p>
      
      {/* Receipt Upload Section */}
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <p className="text-lg text-[#0986CC] mb-4">Upload your receipt:</p>
        <input 
          type="file" 
          className="w-full p-2 border border-gray-300 rounded mb-4"
          accept="image/*"
        />
        <button className="bg-[#0986CC] text-white py-3 px-6 rounded hover:bg-[#076aa1] transition w-full">
          Upload Receipt
        </button>
      </div>
    </div>
  );
};

export default ScanReceipt;
