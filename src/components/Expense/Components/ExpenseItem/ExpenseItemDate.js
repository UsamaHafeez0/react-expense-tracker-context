import { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext";

function ExpenseItemDate() {
  const expenseContext = useContext(ExpenseContext);
  return (
    <>
      <div className="flex flex-col items-center px-2 py-1 rounded-md bg-slate-900">
        <div className="text-xs">
          {expenseContext.expenses[expenseContext.index].date.toLocaleString(
            "default",
            { month: "long" }
          )}
        </div>
        <div className="text-xs">
          {expenseContext.expenses[expenseContext.index].date.getFullYear()}
        </div>
        <div className="font-bold text-md">
          {expenseContext.expenses[expenseContext.index].date.getDate()}
        </div>
      </div>
    </>
  );
}

export default ExpenseItemDate;
