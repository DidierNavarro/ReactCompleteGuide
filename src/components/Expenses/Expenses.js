import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props)
{
  const [yearSelected, setYearSelected] = useState('2020');
  // setYearSelected('2020');

  const filteredExpenses = props.items.filter(
    expense => {
      return expense.date.getFullYear().toString() === yearSelected;
    }
  );

  const onYearSelectionHandler = ( year ) => {
    console.log('You have choosen: ' + year);
    setYearSelected(year);
  };

  // let expensesContent = <p>No expenses found.</p>;

  // if ( filteredExpenses.length > 0 )
  // {
  //   expensesContent = filteredExpenses.map( (expense) => <ExpenseItem key={props.id} title={expense.title} amount={expense.amount} date={expense.date} id={props.id} /> );
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={ yearSelected } onYearSelection={ onYearSelectionHandler } />

      <ExpensesChart expenses={ filteredExpenses } />

      <ExpensesList items={ filteredExpenses } />
      {
        // filteredExpenses.length === 0 ? ( <p>No expenses found.</p> )
        // :
        // filteredExpenses.map( (expense) => <ExpenseItem key={props.id} title={expense.title} amount={expense.amount} date={expense.date} id={props.id} /> )

        // expensesContent
      }
      
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
