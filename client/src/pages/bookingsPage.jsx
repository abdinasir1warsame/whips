import React, { useState, useEffect } from 'react';
import CarImg from '../components/cars/car-img.jsx';
import axios from 'axios';
import AccountNav from '../components/accounts/accountNav';
import '../components/booking/all-bookings-page.css';

import { Link } from 'react-router-dom';
import BookingDates from '../components/booking/booking-dates.jsx';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get('/bookings').then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="all-bookings-section bg-gray ">
      <AccountNav />
      <div className="flex justify-center items-center">
        <div className="all-bookings-container     ">
          {bookings?.length > 0 &&
            bookings.map((booking) => (
              <div className=" all-booking-card">
                <Link to={`/account/bookings/${booking._id}`} className=" ">
                  <div className="relative cursor-pointer">
                    <CarImg car={booking.car} className="bookings-img" />
                    <div className="booking-image-overlay absolute top-[75%]    rounded-2xl p-4 text-white">
                      <div className="flex justify-center pt-2 all-booking-dates font-bold">
                        <BookingDates booking={booking} />
                      </div>
                      <div className="flex justify-between items-center gap-8 mt-3 px-4 py-2 border-t border-white all-booking-name">
                        <h2 className="">
                          {booking.car.make} {booking.car.model}
                        </h2>
                        <div className="flex gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                            />
                          </svg>
                          <div>Total price: £{booking.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
