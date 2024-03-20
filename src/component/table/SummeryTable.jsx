// SummaryTable.jsx
import '../table/summertable'
<table />
import React from 'react';

const SummaryTable = () => {
  return (
    <div>
      <table className="border-separate border border-slate-500">
        <thead>
          <tr>
          
            <th className="border border-slate-600; background-color: rgb(255 237 213);">Totals</th>
            <th className="border border-slate-600; background-color: rgb(255 237 213);">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700; background-color: rgb(255 237 213);">Total Income</td>
            <td className="border border-slate-700; background-color: rgb(255 237 213);"></td>
          </tr>
          <tr>
            <td className="border border-slate-700; background-color: rgb(255 237 213);">Total Expense</td>
            <td className="border border-slate-700"></td>
          </tr>
          <tr>
            <td className="border border-slate-700; background-color: rgb(255 237 213);">Savings</td>
            <td className="border border-slate-700; background-color: rgb(255 237 213);"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
