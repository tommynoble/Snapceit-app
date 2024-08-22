// src/pages/ScanReceipt.jsx
import React from 'react';

const ScanReceipt = () => {
  return (
    <div>
      <h1>Scan Your Receipt</h1>
      <p>Use your device camera or upload an image of your receipt.</p>
      <button>Open Camera (Placeholder)</button>
      <input type="file" accept="image/*" />
      <p>After scanning, you will see the extracted details here.</p>
    </div>
  );
};

export default ScanReceipt;
