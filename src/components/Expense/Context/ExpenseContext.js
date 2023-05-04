import { createContext } from "react";

const ExpenseContext = createContext({
  expenses: [],
  setExpense: () => {},
  index: -1,
});

export default ExpenseContext;
