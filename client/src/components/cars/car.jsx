import React from "react";
import "./cars.css"


const Car = () => {
    return(
        <div className="device">
        <section className="header">
        
          <div className="info">
            <div className="info-row">
             <div><h2 className="price">Saloon </h2></div>
              
       
              <div> <h2 className="price">Petrol</h2>
              <span className="period "></span></div>
             
            </div>
            <div className="info-row">
              <div className="rating">
                <small>5 Seats / 5 doors</small>
         
                {/* <div className="mark">5.0</div> */}
              </div>
              <div className="rating"><small>includes 400 miles</small></div>
              
            </div>
        
          </div>
        </section>
        
        <section className="data">
          <div className="car-name"><h1 className="">bmw</h1><h1 className="">3 series</h1></div>
          <div className="car-cost"><h2>£100/day</h2> <h2>deposit:£600</h2></div>

        </section>
        
        <section className="confirmation">
          
          <button type="button" className="main">Book now</button>
        </section>
      </div>
    )
}

export default Car