import React, { useContext, useState } from "react";
import { userContext } from "../../userContext";
import { Link, Navigate, redirect, useParams } from "react-router-dom";
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
        <div>
    <AccountNav/>
        {subpage === "profile" && (
            <div className="text-center m-w-lg mx-auto">
  Logged in as {user.name} ({user.email})<br/>
  <button onClick={logout} className="bg-gray-300 m-w-sm mt-2"> Logout</button>

            </div>
        )}
        {subpage === 'cars' && (
            <CarsPage></CarsPage>
        )}
        </div>
    )
}

export default Profile