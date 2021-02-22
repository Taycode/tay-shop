const OrderServices = require('../services/orders.service');

class OrdersCtrl {
  static async createOrder(req, res) {
    try {
      const data = req.body;
      const order = await OrderServices.createOrder(data);
      return res.status(201).json({
        status: 'success',
        data: order,
        message: 'Order Created'
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}
module.exports = OrdersCtrl;
