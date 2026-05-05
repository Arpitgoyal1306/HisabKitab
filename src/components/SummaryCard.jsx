function SummaryCard({ totalSpent, transactionCount }) {
  const safeTotal = Number(totalSpent) || 0;
  const safeCount = Number(transactionCount) || 0;

  // Average per transaction
  const average = safeCount > 0 ? Math.round(safeTotal / safeCount) : 0;

  // Currency formatter
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="space-y-4">
      <div>
        <p className="eyebrow">Overview</p>
        <h2 className="text-xl font-semibold mt-2">Summary</h2>
      </div>

      {/* Total Expenses */}
      <div>
        <p className="text-muted">Total Expenses</p>

        <h3 className="text-3xl font-semibold">{formatCurrency(safeTotal)}</h3>
      </div>

      {/* Transactions */}
      <div className="mt-5">
        <p className="text-muted">Number of Transactions</p>

        <h3 className="text-2xl font-semibold">{safeCount}</h3>
      </div>

      {/* Average */}
      <div className="mt-5">
        <p className="text-muted">Average per Transaction</p>

        <h3 className="text-xl font-semibold">{formatCurrency(average)}</h3>
      </div>
    </div>
  );
}

export default SummaryCard;
