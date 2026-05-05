import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Link } from "react-router-dom";

function Home() {
  // Use context so Home always shows live data, not stale localStorage snapshot
  const { expenses, budget } = useContext(ExpenseContext);

  const totalSpent = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount || 0),
    0,
  );
  const transactionCount = expenses.length;
  const numericBudget = Number(budget) || 0;
  const remaining = numericBudget > 0 ? numericBudget - totalSpent : null;
  const totalSpentFormatted = totalSpent.toLocaleString("en-IN");
  const remainingFormatted =
    remaining !== null ? remaining.toLocaleString("en-IN") : null;

  return (
    <div className="space-y-10">
      <section className="card-hero p-7 sm:p-9">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <p className="eyebrow">Personal finance</p>
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Welcome to HisabKitab
            </h1>
            <p className="text-muted mt-3 max-w-2xl">
              Track every rupee with clarity. Capture spending, adjust budgets,
              and keep your day-to-day money decisions simple.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
              <Link to="/reports" className="btn btn-secondary">
                View Reports
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full lg:w-80">
            <div className="card-muted p-4">
              <p className="label">Total spent</p>
              <p className="text-2xl font-semibold mt-2">
                ₹ {totalSpentFormatted}
              </p>
            </div>
            <div className="card-muted p-4">
              <p className="label">Transactions</p>
              <p className="text-2xl font-semibold mt-2">{transactionCount}</p>
            </div>
            <div className="card-muted p-4">
              <p className="label">Budget remaining</p>
              <p className="text-2xl font-semibold mt-2">
                {remaining !== null ? `₹ ${remainingFormatted}` : "Not set"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <p className="eyebrow">Step 01</p>
          <h2 className="text-xl font-semibold mt-2">Capture expenses</h2>
          <p className="text-muted mt-2">
            Add entries in seconds and keep every purchase accounted for.
          </p>
        </div>
        <div className="card p-6">
          <p className="eyebrow">Step 02</p>
          <h2 className="text-xl font-semibold mt-2">Set a budget</h2>
          <p className="text-muted mt-2">
            Define a monthly limit and watch your progress in real time.
          </p>
        </div>
        <div className="card p-6">
          <p className="eyebrow">Step 03</p>
          <h2 className="text-xl font-semibold mt-2">Spot the pattern</h2>
          <p className="text-muted mt-2">
            Review reports to understand where money is going.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <p className="eyebrow">Clarity tips</p>
          <h2 className="text-xl font-semibold mt-2">Spend with intention</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li>Group your purchases into categories every week.</li>
            <li>Review the highest expense before the month ends.</li>
            <li>Track small, recurring costs so they do not pile up.</li>
          </ul>
        </div>
        <div className="card p-6">
          <p className="eyebrow">Stay in control</p>
          <h2 className="text-xl font-semibold mt-2">Your data stays local</h2>
          <p className="text-muted mt-3">
            HisabKitab keeps everything on your device, so you can focus on
            planning without worrying about sync or storage limits.
          </p>
          <div className="mt-5">
            <Link to="/about" className="btn btn-ghost">
              Learn more about the project
            </Link>
          </div>
        </div>
      </section>

      <section className="card-muted p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="eyebrow">Next step</p>
          <h3 className="text-xl font-semibold mt-2">
            Ready to manage today&apos;s spending?
          </h3>
          <p className="text-muted mt-2">
            Head to the dashboard to add new expenses and update your budget.
          </p>
        </div>
        <Link to="/dashboard" className="btn btn-primary">
          Open Dashboard
        </Link>
      </section>
    </div>
  );
}

export default Home;
