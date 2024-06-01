
import Specifications from "../components/my-cars/specifications"
import PhotosUploader from "../components/my-cars/photosUploader";
import axios from "axios";
import { useEffect, useState } from "react";
import AccountNav from "../components/accounts/accountNav";
import { Navigate, useParams } from "react-router-dom";


const CarsFormPage = () => {
   const {id} = useParams()

    const [model,setModel] = useState('');
    const [make,setMake] = useState('');
    const [seats,setSeats] = useState('');
    const [doors,setDoors] = useState('');
    const [type,setType] = useState('');
    const [daily,setDaily] = useState('');
    const [deposit,setDeposit] = useState('');
    const[addedPhotos, setAddedPhotos] = useState([]);
    const [specifications, setSpecifications] = useState('');
    const [redirect,setRedirect] = useState(false)
    useEffect(() => {
if(!id) {
  return;
}
axios.get('/cars/'+id).then(response => {
  const {data} = response;
  setMake(data.make)
  setModel(data.model)
  setDoors(data.doors)
  setSeats(data.seats)
  setType(data.type)
  setDaily(data.daily)
  setDeposit(data.deposit)
setSpecifications(data.specifications)
  setAddedPhotos(data.photo)

  
})
    }, [id])

    async function saveCar(ev) {
        ev.preventDefault()
        const carData = {
         model,make,seats,type,doors,
          daily,deposit,specifications, 
          photo:addedPhotos
        }
     if(id){
      await axios.put("/cars", {
        id, ...carData
      });
       setRedirect(true)
     } else{
      await axios.post("/cars", {
        ...carData});

       setRedirect(true)
     }
  
      
      }

      if(redirect) {
        return <Navigate to={'/account/cars'} />
      }
    return (
        <div>
          <AccountNav/>
                   <form onSubmit={saveCar} className="form-section">
                <div className="form-container">
  <h1 className="mb-4 text-lg font-semibold">Make</h1>

      <input value={make} onChange={ev => setMake(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="make, for example: BMW" />
      <h1 className="mb-4 text-lg font-semibold">Model</h1>
                    <input value={model} onChange={ev => setModel(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="brand, for example: 3 series" />
                    <h1 className="mb-4 text-lg font-semibold">doors</h1>
                    <input value={doors} onChange={ev => setDoors(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="doors, for example: 5 doors" />
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
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                    <h1 className="mt-4 mb-1 text-lg font-semibold" >Specifications</h1>
                    <p className="gray-500 text-sm mb-4 ">Select All the Specifications</p>
                 <Specifications selected={specifications} onChange={setSpecifications}></Specifications>
                    {/* <h1 className="mt-4 mb-1 text-lg font-semibold" >pick up & drop off times</h1>
                    <p className="gray-500 text-sm mb-4 ">Make sure to return car on specified time</p>
                    <div className="time-container">
                    <div> <h3 className="mb-2">Pick up time</h3>  <input value={pickup} onChange={ev => setPickup(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="16:00" /></div>
                    <div>  <h3 className="mb-2">Drop off time</h3>  <input value={dropoff} onChange={ev => setDropoff(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-4" type="text" placeholder="16:00" /></div>
                    </div> */}
                    <button type="submit" className="bg-blue-300 px-4  rounded-full" > Save Car</button>
                    </div>

                    
                    
</form>
</div>
       
    )
}

export default CarsFormPage