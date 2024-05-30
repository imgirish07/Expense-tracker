const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    Amount: {
        type: Number,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Category: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense ;