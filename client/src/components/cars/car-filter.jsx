import React, { useState } from "react";
import "./car-filter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const CarFilter = ({ cars, onFilterChange }) => {

  
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [models, setModels] = useState([]);

  const handleMakeChange = (event) => {
    const selectedMake = event.target.value;
    setSelectedMake(selectedMake);

    
    const filteredModels = cars
      .filter(car => car.make === selectedMake)
      .map(car => car.model);

   
    setModels([...new Set(filteredModels)]);
    setSelectedModel(''); // Reset model selection when make changes

    // Notify parent component of the change
    onFilterChange({ make: selectedMake, model: '', price: selectedPrice });
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);

    // Notify parent component of the change
    onFilterChange({ make: selectedMake, model: event.target.value, price: selectedPrice });
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);

    // Notify parent component of the change
    onFilterChange({ make: selectedMake, model: selectedModel, price: event.target.value });
  };

  // Extract unique makes for the make dropdown using the cars prop
  const uniqueMakes = [...new Set(cars.map(car => car.make))];

  return (
    <div className="filter-section flex justify-center mb-5 mt-10">
      <div className='filter-container flex justify-around background w-1/3 gap-3 py-4 shadow shadow-black shadow-lg rounded-xl'>
        {/* Make Filter */}
        <div className="flex items-center space-x-2">
          <select
            id="make"
            className="filter-select p-2 rounded-md bg-white text-black"
            value={selectedMake}
            onChange={handleMakeChange}
          >
            <option value="" disabled hidden>Make</option>
            <option value="">All Makes</option> {/* Default option */}
            {uniqueMakes.map((make, index) => (
              <option key={index} value={make}>{make}</option>
            ))}
          </select>
        </div>

        {/* Model Filter */}
        <div className="flex items-center space-x-2">
          <select
            id="model"
            className="filter-select p-2 rounded-md bg-white text-black"
            value={selectedModel}
            onChange={handleModelChange}
            disabled={!selectedMake} // Disable until a make is selected
          >
            <option value="" disabled hidden>Model</option>
            <option value="">All Models</option> {/* Default option */}
            {models.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="flex items-center space-x-2">
          <select
            id="price"
            className="filter-select p-2 space-y-10 rounded-md bg-white text-black"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="" disabled hidden>Price</option>
            <option value="">All Prices</option> {/* Default option */}
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
            <option value="0-250">£0 - £250/day</option>
            <option value="over-250">Over £250/day</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CarFilter;

