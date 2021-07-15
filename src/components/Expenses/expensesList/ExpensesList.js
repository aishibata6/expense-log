import ExpenseItem from "../expenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((items) => (
        <ExpenseItem
          key={items.id}
          expenseTitle={items.title}
          expenseAmount={items.amount}
          date={items.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
