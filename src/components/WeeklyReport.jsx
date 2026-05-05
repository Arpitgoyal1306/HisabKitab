function WeeklyReport({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Weekly Report</h2>
        <p className="text-muted">No data available yet.</p>
      </div>
    );
  }

  const today = new Date();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  // Filter last 7 days safely
  const weeklyExpenses = expenses.filter((exp) => {
    if (!exp.date) return false;

    const expenseDate = new Date(exp.date);

    return expenseDate >= sevenDaysAgo && expenseDate <= today;
  });

  // Total spent
  const weeklyTotal = weeklyExpenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0,
  );

  // Number of transactions
  const transactionCount = weeklyExpenses.length;

  // Average per day
  const averagePerDay = transactionCount > 0 ? Math.round(weeklyTotal / 7) : 0;

  return (
    <div className="card p-6 space-y-4">
      <div>
        <p className="eyebrow">Weekly</p>
        <h2 className="text-lg font-semibold mt-2">Weekly Report</h2>
      </div>

      <div>
        <p className="text-muted">Total spent in last 7 days</p>
        <h3 className="text-2xl font-semibold">₹ {weeklyTotal}</h3>
      </div>

      <div>
        <p className="text-muted">Number of transactions</p>
        <h3 className="text-2xl font-semibold">{transactionCount}</h3>
      </div>

      <div>
        <p className="text-muted">Average spending per day</p>
        <h3 className="text-2xl font-semibold">₹ {averagePerDay}</h3>
      </div>
    </div>
  );
}

export default WeeklyReport;
