import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { Expense } from './utils/Data'
import DoughnutChart from './component/chart/DoughnutChart';
import { Colors } from 'chart.js';
import './App.css';
import Navbar from './component/Navbar/index';
import ExpenseModal from './component/table/ExpenseModal';
import SecondRow from './component/rows/SecondRow';
import ThirdRow from './component/rows/ThirdRow';
import DataRow from './component/rows/dataRow';

Chart.register(CategoryScale);
Chart.register(Colors);

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  //FOR CHART
  const [chartData, setChartData] = useState({
    labels: Expense.map((data) => data.category),
    datasets: [{
      label: 'Cost',
      data: Expense.map((data) => data.cost),
      borderWidth: 2,
      hoverBorderColor: 'rgb(0, 0, 0)',
      hoverBorderWidth: 2,
    }]
  })
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
