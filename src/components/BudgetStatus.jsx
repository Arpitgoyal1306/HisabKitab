function BudgetStatus({ budget, totalSpent }) {
  const numericBudget = Number(budget) || 0;

  const remaining = numericBudget - totalSpent;

  if (numericBudget === 0) {
    return null;
  }

  const statusClass =
    remaining >= 0 ? "callout callout-success" : "callout callout-danger";

  return (
    <div className={statusClass}>
      <p className="eyebrow">Budget status</p>
      {remaining >= 0 ? (
        <p className="mt-2 text-sm">
          You are within your budget. Remaining: ₹ {remaining}
        </p>
      ) : (
        <p className="mt-2 text-sm">
          You have exceeded your budget. Overspent: ₹ {Math.abs(remaining)}
        </p>
      )}
    </div>
  );
}

export default BudgetStatus;
