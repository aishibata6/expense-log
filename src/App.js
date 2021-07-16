import React, {useState} from "react";

import ExpensesContainer from "./components/Expenses/expensesContainer/ExpensesContainer";
import NewExpenseContainer from "./components/NewExpense/newExpenseContainer/NewExpenseContainer";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12)},
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // setting up this function, so App.js component can get data from NewExpenseContainer.js
  const addExpenseHandler = (expenseFromNewExpenseContainer) => {
    console.log(expenseFromNewExpenseContainer);

    setExpenses((prevExpenses) => {
      return [expenseFromNewExpenseContainer, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1 className="expense-tracker">Expense Tracker</h1>
      <NewExpenseContainer onAddExpense={addExpenseHandler} />
      <ExpensesContainer expenses={expenses} />
    </div>
  );
};

export default App;
