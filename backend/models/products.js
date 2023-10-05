const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    namePro: String,
    size: Array,
    price: Number,
    imagePro: String,
    category: String
  }
)

const ProductModel = mongoose.model("Product", productSchema)
module.exports = ProductModel;