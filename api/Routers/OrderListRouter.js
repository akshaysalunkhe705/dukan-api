const express = require('express')
const router = express.Router();
const verifyLogin = require('../Middlewares/TokenVerify')

//Controller Import
const { customerOrderRequest, shopkeeperOrderResponse } = require('../Controllers/OrderListController')

//Routers Defined
// router.post('customerOrderRequest/:customerId/:shopkeeperId', verifyLogin.auth, customerOrderRequest)
// router.post('shopkeeperOrderResponse/:customerId/:shopkeeperId', verifyLogin.auth, shopkeeperOrderResponse)

router.post('customerOrderRequest/:customerId/:shopkeeperId', customerOrderRequest)
router.post('shopkeeperOrderResponse/:customerId/:shopkeeperId', shopkeeperOrderResponse)

//Export Router
module.exports = router;