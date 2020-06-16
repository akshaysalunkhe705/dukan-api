const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");

// ///////////////////////////////Import Router
const CustomerRouter = require("./api/Routers/CustomerRouter");
const CategoryRouter = require("./api/Routers/CategoryRouter");
const ShopkeeperRouter = require("./api/Routers/ShopkeeperRouter");
const OrderListRouter = require("./api/Routers/OrderListRouter");

mongoose
  .connect("mongodb://127.0.0.1/dukan", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

app.use(morgan("dev"));

app.use(bodyParse.urlencoded({ extended: true, limit: '50mb'}));
app.use(bodyParse.json({limit: '50mb'}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// ////////////////////////////////// Routers
app.use("/CustomerRouter", CustomerRouter);
app.use("/CategoryRouter", CategoryRouter);
app.use("/ShopkeeperRouter", ShopkeeperRouter);
app.use("/OrderListRouter", OrderListRouter);

//////////////////////////////////// Error Handlings
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
