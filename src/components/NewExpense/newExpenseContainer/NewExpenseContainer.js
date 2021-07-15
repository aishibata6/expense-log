import {useState} from "react";
import ExpenseForm from "../expenseForm/ExpenseForm";
import "./NewExpenseContainer.css";

const NewExpenseContainer = (props) => {
  // creating this function so I can pass form value from ExpenseForm.js to this component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);

    // passing expenseData up to App.js component
    props.onAddExpense(expenseData);

    setVisbile(false);
  };

  const [visible, setVisbile] = useState(false);

  const showFormHandler = () => {
    setVisbile(true);
    console.log("clicked");
  };

  const hideFormHandler = () => {
    setVisbile(false);
  };

  // setting up custom onSaveExpenseData attribute with the handler function saveExpenseDataHandler
  return (
    <div className="new-expense">
      {!visible && <button onClick={showFormHandler}>Add New Expense</button>}
      {visible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideForm={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpenseContainer;
