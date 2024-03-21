// SummaryTable.jsx
import React, { useState } from 'react';

const SummaryTable = ( {totalIncome, totalExpense} ) => {

  return (
    <div>
      <table className="border-separate border border-slate-500">
        <thead>
          <tr>
          
            <th className="border border-slate-600; bg-orange-100 text-black">Totals</th>
            <th className="border border-slate-600; bg-orange-100 text-black">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700; bg-orange-100 text-black">Total Income</td>
            <td className="border border-slate-700; bg-orange-100 text-black">{totalIncome.total}</td>
          </tr>
          <tr>
            <td className="border border-slate-700; bg-orange-100 text-black">Total Expense</td>
            <td className="border border-slate-700; bg-orange-100 text-black">{totalExpense.total}</td>
          </tr>
          <tr>
            <td className="border border-slate-700; bg-orange-100 text-black">Savings</td>
            <td className="border border-slate-700; bg-orange-100 text-black"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
