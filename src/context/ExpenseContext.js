import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (!savedExpenses) {
      return [];
    }

    try {
      const parsedExpenses = JSON.parse(savedExpenses);
      return Array.isArray(parsedExpenses) ? parsedExpenses : [];
    } catch {
      return [];
    }
  });
  const [budget, setBudget] = useState(() => localStorage.getItem("budget") ?? "");

  // SAVE to localStorage

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        budget,
        setBudget,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
