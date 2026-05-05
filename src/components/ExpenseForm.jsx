import { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {
  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("");

  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATION
    if (!title || !amount || !category || !date) {
      alert("Please fill out all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than zero.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    setExpenses((prev) => [...prev, newExpense]);

    // Clear form
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-5">
      <div>
        <p className="eyebrow">New entry</p>
        <h2 className="text-xl font-semibold mt-2">Add Expense</h2>
        <p className="text-sm text-muted mt-1">
          Fill out the details below to track your spending.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="label block mb-2">Title</label>
          <input
            type="text"
            placeholder="e.g. Grocery shopping"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            required
          />
        </div>

        <div>
          <label className="label block mb-2">Amount</label>
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input"
            min="1"
            required
          />
        </div>

        <div>
          <label className="label block mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
            required
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        <div>
          <label className="label block mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input"
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
