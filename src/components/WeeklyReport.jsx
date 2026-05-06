function WeeklyReport({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Weekly Report</h2>
        <p className="text-muted">No data available yet.</p>
      </div>
    );
  }

  // Get YYYY-MM-DD string in LOCAL time (en-CA locale always returns this format)
  function toDateStr(date) {
    return date.toLocaleDateString("en-CA");
  }

  const todayStr = toDateStr(new Date());

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
  const weekStartStr = toDateStr(sevenDaysAgo);

  // Simple string comparison — works perfectly for YYYY-MM-DD format
  const weeklyExpenses = expenses.filter(
    (exp) => exp.date && exp.date >= weekStartStr && exp.date <= todayStr
  );

  const weeklyTotal = weeklyExpenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  const transactionCount = weeklyExpenses.length;
  const averagePerDay = transactionCount > 0 ? Math.round(weeklyTotal / 7) : 0;
  const averagePerTransaction =
    transactionCount > 0 ? Math.round(weeklyTotal / transactionCount) : 0;

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

      <div>
        <p className="text-muted">Average per transaction</p>
        <h3 className="text-2xl font-semibold">₹ {averagePerTransaction}</h3>
      </div>
    </div>
  );
}

export default WeeklyReport;
