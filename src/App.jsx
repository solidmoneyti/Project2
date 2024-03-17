import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar/index';
import ExpenseModal from './component/table/ExpenseModal';
import SecondRow from './component/rows/SecondRow';
import ThirdRow from './component/rows/ThirdRow';
import DataRow from './component/rows/dataRow';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [tableData, setTableData] = useState([]); // State to manage table data

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddExpense = () => {
    console.log("Adding expense:", expenseName, expenseAmount, expenseDate);
    // Add the new expense to table data
    const newExpense = {
      name: expenseName,
      amount: expenseAmount,
      date: expenseDate
    };
    console.log("New expense:", newExpense);
    setTableData([...tableData, newExpense]);
  
    // Clear input fields
    setExpenseName('');
    setExpenseAmount('');
    setExpenseDate('');
    console.log("Table data after adding:", tableData);
    // Close the modal
    handleCloseModal();
  };
  

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container mx-auto">
        {/* First Row with 0 columns */}
        <div className="flex justify-center items-center h-20">
          {/* Heading / Page title - Expense Tracker */}
          <img src="src/assets/images/logo.png" alt="Expense Tracker Logo" className="image-logo"/>
        </div>
  
        {/* Second Row */}
        <SecondRow handleOpenModal={handleOpenModal} />
        
        {/* DataRow component */}
        <DataRow tableData={tableData} />

  
        {/* Third Row */}
        <ThirdRow />
  
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
    </div>
  );
};

export default App;
