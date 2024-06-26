import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './cars.css';
import CarFilter from './car-filter';
import { getImageUrl } from '../my-cars/image';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    make: '',
    model: '',
    price: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios.get('/cars').then((response) => {
      setCars(response.data);
      setFilteredCars(response.data);
      AOS.refresh();
    });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filterCriteria, cars]);

  const applyFilters = () => {
    let filtered = [...cars]; // Clone the array to avoid direct mutation

    // Filter by make if selected
    if (filterCriteria.make) {
      filtered = filtered.filter((car) => car.make === filterCriteria.make);
    }

    // Filter by model if selected
    if (filterCriteria.model) {
      filtered = filtered.filter((car) => car.model === filterCriteria.model);
    }

    // Filter by price range if selected
    if (filterCriteria.price === '0-250') {
      filtered = filtered.filter(
        (car) => parseFloat(car.daily) >= 0 && parseFloat(car.daily) <= 250
      );
    } else if (filterCriteria.price === 'over-250') {
      filtered = filtered.filter((car) => parseFloat(car.daily) > 250);
    }

    // Apply price sorting after filtering
    if (filterCriteria.price === 'low-to-high') {
      filtered = filtered.sort(
        (a, b) => parseFloat(a.daily) - parseFloat(b.daily)
      );
    } else if (filterCriteria.price === 'high-to-low') {
      filtered = filtered.sort(
        (a, b) => parseFloat(b.daily) - parseFloat(a.daily)
      );
    }

    // Update the filteredCars state with the filtered and sorted list
    setFilteredCars(filtered);
    AOS.refresh(); // Refresh AOS animations after filtering
  };

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
  };

  return (
    <div>
      <CarFilter cars={cars} onFilterChange={handleFilterChange} />

      <div className="my-car-section">
        <div className="my-cars-container">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => {
              const backgroundImageUrl = getImageUrl(car.photo[0]);
              return (
                <Link
                  to={'/car/' + car._id}
                  className="my-cars-section"
                  key={car._id}
                  data-aos="fade-up"
                >
                  <div className="device">
                    <section
                      className="headers"
                      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                      data-aos="fade-down"
                    >
                      <div className="info">
                        <div
                          className="info-row"
                          data-aos="fade-down"
                          data-aos-delay="100"
                        >
                          <div>
                            <h2 className="price">{car.type} </h2>
                          </div>
                          <div>
                            <h2 className="price">
                              {car.specifications.fuelType}
                            </h2>
                            <span className="period "></span>
                          </div>
                        </div>
                        <div
                          className="info-row"
                          data-aos="fade-left"
                          data-aos-delay="200"
                        >
                          <div className="rating">
                            <small>
                              {car.seats} Seats / {car.doors} Doors
                            </small>
                          </div>
                          <div className="rating">
                            <small>includes 400 miles</small>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="car-data"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="car-name">
                        <h1>{car.make}</h1>
                        <h1>{car.model}</h1>
                      </div>
                      <div className="car-cost">
                        <h2>£{car.daily}/day</h2>
                        <h2 className="text-lg font-semibold">
                          Deposit:{' '}
                          {car.deposit.startsWith('£')
                            ? car.deposit
                            : `£${car.deposit}`}
                        </h2>
                      </div>
                    </section>
                    <section className="confirmation">
                      <button type="button" className="main">
                        Book Now
                      </button>
                    </section>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>No cars found for the selected filters</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cars;
