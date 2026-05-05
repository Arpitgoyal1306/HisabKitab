import { useEffect, useState } from "react";

function ExpenseItem({ exp, expenses, setExpenses }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!exp) return;
    setTitle(exp.title ?? "");
    setAmount(exp.amount ?? "");
    setCategory(exp.category ?? "");
    setDate(exp.date ?? "");
  }, [exp]);

  if (!exp) {
    return null;
  }

  const handleDelete = () => {
    const next = expenses.filter((item) => item.id !== exp.id);
    setExpenses(next);
  };

  const handleSave = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill out all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than zero.");
      return;
    }

    const next = expenses.map((item) =>
      item.id === exp.id
        ? {
            ...item,
            title,
            amount: Number(amount),
            category,
            date,
          }
        : item,
    );

    setExpenses(next);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(exp.title ?? "");
    setAmount(exp.amount ?? "");
    setCategory(exp.category ?? "");
    setDate(exp.date ?? "");
    setIsEditing(false);
  };

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="card p-4 sm:p-6">
      {isEditing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="label block mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
            />
          </div>

          <div>
            <label className="label block mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input"
              min="1"
            />
          </div>

          <div>
            <label className="label block mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            >
              <option value="">Select</option>
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
            />
          </div>

          <div className="sm:col-span-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="btn btn-primary"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-lg font-semibold">{exp.title}</p>
            <p className="text-sm text-muted">
              {exp.category} · {exp.date}
            </p>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4">
            <span className="text-base font-semibold">
              {formatCurrency(exp.amount)}
            </span>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="btn btn-secondary btn-sm"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseItem;
