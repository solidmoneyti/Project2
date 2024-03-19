import React, { useState } from 'react';
import { getCostofLiving } from '../api/api'; // Importing the getCostofLiving function

const Card = () => {
  const [costData, setCostData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const data = await getCostofLiving(); // Call the getCostofLiving function
      setCostData(data); // Update state with the result
    } catch (error) {
      setError(error.message); // Handle any errors
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get Cost of Living</button>
      {costData && (
        <div>
          {/* Render the cost data */}
          <h2>Cost of Living</h2>
          <pre>{JSON.stringify(costData, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>} {/* Render error if any */}
    </div>
  );
};

export default Card;