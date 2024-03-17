import React from 'react';

const ThirdRow = () => {
  return (
    <div className="bg-gray-200 p-8">
      <div className="flex justify-between">
        <div className="w-1/3 bg-white p-4 rounded shadow-lg">
          {/* First column content */}
          Income/Expenditure output
        </div>
        <div className="w-1/3 bg-white p-4 rounded shadow-lg">
          {/* Second column content */}
          Chart/Graph
        </div>
        <div className="w-1/3 bg-white p-4 rounded shadow-lg">
          {/* Third column content */}
          API Fetch
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;