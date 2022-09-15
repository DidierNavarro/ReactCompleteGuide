import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ( props ) => {

  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = ( enteredExpenseData ) =>
  {
    const expenseData = 
    {
      id: (Math.random() * 10 ).toString(),
      ...enteredExpenseData,
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      { !isEditing && <button onClick={ startEditingHandler }>Add New Expense</button>}
      { isEditing && <ExpenseForm onSaveExpenseData={ onSaveExpenseDataHandler } onCancel={ stopEditingHandler } />}
    </div>
  );
};

export default NewExpense;
