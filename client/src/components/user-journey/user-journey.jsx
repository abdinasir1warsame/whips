import React from "react";
import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";




const UserJourney = () => {
    return (

      <div className=" pt-20 ">
           <div className="space-y-4 pb-12 mb-8">
            <p
              data-aos="fade-up"
              className="text-4xl font-semibold text-color2 text-center sm:text-4xl font-serif text-shadow"
            >
              How to Rent a Car with Ease
            </p>
            
            <p data-aos="fade-up" className="text-center sm:px-44 text-shadow">
   Our intuitive interface ensures a smooth experience, allowing you to review your choice and secure your car in just a few clicks.
</p>

          
            <div className="line-mf3"></div>
          </div>
      <StepOne/>
      <StepTwo/>
      <StepThree/>
      
      
      </div>

       
  
 
      
    )
}

export default UserJourney 