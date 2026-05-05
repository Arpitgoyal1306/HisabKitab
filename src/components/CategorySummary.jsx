function CategorySummary({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Category-wise Spending</h2>
        <p className="text-muted">No data available yet.</p>
      </div>
    );
  }
  const categoryTotals = {};

  // Calculate totals per category

  expenses.forEach((exp) => {
    if (categoryTotals[exp.category]) {
      categoryTotals[exp.category] += exp.amount;
    } else {
      categoryTotals[exp.category] = exp.amount;
    }
  });

  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold mb-3">Category-wise Spending</h2>

      {Object.keys(categoryTotals).length === 0 ? (
        <p className="text-muted">No expenses yet.</p>
      ) : (
        <ul className="space-y-2">
          {Object.entries(categoryTotals).map(([category, total]) => (
            <li key={category} className="flex justify-between items-center">
              <span>{category}</span>
              <span className="font-semibold">₹ {total}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategorySummary;
