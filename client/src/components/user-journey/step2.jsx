import React, { useContext, useState } from 'react';
import 'aos/dist/aos.css';
import CarPng from '../../assets/car-images/blue-car.png';
import { Link } from 'react-router-dom';
import { userContext } from '../../userContext';

const StepTwo = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="dark:bg-dark  sm:min-h-[300px] sm:grid sm:place-items-center duration-300 ">
      <div className="sm:container">
        <div className="sm:grid grid-cols-1 sm:grid-cols-2 place-items-center sm:flex sm:flex-row-reverse px-2 py-8 text-lg">
          <div
            data-aos="slide-right"
            data-aos-duration="1500"
            className="order-2 sm:order-1"
          >
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-1 sm:order-2">
            <div className="space-y-10 sm:p-16 pb-6">
              <div data-aos="fade-up" className="flex items-center gap-4 ">
                <div>
                  <p className="text-color2">Choose Vehicle</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">Step</h1>
                </div>
                <div className="text-color2 text-7xl ">
                  <h1 className="font-bold">02</h1>
                </div>
              </div>
              <p
                data-aos="fade-up"
                className="leading-8 tracking-wide text-shadow"
              >
                Browse our diverse range of vehicles to find your perfect ride.
                From compact cars to spacious SUVs, we have options for every
                need.
              </p>
              <p data-aos="fade-up" className="text-shadow">
                Use our filters to sort by model, price, or features. Compare
                options and read reviews to select the best vehicle for your
                journey. Just a few clicks and you're set.
              </p>
              <Link to={user ? '/cars' : '/login'}>
                <button
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="rounded-md border-2 border-[#7196b1] background-btn3 text-white  duration-500 py-2 px-6  tracking-wider text-lg mt-3"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
