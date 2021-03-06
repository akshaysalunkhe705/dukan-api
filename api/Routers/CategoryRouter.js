const express = require('express')
const router = express.Router();

//Controller Import
const { register, categoryDetails, categoryList } = require('../Controllers/CategoryController')

//Routers Defined
router.post('/register', register)
router.get('/categoryList', categoryList)
router.get('/:categoryId', categoryDetails)

//Export Router
module.exports = router;