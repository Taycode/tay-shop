const ProductService = require('../services/products.service');

class ProductsCtrl {
  static async createProduct(req, res) {
    try {
      const { authorization } = req.headers;
      const data = req.body;
      const product = await ProductService.createProductService(data, authorization);
      return res.status(201).json({
        status: 'success',
        data: product,
        message: 'Product Created'
      });
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }
}

module.exports = ProductsCtrl;
