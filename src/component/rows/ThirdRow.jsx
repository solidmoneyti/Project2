import React from 'react';
import Chart from 'chart.js/auto';
import DoughnutChart from '../chart/DoughnutChart';
import { CategoryScale } from "chart.js";
import { Colors } from 'chart.js';
// import { c } from 'vite/dist/node/types.d-FdqQ54oU';

Chart.register(CategoryScale);
Chart.register(Colors);


const ThirdRow = ( { chartData} ) => {

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
          <DoughnutChart chartData={chartData}/>
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