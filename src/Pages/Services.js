import React from 'react';
import photo1 from '../Images/services-1.jpeg';
import photo2 from '../Images/services-2.jpeg';

const Services = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h1 id="pricing">Pricing</h1>
          <hr />
          <img
            alt=""
            className="img-fluid mb-3"
            src={photo1}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h4>
            <a href="#purge-and-fill">
              Purge and Fill
            </a>
          </h4>
          <ul>
            <li>$42/tire</li>
          </ul>
          <h4>Top Off</h4>
          <ul>
            <li>0 - 10 PSI: $12</li>
            <li>11 - 20 PSI: $14</li>
            <li>20+ PSI: $16</li>
          </ul>
          <h4>Nitrogen Shock Top Off/Fill</h4>
          <ul>
            <li>$10/shock</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>
            <a href="#valve-stem-repair">
              Valve Stem Repair/Replacement
            </a>
          </h4>
          <ul>
            <li>Metal $9</li>
            <li>Rubber: $5</li>
          </ul>
          <h4>
            <a href="#tpms-replacement">
              TPMS Replacement
            </a>
          </h4>
          <ul>
            <li>Flat rate: $175 (includes N<sub>2</sub> fill)</li>
          </ul>
        </div>
      </div>
      <div id="details" className="row justify-content-center">
        <div className="col-md-8 mt-5">
          <h1>Services</h1>
          <hr />
          <img
            alt=""
            className="img-fluid mb-3 w-100"
            src={photo2}
          />
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-md-4 mr-2 mt-2">
          <h4 id="tpms-replacement">TPMS Replacement</h4>
          <p>
            Replacement and reprogramming of TPMS sensors to both 315 and 433 MHz. Compatible with 98% of vehicles on the road.
          </p>
          <p>
            Flat rate includes all labor, reprogramming / re-learning to your vehicle's specific ECU. DOES NOT include tax for sensors.
          </p>
          <p>
            <strong>Note:</strong> Will perform OEM sensor replacement, but requires special order at dealer plus service/installation charge of $140 including N2 fill and sensor programming.
          </p>
        </div>
        <div className="col-md-4">
          <h4 id="purge-and-fill">Purge and Fill</h4>
          <p>
            Complete purge of tire air and refill with pure N<sub>2</sub>.
          </p>
          <h4 id="valve-stem-repair">Valve Stem Repair/Replacement</h4>
          <p>
            Only available for vehicles that do not come equipped with TPMS sensors. Does not include N<sub>2</sub>fill.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services;