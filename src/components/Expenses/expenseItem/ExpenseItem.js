import React from "react";
import Card from "../../UI/Card";
import ExpenseDate from "../expenseDate/ExpenseDate";
import "./ExpenseItem.css";

// using hooks, react to the change of state. at the same time, pass props
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.expenseTitle}</h2>
          <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
