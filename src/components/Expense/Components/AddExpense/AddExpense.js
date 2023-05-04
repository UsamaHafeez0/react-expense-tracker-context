import { useState } from "react";
import { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext";

function AddExpense() {
  const expenseContext = useContext(ExpenseContext);

  const [addingNewTask, setAddingNewTask] = useState(false);
  const [title, setTitle] = useState("New Expense");
  const [amount, setAmount] = useState(0.0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  return (
    <>
      <div className="flex justify-center w-full bg-purple-300 p-4 rounded-lg ">
        {!addingNewTask ? (
          <button
            className="bg-purple-700 py-1 px-2 rounded-lg hover:bg-purple-500 shadow-gray-500 shadow-md"
            onClick={() => {
              setAddingNewTask(true);
            }}
          >
            Add Expense
          </button>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              <div className="box-border">
                <p>Title</p>
                <input
                  className="px-2 py-1"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                ></input>
              </div>
              <div className="w-2"></div>
              <div>
                <p>Amount</p>
                <input
                  className="px-2 py-1 box-border"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                ></input>
              </div>
              <div className="w-2"></div>
              <div>
                <p>Date</p>
                <input
                  type="date"
                  className="px-2 py-1 box-border"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-4"></div>
            <div className="flex self-end text-lg">
              <button
                className="hover:text-red-700"
                onClick={() => {
                  setAddingNewTask(false);
                }}
              >
                Cancel
              </button>
              <div className="w-2"></div>
              <button
                className="bg-purple-700 py-1 px-2 rounded-lg hover:bg-purple-900"
                onClick={() => {
                  const newExpense = {
                    title: title,
                    amount: amount,
                    date: new Date(date),
                  };

                  setTitle("New Expense");
                  setAmount(0.0);
                  setDate(new Date().toISOString().slice(0, 10));
                  const newExps = [newExpense, ...expenseContext.expenses];
                  expenseContext.setExpenses(newExps);
                }}
              >
                Add Expense
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddExpense;
