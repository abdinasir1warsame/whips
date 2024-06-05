import React from "react";
import "./cars.css"


const Car = () => {
    return(
      <div className="device">
      <section className="header" >

          <div className="info">
            <div className="info-row">
              <div><h2 className="price">saloon</h2></div>
              <div><h2 className="price">petrol</h2><span className="period "></span></div>
            </div>
            <div className="info-row">
              <div className="rating">
                <small>5 Seats / 5 Doors</small>
              </div>
              <div className="rating"><small>includes 400 miles</small></div>
              <img src="" alt="" />
            </div>
          </div>
        </section>
        <section className="data">
          <div className="car-name"><h1 className="">BMW </h1><h1 className="">3 series</h1></div>
          <div className="car-cost"><h2>£300/day</h2> <h2>deposit:£700</h2></div>
        </section>
        <section className="confirmation">
          
          <button type="button" className="main">Book now</button>
        </section>
      </div>
    )
}

export default Car