const express = require('express')
const router = express.Router();
const verifyLogin = require('../Middlewares/TokenVerify')

//Controller Import
const { register, categoryDetails, categoryList } = require('../Controllers/CategoryController')

//Routers Defined
router.post('/register', register)
router.get('/categoryList', categoryList)
router.get('/:categoryId', categoryDetails)

//Export Router
module.exports = router;