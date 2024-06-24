
import Specifications from "../components/my-cars/specifications"
import PhotosUploader from "../components/my-cars/photosUploader";
import axios from "axios";
import { useEffect, useState } from "react";
import AccountNav from "../components/accounts/accountNav";
import { Navigate, useParams } from "react-router-dom";
import '../components/accounts/accounts.css'


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
        <div className="pt-8 bg-gray min-h-screen"> 
          <AccountNav/>
                   <form onSubmit={saveCar} className="car-form-section mt-12">
                <div className="car-form-container text-shadow">
                <div class="car-input-container">
    <div class="car-input-item">
        <div class="car-input-label"><h1>Make</h1></div>
        <div class="car-input-field">
        <input value={make} onChange={ev => setMake(ev.target.value)} className="car-input" type="text" placeholder="make, for example: BMW" />
        </div>
    </div>
    <div class="car-input-item">
        <div class="car-input-label"><h1>Model</h1></div>
        <div class="car-input-field">
        <input value={model} onChange={ev => setModel(ev.target.value)} className="car-input " type="text" placeholder="brand, for example: 3 series" />
        </div>
    </div>
    <div class="car-input-item">
        <div class="car-input-label"><h1>Deposit</h1></div>
        <div class="car-input-field">
        <input value={deposit} onChange={ev => setDeposit(ev.target.value)} className=" border border-gray-300 rounded-full px-4 py-2 mb-6" type="text" placeholder="deposit, for example:£500 " />
        </div>
    </div>
    <div class="car-input-item">
        <div class="car-input-label"><h1>Type</h1></div>
        <div class="car-input-field">
        <input value={type} onChange={ev => setType(ev.target.value)} className="car-input" type="text" placeholder="body, for example: saloon" />
        </div>
    </div>
    <div class="car-input-item">
        <div class="car-input-label"><h1>Doors</h1></div>
        <div class="car-input-field">
        <input value={doors} onChange={ev => setDoors(ev.target.value)} className=" " type="text" placeholder="doors, for example: 5 doors" />
        </div>
    </div>
   
   
    <div class="car-input-item">
        <div class="car-input-label"><h1>Seats</h1></div>
        <div class="car-input-field">
        <input value={seats} onChange={ev => setSeats(ev.target.value)} className=" " type="text" placeholder="seats, for example: 4 seats" />
        </div>
    </div>
    <div class="car-input-item">
        <div class="car-input-label"><h1>Price</h1></div>
        <div class="car-input-field">
        <input value={daily} onChange={ev => setDaily(ev.target.value)} className=" " type="text" placeholder="daily price, for example: £50" />
        </div>
    </div>
  
</div>




  
                  
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                    <h1 className="mt-4 mb-1 text-lg font-semibold" >Specifications</h1>
                    <p className="gray-500 text-sm mb-4 ">Select All the Specifications</p>
                 <Specifications selected={specifications} onChange={setSpecifications}></Specifications>
            
                    <div className=" flex flex-row justify-center"> <button type="submit" className="background-btn2 px-4 car-form-btn h-3/5 text-xl mt-10 mb-10 rounded-full" > Save Car</button></div>
                   
                    </div>

                    
                    
</form>
</div>
       
    )
}

export default CarsFormPage