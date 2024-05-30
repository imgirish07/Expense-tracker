const express = require('express');
const handleExpense = require('../controller/Expense');
const router = express.Router();

router.post('/expense', handleExpense);

module.exports = router;