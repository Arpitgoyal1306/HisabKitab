function MonthlyReport({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Monthly Report</h2>
        <p className="text-muted">No data available yet.</p>
      </div>
    );
  }

  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Filter expenses for current month safely
  const monthlyExpenses = expenses.filter((exp) => {
    if (!exp.date) return false;

    const expenseDate = new Date(exp.date);

    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  // Total spent
  const monthlyTotal = monthlyExpenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0,
  );

  // Number of transactions
  const transactionCount = monthlyExpenses.length;

  // Days passed this month
  const daysSoFar = today.getDate();

  // Total days in month
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Remaining days
  const remainingDays = totalDaysInMonth - daysSoFar;

  // Average per day
  const averagePerDay =
    daysSoFar > 0 ? Math.round(monthlyTotal / daysSoFar) : 0;

  // Average per transaction
  const averagePerTransaction =
    transactionCount > 0 ? Math.round(monthlyTotal / transactionCount) : 0;

  return (
    <div className="card p-6 space-y-4">
      <div>
        <p className="eyebrow">Monthly</p>
        <h2 className="text-lg font-semibold mt-2">Monthly Report</h2>
      </div>

      <div>
        <p className="text-muted">Total spent this month</p>
        <h3 className="text-2xl font-semibold">₹ {monthlyTotal}</h3>
      </div>

      <div>
        <p className="text-muted">Number of transactions</p>
        <h3 className="text-2xl font-semibold">{transactionCount}</h3>
      </div>

      <div>
        <p className="text-muted">Average spending per day</p>
        <h3 className="text-2xl font-semibold">₹ {averagePerDay}</h3>
      </div>

      <div>
        <p className="text-muted">Average per transaction</p>
        <h3 className="text-2xl font-semibold">₹ {averagePerTransaction}</h3>
      </div>

      <div>
        <p className="text-muted">Remaining days in month</p>
        <h3 className="text-2xl font-semibold">{remainingDays} days</h3>
      </div>
    </div>
  );
}

export default MonthlyReport;
