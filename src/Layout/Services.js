import React from 'react';
import {
  colClasses,
  lightHrStyles,
  servicesColStyles,
  servicesRowStyles,
  titleClasses,
  rowClasses
} from '../styles';

const Services = () => {
  return (
    <div
      className={rowClasses}
      style={servicesRowStyles}
    >
      <div
        className={colClasses}
        style={servicesColStyles}
      >
        <h1 className={titleClasses}>SERVICES</h1>
        <hr style={lightHrStyles} />
      </div>
    </div>
  )
};

export default Services;