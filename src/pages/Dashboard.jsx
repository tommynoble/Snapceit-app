// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js

const Dashboard = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Data for the graph
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Receipts Scanned',
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Spending ($)',
        data: [300, 500, 100, 200, 150, 250, 400],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the graph
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Header with Hamburger Menu */}
      <div className="p-4 md:hidden flex justify-between items-center bg-white shadow fixed top-0 left-0 right-0 z-10">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        <button
          className="text-gray-800 focus:outline-none"
          onClick={toggleSidebar}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Main Content with adjusted padding to account for fixed header */}
      <div className="flex-grow mt-16 md:mt-0 mr-0 md:mr-48">
        {/* Top Section */}
        <div
          className="flex justify-center items-center"
          style={{
            background: 'var(--Good-Combination, linear-gradient(114deg, #DA53F0 30.63%, rgba(188, 47, 182, 0.82) 51.73%, #9E1588 75.17%))',
          }}
        >
          <div className="w-full max-w-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Welcome, Tom!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              You have scanned a total of <strong>$10,000</strong> worth of receipts.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex-grow bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Dashboard Overview
            </h2>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Scan Receipt */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transition cursor-pointer">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Scan Receipt</h3>
                <p className="text-lg text-gray-600">
                  Quickly scan and upload your receipts to track your expenses.
                </p>
              </div>

              {/* Receipt History */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transition cursor-pointer">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Receipt History</h3>
                <p className="text-lg text-gray-600">
                  View all your previously scanned receipts and analyze your spending.
                </p>
              </div>

              {/* Monthly Spend */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Spend</h3>
                <p className="text-lg text-gray-600">This month: $2,500</p>
              </div>

              {/* Total Receipts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Total Receipts</h3>
                <p className="text-lg text-gray-600">Total: 50 receipts</p>
              </div>
            </div>

            {/* Graph Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Receipts and Spending</h2>
              <div>
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block w-48 bg-white shadow-lg flex flex-col justify-between p-4 fixed md:relative right-0 top-16 md:top-0 z-10`}
      >
        <div>
          <div className="flex items-center mb-6">
            <img
              src="https://via.placeholder.com/150" // Placeholder for user avatar
              alt="User Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-800">Tom</h2>
              <p className="text-gray-600 text-sm">User Info</p>
            </div>
          </div>

          <nav className="flex flex-col space-y-3">
            <a href="/dashboard" className="text-gray-700 hover:text-[#0986CC] text-sm">
              Dashboard
            </a>
            <a href="/scan" className="text-gray-700 hover:text-[#0986CC] text-sm">
              Scan Receipt
            </a>
            <a href="/history" className="text-gray-700 hover:text-[#0986CC] text-sm">
              Receipt History
            </a>
            <a href="/settings" className="text-gray-700 hover:text-[#0986CC] text-sm">
              Settings
            </a>
          </nav>
        </div>

        <div className="text-gray-600 text-xs">
          <p className="text-sm">Last Login:</p>
          <p>August 20, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
