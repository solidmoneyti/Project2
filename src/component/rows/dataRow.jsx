import React from 'react';
import '../rows/tableStyles.css' // Import the CSS file containing table styles

const DataRow = ({ tableData }) => {
  return (
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
          {tableData.map((expense, index) => (
            <tr key={index}>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataRow;

