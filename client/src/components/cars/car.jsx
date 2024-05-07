import React from "react";
import "./cars.css"


const Car = () => {
    return(
        <div className="device">
        <section className="header">
        
          <div className="info">
            <div className="info-row">
              <h1>Audi A4</h1>
              <div> <span className="price">£60</span>
              <span className="period ">/ Daily</span></div>
             
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
          {/* <h2>Gallery</h2>
          <div className="gallery">
            <div className="pic photo1"></div>
            <div className="pic photo2"></div>
            <div className="pic photo3"></div>
            <div className="pic photo4"></div>
          </div> */}
          
          <h2>Description</h2>
          <p className="desc">We don't just rent apartments. From the moment you walk through the front door you'll feel the comfort and security that makes our residents happy to call us the best.</p>
        </section>
        
        <section className="confirmation">
          
          <button type="button" className="main">Book now</button>
        </section>
      </div>
    )
}

export default Car