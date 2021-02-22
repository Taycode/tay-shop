const axios = require('axios');
const Product = require('../models/products.model');

class ProductsService {
  static async identifyUser(token) {
    const headers = {
      authorization: token
    };
    const axiosInstance = axios.create({
      baseURL: 'http://authentication-app:3000/',
      headers,
    });

    const response = await axiosInstance.get('/identify');
    return response.data;
  }

  static async createProductService(data, token) {
    const user = await ProductsService.identifyUser(token);
    return Product.create({
      ...data,
      // eslint-disable-next-line no-underscore-dangle
      user: user._id
    });
  }

  static getOneUserProducts(userId) {
    const products = Product.find({ user: userId });
    return products;
  }

  static async getUserProducts(token) {
    const user = await ProductsService.identifyUser(token);

    // eslint-disable-next-line no-underscore-dangle
    return ProductsService.getOneUserProducts(user._id);
  }

  static async getAllProducts() {
    return Product.find();
  }

  static async getProductById(productId) {
    return Product.findById(productId);
  }

  static async deleteProduct(productId, token) {
    const product = await ProductsService.getProductById(productId);
    const user = await ProductsService.identifyUser(token);

    // eslint-disable-next-line no-underscore-dangle
    if (user._id.toString() !== product.user.toString()) {
      const err = new Error();
      err.message = 'User is not Authorized to delete this product';
      err.statusCode = 403;
      throw (err);
    }
    return Product.deleteOne({ _id: productId });
  }
}

module.exports = ProductsService;
