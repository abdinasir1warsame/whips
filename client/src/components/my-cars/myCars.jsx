import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./mycars.css"
import Specifications from "./specifications";

const MyCars = () => {
    const {action} = useParams()
    const [brand,setBrand] = useState('');
    const [make,setMake] = useState('');
    const [seats,setSeats] = useState('');
    const [type,setType] = useState('');
    const [daily,setDaily] = useState('');
    const [deposit,setDeposit] = useState('');
    const[addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    
    const [specifications, setSpecifications] = useState('');
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');

   async function addPhotoByLink (ev) {
    ev.preventDefault()
      const {data:filename} =  await axios.post('/upload-by-link', {link:photoLink})
      setAddedPhotos(prev => {
        return [...prev, filename];
      });
setPhotoLink('');

    }
    function uploadPhoto (ev) {
       const files =  ev.target.files;
       const data =  new FormData()
       for ( let i = 0; i < files.length; i++) {
        data.append('photos', files[i]);
       }
        axios.post('/upload', data, {
        headers: {'content-type': 'multipart/form-data'}
       }).then(response => {
        const {data:filenames} = response;
        setAddedPhotos(prev => {
            return [...prev, ...filenames];
          });
        
       })

    }
    
    
    return (
        <div>
            {action !== 'new' && (
                   <div className="text-center mt-5" >
                   <Link className="inline-flex gap-1 bg-blue-300 text-white py-2 px-6 rounded-full " to={'/account/cars/new'} >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
   </svg>
   Add new car</Link>
   
   
               </div>
            )}
            {action === 'new' && (
                <div>
            <form className="form-section">
                <div className="form-container">
  <h1 className="mb-4 text-lg font-semibold">brand</h1>

      <input value={make} onChange={ev => setMake(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="make, for example: BMW" />
      <h1 className="mb-4 text-lg font-semibold">Make</h1>
                    <input value={brand} onChange={ev => setBrand(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="brand, for example: 3 series" />
                    <h1 className="mb-4 text-lg font-semibold">seats</h1>
                    <input value={seats} onChange={ev => setSeats(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="seats, for example: 4 seats" />
                    <h1 className="mb-4 text-lg font-semibold">type</h1>
                    <input value={type} onChange={ev => setType(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="body, for example: saloon" />
                    <h1 className="mb-4 text-lg font-semibold">Daily Price</h1>
                    <input value={daily} onChange={ev => setDaily(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="daily price, for example: £50" />
                    <h1 className="mb-4 text-lg font-semibold">Deposit</h1>
                    <input value={deposit} onChange={ev => setDeposit(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="deposit, for example:£500 " />
                    <h1 className="mt-4 mb-2 text-lg font-semibold" >Photo</h1>
                    <p className="gray-500 text-sm mb-4 ">Add your Vehicles Photo</p>
                    <div className="flex gap-2 w-80% mb-4 ">
                        <input value={photoLink} onChange={ev => setPhotoLink (ev.target.value)} className= "w-full border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="Add using a link .....jpg" />
                        <button onClick={addPhotoByLink} className="bg-blue-300 px-4 rounded-full">Add &nbsp; Photo</button>
                    </div>
                    
                    <div className=" ">
                        <div className="added-image-section">
                  {addedPhotos.length > 0 && addedPhotos.map(link => (
                    <div className=" h-32 flex added-image-container">
                        <img className="rounded-2xl w-full added-image object-cover " src={'http://localhost:4000/uploads/'+link} alt="" />
                       
                    </div>
                  ) )}
                  </div>
                    <label className="h-32 flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl cursor-pointer "> 
                    <input type="file" multiple className="hidden" onChange={uploadPhoto} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
 Upload</label>
                    </div>
                    <h1 className="mt-4 mb-1 text-lg font-semibold" >Specifications</h1>
                    <p className="gray-500 text-sm mb-4 ">Select All the Specifications</p>
                 <Specifications selected={specifications} onChange={setSpecifications}></Specifications>
                    <h1 className="mt-4 mb-1 text-lg font-semibold" >pick up & drop off times</h1>
                    <p className="gray-500 text-sm mb-4 ">Make sure to return car on specified time</p>
                    <div className="time-container">
                    <div> <h3 className="mb-2">Pick up time</h3>  <input value={pickup} onChange={ev => setPickup(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="16:00" /></div>
                    <div>  <h3 className="mb-2">Drop off time</h3>  <input value={dropoff} onChange={ev => setDropoff(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="16:00" /></div>
                    </div>
                    
                    </div>
                    
</form>

                </div>
            )}
         
        </div>
    )
}

export default MyCars