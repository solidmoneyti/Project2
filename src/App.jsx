import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar/index';
import ExpenseModal from './component/table/ExpenseModal';
import SecondRow from './component/rows/SecondRow';
import ThirdRow from './component/rows/ThirdRow';

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
      <Navbar />
      <div className="container mx-auto">
        {/* First Row with 0 columns */}
        <div className="flex justify-center items-center h-20">
          {/* Heading / Page title - Expense Tracker */}
          <img src="src/assets/images/logo.png" alt="Expense Tracker Logo" className="image-logo"/>
        </div>
  
        {/* Second Row */}
        <SecondRow handleOpenModal={handleOpenModal} />
  
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