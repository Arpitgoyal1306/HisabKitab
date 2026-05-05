function CategoryPreview({ expenses }) {
  const categoryTotals = {};

  // Calculate totals
  expenses.forEach((exp) => {
    if (categoryTotals[exp.category]) {
      categoryTotals[exp.category] += exp.amount;
    } else {
      categoryTotals[exp.category] = exp.amount;
    }
  });

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="eyebrow">Snapshot</p>
          <h2 className="text-lg font-semibold mt-2">
            Quick Category Overview
          </h2>
        </div>
        <span className="badge">Top categories</span>
      </div>

      {Object.keys(categoryTotals).length === 0 ? (
        <p className="text-muted">No data available yet.</p>
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

export default CategoryPreview;
