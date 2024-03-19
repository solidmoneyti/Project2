import React, { useState } from 'react';
import { getCostofLiving } from '../api/api'; // Importing the getCostofLiving function

const Card = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [costData, setCostData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const data = await getCostofLiving(country,city); 
      const extractedData = {
        // country: data.CountryName,
        // city: data.name,
        costOfHousing: data.cost_of_living.housing,
        costOfTransport: data.cost_of_living.transportation,
        costOfFeeding: data.cost_of_living.food
      };
      setCostData(extractedData); // Update state with the result
    } catch (error) {
      setError(error.message); // Handle any errors
    }
  };

console.log (country);
console.log (city);
  
return (
    <div>
      <div>
        <label>
          Country:
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
      </div>
      <button onClick={handleClick}>Get Cost of Living</button>
      {costData && (
        <div>
          {/* Render the extracted data */}
          <h2>Cost of Living</h2>
          <p>City: {costData.city}</p>
          <p>Cost of Housing: {costData.costOfHousing}</p>
          <p>Cost of Transport: {costData.costOfTransport}</p>
          <p>Cost of Feeding: {costData.costOfFeeding}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>} {/* Render error if any */}
    </div>
  );
};

export default Card;