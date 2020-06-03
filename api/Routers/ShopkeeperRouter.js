const express = require('express')
const router = express.Router();
const verifyLogin = require('../Middlewares/TokenVerify')

//Controller Import
const { register, login, shopkeeperDetails, shopkeeperList, shopkeeperListByCategory } = require('../Controllers/ShopkeeperController')
//const { register } = require('../Controllers/ShopkeeperController')

//Routers Defined
router.post('/register', register)
router.post('/login', login)
router.get('/shopkeeperListByCategory/:categoryId', shopkeeperListByCategory)
router.get('/shopkeeperList', shopkeeperList)
router.get('/:shopkeeperId', verifyLogin.auth, shopkeeperDetails)

//Export Router
module.exports = router;