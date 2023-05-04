import ExpenseItemDate from "./ExpenseItemDate";
import ExpenseItemPrice from "./ExpenseItemPrice";
import ExpenseContext from "../../Context/ExpenseContext";
import { useContext } from "react";

function ExpenseItem() {
  const expenseContext = useContext(ExpenseContext);

  return (
    <>
      <div className="flex flex-row justify-between items-center bg-slate-700 py-2 px-4 text-white rounded-2xl m-2">
        <div className="flex flex-row items-center">
          <div className="pr-2">
            <ExpenseItemDate></ExpenseItemDate>
          </div>
          <p className="text-lg font-bold">
            {expenseContext.expenses[expenseContext.index].title}
          </p>
        </div>
        <div className="pl-2">
          <ExpenseItemPrice></ExpenseItemPrice>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
