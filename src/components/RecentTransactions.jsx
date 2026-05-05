function RecentTransactions({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>

        <p className="text-muted">No transactions yet.</p>
      </div>
    );
  }

  // Sort by date (newest first)
  const recentExpenses = [...expenses]
    .filter((exp) => exp && exp.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  // Currency formatter
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold mb-3">Recent Transactions</h2>

      <ul className="space-y-1">
        {recentExpenses.map((exp) => (
          <li
            key={exp.id}
            className="flex justify-between items-center border-b border-[var(--border)] py-3 last:border-none"
          >
            <div>
              <p className="font-medium">{exp.title}</p>

              <p className="text-sm text-muted">
                {exp.category} • {exp.date}
              </p>
            </div>

            <span className="font-semibold">{formatCurrency(exp.amount)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;
