import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import CarPng from '../../assets/car-images/audi-a7.png';
import { userContext } from '../../userContext';

const StepThree = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[300px] rounded-2xl sm:grid sm:place-items-center duration-300">
      <div className="sm:container">
        <div className="grid grid-cols-1 sm:grid-cols-2  place-items-center px-2 py-8 text-lg ">
          <div className="order-2 md:order-1">
            <div className="space-y-10 sm:p-16 pb-6">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <div>
                  <p className="text-color2 ">Make Booking</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">Step</h1>
                </div>
                <div className="text-color text-7xl ">
                  <h1 className="font-bold">03</h1>
                </div>
              </div>
              <p
                data-aos="fade-up"
                className="leading-8 tracking-wide text-shadow"
              >
                Choose your rental dates and book quickly. Our system lets you
                review and confirm with ease.
              </p>

              <p data-aos="fade-up" className="text-shadow">
                Review your dates and total cost, with clear rental terms
                provided. Once confirmed, your car is ready for your adventure.
              </p>
              <Link to={user ? '/cars' : '/login'}>
                <button
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="rounded-md border-2 border-[#7196b1] background-btn3 text-white  duration-500 py-2 px-6  tracking-wider text-lg mt-3 "
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div
            className="order-1 md:order-2 flex "
            data-aos="slide-left"
            data-aos-duration="1500"
          >
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
