
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  cart_item: [
    {
      productId: {
        ref: "Product", // ref tới product
        type: mongoose.Types.ObjectId, //kiểu dữ liệu của mongodb
      },
      quantity: {
        type: Number,
      },
      price: {
        type: Number,
      },
      topping: [

      ],
      size: {
        type: String,
      }
    },
  ],
  userId: {
    ref: "User", // ref tới user
    required: true, //Bắt buộc phải có khi tạo giỏ hàng
    type: mongoose.Types.ObjectId,
  },
});
const CartModel = mongoose.model("Cart_user", cartSchema);
module.exports = CartModel;
