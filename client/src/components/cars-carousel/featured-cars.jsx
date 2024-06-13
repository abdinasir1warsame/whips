import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Audi  from '../../assets/car-images/audi-a7-car.jpg'
import SQ5 from '../../assets/car-images/sq5.jpg'
import Porsche from '../../assets/car-images/porsche.jpg'
import maserati from '../../assets/car-images/maserati.jpg'

const FeaturedCarData = [
  {
    id: 1,
    make: "Audi",
    model: 'A7',
    type: 'saloon',
    fuel:'diesel',
    doors:'5 ',
    seats: '5 ',
    daily: ' 350',
    deposit: ' 750',
     img: Audi,
  },
  {
    id: 2,
    make: "Audi",
    model: 'SQ5',
    type: 'SUV',
    fuel:'diesel',
    doors:'5',
    seats: '5 ',
    daily: ' 350',
    deposit: ' 750',
     img: SQ5,
  },  {
    id: 3,
    make: "Porsche",
    model: 'Carrera',
    type: 'saloon',
    fuel:'diesel',
    doors:'2 ',
    seats: '2',
    daily: ' 350',
    deposit: ' 750',
     img: Porsche,
  },  {
    id: 4,
    make: "Maserati",
    model: 'Ghibli',
    type: 'saloon',
    fuel:'diesel',
    doors:'5',
    seats: '4',
    daily: ' 350',
    deposit: ' 750',
     img: maserati,
  },

];

const FeaturedCars = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
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
    <div className="py-5 mt-20 mb-12 ">
      <div className="">
        {/* header section */}
        <div className="space-y-4 pb-12 mb-12">
            <p
              data-aos="fade-up"
              className="text-4xl font-semibold text-color2 text-center sm:text-4xl font-serif text-shadow"
            >
              Featured Cars
            </p>
            
            <p data-aos="fade-up" className="text-center sm:px-44 text-shadow">
            Explore Unique Rides: Connect with Local Owners for a Personalized Driving Experience.
</p>

        
            <div className="line-mf3"></div>
          </div>

        {/* Testimonial cards */}
        <div data-aos="fade-up" className="cursor-pointer ">
          <Slider {...settings}>
            {FeaturedCarData.map((data) => (
                <Link to={'/cars'} className=" p-2">
           <section className="headers shadow shadow-black shadow-md  " style={{ backgroundImage: `url(${data.img})` }}>


                <div className="info ">
                  <div className="flex justify-around text-white">
                    <div><h2 className="text-lg">{data.make} </h2></div>
                    <div><h2 className="text-lg">{data.model}</h2></div>
                  </div>
                  <div className="flex justify-around text-white">
                    <div className="">
                      <small>{data.seats} Seats / {data.doors} Doors</small>
                    </div>
                    <div className=""><small>includes 400 miles</small></div>
                   
                  </div>
                </div>
              </section>
              <section className="h-12">
            
              </section>
       
            </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;