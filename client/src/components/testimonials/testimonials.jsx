import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialData = [
  {
    id: 1,
    name: 'Oliver Thompson',
    text: 'Whips Car Rental made my trip so much easier. The booking process was smooth, and the car I rented was in excellent condition.',
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Emily Clarke',
    text: 'I had a fantastic experience using Whips Car Rental. The peer-to-peer model allowed me to find a car that perfectly suited my needs.',
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: 'James Anderson',
    text: 'Renting out my car through Whips Car Rental was a breeze. I found reliable renters and earned some extra money effortlessly.',
    img: 'https://picsum.photos/104/104',
  },
  {
    id: 5,
    name: 'Sophie Turner',
    text: 'Whips Car Rental offers an outstanding service. The platform is user-friendly, and I was able to book a car within minutes.',
    img: 'https://picsum.photos/103/103',
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 ">
      <div className="">
        {/* header section */}
        <div className="space-y-4 pb-12 mb-12">
          <p
            data-aos="fade-up"
            className="text-4xl font-semibold text-color2 text-center sm:text-4xl font-serif text-shadow"
          >
            Testimonials
          </p>

          <p data-aos="fade-up" className="text-center sm:px-44 text-shadow">
            Our intuitive interface ensures a smooth experience, allowing you to
            review your choice and secure your car in just a few clicks.
          </p>

          <div className="line-mf3"></div>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in" className="">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6  w-screen  border border-white shadow shadow-white">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 bg-dark text-shadow  bg-slate-100 shadow shadow-black shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-md ">{data.text}</p>
                      <h1 className="text-xl font-bold text-color3">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-color3  text-9xl font-serif absolute top-0 right-0 text-shadow">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
