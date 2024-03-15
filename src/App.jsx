import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar/index';
import ExpenseModal from './component/table/ExpenseModal';

const App = () => {
  //FOR EXPENSES
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

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
       <Navbar></Navbar>
      <div className="container mx-auto">
        {/* First Row with 0 columns */}
        <div className="flex justify-center items-center h-20">
          {/* Heading / Page title - Expense Tracker */}
          <img src="src/assets/images/logo.png" alt="Expense Tracker Logo" className="image-logo"/>
        </div>

        {/* Second Row with 2 columns */}
        <div className= "row2 flex justify-between py-2">
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

        {/* third Row with 2 columns */}
        <div className= "expenseTable flex justify-between py-2">
          <div className="w-1/2 bg-white p-4 rounded shadow-lg flex justify-center text-center ">
            {/* Button in the center of Column 1 */}
    
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-indigo-50..0 w-1/2 bg-white p-4 rounded shadow-lg flex justify-center items-center">
            {/* Button in the center of Column 2 */}
         
          </div>
        </div>

        {/* Forth Row with 3 columns, background light grey */}
        <div className=" bg-gray-200 p-2">
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
      <ExpenseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddExpense={handleAddExpense}
        expenseName={expenseName}
        setExpenseName={setExpenseName}
        expenseAmount={expenseAmount}
        setExpenseAmount={setExpenseAmount}
        expenseDate={expenseDate}
        setExpenseDate={setExpenseDate}
      />
    </div>
  );
};

export default App;


