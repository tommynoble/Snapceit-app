// src/pages/ReceiptHistory.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js

const ReceiptHistory = () => {
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
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Receipt History
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Receipts and Spending</h2>
          <div>
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Receipt List</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <div>
                <p className="text-lg font-medium text-gray-800">Receipt #001</p>
                <p className="text-sm text-gray-600">Scanned on August 1, 2024</p>
              </div>
              <p className="text-lg font-bold text-[#0986CC]">$250</p>
            </li>
            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <div>
                <p className="text-lg font-medium text-gray-800">Receipt #002</p>
                <p className="text-sm text-gray-600">Scanned on August 10, 2024</p>
              </div>
              <p className="text-lg font-bold text-[#0986CC]">$150</p>
            </li>
            {/* Add more receipts here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReceiptHistory;
