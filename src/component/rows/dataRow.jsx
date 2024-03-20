import React from 'react';
import '../rows/tableStyles.css' // Import the CSS file containing table styles

const DataRow = ({ tableData }) => {
  return (
 LocationForm
    <div className="data-row flex justify-center py-8">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>

    <div className="flex justify-center py-8">
      <div className="w-full bg-sky-950 p-4 rounded shadow-lg flex justify-evenly text-center">
        <table className='bg-white p-4 rounded shadow-lg border-0'>
          <thead className='bg-white p-4 rounded'>
            <tr>
              <th className='bg-blue-500 border-0'>Name</th>
              <th className='bg-blue-500 border-0'>Amount</th>
              <th className='bg-blue-500 border-0'>Date</th>
 main
            </tr>
          </thead>
          <tbody>
            {tableData.map((transaction, index) => (
              <tr key={index} className='border-0'>
                <td className='border-0 text-black font-bold' style={{backgroundColor: transaction.type === 'expense' ? 'rgb(244, 151, 142)' : 'rgb(149, 213, 178)'}}>{transaction.name}</td>
                <td className='border-0 text-black font-bold' style={{backgroundColor: transaction.type === 'expense' ? 'rgb(244, 151, 142)' : 'rgb(149, 213, 178)'}}>{transaction.amount}</td>
                <td className='border-0 text-black font-bold' style={{backgroundColor: transaction.type === 'expense' ? 'rgb(244, 151, 142)' : 'rgb(149, 213, 178)'}}>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataRow;

