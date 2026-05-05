import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

import WeeklyReport from "../components/WeeklyReport";
import MonthlyReport from "../components/MonthlyReport";
import HighestExpense from "../components/HighestExpense";
import AverageExpense from "../components/AverageExpense";
import CategorySummary from "../components/CategorySummary";
import CategoryCount from "../components/CategoryCount";
import ExportButton from "../components/ExportButton";

function Reports() {
  // Same shared context - data is always in sync with Dashboard
  const { expenses } = useContext(ExpenseContext);

  return (
    <div className="space-y-8">
      <section className="card-hero p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="eyebrow">Reports</p>
          <h1 className="text-3xl font-semibold">Financial Reports</h1>
          <p className="text-muted mt-1">
            Overview of your spending patterns and trends.
          </p>
        </div>
        <ExportButton expenses={expenses} />
      </section>

      {/* Weekly + Monthly side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyReport expenses={expenses} />
        <MonthlyReport expenses={expenses} />
      </div>

      {/* Highest + Average side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HighestExpense expenses={expenses} />
        <AverageExpense expenses={expenses} />
      </div>

      {/* Category breakdown side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategorySummary expenses={expenses} />
        <CategoryCount expenses={expenses} />
      </div>
    </div>
  );
}

export default Reports;
