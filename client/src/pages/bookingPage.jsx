import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/booking/booking-page.css';
import Gallery from '../components/booking/gallery';
import BookingDates from '../components/booking/booking-dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons/faGasPump'; // Fuel icon
import { faSnowflake } from '@fortawesome/free-solid-svg-icons/faSnowflake'; // Air conditioning icon
import { faChair } from '@fortawesome/free-solid-svg-icons/faChair'; // Seats icon
import { faCogs } from '@fortawesome/free-solid-svg-icons/faCogs'; // Gearbox icon
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar'; // Car body type icon

const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get('/bookings').then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);
  console.log(booking);
  if (!booking) {
    return '';
  }
  return (
    <>
      <div className="booking-section">
        <div className="flex justify-between ">
          <h1 className="text-4xl   font-bold text-shadow text-color2 mb-20">
            {booking.car.make} {booking.car.model}
          </h1>
          <Link
            to={'/account/bookings'}
            className=" h-12 px-5 mr-2 gap-2 rounded-2xl text-center background-btn2 flex border items-center border-white text-white"
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
          </Link>
        </div>

        <div className=" my-booking">
          <div className="my-booking-container rounded-2xl ">
            <div className="">
              {' '}
              <Gallery car={booking.car} />
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" background rounded-2xl rounded-t-none  booking-container-details justify-center items-center "
            >
              <div className="flex justify-center my-booking-dates font-bold   ">
                <BookingDates booking={booking} />
              </div>

              <div
                data-aos="fade-in"
                data-aos-delay="1000"
                className="flex justify-around mt-5 my-booking-spec font-bold"
              >
                <div className="gap-2">
                  <FontAwesomeIcon icon={faCar} /> : {booking.car.type}
                </div>
                <div>
                  <FontAwesomeIcon icon={faDoorOpen} /> : {booking.car.doors}
                </div>
                <div>
                  <FontAwesomeIcon icon={faChair} /> : {booking.car.seats}
                </div>

                <div>
                  <FontAwesomeIcon icon={faCogs} /> :{' '}
                  {booking.car.specifications.gearBox}
                </div>
                <div>
                  <FontAwesomeIcon icon={faGasPump} /> :{' '}
                  {booking.car.specifications.fuelType}
                </div>
                <div>
                  <FontAwesomeIcon icon={faSnowflake} /> :{' '}
                  {booking.car.specifications.aircon ? 'aircon' : ''}
                </div>
              </div>
              <div className="flex justify-between mt-5  my-booking-names-price items-center ">
                <div className="flex gap-5 justify-center">
                  <div className=" space-x-2">Booking for: {booking.name}</div>

                  <div className=" space-x-2">
                    Owner of car: {booking.carOwner}
                  </div>
                </div>
                <div className=" font-bold text-green-600 ">
                  Total Cost: £{booking.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookingPage;
