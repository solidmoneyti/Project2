import React from 'react';
import DoughnutChart from '../chart/DoughnutChart';
import Card from '../Fetch/Card';
import SummaryTable from '../table/SummeryTable'; // Importing the SummaryTable component
// import { c } from 'vite/dist/node/types.d-FdqQ54oU';

const ThirdRow = ( { chartData, totalIncome, totalExpense, totalSaving} ) => {

  return (
    <div className="block justify-center">
      <div className="w-full bg-sky-950 p-4 rounded shadow-lg flex">
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* First column content */}
          <span className='flex justify-left font-bold '>Summary</span>
          <SummaryTable totalExpense={totalExpense} totalIncome={totalIncome} totalSaving={totalSaving}/>
        </div>
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* Second column content */}
          <span className='flex justify-left font-bold'>Summary chart</span>
          <DoughnutChart chartData={chartData} totalSaving={totalSaving}/>
        </div>
        <div className="w-1/3 h-auto bg-white m-2 p-4 rounded shadow-lg text-black">
          {/* Third column content */}
          <span className='flex justify-left font-bold'>API Fetch</span>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;