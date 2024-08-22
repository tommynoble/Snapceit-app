// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Receipt Scanning App</h1>
      <p>Scan your receipts and keep track of your spending!</p>
      <nav>
        <ul>
          <li><Link to="/scan">Scan Receipt</Link></li>
          <li><Link to="/history">View Receipt History</Link></li>
          <li><Link to="/dashboard">Go to Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
