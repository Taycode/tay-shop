const { Router } = require('express');
const OrderController = require('../controllers/orders.ctrl');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

router.post('/create', OrderController.createOrder);

module.exports = router;
