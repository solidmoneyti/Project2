import React from 'react';

const SecondRow = ({ handleOpenModal }) => {
  return (
    <div className="row2 flex justify-center">
        <div className="w-full bg-sky-950 p-4 rounded shadow-lg flex justify-evenly text-center">
          {/* Button in the center of Column 1 */}
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
            + Income/Expense
          </button>
          {/* Button in the center of Column 2 */}
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Cost of living search
          </button>
              </div>
        </div>
  );
};

export default SecondRow;
