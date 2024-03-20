import React, { useState } from 'react';
import ExpenseModal from '../component/table/ExpenseModal';
import SecondRow from '../component/rows/SecondRow';
import ThirdRow from '../component/rows/ThirdRow';
import DataRow from '../component/rows/dataRow';
import { Expense } from '../utils/Expenses';

const Calculator = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactionName, setTransactionName] = useState('income');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [transactionDate, setTransactionDate] = useState('');
    const [tableData, setTableData] = useState([]);
    
    console.log(tableData)
    
    //For CHART
    const [chartData, setChartData] = useState({
        labels: Expense.map((data) => data.category),
        datasets: [{
        data: Expense.map((data) => data.amount),
        backgroundColor: 'rgb(244, 151, 142)',
        cutout: '70%',
        borderRadius: 30,
        }]
    })

    const handleChartChanges = () => {
        setChartData((chartData) => ({
            labels: Expense.map((data) => data.name),
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
        if(newTransaction.type === 'income') {
            Expense.push({
                category: '',
                amount: '',
                data: '',
            });
            handleChartChanges();   
        }


        if(newTransaction.type === 'expense') {
            Expense.push(newTransaction);
            handleChartChanges();   
        }

        // Clear input fields
        setTransactionName('');
        setTransactionAmount('');
        setTransactionDate('');

        // Close the modal
        handleCloseModal();
    };

    const handleDelete = (index) => {
        setTableData(tableData.filter((i) => tableData.indexOf(i) !== index));
        Expense.splice(index, 1);
        handleChartChanges();   
    }
    

    return (
        <div className="bg-gray-100 h-max">
        <div className="container mx-auto">
            {/* First Row with 0 columns */}
            <div className="flex justify-center items-center max-h-60 pl-9">
            {/* Heading / Page title - Expense Tracker */}
            <img src="src/assets/images/logo.png" alt="Expense Tracker Logo" className="max-h-svh"/>
            </div>
    
            {/* Second Row */}
            <SecondRow handleOpenModal={handleOpenModal} />
            
            {/* DataRow component */}
            <DataRow tableData={tableData} handleDelete={handleDelete}/>

    
            {/* Third Row */}
            <ThirdRow chartData={chartData}/>
    
            {/* Expense Modal */}
            <ExpenseModal
                    tableData={tableData}
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