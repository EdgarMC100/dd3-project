import React from 'react'
import wheat from '@images/wheat.png';
import shape from '@images/Shape.png';
import "@styles/Logo.scss"
const Logo = () => {
  return (
    <div className="logo">
      <img className="icon" src={wheat} alt="wheat image" />
      <img className="company-name" src={shape} alt="logo part" />
    </div>
  );
}

export default Logo;
