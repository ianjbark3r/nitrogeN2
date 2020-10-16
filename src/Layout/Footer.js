import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../Images/dark-logo.png';
import lock from '../Images/lock.png'
import payments from '../Images/payments.png';
import contactlessIcon from '../Images/contactless-icon.png';

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#EFEFEF"}}>
      <div className="row p-4">
        <div className="col-md-auto">
          <p><strong>SOCIAL</strong></p>
          <p><a href="https://www.facebook.com/Nitrogen2-110168524188309/">Facebook</a></p>
          <p><a href="https://www.instagram.com/nitrogen2141/">Instagram</a></p>
        </div>
        <div className="col-md-auto">
          <p><strong>LEGAL</strong></p>
          <p>
            <Link to="/tos#top">Terms of Use</Link>
          </p>
          <p>
            <Link to="/privacy#top">Privacy Policy</Link>
          </p>
        </div>
        <div className="col-md-auto">
          <p><strong>HOURS</strong></p>
          <p>M - F, 8AM - 6PM</p>
          <p>Sat, 9AM - 2PM</p>
          <p>Sun, CLOSED</p>
        </div>
        <div className="col-md-auto">
          <p><strong>CONTACT US</strong></p>
          <p>Phone: (737) 224-2718</p>
          <p>Email: c.elliott@nitrogeN2.com</p>
        </div>
        <div className="col-md-auto">
          <img className="img" src={payments} style={{width: "200px"}} alt="" />
          <img
            alt="pr-3"
            className="img"
            height="30"
            src={contactlessIcon}
          />          
        </div>
        <div className="col-auto ml-auto d-none d-md-block">
          <hr />
          <img
            alt=""
            src={logo}
            height="40"
            className="my-2"
          />
          <p className="text-right">
            
            <img
              alt="pr-3"
              className="img pr-1"
              height="15"
              src={lock}
            />
            &#169; nitrogeN<sub>2</sub> Corp.
          </p>
          <p className="text-right" style={{marginTop:"-1rem"}}>2020, All Rights Reserved</p>
        </div>
        <div className="col-auto d-block d-md-none">
          <hr />
          <img 
            alt="" 
            src={logo} 
            height="40" 
            className="my-2" 
          />
          <p>
            <img 
              alt="" 
              className="img pr-1" 
              height="15px" 
              src={lock} 
            />
              &#169; nitrogeN<sub>2</sub> Corp.
            </p>
          <p className="" style={{ marginTop: "-1rem" }}>2020, All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;