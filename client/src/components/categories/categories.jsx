import React from "react";
import MercedesLogo from "../../assets/nav-images/mercedes-logo.png"
import Aston from "../../assets/car-images/aston.avif"
import NissanLogo from "../../assets/nav-images/nissan-logo.png"
import ToyotaLogo from "../../assets/nav-images/toyota-logo.png"
import LandroverLogo from "../../assets/nav-images/landrover-logo.png"
import AudiLogo from "../../assets/nav-images/audi-logo.png"
import fourByFour from '../../assets/nav-images/bmw-x5.avif'
import Luxury from '../../assets/nav-images/luxury.avif'
import SportCar from '../../assets/nav-images/sports-car.avif'
import HatchBack from '../../assets/car-images/hatch.jpg'

import "./categories.css"


const Categories = () => {
    return (
      
                    <div className="category-section">

 <div className="category-container">

  <div className="type-row">
    <div className="card-category">
      <img src={fourByFour} alt="Mercedes"/>
      <div className="overlay">4 x 4</div>
    </div>
    <div className="card-category">
    <img src={Aston} alt="Mercedes"/>
      <div className="overlay">Luxury</div>
    </div>
    <div className="card-category">
    <img src={SportCar} alt="Mercedes"/>
      <div className="overlay">Sports Car</div>
    </div>
    <div className="card-category">
    <img src={HatchBack} alt="Mercedes"/>
      <div className="overlay">Hatchback</div>
    </div>
  </div>

  <div className="brand-row">
    <div className="card-category">
      <img src={AudiLogo} alt="Mercedes"/>
      <div className="overlay">Mercedes</div>
    </div>
    <div className="card-category">
    <img src={LandroverLogo} alt="Mercedes"/>
      <div className="overlay">BMW</div>
    </div>
    <div className="card-category">
    <img src={AudiLogo} alt="Mercedes"/>
      <div className="overlay">Audi</div>
    </div>
    <div className="card-category">
    <img src={NissanLogo} alt="Mercedes"/>
      <div className="overlay">Toyota</div>
    </div>
    
  </div>

</div> 
   
</div>
       
  
 
      
    )
}

export default Categories