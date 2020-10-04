import React from 'react';
import logo from '../Images/dark-logo.png';

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#EFEFEF"}}>
      <div className="row p-4">
        <div className="col-md-auto">
          <p><strong>SOCIAL</strong></p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="col-md-auto">
          <p><strong>LEGAL</strong></p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
        <div className="col-md-auto">
          <p><strong>HOURS</strong></p>
          <p>M - F, 8AM - 6PM</p>
          <p>Sat, 9AM - 2PM</p>
          <p>Sun, CLOSED</p>
        </div>
        <div className="col-md-auto">
          <p><strong>CONTACT US</strong></p>
          <p>Phone: 512-667-9545</p>
          <p>Email: cody@nitrogeN2.com</p>
        </div>
        <div className="col-auto ml-auto d-none d-md-block">
          <hr />
          <img src={logo} height="40" className="" alt="" />
          <p className="text-right">&#169; nitrogeN<sub>2</sub> Corp.</p>
          <p className="text-right" style={{marginTop:"-1rem"}}>2020, All Rights Reserved</p>
        </div>
        <div className="col-auto d-block d-md-none">
          <hr />
          <img src={logo} height="40" className="my-2" alt="" />
          <p>&#169; nitrogeN<sub>2</sub> Corp.</p>
          <p className="" style={{ marginTop: "-1rem" }}>2020, All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;