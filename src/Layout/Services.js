import React from 'react';
import {
  colClasses,
  lightHrStyles,
  servicesColStyles,
  servicesContentClasses,
  servicesContentStyles,
  servicesRowStyles,
  titleClasses,
  rowClasses,
  servicesH1Classes,
  servicesH3Classes,
  servicesHOOClasses,
  servicesHOOStyles
} from '../styles';

const Services = () => {
  return (
    <>
      <div
        className={rowClasses}
        id="services"
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
      <div
        className={rowClasses}
        style={servicesHOOStyles}
      >
        <div
          className={servicesHOOClasses}
          style={servicesColStyles}
        >
          <h1 className={servicesH1Classes}>Hours of Operation</h1>
          <ul>
            <li>M - F, 8 AM - 6 PM</li>
            <li>Sat, 9 AM - 2 PM</li>
            <li>Sun, CLOSED</li>
          </ul>
        </div>
      </div>
      <div
        className={rowClasses}
        style={servicesContentStyles}
      >
        <div
          className={servicesContentClasses}
          style={servicesColStyles}
        >
          <h1 className={servicesH1Classes}>Pricing</h1>
          <h2>Nitrogen Tire Services</h2>
          <p>All services include a full quality tire inspection with tread depth measurement.</p>
          <p><strong>Note: </strong>Will not service any tire wth less than 3/32" tread depth based on industry and Federal safety standards.</p>
          <h3 className={servicesH3Classes}>Purge and Fill</h3>
          <p>Complete purge of tire air and refill with pure N<sub>2</sub>.</p>
          <ul>
            <li>$42/tire</li>
            <li>Spare tire 50% off with complete purge and fill.</li>
          </ul>
          <h3 className={servicesH3Classes}>Top Off</h3>
          <ul>
            <li>0 - 10 PSI: $12</li>
            <li>11 - 20 PSI: $14</li>
            <li>20+ PSI: $16</li>
          </ul>
        </div>
        <div
          className={servicesContentClasses}
          style={servicesColStyles}
        >
          <h3 className={servicesH3Classes}>Nitrogen Shock Top Off/Fill</h3>
          <ul>
            <li>$10/shock</li>
          </ul>
          <h3 className={servicesH3Classes}>Valve Stem Repair/Replacement</h3>
          <ul>
            <li>Metal: $9</li>
            <li>Rubber: $5</li>
          </ul>
          <p><strong>Note:</strong> Only available for vehicles that do not come equipped with TPMS sensors. Does not include N<sub>2</sub> fill.</p>
          <h3 className={servicesH3Classes}>TMPS Replacement</h3>
          <ul>
            <li>Flat rate: $175 (includes N<sub>2</sub> fill)</li>
          </ul>
          <p>Replacement and reprogramming of TPMS sensors to both 315 and 433 MHz. Compatible with 98% of vehicles on the road.</p>
          <p>Flat rate includes all labor, reprogramming / re-learning to your vehicle's specific ECU. DOES NOT include tax for sensors.</p>
          <p><strong>Note:</strong> Will perform OEM sensor replacement, but requires special order at dealer plus service/installation charge of $140 including N<sub>2</sub> fill and sensor programming.</p>
        </div>
      </div>
    </>
  )
};

export default Services;