import React, { useState } from 'react';
import { getCostofLiving } from '../api/api'; // Importing the getCostofLiving function

const Card = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [costData, setCostData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const data = await getCostofLiving(country, city);
      console.log(data)
      if (data) {
        const costOfHousing = data["Rent Per Month prices"].find(price => price.Cost === "One bedroom apartment in city centre")?.Value || 'Data not available';
        const costOfFeeding = data["Restaurants prices"].find(price => price.Cost === "Meal for 2 People, Mid-range Restaurant, Three-course")?.Value || 'Data not available';
        const costOfTransport = data["Transportation prices"].find(price => price.Cost === "Monthly Pass, Regular Price")?.Value || 'Data not available';

        const extractedData = {
        costOfHousing,
        costOfFeeding,
        costOfTransport,
        };
        setCostData(extractedData);
      } else {
        setError('Cost of living data not available. Please check if the provided country and city are valid.');
      }
    } catch (error) {
      setError('Failed to fetch cost of living data. Please try again later or contact support for assistance.');
      console.error(error);
    }
  };

  console.log(country);
  console.log(city);
  
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
