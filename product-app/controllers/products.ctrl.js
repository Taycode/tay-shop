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

  static async getUserProducts(req, res) {
    try {
      const { authorization } = req.headers;
      const products = await ProductService.getUserProducts(authorization);
      return res.status(200).json({
        status: 'success',
        data: products,
        message: 'Products Fetched',
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async getAllProducts(req, res) {
    return res.status(200).json({
      status: 'success',
      data: await ProductService.getAllProducts(),
      message: 'Products Fetched',
    });
  }

  static async deleteOneProduct(req, res) {
    try {
      const { productId } = req.params;
      const { authorization } = req.headers;
      await ProductService.deleteProduct(productId, authorization);
      return res.status(200).json({
        status: 'success',
        message: 'Product Deleted'
      });
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async getOneProduct(req, res) {
    try {
      const { productId } = req.params;
      const product = await ProductService.getProductById(productId);

      if (!product) {
        return res.status(404).json({
          status: 'error',
          message: 'Product not found',
        });
      }

      return res.status(200).json({
        status: 'success',
        data: product,
        message: 'Product Fetched'
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

module.exports = ProductsCtrl;
