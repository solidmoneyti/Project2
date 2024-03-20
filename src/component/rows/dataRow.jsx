import React from 'react';
import '../rows/tableStyles.css' // Import the CSS file containing table styles

const DataRow = ({ tableData, handleDelete }) => {

  return (
    <div className="flex justify-center py-8">
      <div className="w-full bg-sky-950 p-4 rounded shadow-lg flex justify-evenly text-center">
        <table className='bg-white p-4 rounded shadow-lg border-0'>
          <thead className='bg-white p-4 rounded'>
            <tr>
              <th className='bg-blue-500 border-0'>Name</th>
              <th className='bg-blue-500 border-0'>Amount</th>
              <th className='bg-blue-500 border-0'>Date</th>
              <th className='bg-blue-500 border-0'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((transaction, index) => (
              <tr key={index} className='border-0'>
                <td className='border-0 text-black font-bold' style={{backgroundColor: transaction.type === 'expense' ? 'rgb(244, 151, 142)' : 'rgb(149, 213, 178)'}}>{transaction.name}</td>
                <td className='border-0 text-black font-bold' style={{backgroundColor: transaction.type === 'expense' ? 'rgb(244, 151, 142)' : 'rgb(149, 213, 178)'}}>{transaction.amount}</td>
                <td className='border-0 text-black font-bold' style={{backgroundColor: transaction.type === 'expense' ? 'rgb(244, 151, 142)' : 'rgb(149, 213, 178)'}}>{transaction.date}</td>
                <td className='border-0 w-10 pl-6' style={{backgroundColor: transaction.type === 'expense' ? 'rgb(244, 151, 142)' : 'rgb(149, 213, 178)'}}><button className='block' onClick={() => handleDelete(index)}><svg className='flex ml-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataRow;

