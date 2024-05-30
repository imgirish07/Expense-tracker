const express = require('express');
const router = express.Router();

const { handleContact, handleContactDelete } = require('../controller/Contact');

router.post('/addcontact', handleContact);

router.post('/removecontact', handleContactDelete)

module.exports = router;