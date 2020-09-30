import React from 'react';
import {
  bookingColStyles,
  bookingRowStyles, 
  colClasses,
  lightHrStyles,
  rowClasses,
  titleClasses
} from '../styles';

const Booking = () => {
  return (
    <div
      className={rowClasses}
      id="booking"
      style={bookingRowStyles}
    >
      <div
        className={colClasses}
        style={bookingColStyles}
      >
        <h1 className={titleClasses}>SCHEDULE SERVICE</h1>
        <hr style={lightHrStyles} />
      </div>
    </div>
  )
};

export default Booking;
