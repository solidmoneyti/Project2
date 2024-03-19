import React from 'react';
import DoughnutChart from '../chart/DoughnutChart';
import Card from '../Fetch/Card';
// import { c } from 'vite/dist/node/types.d-FdqQ54oU';

const ThirdRow = ( { chartData} ) => {

  return (
    <div className="bg-gray-200 p-8">
      <div className="flex justify-between">
        <div className="w-1/3 bg-white p-4 rounded shadow-lg text-black">
          {/* First column content */}
          Income/Expenditure output
        </div>
        <div className="w-1/3 bg-white p-4 rounded shadow-lg text-black">
          {/* Second column content */}
          Chart/Graph
          <DoughnutChart chartData={chartData}/>
        </div>
        <div className="w-1/3 bg-white p-4 rounded shadow-lg text-black">
          {/* Third column content */}
          API Fetch
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;