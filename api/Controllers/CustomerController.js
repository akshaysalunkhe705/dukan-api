const mongoose = require('mongoose');
const CustomerModel = require('../Models/CustomerModel');

exports.register = (req, res, next) => {
    const enquiry = new CustomerModel({
        _id: mongoose.Types.ObjectId(),
        customer_name: req.body.customer_name,
        email: req.body.email,
        password: req.body.password,
        contact_no1: req.body.contact_no1,
        contact_no2: req.body.contact_no2,
        state: req.body.state,
        city: req.body.city,
        pincode: req.body.pincode,
        area: req.body.area,
        address: req.body.address
    })
    enquiry.save()
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        });
};

exports.login = (req, res, next) => {
    return false;
}

exports.customerDetails = (req, res, next) => {
    const customerId = req.params.customerId;
    return CustomerModel.find().where({
        _id:customerId
    }).exec().
    then(result=>{
        return res.status(200).json(result)
    }).catch(err => {
        return res.status(500).json(err)
    })
}