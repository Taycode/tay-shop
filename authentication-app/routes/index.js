const { Router } = require('express');
const UserController = require('../controllers/user.ctrl');

const router = Router();

/* GET index page. */
router.post('/create', UserController.createUser);
router.get('/all', UserController.getAllUsers);
router.post('/login', UserController.loginUser);
router.get('/identify', UserController.identifyUser);

module.exports = router;
