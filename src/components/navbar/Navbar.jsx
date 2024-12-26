// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faTshirt, faFemale, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import main_logo from '../../asset/logo.jpg'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f5fcff', height: 'calc(70px - 3px)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
        <svg 
    aria-hidden="true" 
    focusable="false" 
    data-prefix="fas" 
    data-icon="shirt" 
    className="svg-inline--fa fa-shirt fa-2x" 
    role="img"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 640 512" 
    style={{ width: '100%', maxWidth: '40px', color: 'black' }}
  >
    <path fill="black" d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path>
  </svg>


        </Link>
        {/* toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* sidebar */}
        <div
          className="sidebar offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          {/* sidebar header */}
          <div className="offcanvas-header text-white">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <svg 
    aria-hidden="true" 
    focusable="false" 
    data-prefix="fas" 
    data-icon="shirt" 
    className="svg-inline--fa fa-shirt fa-2x" 
    role="img"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 640 512" 
    style={{ width: '100%', maxWidth: '90px', color: 'black' }}
  >
    <path fill="black" d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path>
  </svg>


            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          {/* sidebar body */}
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-lg-0">
            <ul className="navbar-nav justify-content-center align-item-center flex-grow-1 p-3">
              <li className="nav-item mx-2">
                <Link className="nav-link  " to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/offer">
                  Offers
                </Link>
              </li>
             
              {/* ... other menu items ... */}
            </ul>
            
            {/* email and contact */}
            <div className='d-flex justify-content-start align-items-center'>
              <ul className="list-unstyled mb-0">
                <li className="nav-item mx-2  d-flex align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" size={20} color="black" />
                  <a href="mailto:colthshopy.com" className="nav-link " color="black" >cothshopy.com</a>
                </li>
                <li className="nav-item mx-2  d-flex align-items-center">
                  <FontAwesomeIcon icon={faPhone} className="me-2" size={20} color="black" />
                  <a href='tel:+45656576576' className="nav-link " color="black" >+91 767868767</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
