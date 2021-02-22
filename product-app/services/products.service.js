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
}

module.exports = ProductsService;
