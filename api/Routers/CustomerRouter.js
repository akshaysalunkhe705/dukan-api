const express = require('express')
const router = express.Router();
const verifyLogin = require('../Middlewares/TokenVerify')

//Controller Import
const {register, login, customerDetails } = require('../Controllers/CustomerController')

//Routers Defined
router.post('/register', register)
router.post('/login', login)
router.get('/:customerId', verifyLogin.auth, customerDetails)

//Export Router
module.exports = router;