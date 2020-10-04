/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../Images/logo.png';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" ariaControls="navbarSupportedContent" 
        ariaExpanded="false" 
        ariaLabel="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="navbar-brand" href="#">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a 
              className="navbar-brand dropdown-toggle" 
              href="#" 
              id="navbarDropdownMenuLink1" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
              About Us
          </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
              <a className="dropdown-item" href="#">What We Do</a>
              <a className="dropdown-item" href="#">Leadership</a>
              <a className="dropdown-item" href="#">Contact Us</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#">
              Why N<sub>2</sub>?
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="navbar-brand dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Services
          </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
              <a className="dropdown-item" href="#">Pricing</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#">
              Schedule Now
            </a>
          </li>
        </ul>
        <span className="navbar-text mr-4">
          Redefining Tire Safety and Performance
        </span>
      </div>
      <a className="navbar-brand" href="#">
        <img src={logo} height="50" className="d-inline-block align-top" alt="" />
      </a>
    </nav>
  )
}

export default Nav;