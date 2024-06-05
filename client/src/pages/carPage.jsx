import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons/faGasPump'; // Fuel icon
import { faSnowflake } from '@fortawesome/free-solid-svg-icons/faSnowflake'; // Air conditioning icon
import { faChair } from '@fortawesome/free-solid-svg-icons/faChair'; // Seats icon
import { faCogs } from '@fortawesome/free-solid-svg-icons/faCogs'; // Gearbox icon
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar'; // Car body type icon

import axios from "axios";

const CarPage = () => {
    const {id} = useParams();
    const [car,setCar] = useState(null)
    const [showAllPhotos, setShowAllPhotos] = useState(false)


    useEffect(() => {
if(!id) {
return
}
axios.get(`/cars/${id}`).then(response => {
setCar(response.data)
})
    }, [id])

    if (!car) return ''
if(showAllPhotos) {
    return (<div className="absolute inset-0 bg-black min-w-full min-h-screen ">  <div className="px-8 py-6 mt-4 flex  "> <h1 className="text-3xl text-white">Photos Of {car.make} {car.model}</h1> <button onClick={() => setShowAllPhotos(false) } className="fixed flex right-5 gap-2 border border-white  py-2 px-4 rounded-2xl background-btn  text-xl text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
  </svg>
   Close Photos</button></div> {car?.photo?.length > 0 && car.photo.map(photo => (
        <div className="p-8 pt-0 flex bg-black "><img src={'http://localhost:4000/uploads/'+photo} alt="" /></div>
    ) )}</div>)
}

    return(<div className="  bg-gray-100 px-40 py-40 pt-5  ">
       <div className="px-2 py-8 pt-0 mt-10 flex justify-between  "><h1 className="text-4xl  px-2 font-bold text-shadow text-color2">{car.make} {car.model}</h1> <Link to={'/cars'} className="flex border border-white   gap-2 py-2 px-5 rounded-2xl background-btn  text-xl text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
  </svg>
   Go Back</Link> </div>
      
      <div className="relative">
      <div className="flex flex-row rounded-2xl overflow-hidden shadow "><div className="w-2/3 h-2/3 mr-3">{car.photo?.[0] && (
       <div className="" > <img className="w-full shadow h-full object-cover" src={'http://localhost:4000/uploads/'+car.photo[0]} alt="" /></div> 
        
      )}</div><div className="  w-1/3 h-2/3">
        <div className="h-1/2  ">{car.photo?.[1] && (
        <img className="w-full h-full" src={'http://localhost:4000/uploads/'+car.photo[1]} alt="" />
      )}</div>
      <div className="h-1/2 overflow-hidden">{car.photo?.[2] && (
        <img className="w-full h-full  relative top-3" src={'http://localhost:4000/uploads/'+car.photo[2]} alt="" />
      )}</div>
        
        </div></div>
        <button onClick={() => {setShowAllPhotos(true); window.scrollTo(0, 0);} } className="flex gap-1 absolute bottom-3 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-gray-500 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
</svg>


             Show more photos</button>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] ">
        <div className="bg-white shadow shadow-md mt-5 rounded-2xl rounded-r-none h-full mr-3 py-2">
          
            <h1 className="text-2xl font-bold px-7 mb-2 px-2 text-shadow text-color2">Vehicle Summary</h1>
     <div className=" flex  p-4 justify-center ml-2 ">
    <div className="w-1/3 ">
    <div className="flex   border border-white     rounded-full px-4 py-1 mb-6 mr-5 background-btn gap-5 "><div className=" flex flex-col py-2 text-2xl    "><FontAwesomeIcon icon={ faCar }  />
 </div> <div className="flex gap-5  items-center  "><div className="font-bold text-center ">Body :</div> {car.type}</div></div>
 <div className="flex  border border-white     rounded-full px-4 py-1 mb-6 mr-5 background-btn2 gap-5"><div className=" flex flex-col py-2 text-2xl "><FontAwesomeIcon icon={ faGasPump }  />
 </div> <div className="flex gap-5 items-center "><div className="font-bold ">Fuel :</div> {car.specifications.fuelType}</div></div>
    </div>
    <div className="w-1/3"> 
    <div className="flex   border border-white     rounded-full px-4 py-1 mb-6 mr-5 background-btn2 gap-5"><div className=" flex flex-col py-2 text-2xl  "><FontAwesomeIcon icon={faDoorOpen}  />
 </div> <div className="flex gap-5 items-center "><div className="font-bold ">Doors : </div> {car.doors} doors</div></div>
 <div className="flex  border border-white     rounded-full px-4 py-1 mb-6 mr-5 background-btn2 gap-5"><div className="flex flex-col py-2 text-2xl "><FontAwesomeIcon icon={ faChair }  />
 </div> <div className="flex gap-5 items-center "><div className="font-bold ">Seats: </div> {car.seats} seats</div></div>
    </div>
    <div className="w-1/3"> 
    <div className="flex  border border-white    rounded-full px-4 py-1 mb-6 mr-5 background-btn2 gap-5"><div className=" flex flex-col py-2 text-2xl  "><FontAwesomeIcon icon={ faCogs }  />
 </div> <div className="flex gap-5 items-center "><div className="font-bold ">Gear :</div> {car.specifications.gearBox}</div></div>
<div className="flex  border border-white     rounded-full px-4 py-1 mb-6 mr-5 background-btn2 gap-5"><div className=" flex flex-col py-2 text-2xl  "><FontAwesomeIcon icon={ faSnowflake }  />
 </div> <div className="flex gap-5 items-center "><div className="font-bold ">Aircon :</div> {car.specifications.aircon ? "aircon" : ""}</div></div>
    </div>
        
     </div>
          
     <h1 className="text-2xl font-bold text-center mt-2 mb-1 px-2 text-shadow text-color ">This {car.make} {car.model} is rented out by {car.owner.name}. </h1>
        </div>
        <div className="bg-white  shadow px-4 rounded-2xl rounded-l-none mt-5 h-full  ">
            <div className="text-2xl text-center font-bold mt-4 text-shadow text-color"> Price: {car.daily} / per day </div>
            <div className="border rounded-2xl mt-4">
                <div className="flex justify-center">
                <div className=" flex flex-col py-3 px-4 ">
                <label>Pick up: </label>
                <input type="date" />
             
            </div>
            <div className="flex flex-col py-3 px-4 border-l ">
                <label>Drop off: </label>
                <input type="date" />
            </div>
                </div>
                <div></div>
       
            </div>
         
           <div className="flex justify-center  mt-4 "><button className="background-btn2 w-1/3 rounded-2xl h-12 mt-5  ">Book this car </button></div>
        
        </div>

      </div>
      
    
    </div>)
}

export default CarPage