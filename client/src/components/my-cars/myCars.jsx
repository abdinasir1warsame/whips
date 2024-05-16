import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./mycars.css"
import AccountNav from "../accounts/accountNav";


const MyCars = () => {
    const [cars,setCars] = useState([])
  useEffect(() => {
    axios.get('/cars').then(({data}) => {
        setCars(data)
    })
  }, [])
    return (
        <div>
            <AccountNav/>
         
                   <div className="text-center mt-5" >
                    list of all added Cars
                    <br/>
                   <Link className="inline-flex gap-1 bg-blue-300 text-white py-2 px-6 rounded-full " to={'/account/cars/new'} >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
   </svg>
   Add new car</Link>
   
   
               </div>
           
      
         
        </div>
    )
}

export default MyCars