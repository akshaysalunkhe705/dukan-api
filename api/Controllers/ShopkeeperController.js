const mongoose = require("mongoose");
const ShopkeeperModel = require("../Models/ShopkeeperModel");
const bycryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res, next) => {
  ShopkeeperModel
    .findOne({ contact_no1: req.body.contact_no1 })
    .exec()
    .then((shopkeeperContactResult) => {
      if (shopkeeperContactResult) {
        return res.status(400).json({
          message: "Contact No 1 is duplicate",
        });
      } else {
        ShopkeeperModel
          .findOne({ email: req.body.email })
          .exec()
          .then((shopkeeperEmailResult) => {
            if (shopkeeperEmailResult) {
              return res.status(400).json({
                message: "Email is duplicate",
              });
            } else {
              //hash the password
              bycryptjs.genSalt(10).then((salt) => {
                bycryptjs.hash(req.body.password, salt).then((hashPassword) => {
                  //add shopkeeper here
                  const shopkeeper = new ShopkeeperModel({
                    _id: mongoose.Types.ObjectId(),
                    shop_name: req.body.shop_name,
                    email: req.body.email,
                    password: hashPassword,
                    contact_no1: req.body.contact_no1,
                    contact_no2: req.body.contact_no2,
                    state: req.body.state,
                    city: req.body.city,
                    pincode: req.body.pincode,
                    area: req.body.area,
                    address: req.body.address,
                    longitude: req.body.longitude,
                    latitude: req.body.latitude,
                  });
                  shopkeeper
                    .save()
                    .then((result) => {
                      console.log(result);
                      return res.status(200).json(result);
                    })
                    .catch((err) => {
                      console.log(err);
                      return res.status(500).json(err);
                    });
                });
              });
            }
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
};

exports.login = (req, res, next) => {
  ShopkeeperModel.findOne({ email: req.body.email })
    .exec()
    .then((shopkeeperResult) => {
      if (shopkeeperResult) {
        //login process here
        bycryptjs
          .compare(req.body.password, shopkeeperResult.password)
          .then((validPass) => {
            if (!validPass) {
              return res.status(400).json({
                message: "Invalid Password",
              });
            } else {
              //create login jwt token
              const token = jwt.sign(
                { _id: shopkeeperResult._id },
                "8a1654404f23e467049a1f2b11b2c288"
              );
              return res.header("auth-token", token).status(200).json(token);
            }
          })
          .catch((err) => {
            return res.status(200).json(err);
          });
      } else {
        return res.status(400).json({
          message: "Email is not found",
        });
      }
    });
};

exports.shopkeeperDetails = (req, res, next) => {
  const shopkeeperId = req.params.shopkeeperId;
  return ShopkeeperModel.find()
    .where({
      _id: shopkeeperId,
    })
    .exec()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

exports.shopkeeperList = (req, res, next) => {
  return ShopkeeperModel.find()
    .exec()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
