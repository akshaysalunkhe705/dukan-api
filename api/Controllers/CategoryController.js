const mongoose = require("mongoose");
const CategoryModel = require("../Models/CategoryModel");

exports.register = (req, res, next) => {
  const category = new CategoryModel({
    _id: mongoose.Types.ObjectId(),
    category_name: req.body.category_name
  });
  category
    .save()
    .then((result) => {
      console.log(result);
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  // CategoryModel.findOne({ category_name: req.body.category_name })
  //   .exec()
  //   .then((categoryNameResult) => {
  //     if (categoryNameResult) {
  //       return res.status(400).json({
  //         message: "Category Name is duplicate",
  //       });
  //     } else {
  //       const category = new CategoryModel({
  //         _id: mongoose.Types.ObjectId(),
  //         category_name: req.body.category_name
  //       });
  //       category
  //         .save()
  //         .then((result) => {
  //           console.log(result);
  //           return res.status(200).json(result);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           return res.status(500).json(err);
  //         });
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return res.status(500).json(err);
  //   });
};

exports.categoryDetails = (req, res, next) => {
  const categoryId = req.params.categoryId;
  return CategoryModel.find()
    .where({
      _id: categoryId
    })
    .exec()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

exports.categoryList = (req, res, next) => {
  return CategoryModel.find()
    .exec()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
