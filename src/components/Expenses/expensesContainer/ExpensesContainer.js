import Card from "../../UI/Card";
import ExpensesList from "../expensesList/ExpensesList";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import "./ExpensesContainer.css";

import {useState} from "react";

const ExpensesContainer = (props) => {
  const [year, setYear] = useState("2021");

  const selectedYearHandler = (enteredYear) => {
    console.log("this is ExpenseContainer " + enteredYear);
    setYear(enteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  console.log(year);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectedYear={selectedYearHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpensesContainer;
