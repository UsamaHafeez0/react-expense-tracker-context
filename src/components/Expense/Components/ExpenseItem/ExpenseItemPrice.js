import ExpenseContext from "../../Context/ExpenseContext";
import { useContext } from "react";

function ExpenseItemPrice() {
  const expenseContext = useContext(ExpenseContext);

  return (
    <>
      <div className="px-2 py-1 bg-purple-800 rounded-xl text-sm border">
        {expenseContext.expenses[expenseContext.index].amount}
      </div>
    </>
  );
}

export default ExpenseItemPrice;
