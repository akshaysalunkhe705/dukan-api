const express = require("express");
const router = express.Router();
const verifyLogin = require("../Middlewares/TokenVerify");

//ORDER UPLOADING
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
// Configure client for use with Spaces
const spacesEndpoint = new AWS.Endpoint("sgp1.digitaloceanspaces.com");
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: "R6CRHIMDCUR5MB7QZ57K",
  secretAccessKey: "n4J57acL8w2RYFtA9RhuW3uEy6sfmrSqnqdYbMvnT1w",
});
const orderImageUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "cdn-api-hosting",
    acl: "public-read",
    key: function (req, orderImages, cb) {
      console.log(req.files);
      cb(null, orderImages.originalname);
    },
  }),
}).fields([{ name: "orderImage1" }, { name: "orderImage2" }]);
//ORDER UPLOADING

//Controller Import
const {
  customerOrderRequest,
  shopkeeperOrderResponse,
} = require("../Controllers/OrderController");

//Routers Defined
router.post(
  "/customerOrderRequest/:customerId/:shopkeeperId",
  orderImageUpload,
  customerOrderRequest
);
router.post(
  "/shopkeeperOrderResponse/:customerId/:shopkeeperId",
  shopkeeperOrderResponse
);

//Export Router
module.exports = router;