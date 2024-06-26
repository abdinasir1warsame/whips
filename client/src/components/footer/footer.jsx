import React from 'react';
import footerLogo from '../../assets/nav-images/new-logo2.png';
import Banner from '../../assets/car-images/footer-bg2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapLocation } from '@fortawesome/free-solid-svg-icons';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/#blog',
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="relative text-white">
      {/* Dark Overlay */}
      <div className="absolute inset-0 background opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <div
          data-aos="zoom-in"
          className="grid  md:grid-cols-3 pb-7 lg:pb-32 pt-5"
        >
          {/* Company details */}
          <div className="py-0 px-8">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[100px]" />
              Whips
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-row text-xs justify-around items-center lg:flex-col lg:justify-start w-screen px-2 lg:w-full  lg:mt-2">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
              <div className="mt-6 flex flex-row justify-around lg:flex-col lg:justify-start w-full ">
                <div className="flex items-center gap-1 lg:gap-3">
                  <FontAwesomeIcon icon={faMapLocation} />
                  <p>Birmingham, United</p>
                </div>
                <div className="flex items-center  gap-1 lg:gap-3  mt-0 lg:mt-3">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+44 7519551171</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
