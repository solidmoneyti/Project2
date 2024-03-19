import React, { useState } from 'react';

const ExpenseModal = ({ isOpen, onClose, onAddTransaction }) => {
  const [transactionType, setTransactionType] = useState('expense');
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState('');

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };
  const handleAddButtonClick = () => {
    const newTransaction = {
      type: transactionType,
      name: transactionName,
      amount: parseFloat(transactionAmount),
      date: transactionDate
    };
    onAddTransaction(newTransaction);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
        <div className="relative bg-white rounded-lg w-1/3">
          <div className="p-8">
            <h2 className="text-lg font-semibold mb-4 text-black">Add {transactionType === 'expense' ? 'Expense' : 'Income'}</h2>
            <select
              value={transactionType}
              onChange={handleTransactionTypeChange}
              className="border border-gray-300 rounded-lg mb-4 w-full px-4 py-2"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
              </select>
            <input type="text" placeholder="Transaction Name" className="border border-gray-300 rounded-lg mb-4 w-full px-4 py-2" value={transactionName} onChange={(e) => setTransactionName(e.target.value)} />
            <input type="number" placeholder="Amount" className="border border-gray-300 rounded-lg mb-4 w-full px-4 py-2" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} />
            <input type="date" placeholder="Date" className="border border-gray-300 rounded-lg mb-4 w-full px-4 py-2" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} />
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddButtonClick}>Add</button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4" onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ExpenseModal;
