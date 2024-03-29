import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ( props ) =>
{
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) =>
    {
        // setEnteredTitle(event.target.value);
        
        // console.log(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
        
        // setUserInput( (prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) =>
    {
        // setEnteredAmount(event.target.vale);

        // console.log(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    };

    const dateChangeHandler = (event) =>
    {
        // setEnteredDate(event.target.vale);
        // console.log(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    };

    const submiHandler = (event) => {
        event.preventDefault();
        const expenseData = 
        {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };
        // console.log(expenseData);
        
        props.onSaveExpenseData(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    };

    return(
    <form onSubmit={ submiHandler }>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={ userInput.enteredTitle } onChange={ titleChangeHandler }></input>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={ userInput.enteredAmount } onChange={ amountChangeHandler }></input>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={ userInput.enteredDate } onChange={ dateChangeHandler }></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={ props.onCancel } >Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>);
};

export default ExpenseForm;