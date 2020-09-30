import React from 'react';
import { 
  colClasses, 
  footerColStyles, 
  footerRowStyles, 
  rowClasses 
} from '../styles';

const Footer = () => {
  return (
    <div 
      className={rowClasses} 
      style={footerRowStyles}
    >
      <div 
        className={colClasses} 
        style={footerColStyles}
      >
        COPYRIGHT 2020
      </div>
    </div>
  )
};

export default Footer;