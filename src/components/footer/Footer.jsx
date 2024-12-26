import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { faMapMarkerAlt, faPhone, faEnvelope, faClock ,faTshirt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaYoutube, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-1'>
      <footer className="footer py-3 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-col">
              <div class="fotter-icon"><Link to="/">
              <FontAwesomeIcon icon={faTshirt} className="footer-icon" size="2x" />

              </Link>
              <br/>
              <h3 className="text-uppercase pt-1 ">cloth shop</h3>
              <p className='pt-1'> Your one-stop shop for all your fashion needs. Add items to your cart and shop with ease.Discover a variety of hats to complement your outfit.</p>
              </div>
              
            </div>
            <div className="col-md-3 footer-col">
              <h4 className="text-uppercase-text">Information</h4>
              <ul className="list-unstyled">
                <li><Link to="/">Categories</Link></li>
                <li><Link to="/about">Product</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/career">Offer</Link></li>
               
              </ul>
            </div>
            <div className="col-md-3 footer-col">
              <h4 className="text-uppercase-text">Contact Us</h4>
              <ul className="list-unstyled">
                <li>
                  <span className='side-icon'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' /></span>
                  Office No 23 ,sainath colony</li>
                <li>Kolhapur 416003 Maharashtra, India</li>
                <li>
                  <span className='side-icon'>
                    <FontAwesomeIcon icon={faEnvelope} className='me-2'></FontAwesomeIcon>
                  </span>
                  Email:<a href="mailto:colthshopy.com">clothshopy.com</a></li>
                <li>
                  <span className='side-icon'>
                    <FontAwesomeIcon icon={faPhone} className='me-2'></FontAwesomeIcon>
                  </span>
                  Phone:<a href="tel:+767868767">+91 767868767</a></li>
              </ul>
            </div>
            
            <div className="col-md-3 footer-col">
              <h4 className="text-uppercase-text">Follow Us</h4>
              <ul className='list-unstyled'>
                <li>
                  <span className='side-icon'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' /></span>
                  4024 s 76th East Ave E
                  <br />Tulsa ,Ok 74145</li>
              </ul>

              <div className="social-links">
                <a href='https://www.facebook.com/noitavonneindia' target='_blank'><FaFacebook /></a>
                <a href='https://www.instagram.com/noitavonneindia/' target='_blank'><FaInstagram /></a>
                <a href='https://www.linkedin.com/company/noitavonne-india/about/' target='_blank'><FaLinkedin /></a>
                <a href='https://www.youtube.com/@NoitavonneIndia' target='_blank'><FaYoutube /></a>
              </div>
            </div>
          </div>
          <div className="row row-1">
            <div className="col">
              <h6 className="text-white d-flex justify-content-center align-item-center copy-right">&copy;2024 Cloth Shopy. All Rights Reserved</h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
