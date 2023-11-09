const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema({
  totalPrice: Number,
  orderStatus: String,
  orderItems: Array,
  shippingInfor: Object,
  user: Object,
});

const OrderDetailModel = mongoose.model("OrderDetail", orderDetailSchema);
module.exports = OrderDetailModel;