import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Images/lotus-flower-1805784_1280.png";
import search from "../../Images/search.png";
import fb from "../../Images/fb-blue.png";
import twitter from  '../../Images/twitter-blue.png'
import youtube from  '../../Images/you.png'


function Navbar() {
  return (
    <div className="nav-main">
      <div className="nav-content">
        <div className="nav-content-left">
          <div className="nav-content-left-logo">
            <Link to="/">
              <img src={logo} className="logo-img" />
            </Link>
          </div>
          <div className="nav-content-left-links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">All News</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Advertise</Link>
          </div>
        </div>
        <div className="nav-content-right">
          <div className="nav-search">
            <div className="nav-search-img">
              <img src={search} alt="search" />
            </div>
            <div className="nav-search-input">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="social-links">
            <a href="#">
              <img src={fb} className="social-links-fb"/>
            </a>
            <a href="#">
              <img src={twitter} className="social-links-twitter"/>
            </a>
            <a href="#">
              <img src={youtube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
