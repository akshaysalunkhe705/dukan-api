const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({
      message: "Access Denied",
    });
  }
  try {
    const verified = jwt.verify(token, "8a1654404f23e467049a1f2b11b2c288")
    req.customerId = verified;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Access Denied",
    });
  }
};