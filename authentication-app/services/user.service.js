const jwt = require('jsonwebtoken');
const User = require('../models/User');

class UserService {
  static async createUserService(data) {
    return User.create(data);
  }

  static async getAllUsersService() {
    return User.find();
  }

  static async findUserByEmail(email) {
    return User.findOne({ email });
  }

  static async authenticateUser(email, password) {
    const user = await UserService.findUserByEmail(email);

    if (!user) {
      return {
        status: 'error',
        data: { email },
        message: `User with email ${email} does not exist`,
      };
    }
    const passwordMatches = await user.comparePassword(password);
    if (!passwordMatches) {
      return {
        status: 'error',
        data: { email },
        message: 'Password does not match',
      };
    }
    return {
      status: 'success',
      data: { token: await UserService.encodeUserData(email) },
      message: 'Login Successful'
    };
  }

  static async identifyUserService(token) {
    const decodedToken = jwt.decode(token);
    return decodedToken;
  }

  static async encodeUserData(userEmail) {
    const user = await UserService.findUserByEmail(userEmail);
    const {
      email,
      _id,
      name
    } = user;
    const toBeEncodedData = {
      email,
      _id,
      name
    };
    const encodedData = jwt.sign(toBeEncodedData, process.env.JWT_SECRET_KEY);
    return encodedData;
  }
}

module.exports = UserService;
