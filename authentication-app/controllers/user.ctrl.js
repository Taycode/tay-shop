const UserService = require('../services/user.service');

class UserController {
  static async createUser(req, res) {
    try {
      const data = req.body;
      const user = await UserService.createUserService(data);
      return res.status(201).json({
        status: 'success',
        data: user,
        message: 'User Created',
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsersService();
      return res.status(200).json({
        status: 'success',
        data: users,
        message: 'Users Fetched'
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async loginUser(req, res) {
    const data = req.body;
    const {
      email,
      password,
    } = data;
    const authenticationResponse = await UserService.authenticateUser(email, password);

    if (authenticationResponse.status === 'error') {
      return res.status(400).json(authenticationResponse);
    }
    return res.status(200).json(authenticationResponse);
  }

  static async identifyUser(req, res) {
    let { authorization } = req.headers;
    authorization = authorization.replace('Token ', '');
    const user = await UserService.identifyUserService(authorization);
    return res.status(200).json(user);
  }
}

module.exports = UserController;
