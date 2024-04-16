import React, { useEffect, useState } from 'react';

interface Transaction {
  id: number;
  type: string;
  amount: number;
  date: string;
}

const TransactionsHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);

  useEffect(() => {
    // API call to fetch transactions
    setTransactions([
      { id: 1, type: 'deposit', amount: 100, date: '2023-04-15' },
      { id: 2, type: 'withdraw', amount: 50, date: '2023-04-16' },
      { id: 3, type: 'deposit', amount: 200, date: '2023-04-17' },
      { id: 4, type: 'withdraw', amount: 300, date: '2023-04-18' },
      { id: 5, type: 'deposit', amount: 150, date: '2023-04-19' },
      { id: 6, type: 'withdraw', amount: 120, date: '2023-04-20' },
      // more dummy data...
    ]);
  }, []);

  // Get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Transaction History</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-center">Amount</th>
            <th className="py-3 px-6 text-center">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {currentTransactions.map((transaction) => (
            <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{transaction.id}</td>
              <td className="py-3 px-6 text-left">{transaction.type}</td>
              <td className="py-3 px-6 text-center">${transaction.amount}</td>
              <td className="py-3 px-6 text-center">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(transactions.length / transactionsPerPage) }, (_, i) => i + 1).map(number => (
          <button key={number} onClick={() => paginate(number)} className="mx-1 px-4 py-2 border rounded-md bg-blue-500 text-white">
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TransactionsHistory;
