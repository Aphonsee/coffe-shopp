const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    idPro:Number,
    namePro: String,
    size: Array,
    price: Number,
    imagePro: String,
    category: {
      ref: 'Category',// ref tới cat
      required: true, //Bắt buộc phải có khi tạo sản phẩm
      type: mongoose.Types.ObjectId //kiểu dữ liệu của mongodb
    }
  }
)

const ProductModel = mongoose.model("Product", productSchema)
module.exports = ProductModel;