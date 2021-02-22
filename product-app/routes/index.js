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
router.get('/my-products', ProductController.getUserProducts);
router.get('/all-products', ProductController.getAllProducts);
router.delete('/delete/:productId', ProductController.deleteOneProduct);
router.get('/product/:productId', ProductController.getOneProduct);

module.exports = router;
