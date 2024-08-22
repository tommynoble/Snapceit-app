// src/pages/ReceiptHistory.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ReceiptHistory = () => {
  return (
    <div>
      <h1>Receipt History</h1>
      <ul>
        <li>
          <Link to="/receipt/1">Receipt #1 - $50.00</Link>
        </li>
        <li>
          <Link to="/receipt/2">Receipt #2 - $75.00</Link>
        </li>
        <li>
          <Link to="/receipt/3">Receipt #3 - $20.00</Link>
        </li>
        {/* More receipts will be listed here dynamically */}
      </ul>
    </div>
  );
};

export default ReceiptHistory;
