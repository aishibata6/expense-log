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
  };

  // setting up custom onSaveExpenseData attribute with the handler function saveExpenseDataHandler
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenseContainer;
