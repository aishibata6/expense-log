import Card from "../../UI/Card";
import ExpenseItem from "../expenseItem/ExpenseItem";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import "./ExpensesContainer.css";

import {useState} from "react";

const ExpensesContainer = (props) => {
  const [year, setYear] = useState("2021");

  const selectedYearHandler = (enteredYear) => {
    console.log("this is ExpenseContainer " + enteredYear);
    setYear(enteredYear);
  };

  console.log(year);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectedYear={selectedYearHandler} />
        <ExpenseItem
          expenseTitle={props.expenses[0].title}
          expenseAmount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          expenseTitle={props.expenses[1].title}
          expenseAmount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          expenseTitle={props.expenses[2].title}
          expenseAmount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          expenseTitle={props.expenses[3].title}
          expenseAmount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpensesContainer;
