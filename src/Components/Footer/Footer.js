import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-main">
        <div className="footer-top">
      <div className="footer-left">
        <h1>Subscribe to Our Newsletter</h1>
        <div className="footer-left-form">
          <input type="text" placeholder="Enter your email here*"/>
          <button>Subscribe</button>
        </div>
        <div className="social-links"></div>
      </div>
      <div className="footer-right">
        <div className="footer-right-links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">All News</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Advertise</Link>
        </div>
        
      </div>
      </div>

      <div className="footer-bottom">
        <p>© 2035 by TheHours. Powered and secured by Nitin</p>
      </div>
    </div>
  );
}

export default Footer;
