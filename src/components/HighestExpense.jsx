function HighestExpense({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Highest Expense</h2>
        <p className="text-muted">No expenses yet.</p>
      </div>
    );
  }

  // Safely find highest expense
  const highest = expenses.reduce((max, exp) => {
    if (!exp || !exp.amount) return max;

    return Number(exp.amount) > Number(max.amount) ? exp : max;
  }, expenses[0]);

  // Total spending
  const totalSpent = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  // Percentage of total
  const percentage =
    totalSpent > 0
      ? Math.round((Number(highest.amount) / totalSpent) * 100)
      : 0;

  // Currency formatting
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="card p-6 space-y-2">
      <div>
        <p className="eyebrow">Peak</p>
        <h2 className="text-lg font-semibold mt-2">Highest Expense</h2>
      </div>

      <p className="font-semibold text-lg">{highest.title}</p>

      <p>Amount: {formatCurrency(highest.amount)}</p>

      <p className="text-sm text-muted">Category: {highest.category}</p>

      <p className="text-sm text-muted">Date: {highest.date}</p>

      <span className="badge">{percentage}% of total spending</span>
    </div>
  );
}

export default HighestExpense;
