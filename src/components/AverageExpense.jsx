function AverageExpense({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Average Expense</h2>
        <p className="text-muted">No expenses yet.</p>
      </div>
    );
  }

  // Safe total calculation
  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  const transactionCount = expenses.length;

  // Average per transaction
  const average =
    transactionCount > 0 ? Math.round(total / transactionCount) : 0;

  // Days covered (from first expense to today)
  const firstDate = new Date(expenses[0].date);
  const today = new Date();

  const diffTime = today.getTime() - firstDate.getTime();

  const days = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 1);

  // Average per day
  const averagePerDay = Math.round(total / days);

  // Currency formatting
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="card p-6 space-y-3">
      <div>
        <p className="eyebrow">Average</p>
        <h2 className="text-lg font-semibold mt-2">Average Expense</h2>
      </div>

      <p className="text-lg font-semibold">
        {formatCurrency(average)} per transaction
      </p>

      <p className="text-sm text-muted">Based on {transactionCount} expenses</p>

      <div>
        <p className="text-muted">Average spending per day</p>

        <p className="text-lg font-semibold">{formatCurrency(averagePerDay)}</p>
      </div>
    </div>
  );
}

export default AverageExpense;
