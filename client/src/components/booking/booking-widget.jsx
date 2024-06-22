import React, { useContext, useState, useEffect } from 'react';
import { userContext } from '../../userContext';
import { differenceInCalendarDays } from 'date-fns';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './booking.css';

const BookingWidget = ({ car }) => {
  const [pickUp, setPickUp] = useState('');
  const [dropOff, setDropOff] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carOwner, setCarOwner] = useState('');
  const [redirect, setRedirect] = useState('');
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  let numberOfDays = 0;
  if (pickUp && dropOff) {
    numberOfDays = differenceInCalendarDays(
      new Date(dropOff),
      new Date(pickUp)
    );
  }

  async function bookThisCar() {
    setCarOwner(car.owner.name);

    const response = await axios.post('/bookings', {
      carOwner,
      pickUp,
      dropOff,
      name,
      phone,
      email,
      price: numberOfDays * car.daily,
      car: car._id,
    });

    const bookingId = response.data._id;
    setRedirect('/account/bookings/' + bookingId);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <>
      <div className="booking-widget bg-white  shadow px-4 rounded-2xl rounded-l-none mt-5 min-h-full  ">
        <div className="text1 text-center font-bold mt-4 text-shadow text-color">
          {' '}
          Price: £{car.daily} / per day{' '}
        </div>
        <div className="border rounded-2xl mt-4">
          <div className="flex justify-center">
            <div className=" flex flex-col py-3 px-4 ">
              <label>Pick up: </label>
              <input
                type="date"
                value={pickUp}
                onChange={(ev) => setPickUp(ev.target.value)}
              />
            </div>
            <div className="flex flex-col py-3 px-4 border-l ">
              <label>Drop off: </label>
              <input
                type="date"
                value={dropOff}
                onChange={(ev) => setDropOff(ev.target.value)}
              />
            </div>
          </div>

          <div></div>
          {numberOfDays > 0 && (
            <div>
              <div className="flex flex-col gap-2 py-3 pb-1 px-4 border-t">
                <label className="">Your Full Name</label>
                <input
                  className="border border-gray-300 rounded-2xl h-10 px-3 "
                  type="text"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 py-1 px-4 ">
                <label>Your Email</label>
                <input
                  className="border border-gray-300 rounded-2xl h-10 px-3"
                  type="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 py-1 px-4 ">
                <label>Your Phone Number</label>
                <input
                  className="border border-gray-300 rounded-2xl h-10 mb-5 px-3 "
                  type="tel"
                  value={phone}
                  onChange={(ev) => setPhone(ev.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center  mt-1 ">
          <button
            onClick={bookThisCar}
            className="background-btn2 w-full rounded-2xl h-12 mt-5 mb-5 "
          >
            Book this car{' '}
            {numberOfDays > 0 && <span>£{numberOfDays * car.daily}</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingWidget;
