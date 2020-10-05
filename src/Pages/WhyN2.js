import React from 'react';
import photo from '../Images/why_n2.jpeg';

const WhyN2 = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center my-5">
        <div className="col-md-8">
          <h1>Why N<sub>2</sub>?</h1>
          <hr />
          <img className="img-fluid mb-3" src={photo} alt="" />
          <p>
            Properly inflated tires are a critical component of your vehicle. They translate engine power to the road, keep you safe in all conditions, and even affect your fuel economy. In other words, under-inflated tires affect every aspect of your driving experience.
          </p>
          <p>
            So why use N<sub>2</sub>? Simply put: if tire performance and safety are important to you, nitrogen is the only way to go.
          </p>
          <ul>
            <li>
              N<sub>2</sub>-filled tires lose pressure a <a href="https://cen.acs.org/articles/84/i3/Inflating-tires-nitrogen.html">full 40% slower</a> than atmospheric air.
            </li>
            <li>
              Oxygen (found in atmospheric air) reacts with tire rubber as it permeates the surface, leading to thermo-oxidative material degredation.
            </li>
            <li>
              Tires filled with atmospheric air contain water vapor, which can cause large changes in pressure with varying temperatures, as well as corrosion of steel and aluminum wheels.
            </li>
            <li>
              For performance drivers, N2 provides more consistent pressure as tires heat up, leading to more accurate handling.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhyN2;