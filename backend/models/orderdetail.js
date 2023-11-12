const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema({
  status: {
    type: String,
    require: true,
  },
  cart_item: [
  ],
  userId: {
    ref: "User", // ref tới user
    required: true, //Bắt buộc phải có khi tạo giỏ hàng
    type: mongoose.Types.ObjectId,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  sdt: {
    type: String,
    require: true,
  },
  diachi: {
    type: String,
    require: true,
  },
});

const OrderDetailModel = mongoose.model("OrderDetail", orderDetailSchema);
module.exports = OrderDetailModel;