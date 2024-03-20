import React from 'react';
import DoughnutChart from '../chart/DoughnutChart';
import Card from '../Fetch/Card';
// import { c } from 'vite/dist/node/types.d-FdqQ54oU';

const ThirdRow = ( { chartData} ) => {

  return (
    <div className="block justify-center">
      <div className="w-full bg-sky-950 p-4 rounded shadow-lg flex">
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* First column content */}
          <span className='flex justify-left font-bold '>Summary</span>
        </div>
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* Second column content */}
          <span className='flex justify-left font-bold'>Summary chart</span>
          <DoughnutChart chartData={chartData}/>
        </div>
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* Third column content */}
          LocationForm
          API Fetch
          <Card/>
          <span className='flex justify-left font-bold'>API Fetch</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;