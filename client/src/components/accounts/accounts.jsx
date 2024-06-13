import React, { useContext, useState } from "react";
import { userContext } from "../../userContext";
import { Link, Navigate, redirect, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


import axios from "axios";
import "./accounts.css"

import AccountNav from "./accountNav";
import CarsPage from "../../pages/carsPage";



const Profile= () => {
    const [toHomePage, setToHomepage] = useState(null)
    const {ready, user,setUser} = useContext(userContext)
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = "profile"
    }
async function logout () {
  await axios.post('/logout')
  setUser(null)
  setToHomepage("/")
}
    if (!ready) {
        return 'loading...'
    }
    if (ready && !user && !toHomePage){
        return<Navigate to={"/login"} />
    }





   if(toHomePage) {
    return<Navigate to={toHomePage}/>
   }
    return (
        <div className=" bg-gray min-h-screen pt-8">
    <AccountNav/>
        {subpage === "profile" && (
            <div className=" h-full ">
                <div className="flex justify-center gap-2">  <button onClick={logout} className=" background-btn3  px-6 py-2 rounded-full m-w-sm mt-8"><FontAwesomeIcon icon={ faSignOutAlt }  /> Logout</button></div>

  <form  className="form-section  min-w-[90%] mt-10">
                <div className="form-container text-shadow">



  <h1 className="mb-4 text-lg font-semibold">Name</h1>

      <input  className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder={user.name} />
      <h1 className="mb-4 text-lg font-semibold">Email</h1>
                    <input  className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder={user.email} />
                    <h1 className="mb-4 text-lg font-semibold">Contact</h1>
                    <input  className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="doors, for example: 5 doors" />
             
              
                    <div className=" flex flex-row justify-center"> <button type="submit" className="background-btn2 px-4 car-form-btn h-3/5 text-xl mt-10 mb-10 rounded-full" > Save Details</button></div>
                   
                    </div>

                    
                
</form>
  


            </div>
        )}
        {subpage === 'cars' && (
            <CarsPage></CarsPage>
        )}
        </div>
    )
}

export default Profile