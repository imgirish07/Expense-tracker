const Expense = require('../models/Expense');

// function to handle date and time. Required to push into historyArray
async function addTimestamp() {

    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // January is 0, so we add 1
    const year = currentDate.getFullYear();

    // Format the timestamp as desired
    const timestamp = `${hours}:${minutes}:${seconds} - ${date}/${month}/${year}`;
    return timestamp;
}

async function handleExpense(req, res) {
    // get data from user
    const Amount = parseInt(req.body.Amount);
    const Balance = parseInt(req.body.Balance);
    const { Credit_Debit, Reason, Category, historyArray: incomingHistoryArray } = req.body;

    // check if incoming array is a array
    historyArray = Array.isArray(incomingHistoryArray) ? incomingHistoryArray : [];

    // check all the fields are entered
    if (!(Amount !== undefined && Balance !== undefined && Reason && Category && Credit_Debit !== undefined)) {
        return res.status(400).json({ message: 'Enter all the fields' });
    }

    // Initialize the historyArray if it's empty
    // if (historyArray.length === 0) {
    //     const Time = await addTimestamp();
    //     historyArray.push({ amount: 0, balance: 0, reason: "NA", category: "NA", time: Time });
    // }

    // Increase balance if Credit and Decrease the balance if Debit
    let newBalance = 0;
    if (Credit_Debit === "credit") {
        // credit means '+'
        newBalance = Balance + Amount;
    }
    else if (Credit_Debit === "debit") {
        // debit means '-'
        newBalance = Balance - Amount;
    }
    // calling addTimeStamp to get time
    const Time = await addTimestamp();

    // push required data into historyArray
    historyArray.push({ amount: Amount, balance: newBalance, reason: Reason, category: Category, time: Time });

    const expense = await Expense.create({
        Amount,
        Balance: newBalance,
        Credit_Debit,
        Reason,
        Category,
        historyArray
    });
    console.log("THIS IS THE EXPENSE FROM THE CONTROLLER");
    return res.status(200).json({ message: "expense created successfully", expense });
}

module.exports = handleExpense;
