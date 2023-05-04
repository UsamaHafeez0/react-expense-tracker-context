import ExpenseChart from "./Components/ExpenseChart/ExpenseChart";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import AddExpense from "./Components/AddExpense/AddExpense";

import { useState } from "react";
import ExpenseContext from "./Context/ExpenseContext";

function Expense() {
  // We can make 2 arrays here one expenses and one filteredExpenses and use that instead of using
  // .filter method every time we re-render and pass data (like im doing at <ExpenseItem> and at other places)
  // but I didnt do it because the focus was on context api

  const [exps, setExps] = useState([
    {
      title: "Title 1",
      amount: "1.11",
      date: new Date("1, 12, 2022"),
    },
    {
      title: "Title 2",
      amount: "2.11",
      date: new Date("1, 12, 2023"),
    },
    {
      title: "Title 3",
      amount: "3.11",
      date: new Date("1, 12, 2024"),
    },
  ]);

  const [selectedYear, setSelectedYear] = useState(2022);

  return (
    <ExpenseContext.Provider
      value={{
        expenses: exps,
        setExpenses: setExps,
        index: -1,
      }}
    >
      <div className="flex justify-center items-center min-h-screen p-4 bg-black">
        <div className="w-1/2">
          <div className="mb-4">
            <AddExpense></AddExpense>
          </div>
          <div className="rounded-xl bg-slate-800 p-4">
            <div className="flex flex-row justify-between text-white text-lg font-bold">
              <p>Filter by year</p>
              <select
                className="text-black text-md rounded px-1"
                onChange={(event) => {
                  setSelectedYear(parseInt(event.target.value));
                }}
              >
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
            <div className="my-4">
              <ExpenseContext.Provider
                value={{
                  expenses: exps.filter((exp) => {
                    return exp.date.getFullYear() === selectedYear;
                  }),
                  setExpenses: setExps,
                  index: -1,
                }}
              >
                <ExpenseChart></ExpenseChart>
              </ExpenseContext.Provider>
            </div>
            {exps
              .filter((exp) => {
                return exp.date.getFullYear() === selectedYear;
              })
              .map((_, index) => {
                return (
                  <ExpenseContext.Provider
                    value={{
                      expenses: exps.filter((exp) => {
                        return exp.date.getFullYear() === selectedYear;
                      }),
                      setExpenses: setExps,
                      index: index,
                    }}
                  >
                    <ExpenseItem></ExpenseItem>
                  </ExpenseContext.Provider>
                );
              })}
          </div>
        </div>
      </div>
    </ExpenseContext.Provider>
  );
}

export default Expense;
