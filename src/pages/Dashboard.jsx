import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";
import RecentTransactions from "../components/RecentTransactions";
import ResetButton from "../components/ResetButton";
import Budget from "../components/Budget";
import BudgetStatus from "../components/BudgetStatus";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import CategoryPreview from "../components/CategoryPreview";

function Dashboard() {
  // All data comes from shared context - this fixes the data disappearing bug
  const { expenses, setExpenses, budget, setBudget } =
    useContext(ExpenseContext);

  // Search, filter, sort are local UI state - fine to keep here
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("date");

  // SAFELY CALCULATE DERIVED VALUES - NO NaN POSSIBLE
  const totalSpent = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount || 0),
    0,
  );
  const transactionCount = expenses.length;
  const numericBudget = Number(budget) || 0;
  const remainingBudget = numericBudget - totalSpent;
  const percentageUsed =
    numericBudget > 0 ? (totalSpent / numericBudget) * 100 : 0;
  const totalSpentFormatted = totalSpent.toLocaleString("en-IN");

  // Apply search, filter, sort to expenses for the list
  const filteredExpenses = expenses
    .filter((exp) => {
      const matchesSearch = (exp.title || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || exp.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOption === "amount") return Number(b.amount) - Number(a.amount);
      if (sortOption === "title")
        return (a.title || "").localeCompare(b.title || "");
      // default: date newest first
      return new Date(b.date) - new Date(a.date);
    });

  return (
    <div className="space-y-8">
      <section className="card-hero p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Dashboard</p>
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Your money, organized
            </h1>
            <p className="text-muted mt-2">
              Track, plan, and adjust your spending with a clear view of every
              transaction.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 lg:ml-auto">
            <div>
              <p className="label">Total spent</p>
              <p className="text-2xl font-semibold">₹ {totalSpentFormatted}</p>
            </div>
            <div>
              <p className="label">Transactions</p>
              <p className="text-2xl font-semibold">{transactionCount}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <SummaryCard
            totalSpent={totalSpent}
            transactionCount={transactionCount}
          />
        </div>
        <div className="card p-6">
          <Budget budget={budget} setBudget={setBudget} expenses={expenses} />
        </div>
      </section>

      <BudgetStatus budget={budget} totalSpent={totalSpent} />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
        <RecentTransactions expenses={expenses} />
      </section>

      <CategoryPreview expenses={expenses} />

      <section className="card p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div>
            <p className="eyebrow">Find</p>
            <h2 className="text-lg font-semibold">Search, filter, and sort</h2>
            <p className="text-muted text-sm mt-1">
              Narrow down the list before you edit or review.
            </p>
          </div>
          <span className="badge">{filteredExpenses.length} items</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </section>

      <section className="card p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <p className="eyebrow">Ledger</p>
            <h2 className="text-xl font-semibold">All Expenses</h2>
          </div>
          <span className="badge">{filteredExpenses.length} items</span>
        </div>
        <ExpenseList
          expenses={filteredExpenses}
          setExpenses={setExpenses}
          allExpenses={expenses}
        />
      </section>

      <ResetButton setExpenses={setExpenses} setBudget={setBudget} />
    </div>
  );
}

export default Dashboard;
