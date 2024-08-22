// src/pages/Settings.jsx
import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
            Currency
          </label>
          <select
            id="currency"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notifications">
            Email Notifications
          </label>
          <input
            type="checkbox"
            id="notifications"
            className="mr-2 leading-tight"
          />
          <span className="text-sm">Enable</span>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="darkMode">
            Dark Mode
          </label>
          <input
            type="checkbox"
            id="darkMode"
            className="mr-2 leading-tight"
          />
          <span className="text-sm">Enable</span>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
