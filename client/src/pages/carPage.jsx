import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons/faGasPump'; // Fuel icon
import { faSnowflake } from '@fortawesome/free-solid-svg-icons/faSnowflake'; // Air conditioning icon
import { faChair } from '@fortawesome/free-solid-svg-icons/faChair'; // Seats icon
import { faCogs } from '@fortawesome/free-solid-svg-icons/faCogs'; // Gearbox icon
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar'; // Car body type icon
import '../components/booking/booking.css';

import axios from 'axios';
import BookingWidget from '../components/booking/booking-widget';
import Gallery from '../components/booking/gallery';

const CarPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/cars/${id}`).then((response) => {
      setCar(response.data);
    });
  }, [id]);

  if (!car) return '';

  return (
    <div className="  bg-gray-100 booking-container pt-5  ">
      <div className="px-2 py-8 pt-0 mt-10 flex justify-between  ">
        <h1 className="text-4xl  px-2 font-bold text-shadow text-color2">
          {car.make} {car.model}
        </h1>{' '}
        <Link
          to={'/cars'}
          className=" return-btn background-btn2 flex border border-white text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          Go Back
        </Link>{' '}
      </div>

      <Gallery car={car} />

      <div className="booking-info">
        <div className="booking-car-details   flex flex-col justify-around bg-white shadow shadow-md  rounded-2xl rounded-r-none min-h-full mr-3 py-2 ">
          <h1 className="text1 font-bold px-7 mb-2 px-2 text-shadow text-color2">
            Vehicle Summary
          </h1>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            className="car-details-container"
          >
            <div className="info-box background-btn">
              <div className="icon-box">
                <FontAwesomeIcon icon={faCar} />
              </div>
              <div className="info-text">
                <div className="info-label">Body :</div>
                {car.type}
              </div>
            </div>
            <div className="info-box background-btn2">
              <div className="icon-box">
                <FontAwesomeIcon icon={faGasPump} />
              </div>
              <div className="info-text">
                <div className="info-label">Fuel :</div>
                {car.specifications.fuelType}
              </div>
            </div>

            <div className="info-box background-btn2">
              <div className="icon-box">
                <FontAwesomeIcon icon={faDoorOpen} />
              </div>
              <div className="info-text">
                <div className="info-label">Doors :</div>
                {car.doors} doors
              </div>
            </div>
            <div className="info-box background-btn2">
              <div className="icon-box">
                <FontAwesomeIcon icon={faChair} />
              </div>
              <div className="info-text">
                <div className="info-label">Seats :</div>
                {car.seats} seats
              </div>
            </div>

            <div className="info-box background-btn2">
              <div className="icon-box">
                <FontAwesomeIcon icon={faCogs} />
              </div>
              <div className="info-text">
                <div className="info-label">Gear :</div>
                {car.specifications.gearBox}
              </div>
            </div>
            <div className="info-box background-btn2">
              <div className="icon-box">
                <FontAwesomeIcon icon={faSnowflake} />
              </div>
              <div className="info-text">
                <div className="info-label">Aircon :</div>
                {car.specifications.aircon ? 'aircon' : ''}
              </div>
            </div>
          </div>

          <h1 className="text2 font-bold text-center mt-2 mb-1 px-2 text-shadow text-color ">
            This {car.make} {car.model} is rented out by {car.owner.name}.{' '}
          </h1>
        </div>
        <BookingWidget car={car} />
      </div>
    </div>
  );
};

export default CarPage;
