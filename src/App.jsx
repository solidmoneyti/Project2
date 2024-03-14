import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  //FOR EXPENSES
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
 //FOR API DATA
  // const [costOfLivingData, setCostOfLivingData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddExpense = () => {
    // expense output
    console.log("Expense Name:", expenseName);
    console.log("Expense Amount:", expenseAmount);
    console.log("Expense Date:", expenseDate);

    // Close the modal after adding expense
    handleCloseModal();
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto">
        {/* First Row with 0 columns */}
        <div className="flex justify-center items-center h-20">
          {/* Heading / Page title - Expense Tracker */}
          <img src="src/assets/images/logo.png" alt="Expense Tracker Logo" className="image-logo"/>
        </div>

        {/* Second Row with 2 columns */}
        <div className= "row2 flex justify-between py-8">
          <div className="w-1/2 bg-white p-4 rounded shadow-lg flex justify-center text-center ">
            {/* Button in the center of Column 1 */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
              + Expense
            </button>
          </div>
          <div className="w-1/2 bg-white p-4 rounded shadow-lg flex justify-center items-center">
            {/* Button in the center of Column 2 */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              + Income 
            </button>
          </div>
        </div>

        {/* Third Row with 3 columns, background light grey */}
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
      </div>

      {/* Expense Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
          <div className="relative bg-white rounded-lg w-1/3">
            <div className="p-8">
              <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
              <input type="text" placeholder="Expense Name" className="border border-gray-300 rounded-lg mb-4 w-full px-4 py-2" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
              <input type="number" placeholder="Amount" className="border border-gray-300 rounded-lg mb-4 w-full px-4 py-2" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />
              <input type="date" placeholder="Date" className="border border-gray-300 rounded-lg mb-4 w-full px-4 py-2" value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} />
              <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddExpense}>Add</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4" onClick={handleCloseModal}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
