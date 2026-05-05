import ExpenseItem from "./ExpenseItem";

// expenses = filtered list to display
// setExpenses = context setter
// allExpenses = full unfiltered list (needed for edit/delete to work correctly when filtered)
function ExpenseList({ expenses, setExpenses, allExpenses }) {
  if (expenses.length === 0) {
    return (
      <div className="card-dashed p-6 text-center">
        <p className="text-lg font-medium">No expenses found.</p>
        <p className="text-muted text-sm mt-1">
          Try adjusting your search or add a new expense.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          exp={exp}
          // Pass full list for edit/delete so filtered view doesn't cause data loss
          expenses={allExpenses || expenses}
          setExpenses={setExpenses}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
