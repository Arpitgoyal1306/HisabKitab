function Budget({ budget, setBudget, totalSpent }) {
  const numericBudget = Number(budget) || 0;

  const remaining = numericBudget - totalSpent;

  const warningThreshold = numericBudget * 0.2;

  const percentUsed =
    numericBudget > 0
      ? Math.min(Math.round((totalSpent / numericBudget) * 100), 100)
      : 0;

  let barColor = "bg-[var(--success)]";

  if (percentUsed >= 80) {
    barColor = "bg-[var(--accent)]";
  }

  if (percentUsed >= 100) {
    barColor = "bg-[var(--danger)]";
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="eyebrow">Plan</p>
        <h2 className="text-xl font-semibold mt-2">Budget</h2>
        <p className="text-sm text-muted mt-1">
          Set a monthly limit and track progress.
        </p>
      </div>

      <input
        type="number"
        placeholder="Enter Monthly Budget"
        value={budget ?? ""}
        onChange={(e) => {
          const value = e.target.value;

          if (value === "") {
            setBudget("");
          } else {
            setBudget(Number(value));
          }
        }}
        className="input"
      />

      <div className="flex flex-col gap-1 text-sm text-muted">
        <span>Total Spent: ₹ {totalSpent}</span>
        <span>Remaining Budget: ₹ {remaining}</span>
      </div>

      <div className="w-full bg-[var(--surface-2)] h-2.5 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: percentUsed + "%" }}
        />
      </div>

      <p className="text-sm text-muted">{percentUsed}% used</p>

      {remaining < 0 && (
        <p className="font-medium text-[var(--danger)]">Budget exceeded</p>
      )}

      {remaining > 0 && remaining <= warningThreshold && (
        <p className="font-medium text-[var(--accent)]">
          Budget is almost finished
        </p>
      )}
    </div>
  );
}

export default Budget;
