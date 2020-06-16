const mongoose = require("mongoose");

exports.customerOrderRequest = (req, res, next) => {
  const customerId = req.params.customerId;
  const shopkeeperId = req.params.shopkeeperId;

  return res.status(200).json({
    "Customer Id": customerId,
    "Shopkeeper Id": shopkeeperId,
  });
};

exports.shopkeeperOrderResponse = (req, res, next) => {};