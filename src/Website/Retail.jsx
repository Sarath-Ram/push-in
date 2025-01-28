import React from 'react';
import './Retail.css';
import Page1 from './Page1';

const Retail = () => {
  return (
    <div className="bg-img">
      <div className="top">
      <img 
        src="https://creativeretailawards.com/wp-content/uploads/2023/11/CRA2025-Logo-landscape.png" 
        alt="Logo" 
        className="logo"
      />
          <Page1/>
      </div>
    </div>
  );
};

export default Retail;
