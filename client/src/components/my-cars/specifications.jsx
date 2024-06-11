import React, { useEffect } from "react";

const Specifications = ({ selected, onChange }) => {
  const handleOptionChange = (category, value) => {
    onChange({ ...selected, [category]: value });
  };

  useEffect(() => {
    console.log("Selected values:");
    console.log("Aircon:", selected.aircon);
    console.log("FuelType:", selected.fuelType);
    console.log("GearBox:", selected.gearBox);
  }, [selected]);

  return (
    <div className="specification-container mb-4 ">
      <div>
        <h3 className="mb-4">Gear Box</h3>
        <label  className="border border-gray-300  rounded-full px-4 py-2 mb-4 mr-5 background-btn3 " htmlFor="automatic">
          <input
            type="radio"
            id="automatic"
            name="gearbox"
            className=" mb-4 mr-2"
            onChange={() => handleOptionChange("gearBox", "automatic")}
            checked={selected.gearBox === "automatic"}
          />
          <span className="mr-2">Automatic</span>
        </label>
        <label  className="border border-gray-300  rounded-full px-4 py-2 mb-4 mr-5 background-btn3"  htmlFor="manual">
          <input
            type="radio"
            id="manual"
            name="gearbox"
            className="  mb-4 mr-2"
            onChange={() => handleOptionChange("gearBox", "manual")}
            checked={selected.gearBox === "manual"}
          />
          <span className="mr-2">Manual</span>
        </label>
      </div>
      <div>
         <h3 className="mb-4">Fuel Type</h3>
        <label  className="border border-gray-300  rounded-full px-4 py-2 mb-4 mr-5 background-btn3 " htmlFor="diesel">
          <input
            type="radio"
            id="diesel"
            name="fuel"
            className="  mb-4 mr-2"
            onChange={() => handleOptionChange("fuelType", "diesel")}
            checked={selected.fuelType === "diesel"}
          />
          <span className="mr-2">Diesel</span>
        </label>
        <label  className="border border-gray-300  rounded-full px-4 py-2 mb-4 mr-2 background-btn3 " htmlFor="petrol">
          <input
            type="radio"
            id="petrol"
            name="fuel"
            className=" mb-4 mr-2"
            onChange={() => handleOptionChange("fuelType", "petrol")}
            checked={selected.fuelType === "petrol"}
          />
          <span className="mr-2">Petrol</span>
        </label>
      </div>
      <div>
         <h3 className="mb-4">Air con</h3>
        <label  className="border border-gray-300  rounded-full px-4 py-2 mb-4 mr-2 background-btn3 " htmlFor="aircon">
          <input
            type="checkbox"
            id="aircon"
            name="aircon"
            className=" mb-4 mr-2"
            onChange={() => handleOptionChange("aircon", !selected.aircon)}
            checked={selected.aircon}
          />
          <span className="mr-2">Aircon</span>
        </label>
      </div>
    </div>
  );
};

export default Specifications;
