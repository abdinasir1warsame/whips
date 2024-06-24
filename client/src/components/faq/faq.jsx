import React, { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const faqs = [
  {
    question: "What are the requirements to rent a car?",
    answer:
      "To rent a car, you must be at least 25 years old, have a valid driver's license, and a credit card in your name. Some locations may have additional requirements.",
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes, you can modify or cancel your reservation online or by calling our customer service. Changes may be subject to additional charges.",
  },
  {
    question: "Do you offer roadside assistance?",
    answer:
      "Yes, we provide 24/7 roadside assistance for all our rentals. You can call our support number provided in your rental agreement.",
  },
  {
    question: "Are there any mileage limits?",
    answer:
      "Our rentals come with unlimited mileage, unless stated otherwise in the rental agreement. Please check the terms for specific vehicles.",
  },
  {
    question: "What insurance options are available?",
    answer:
      "We offer various insurance options including collision damage waiver, personal accident insurance, and third-party liability coverage. You can choose your preferred option during the booking process.",
  },
];

const ChevronUpIcon = () => (
  <svg className="w-5 h-5 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Faq = () => {
  return (
    <div className='mt-20 mb-20 min-h-screen flex flex-col justify-center items-center '>
                   <div className="space-y-4 pb-12 ">
            <p
              data-aos="fade-up"
              className="text-4xl font-semibold text-color2 text-center sm:text-4xl font-serif text-shadow"
            >
              Frequently Asked Questions
            </p>
            
            <p data-aos="fade-up" className="text-center sm:px-44 text-shadow">
   Our intuitive interface ensures a smooth experience, allowing you to review your choice and secure your car in just a few clicks.
</p>

          
            <div className="line-mf3"></div>
          </div>
          <div className="w-full max-w-5xl mx-auto p-10 bg-white rounded-lg shadow shadow-lg ">

<div className="space-y-4">
  {faqs.map((faq, index) => (
    <Disclosure key={index} as="div" className="border-b last:border-none ">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between items-center w-full px-4 py-4 text-left text-lg font-medium text-white rounded-2xl background focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>{faq.question}</span>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Disclosure.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="pt-4 px-8  pb-2 text-gray-600 font-bold">
              {faq.answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  ))}
</div>
</div>
    </div>

  );
};

export default Faq;
