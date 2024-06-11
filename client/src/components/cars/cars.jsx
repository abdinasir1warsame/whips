import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./cars.css";
import CarFilter from "./car-filter";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    make: '',
    model: '',
    price: ''
  });

  useEffect(() => {
    axios.get("/cars").then((response) => {
      setCars(response.data);
      setFilteredCars(response.data);
    });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filterCriteria, cars]);

  const applyFilters = () => {
    let filtered = [...cars]; // Clone the array to avoid direct mutation
  
    // Filter by make if selected
    if (filterCriteria.make) {
      filtered = filtered.filter(car => car.make === filterCriteria.make);
    }
  
    // Filter by model if selected
    if (filterCriteria.model) {
      filtered = filtered.filter(car => car.model === filterCriteria.model);
    }
  
    // Filter by price range if selected
    if (filterCriteria.price === "0-250") {
      filtered = filtered.filter(car => parseFloat(car.daily) >= 0 && parseFloat(car.daily) <= 250);
    } else if (filterCriteria.price === "over-250") {
      filtered = filtered.filter(car => parseFloat(car.daily) > 250);
    }
  
    // Apply price sorting after filtering
    if (filterCriteria.price === "low-to-high") {
      filtered = filtered.sort((a, b) => parseFloat(a.daily) - parseFloat(b.daily));
    } else if (filterCriteria.price === "high-to-low") {
      filtered = filtered.sort((a, b) => parseFloat(b.daily) - parseFloat(a.daily));
    }
  
    // Update the filteredCars state with the filtered and sorted list
    setFilteredCars(filtered);
  };
  

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
  };

  return (
    <div>
      <CarFilter onFilterChange={handleFilterChange} />
      <div className="my-car-section">
        <div className="my-cars-container">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div key={car._id}>
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
                      </div>
                    </div>
                  </section>
                  <section className="car-data">
                    <div className="car-name"><h1 className="">{car.make}</h1><h1 className="">{car.model}</h1></div>
                    <div className="car-cost"><h2>£{car.daily}/day</h2> <h2>deposit:{car.deposit}</h2></div>
                  </section>
                  <section className="confirmation">
                    <Link to={'/car/' + car._id}><button type="button" className="main">Book Now</button></Link> 
                  </section>
                </div>
              </div>
            ))
          ) : (
            <p>No cars found for the selected filters</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cars;

