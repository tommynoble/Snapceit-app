// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8"
      style={{
        background: 'var(--Good-Combination, linear-gradient(114deg, #DA53F0 30.63%, rgba(188, 47, 182, 0.82) 51.73%, #9E1588 75.17%))',
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        Welcome to Snapceit
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-xl">
        Easily scan and manage your receipts with our simple and intuitive app.
      </p>
      
      {/* Button Container */}
      <div className="flex space-x-4">
        {/* Get Started Button */}
        <button className="bg-white text-[#0986CC] py-3 px-6 rounded hover:bg-gray-200 transition">
          Get Started
        </button>
        {/* Login Button */}
        <button className="border-2 border-[#0986CC] text-white py-3 px-6 rounded hover:bg-[#0986CC] hover:text-white transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
