import Card from "../../UI/Card";
import ExpenseItem from "../expenseItem/ExpenseItem";
import "./ExpensesContainer.css";

const ExpensesContainer = (props) => {
  return (
    <Card className="expenses">
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
  );
};

export default ExpensesContainer;
