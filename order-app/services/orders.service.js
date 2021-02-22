const Order = require('../models/orders.model');

class OrdersService {
  static async createOrder(data) {
    return Order.create(data);
  }
}

module.exports = OrdersService;
