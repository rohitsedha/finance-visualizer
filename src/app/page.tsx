import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import MonthlyChart from '@/components/MonthlyChart';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/transactions');
  const transactions = await response.json();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Finance Tracker</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <TransactionForm />
        <MonthlyChart data={processMonthlyData(transactions)} />
      </div>
      <TransactionList data={transactions} />
    </main>
  );
}

function processMonthlyData(transactions: any[]) {
  // Group transactions by month and sum amounts
  return transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + transaction.amount;
    return acc;
  }, {});
}
