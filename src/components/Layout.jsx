// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/scan">Scan Receipt</Link></li>
          <li><Link to="/history">Receipt History</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
