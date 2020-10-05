/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link 
              className="navbar-brand dropdown-toggle" 
              to="/about" 
              id="navbarDropdownMenuLink1" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
              About Us
          </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
              <Link className="dropdown-item" to="/about#what-we-do">What We Do</Link>
              <Link className="dropdown-item" to="/about#leadership">Leadership</Link>
              <Link className="dropdown-item" to="/about#contact">Contact Us</Link>
              <Link className="dropdown-item" to="/about#bio">Bio</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" to="/why_n2">
              Why N<sub>2</sub>?
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="navbar-brand dropdown-toggle"
              to="/services"
              id="navbarDropdownMenuLink2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Services
          </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
              <Link className="dropdown-item" to="/services#pricing">Pricing</Link>
              <Link className="dropdown-item" to="/services#details">Services</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" to="/schedule_now">
              Schedule Now
            </Link>
          </li>
        </ul>
        <span className="navbar-text mr-4">
          Redefining Tire Safety and Performance
        </span>
      </div>
      <Link className="navbar-brand" to="/">
        <img src={logo} height="50" className="d-inline-block align-top" alt="" />
      </Link>
    </nav>
  )
}

export default Nav;