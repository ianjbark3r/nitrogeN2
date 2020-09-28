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
      style={bookingRowStyles}
    >
      <div
        className={colClasses}
        style={bookingColStyles}
      >
        <h1 className={titleClasses}>BOOK AN APPOINTMENT</h1>
        <hr style={lightHrStyles} />
      </div>
    </div>
  )
};

export default Booking;
