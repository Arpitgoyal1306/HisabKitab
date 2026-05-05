function ResetButton({ setExpenses, setBudget }) {
  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to delete all data?",
    );

    if (confirmReset) {
      // Setting state via context automatically updates localStorage too
      // (ExpenseContext useEffect handles the save)
      setExpenses([]);
      setBudget("");
      // No need for window.location.reload() anymore
    }
  };

  return (
    <div className="card p-6">
      <button onClick={handleReset} className="btn btn-danger w-full">
        Reset All Data
      </button>
    </div>
  );
}

export default ResetButton;
