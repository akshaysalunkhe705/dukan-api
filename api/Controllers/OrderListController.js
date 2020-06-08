const mongoose = require("mongoose");
const CustomerModel = require("../Models/CustomerModel");
const bycryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.customerOrderRequest = (req, res, next)=>{
    const custId = req.params.customerId;
    const shopkeeperId = req.params.shopkeeperId;
}

exports.shopkeeperOrderResponse = (req, res, next)=>{

}