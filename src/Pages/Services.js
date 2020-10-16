import React from 'react';
import photo2 from '../Images/services-2.jpeg';
import pricing from '../Images/pricing.png';

const linkStyles = {
  textDecoration: "none",
  color: "#000"
}

const Services = () => {
  return (
    <div className="container-fluid">
      <div id="details" className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h1>Services</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mr-2 mt-2 d-block d-md-none">
          <img
            alt=""
            className="img-fluid mb-3 w-100"
            src={photo2}
          />
        </div>
        <div className="col-md-4">
          <h4>
            <a href="#pricing" style={linkStyles}>Nitrogen Top-Off</a>
          </h4>
          <p>
            Nitrogen getting low? Our mobile N<sub>2</sub> top-off service will quickly refill your tires with pure nitrogen to the proper inflation pressure (accurate up to + 0.1 psi). Includes a multi-point vehicle tire safety inspection with tread
            depth measurement.
          </p>
          <p>
            Prices listed for this service are per tire and are based on how many pounds per square inch (psi) are needed for each tire’s full and proper inflation per your vehicle manufacturer’s recommendations. Custom psi inflation is available upon request.
          </p>
          <h4>
            <a href="#pricing" style={linkStyles}>
              Full Tire Purge and Fill
            </a>
          </h4>
          <p>
            Ready to level up your tires? Our purge and fill service will quickly and completely purge the existing air from your tires and refill them with pure nitrogen. Includes a multi-point vehicle tire safety inspection with tread depth measurement.
          </p>
          <p>
            Price listed for this service is per tire. Filling all four tires? Add your spare for a full purge and fill service at half price!*
          </p>
          <p className="small"><em>*(Discount applies to spare tire only)</em></p>
          <h4>
            <a href="#pricing" style={linkStyles}>
              TPMS Replacement
            </a>
          </h4>
          <p>
            TPMS sensor not working? Our convenient mobile services can replace a faulty sensor with a new one and quickly get you back on the road with confidence!
          </p>
          <p>
            The high quality sensors we use for standard replacement are the Autel MX-Sensors, programmable to both 315 and 433 MHz. Autel sensors are compatible with 98% of vehicles on the road. We only trust the highest quality equipment.
          </p>
          <p>
            We offer Original Equipment Manufacturer (OEM) sensor replacement. *This service requires OEM TPMS sensor pre-order and payment for sensor at dealer current market price prior to scheduling an appointment.
          </p>
          <p>
            Pricing for both services includes a multi-point vehicle tire safety inspection with tread depth measurement, installation, and nitrogen fill.
          </p>
          <p className="small"><em>*Pricing for OEM TPMS sensor replacement does not include cost of sensor at dealer price.</em></p>
        </div>
        <div className="col-md-4 mr-2 mt-2">
          <img
            alt=""
            className="img-fluid mb-3 w-100 d-none d-md-block"
            src={photo2}
          />
          <h4>
            <a href="#pricing" style={linkStyles}>Valve Stem Repair/Replacement</a>
          </h4>
          <p>
            Only available for vehicles that do not come equipped with TPMS sensors. Does not include N<sub>2</sub>fill.
          </p>
          <h4>
            <a href="#pricing" style={linkStyles}>Nitrogen Shock Top-Off</a>
          </h4>
          <p>
            Performance shocks in need of some nitrogen love? Book an appointment and we can top off the N<sub>2</sub> in your shocks with our convenient mobile services.
          </p>
          <p>
            Pricing listed for this service is per shock.
          </p>
          <h4>
            <a href="#pricing" style={linkStyles}>Valve Stem Replacement</a>
          </h4>
          <p>
            Have a valve stem needing replacement? We can quickly and easily replace your leaking or dried up valve stem and get your tires rolling again.
          </p>
          <p>
            Our service uses TR413, TR418, and TR600HP standard valve stems for replacement. Pricing listed for this service does not include N<sub>2</sub> fill.
          </p>
          <p>
            This service is only available for vehicles that do not come equipped with TPMS sensors. Per the <a href="https://one.nhtsa.gov/nhtsa/announce/testimony/tread.html">National Highway Traffic Safety Administration (NHTSA) and the TREAD Act</a>, all passenger cars and light trucks (up to 10,000 lbs. Gross Vehicle Weight) made after September 01, 2007 are required to have a tire pressure monitoring system.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5 mb-2">
        <div className="col-md-8">
          <h1 id="pricing">Pricing</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 text-center">
          <img
            alt=""
            className="img-fluid"
            src={pricing}
          />
          {/* <table className="table table-borderless table-hover">
            <tbody>
              <tr id="nitrogen-top-off">
                <th className="text-center align-middle" rowspan="4">Nitrogen Top-off</th>
                <td className="text-left">0 - 10 psi</td>
                <td className="text-left">$12 per tire</td>
              </tr>
              <tr>
                <td className="text-left border-top-0">11 - 20 psi</td>
                <td className="text-left border-top-0">$14 per tire</td>
              </tr>
              <tr>
                <td className="text-left border-top-0">200+ psi</td>
                <td className="text-left border-top-0">$16 per tire</td>
              </tr>
              <tr>
                <td className="text-left small border-top-0" colspan="2">(Pricing is based on amount of pressure needed to fill)</td>
              </tr>
              <tr id="purge-and-fill">
                <th className="text-center">Full Tire Purge and Fill</th>
                <td className="text-center" colspan="2">$42 per tire</td>
              </tr>
              <tr id="tpms-replacement">
                <th className="text-center align-middle" rowspan="5">Tire Pressure Monitoring System (TPMS) Sensor Replacement</th>
                <td>
                  Autel MX Sensor
                </td>
                <td>$175 per tire</td>
              </tr>
              <tr>
                <td className="border-top-0" colspan="2">(includes sensor, installation, N<sub>2</sub> fill)</td>
              </tr>
              <tr>
                <td>OEM Sensor</td>
                <td>$145 per tire*</td>
              </tr>
              <tr>
                <td className="border-top-0" colspan="2">(includes installation, N<sub>2</sub> fill)</td>
              </tr>
              <tr>
                <td className="small border-top-0" colspan="2">
                  *does not include OEM sensor cost. Please see service description or contact us for more information.
                </td>
              </tr>
              
              <tr id="nitrogen-shock-top-off">
                <th className="text-center">Nitrogen Shock Top-Off</th>
                <td className="text-center" colspan="2">$10 per shock</td>
              </tr>
              <tr id="valve-stem-replacement">
                <th className="text-center align-middle" rowspan="2">Valve Stem Replacement</th>
                <td className="text-center" colspan="2">$8 per valve</td>
              </tr>
              <tr>
                <td className="small text-center border-top-0" colspan="2">(valve replacement only; does not include N<sub>2</sub> fill)</td>
              </tr>
              <tr>
                <th className="text-center align-middle" rowspan="2">Distance Fees</th>
                <td className="text-center">$10</td>
                <td>Lakeway, Cedar Park/Leander, Hutto, Manor, Buda</td>
              </tr>
              <tr>
                <td className="text-center">$20</td>
                <td>Georgetown, Taylor, Elgin, Bastrop, Kyle, San Marcos, Dr. Springs</td>
              </tr>
              <tr>
                <th colspan="3">NOTE: nitrogeN<sub>2</sub> cannot provide mobile services on any tire with less than 3/32" tread depth.</th>
              </tr>
              <tr className="border-bottom">
                <th colspan="3">We offer Active Duty, Veteran, and Sr. Citizen discounts. Please provide valid ID at time of appt.</th>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
      
    </div>
  )
}

export default Services;