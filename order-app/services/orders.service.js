const axios = require('axios');
const Order = require('../models/orders.model');

class OrdersService {
  static async identifyProduct(productId) {
    const axiosInstance = axios.create({
      baseURL: 'http://product-app:3000/',
    });

    const response = await axiosInstance.get(`/product/${productId}`);
    return response.data;
  }

  static async createOrder(data) {
    const product = await OrdersService.identifyProduct(data.product);
    const totalPrice = product.data.price * data.quantity;
    return Order.create({ ...data, totalPrice });
  }

  static async updateOrder(orderId, data) {
    await Order.updateOne({ _id: orderId }, data);
    return Order.findById(orderId);
  }

  static async markOrderAsPaid(orderId, transactionReference) {
    return OrdersService.updateOrder(orderId, {
      transactionReference,
      paid: true,
    });
  }
}

module.exports = OrdersService;
