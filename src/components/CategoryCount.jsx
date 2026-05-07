function CategoryCount({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-2">
          Expense Count by Category
        </h2>
        <p className="text-muted">No data available yet.</p>
      </div>
    );
  }
  const categoryCounts = {};

  // Count number of expenses per category
  expenses.forEach((exp) => {
    if (categoryCounts[exp.category]) {
      categoryCounts[exp.category] += 1;
    } else {
      categoryCounts[exp.category] = 1;
    }
  });
  
  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold mb-3">Expense Count by Category</h2>

      {Object.keys(categoryCounts).length === 0 ? (
        <p className="text-muted">No expenses yet.</p>
      ) : (
        <ul className="space-y-2">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <li key={category} className="flex justify-between items-center">
              <span>{category}</span>
              <span className="font-semibold">{count} expenses</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryCount;
