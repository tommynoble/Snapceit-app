// src/routes.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

// Lazy load the page components
const Home = lazy(() => import('./pages/Home'));
const ScanReceipt = lazy(() => import('./pages/ScanReceipt'));
const ReceiptHistory = lazy(() => import('./pages/ReceiptHistory'));
const ReceiptDetails = lazy(() => import('./pages/ReceiptDetails'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scan" element={<ScanReceipt />} />
            <Route path="/history" element={<ReceiptHistory />} />
            <Route path="/receipt/:id" element={<ReceiptDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
