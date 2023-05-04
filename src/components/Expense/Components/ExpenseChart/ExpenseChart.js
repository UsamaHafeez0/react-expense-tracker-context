import ExpenseChartBar from "./ExpenseChartBar";
import { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext";

const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function ExpenseChart() {
  const expenseContext = useContext(ExpenseContext);

  return (
    <>
      <div className="box-content flex flex-row bg-pink-700 justify-evenly py-4 rounded-xl">
        {months.map((month, index) => {
          return (
            <ExpenseChartBar
              key={month}
              month={month}
              tasks={
                expenseContext.expenses.filter((expense) => {
                  return expense.date.getMonth() === index;
                }).length
              }
              totalTasks={expenseContext.expenses.length}
            ></ExpenseChartBar>
          );
        })}
      </div>
    </>
  );
}

export default ExpenseChart;
