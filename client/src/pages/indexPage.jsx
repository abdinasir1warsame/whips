import React from 'react';

import Hero from '../components/hero/hero';
import Services from '../components/why-choose-us/choose-us';

import Faq from '../components/faq/faq';
import Testimonials from '../components/testimonials/testimonials';
import Footer from '../components/footer/footer';
import UserJourney from '../components/user-journey/user-journey';
import FeaturedCars from '../components/cars-carousel/featured-cars';

const IndexPage = () => {
  return (
    <div className=" overflow-x-hidden max-w-screen">
      <Hero />
      <div className="px-5 lg:px-0">
        <FeaturedCars />
        <UserJourney />
        <Services />

        <Testimonials />
        <Faq />
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
