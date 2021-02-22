const { Router } = require('express');
const ProductController = require('../controllers/products.ctrl');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

router.post('/create', ProductController.createProduct);

module.exports = router;
