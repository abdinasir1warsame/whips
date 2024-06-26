import { useState } from 'react';
import Image from '../my-cars/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = ({ car, setShowAllPhotos, showAllPhotos }) => {
  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black min-w-full min-h-screen">
        <div className="px-8 py-6 mt-4 mb-4 flex">
          <h1 className="text-xl pt-2 lg:text-3xl text-white">
            Photos Of {car.make} {car.model}
          </h1>
          <button
            onClick={() => setShowAllPhotos(false)}
            className="fixed flex right-5 gap-2 border border-white py-2 px-4 rounded-2xl background-btn text-md lg:text-xl text-white"
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
            Close
          </button>
        </div>
        {car?.photo?.length > 0 &&
          car.photo.map((photo, index) => (
            <div key={index} className="p-8 pt-0 flex bg-black">
              <Image src={photo} alt="" />
            </div>
          ))}
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="flex flex-row rounded-2xl overflow-hidden shadow">
        <div className="w-2/3 h-2/3 main-img">
          {car.photo?.[0] && (
            <div data-aos="slide-right" data-aos-duration="1000">
              <Image
                className="w-full shadow h-full object-cover"
                src={car.photo[0]}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="w-1/3 h-2/3">
          <div data-aos="slide-down" data-aos-duration="1000" className="h-1/2">
            {car.photo?.[1] && (
              <Image className="w-full h-full" src={car.photo[1]} alt="" />
            )}
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="100"
            className="h-1/2 overflow-hidden"
          >
            {car.photo?.[2] && (
              <Image
                className="w-full h-full relative third-img"
                src={car.photo[2]}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setShowAllPhotos(true);
          window.scrollTo(0, 0);
        }}
        className="flex gap-1 show-more-btn rounded-2xl shadow shadow-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon-btn"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clipRule="evenodd"
          />
        </svg>
        Show more photos
      </button>
    </div>
  );
};

export default Gallery;
