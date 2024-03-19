import React, { useState } from 'react';
import ExpenseModal from '../component/table/ExpenseModal';
import SecondRow from '../component/rows/SecondRow';
import ThirdRow from '../component/rows/ThirdRow';
import DataRow from '../component/rows/dataRow';
import { Expense } from '../utils/Data';

const Calculator = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactionName, setTransactionName] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [transactionDate, setTransactionDate] = useState('');
    const [tableData, setTableData] = useState([]);

    //For CHART
    const [chartData, setChartData] = useState({
        labels: Expense.map((data) => data.category),
        datasets: [{
        label: 'Cost',
        data: Expense.map((data) => data.amount),
        borderWidth: 2,
        hoverBorderColor: 'rgb(0, 0, 0)',
        hoverBorderWidth: 2,
        }]
    })

    const handleChartChanges = () => {
        setChartData((chartData) => ({
            labels: Expense.map((data) => data.category),
            datasets: [{
            ...chartData.datasets,
            data: Expense.map((data) => data.amount),
            }]
        })
        )
    }

    

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const handleAddTransaction = (newTransaction) => {
        console.log("Adding transaction:", newTransaction);
        setTableData([...tableData, newTransaction]);

        // Updates charts with new data
        Expense.push(newTransaction);
        handleChartChanges();

        // Clear input fields
        setTransactionName('');
        setTransactionAmount('');
        setTransactionDate('');

        // Close the modal
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
    
            {/* Second Row */}
            <SecondRow handleOpenModal={handleOpenModal} />
            
            {/* DataRow component */}
            <DataRow tableData={tableData} />

    
            {/* Third Row */}
            <ThirdRow chartData={chartData}/>
    
            {/* Expense Modal */}
            <ExpenseModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onAddTransaction={handleAddTransaction}
                    transactionName={transactionName}
                    setTransactionName={setTransactionName}
                    transactionAmount={transactionAmount}
                    setTransactionAmount={setTransactionAmount}
                    transactionDate={transactionDate}
                    setTransactionDate={setTransactionDate}
            />
        </div>
        </div>
    );
}

export default Calculator;