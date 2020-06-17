const mongoose = require("mongoose");

exports.customerOrderRequest = (req, res, next) => {
  const customerId = req.params.customerId;
  const shopkeeperId = req.params.shopkeeperId;

  // CustomerModel.find()
  //   .where({
  //     _id: customerId,
  //   })
  //   .exec()
  //   .then((result) => {
  //     //return res.status(200).json(result);
  //     const shopkeeper = new ShopkeeperModel({
  //       _id: mongoose.Types.ObjectId(),
  //       customer_id: req.body.shop_name,
  //       shopkeeper_id: req.body.email,
  //       image1Url: hashPassword,
  //       image2Url: req.body.contact_no1,
  //       contact_no1: req.body.contact_no2,
  //       contact_no2: req.body.contact_no2,
  //       state: req.body.state,
  //       city: req.body.city,
  //       pincode: req.body.pincode,
  //       area: req.body.area,
  //       address: req.body.address,
  //     });
  //     shopkeeper
  //       .save()
  //       .then((result) => {
  //         console.log(result);
  //         return res.status(200).json(result);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         return res.status(500).json(err);
  //       });
  //   })
  //   .catch((err) => {
  //     return res.status(500).json(err);
  //   });

  return res.status(200).json({
    "Customer Id": customerId,
    "Shopkeeper Id": shopkeeperId,
  });
};

exports.shopkeeperOrderResponse = (req, res, next) => {};
