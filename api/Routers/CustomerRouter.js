const express = require('express')
const router = express.Router();

//Controller Import
const CustomerController = require('../Controllers/CustomerController')

//Routers Defined
router.post('/register', CustomerController.register)
router.get('/:customerId', CustomerController.customerDetails)

//Export Router
module.exports = router;