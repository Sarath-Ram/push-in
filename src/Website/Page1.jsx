import React, { useState } from 'react';
import '../Website/Page1.css';

const Page1 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className='btn-cls'>
      <button className='home'>Home</button>
      <button className='abt'>About Us</button>
      <button className='awd'>ENTER THE CREATIVE RETAIL AWARDS</button>
      
        <div 
            className='partners-container' 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <button className='partners'>Partners <span className="sub-arrow">▼</span></button>
            {showDropdown && (
            <ul className='dropdown1'>
                <li>Headline Sponsors</li>
                <li>Sponsors</li>
                <li>Sponsorship Options</li>
                <li>Media Partners</li>
            </ul>
            )}
        </div>
      
        <button className='news'>News</button>
        <button className='contact'>Contact Us</button>
      <div className='content'>
        <h1 className='first'>CREATIVE RETAIL</h1>
        <h1 className='second'>AWARDS 25</h1>
        <h3>NOW OPEN FOR ENTRIES</h3>
        <p>
          Join the excitement and prestige of the Creative Retail Awards, the <br></br>
          ultimate celebration of innovation and excellence in retail, leisure  <br></br>
          and hospitality design, offering unparalleled opportunities for  <br></br>
          recognition, networking and celebration.
        </p>
      </div>
    </div>
  );
};

export default Page1;
