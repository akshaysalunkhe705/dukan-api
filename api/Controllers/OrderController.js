const mongoose = require("mongoose");
const CustomerModel = require("../Models/CustomerModel");
const OrderModel = require("../Models/OrderModel");

exports.customerOrderRequest = (req, res, next) => {
  const customerId = req.params.customerId;
  const shopkeeperId = req.params.shopkeeperId;

  return CustomerModel.find()
    .where({
      _id: customerId,
    })
    .exec()
    .then((result) => {
          const order = new OrderModel({
            _id: mongoose.Types.ObjectId(),
            customer_id: customerId,
            shopkeeper_id: shopkeeperId,
            order_id: req.body.order_id,
            image1Url: "https://cdn-api-hosting.sgp1.digitaloceanspaces.com/"+req.body.imageName1,
            image2Url: "https://cdn-api-hosting.sgp1.digitaloceanspaces.com/"+req.body.imageName2,
            contact_no1: result[0].contact_no1,
            contact_no2: result[0].contact_no2,
            state: result[0].state,
            city: result[0].city,
            pincode: result.pincode,
            area: result[0].area,
            address: result[0].address,
          });
          order
            .save()
            .then((result) => {
              console.log(result);
              return res.status(200).json(result);
            })
            .catch((err) => {
              console.log(err);
              return res.status(500).json(err);
            });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });

};

exports.customerOrderListOfCustomer = (req, res, next) => {
  const customerId = req.params.customerId;
  return OrderModel.find()
    .where({
      customer_id: customerId,
    })
    .exec()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

exports.customerOrderListOfShopkeeper = (req, res, next) => {

};

exports.shopkeeperOrderResponse = (req, res, next) => {};
