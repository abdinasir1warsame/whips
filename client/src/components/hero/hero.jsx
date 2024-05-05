import React from "react";
import "./hero.css"



const Hero = () => {
    return (
        <div>    <nav className="nav">
        <i className="uil uil-bars navOpenBtn"></i>
        <a href="#" className="logo">Ride Up</a>
        <ul className="nav-links">
          <i className="uil uil-times navCloseBtn"></i>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <i className="uil uil-search search-icon" id="searchIcon"></i>
        <div className="search-box">
          <i className="uil uil-search search-icon"></i>
          <input type="text" placeholder="Search here..." />
        </div>
      </nav>
  
      <section className="main-section">
        <div className="text-section block">
          <h1>Car Rental</h1>
          <h3>Make your dreams come true , Start today</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quis obcaecati deleniti ipsum expedita a at repellendus pariatur optio
            dolorem.
          </p>
          <a href="#">Join today</a>
          <div className="slot-buttons">
            <a href="#">Explore</a>
            <a href="#">Let's Drive</a>
          </div>
        </div>
        <div className="img-container block">
          <div className="slider-container">
            <div className="slider" id="slider"></div>
          </div>
        </div>
      </section></div>
    )
}

export default Hero