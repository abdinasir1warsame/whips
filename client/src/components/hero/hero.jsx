import React, { useState, useEffect } from "react";
// import Tesla from "../../assets/car-images/tesla.png"
// import Audi from "../../assets/car-images/audi.png"
// import CClass from "../../assets/car-images/c-class.png"
// import Bmw from "../../assets/car-images/3-series.png"


import Bmw5series from "../../assets/car-images/5 series.png"
import Jaguar from "../../assets/car-images/jaguar.png"
import Tesla from "../../assets/car-images/tesla.png"

import Audi from "../../assets/car-images/audi-etron.png"
import Toyota from "../../assets/car-images/toyota.png"




import "./hero.css";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageArray] = useState([
    
Jaguar,
Audi,
Bmw5series,
Jaguar,
Audi,
Bmw5series,
Jaguar,
Audi,
Bmw5series,



  ]);

  const showSlide = (index) => {
    const slider = document.getElementById("slider");
    const newPosition = -index * 100 + "%";
    slider.style.transform = "translateX(" + newPosition + ")";
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex]); // Update slide when currentIndex changes

  return (
    <div>


      <section className="main-section">
        <div className="text-section block">
        <h1 className="banner-title">Whips Car Hire</h1>
<h3 className="subheader">Your Reliable Rental Solution</h3>
<p>Discover reliable and affordable car rentals at Whips Car Hire. With a diverse selection of vehicles, transparent pricing, and exceptional service, we make renting a car easy. Experience the freedom of the open road today.</p>

          <a href="#">Join today</a>
          <div className="slot-buttons">
            <a href="#">Explore</a>
            <a href="#">Let's Drive</a>
          </div>
        </div>
        <div className="img-container block">
          <div className="slider-container">
            <div className="slider" id="slider">
              {imageArray.map((imageUrl, index) => (
                <div className="slide" key={index}>
                  <img src={imageUrl} alt="Slider Image" className="image" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Hero;
