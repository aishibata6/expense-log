import React, {useState} from "react";
import Card from "../../UI/Card";
import ExpenseDate from "../expenseDate/ExpenseDate";
import "./ExpenseItem.css";

// using hooks, react to the change of state. at the same time, pass props
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenseTitle);
  // let title = props.expenseTitle;

  const clickHander = () => {
    setTitle("Updated");
    console.log("clicked!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
      <button onClick={clickHander}>Change Title!</button>
    </Card>
  );
};

export default ExpenseItem;
