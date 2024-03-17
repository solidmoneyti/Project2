import React from 'react';

const SecondRow = ({ handleOpenModal }) => {
  return (
    <div className="row2 flex justify-between py-8">
      <div className="w-1/2 bg-white p-4 rounded shadow-lg flex justify-center text-center">
        {/* Button in the center of Column 1 */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
          + Income/Expense
        </button>
      </div>
      <div className="w-1/2 bg-white p-4 rounded shadow-lg flex justify-center text-center">
        {/* Button in the center of Column 2 */}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Export
        </button>
      </div>
    </div>
  );
};

export default SecondRow;
