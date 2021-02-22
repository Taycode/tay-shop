const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    default: 1
  },
  totalPrice: {
    type: Number,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  transactionReference: {
    type: String,
  },
});

const Order = model('Order', OrderSchema);
module.exports = Order;
