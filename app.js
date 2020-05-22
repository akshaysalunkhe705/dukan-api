const express = require('express')
const app = express();
const bodyParser = require('body-parse')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/dukan',{ useNewUrlParser:true, useUnifiedTopology:true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});