import React, { useState } from 'react';
import ExpenseModal from '../component/table/ExpenseModal';
import SecondRow from '../component/rows/SecondRow';
import ThirdRow from '../component/rows/ThirdRow';
import DataRow from '../component/rows/dataRow';
import { Saving } from '../utils/Saving'
import { Expenses } from '../utils/Expenses';
import { Income} from '../utils/Income';

const Calculator = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactionName, setTransactionName] = useState('income');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [transactionDate, setTransactionDate] = useState('');
    const [tableData, setTableData] = useState([]);

    const [totalIncome, setTotalIncome] = useState({
        total: Income.map((data) => data.amount).reduce((a,b) => a + b, 0)
      });
    
    const [totalExpense, setTotalExpense] = useState({
        total: Expenses.map((data) => data.amount).reduce((a,b) => a + b, 0)
    });

    const [totalSaving, setTotalSaving] = useState({
        Saving: 0,
    })

    console.log(totalSaving)
    
    //For CHART
    const [chartData, setChartData] = useState({
        labels: Expenses.map((data) => data.category),
        datasets: [{
        data: Expenses.map((data) => data.amount),
        backgroundColor: 'rgb(244, 151, 142)',
        cutout: '70%',
        borderRadius: 30,
        }]
    })

    const handleChartChanges = () => {
        setChartData((chartData) => ({
            labels: Expenses.map((data) => data.name),
            datasets: [{
            ...chartData.datasets,
            data: Expenses.map((data) => data.amount),
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
            // Transaction.push({
            //     category: '',
            //     amount: '',
            //     data: '',
            // });
            Income.push(newTransaction)
            setTotalSaving((prev) => ({
                Saving: prev.Saving + newTransaction.amount
            }))
            setTotalIncome(() => ({
                total: Income.map((data) => data.amount).reduce((a,b) => a + b, 0)
            }))  
        }


        if(newTransaction.type === 'expense') {
            // Transaction.push(newTransaction);
            Expenses.push(newTransaction)
            setTotalSaving((prev) => ({
                Saving: prev.Saving - newTransaction.amount
            }))
            setTotalExpense(() => ({
                total: Expenses.map((data) => data.amount).reduce((a,b) => a + b, 0)
            }))
            handleChartChanges();   
        }

        // Clear input fields
        setTransactionName('');
        setTransactionAmount('');
        setTransactionDate('');

        // Close the modal
        handleCloseModal();
    };

    const handleDelete = (index, type) => {
        setTableData(tableData.filter((i) => tableData.indexOf(i) !== index));
        if (type === 'income') {
            Income.splice(index,1);
            setTotalIncome(() => ({
                total: Income.map((data) => data.amount).reduce((a,b) => a + b, 0)
            }))
        } else {
            Expenses.splice(index,1);
            setTotalExpense(() => ({
                total: Expenses.map((data) => data.amount).reduce((a,b) => a + b, 0)
            }))
        }
        handleChartChanges();   
    }

    return (
        <div className="bg-gray-100 h-max">
        <div className="container mx-auto">
            {/* First Row with 0 columns */}
            <div className="flex justify-center items-center max-h-60 pl-9">
            {/* Heading / Page title - Expense Tracker */}
            <img src="./public/logo.png" alt="Expense Tracker Logo" className="max-h-svh"/>
            </div>
    
            {/* Second Row */}
            <SecondRow handleOpenModal={handleOpenModal} />
            
            {/* DataRow component */}
            <DataRow tableData={tableData} handleDelete={handleDelete}/>

    
            {/* Third Row */}
            <ThirdRow chartData={chartData} totalIncome={totalIncome} totalExpense={totalExpense} totalSaving={totalSaving}/>
    
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