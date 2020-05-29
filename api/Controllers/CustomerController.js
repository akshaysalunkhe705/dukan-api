const mongoose = require("mongoose");
const CustomerModel = require("../Models/CustomerModel");
const bycryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res, next) => {
  CustomerModel.findOne({ contact_no1: req.body.contact_no1 })
    .exec()
    .then((customerContactResult) => {
      if (customerContactResult) {
        return res.status(400).json({
          message: "Contact No 1 is duplicate",
        });
      } else {
        CustomerModel.findOne({ email: req.body.email })
          .exec()
          .then((customerEmailResult) => {
            if (customerEmailResult) {
              return res.status(400).json({
                message: "Email is duplicate",
              });
            } else {
              //hash the password
              bycryptjs.genSalt(10).then((salt) => {
                bycryptjs.hash(req.body.password, salt).then((hashPassword) => {
                  //add customer here
                  const customer = new CustomerModel({
                    _id: mongoose.Types.ObjectId(),
                    customer_name: req.body.customer_name,
                    email: req.body.email,
                    password: hashPassword,
                    contact_no1: req.body.contact_no1,
                    contact_no2: req.body.contact_no2,
                    state: req.body.state,
                    city: req.body.city,
                    pincode: req.body.pincode,
                    area: req.body.area,
                    address: req.body.address,
                  });
                  customer
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
  CustomerModel.findOne({ email: req.body.email })
    .exec()
    .then((customerResult) => {
      if (customerResult) {
        //login process here
        bycryptjs
          .compare(req.body.password, customerResult.password)
          .then((validPass) => {
            if (!validPass) {
              return res.status(400).json({
                message: "Invalid Password",
              });
            } else {
              //create login jwt token
              const token = jwt
                .sign(
                  { _id: customerResult._id },
                  "8a1654404f23e467049a1f2b11b2c288"
                )
                return res.header('auth-token',token).status(200).json(token);
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

exports.customerDetails = (req, res, next) => {
  const customerId = req.params.customerId;
  return CustomerModel.find()
    .where({
      _id: customerId,
    })
    .exec()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
