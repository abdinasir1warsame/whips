import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/cars").then((response) => {
      setCars(response.data);
    });
  }, []);

  return (
    <div className="all-car-section">
      <div className="container">
        {cars.length > 0 &&
          cars.map((car) => (
            <Link to={'/car/'+car._id} className="device">
            <section className="header" style={{backgroundImage: `url(http://localhost:4000/uploads/${car.photo[0]})`}}>

                <div className="info">
                  <div className="info-row">
                    <div><h2 className="price">{car.type} </h2></div>
                    <div><h2 className="price">{car.specifications.fuelType}</h2><span className="period "></span></div>
                  </div>
                  <div className="info-row">
                    <div className="rating">
                      <small>{car.seats} Seats / {car.doors} Doors</small>
                    </div>
                    <div className="rating"><small>includes 400 miles</small></div>
                    <img src="" alt="" />
                  </div>
                </div>
              </section>
              <section className="data">
                <div className="car-name"><h1 className="">{car.make}</h1><h1 className="">{car.model}</h1></div>
                <div className="car-cost"><h2>{car.daily}/day</h2> <h2>deposit:{car.deposit}</h2></div>
              </section>
              <section className="confirmation">
                <button type="button" className="main">
                  Book now
                </button>
              </section>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Cars;
