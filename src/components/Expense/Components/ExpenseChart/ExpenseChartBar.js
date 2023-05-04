const calcPercent = (tasks, totalTasks) => (tasks / totalTasks) * 100;

function ExpenseChartBar({ month, tasks, totalTasks }) {
  const percent = calcPercent(tasks, totalTasks);

  return (
    <div className="flex flex-col items-center">
      <div className="box-content rounded bg-slate-300 w-3 h-24 flex flex-col-reverse">
        <div
          className={`w-3 rounded bg-blue-900 ${
            percent >= 90.0
              ? "h-full"
              : percent >= 70.0
              ? "h-5/6"
              : percent >= 50.0
              ? "h-1/2"
              : percent >= 1
              ? "h-2/6"
              : null
          }`}
        ></div>
      </div>
      <div className="pb-1"></div>
      <div className="text-white text-sm">{month}</div>
    </div>
  );
}

export default ExpenseChartBar;
