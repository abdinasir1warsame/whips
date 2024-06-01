import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./mycars.css";
import AccountNav from "../accounts/accountNav";

const MyCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/cars').then(({ data }) => {
      setCars(data);
    });
  }, []);

  // useEffect(() => {
  //   // Create a style element
  //   const styleElement = document.createElement('style');

  //   // Generate CSS for each car to set the background image of the ::before pseudo-element
  //   const styles = cars.map((car, index) => `
  //     .my-cars-section:nth-child(${index + 1}) .headers::before {
  //       background-image: url(http://localhost:4000/uploads/${car.photo[0]});
  //     }
  //   `).join('');

  //   // Set the generated CSS to the style element
  //   styleElement.innerHTML = styles;
  //   document.head.appendChild(styleElement);

  //   // Cleanup: remove the style element when the component unmounts or cars change
  //   return () => {
  //     document.head.removeChild(styleElement);
  //   };
  // }, [cars]);

  return (
    <div>
      <AccountNav />
      <div className="text-center mt-5">
        <Link className="inline-flex gap-1 bg-blue-300 text-white py-2 px-6 rounded-full" to={'/account/cars/new'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add new car
        </Link>
      </div>
      <div className="my-cars-section">
      <div className="my-cars-container">
        {cars.map((car, index) => (
          <Link to={'/account/cars/'+car._id} className="my-cars-section" key={car.id}>
            <div className="device">
            <section className="headers" style={{backgroundImage: `url(http://localhost:4000/uploads/${car.photo[0]})`}}>

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
              <section className="car-data">
                <div className="car-name"><h1 className="">{car.make}</h1><h1 className="">{car.model}</h1></div>
                <div className="car-cost"><h2>{car.daily}/day</h2> <h2>deposit:{car.deposit}</h2></div>
              </section>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default MyCars;
