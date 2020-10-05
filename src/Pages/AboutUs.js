import React from 'react';

import photo1 from '../Images/about_us-1.jpeg'
import photo2 from '../Images/about_us-2.jpeg'

const AboutUs = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center my-5">
        <div className="col-md-8">
          <h1 id="what-we-do">What We Do</h1>
          <hr />
          <img 
            alt="" 
            className="img-fluid mb-3" 
            src={photo1} 
          />
          <p>
            We are a local Veteran-owned and operated company providing convenient mobile nitrogen tire services. We are dedicated to upholding the highest level of quality customer service, professionalism, and safety in the greater Austin community!
          </p>
          <h1 id="leadership">Leadership</h1>
          <hr />
          <p>Lorem ipsum.</p>
          <h1 id="contact">Contact Us</h1>
          <hr />
          <p>Phone: XXX-XXX-XXXX</p>
          <p>Email: XXXX@nitrogeN2.com</p>
          <h1 id="bio">Bio</h1>
          <hr />
          <img 
            alt="" 
            className="img-fluid mb-3" 
            src={photo2} 
          />
          <p>
            Lorem ipsum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;