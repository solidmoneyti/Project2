import React from 'react';
import DoughnutChart from '../chart/DoughnutChart';
// import { c } from 'vite/dist/node/types.d-FdqQ54oU';

const ThirdRow = ( { chartData} ) => {

  return (
    <div className="block justify-center">
      <div className="w-full bg-sky-950 p-4 rounded shadow-lg flex">
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* First column content */}
          <span className='flex justify-left'>Income/Expenditure output</span>
        </div>
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* Second column content */}
          <span className='flex justify-left'>Output chart</span>
          <DoughnutChart chartData={chartData}/>
        </div>
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* Third column content */}
          <span className='flex justify-left'>API Fetch</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;