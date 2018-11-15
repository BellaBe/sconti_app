const express = require('express');
const router = express.Router();

const home = require('../routes/home.routes');
const categories = require('../routes/category.routes');
const cities = require('../routes/city.routes');
const coupons = require('../routes/coupon.routes');
const discounts = require('../routes/discount.routes');
const products = require('../routes/product.routes');
const shops = require('../routes/shop.routes');
const users = require('../routes/user.routes');

router.use('/', home);
router.use('/coupons', coupons);
router.use('/categories', categories);
router.use('/cities', cities);
router.use('/discounts', discounts);
router.use('/products', products);
router.use('/shops', shops);
router.use('/users', users);

module.exports = router;
 

