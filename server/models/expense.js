const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    Amount: {
        type: Number,
        required: true,
    },
    Balance:{
        type: Number,
        required: true,
    },
    Credit_Debit:{
        type: String,
        required: true,
    },
    Reason: {
        type: String,
        required: true,
    },
    Category: {
        type: String,
        required: true
    },
    historyArray: {
        type: Array,
        default: [],
    }
}, { timestamps: true });

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense ;