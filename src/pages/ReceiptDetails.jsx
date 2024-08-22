// src/pages/ReceiptDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ReceiptDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Receipt Details - #{id}</h1>
      <p>Date: 2024-08-13</p>
      <p>Store: SuperMart</p>
      <p>Total: $50.00</p>
      <h2>Items:</h2>
      <ul>
        <li>Milk - $2.00</li>
        <li>Bread - $1.50</li>
        <li>Butter - $3.00</li>
        {/* More items will be listed here dynamically */}
      </ul>
    </div>
  );
};

export default ReceiptDetails;
