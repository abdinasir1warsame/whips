import React from "react"

const Specifications = ({selected, onChange}) => {
    return (  <div className="specification-container">
    <div>
        <h3>Gear Box</h3>
    <label htmlFor="gearbox"> <input className=" border border-gray-300 rounded-full px-4 py-2 mb-4 mr-2" type="checkbox" placeholder="gearbox" />
<span className="mr-2">automatic</span>


</label>
<label htmlFor="gearbox"> <input className=" border border-gray-300 rounded-full px-4 py-2 mb-4 mr-2" type="checkbox" placeholder="gearbox" />
<span className="mr-2">manual</span>


</label>
</div>
<div>
    <h3>Fuel Type</h3>
<label htmlFor="gearbox"> <input className=" border border-gray-300 rounded-full px-4 py-2 mb-4 mr-2" type="checkbox" placeholder="fuel type" />
<span className="mr-2">diesel</span>


</label>
<label htmlFor="gearbox"> <input className=" border border-gray-300 rounded-full px-4 py-2 mb-4 mr-2" type="checkbox" placeholder="fuel type" />
<span className="mr-2">petrol</span>


</label>
</div>
<div>
    <h3>Air con</h3>
<label htmlFor="gearbox"> <input className=" border border-gray-300 rounded-full px-4 py-2 mb-4 mr-2" type="checkbox" placeholder="Aircon" />
<span className="mr-2">Aircon</span>


</label>
</div>

</div>)
}

export default Specifications