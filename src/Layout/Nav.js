/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../Images/logo-dark.png';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              aria-expanded="false"
            >
              About Us
          </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
              <Link className="dropdown-item" to="/about#what-we-do">What We Do</Link>
              <Link className="dropdown-item" to="/about#leadership">Leadership</Link>
              <Link className="dropdown-item" to="/about#contact">Contact Us</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="navbar-brand dropdown-toggle"
              to="/why_n2"
              id="navbarDropdownMenuLink2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Why N<sub>2</sub>?
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
              <Link className="dropdown-item" to="/why_n2">Why N<sub>2</sub>?</Link>
              <Link className="dropdown-item" to="/why_n2#tire-safety">Tire Safety</Link>
            </div>
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
            <a 
              className="navbar-brand"
              href="https://squareup.com/appointments/buyer/widget/hq979sx173c049/LPMDYR6M8CT8K"
              style={{
                backgroundColor: "#0457a7", 
                color: "white", 
                height: "40px",
                textTransform: "uppercase",
                fontFamily: `'Square Market', 'helvetica neue', helvetica, arial, sans-serif`,
                letterSpacing: "1px",
                lineHeight: "38px", 
                padding: "0 28px", 
                borderRadius: "3px",
                fontWeight: "500", 
                fontSize: "14px", 
                cursor: "pointer", 
                display: "inline-block"
                }}
              >
                Schedule Now
            </a>
          </li>
        </ul>
        <span className="navbar-text mr-4">
          <em>Redefining Tire Safety and Performance</em>
        </span>
      </div>
      <Link className="navbar-brand" to="/">
        <img src={logo} height="50" className="d-inline-block align-top" alt="" />
      </Link>
    </nav>
  )
}

export default Nav;