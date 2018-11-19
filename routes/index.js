const express = require('express');
const router = express.Router();

const home = require('./home.routes');
const categories = require('./category.routes');
const cities = require('./city.routes');
const coupons = require('./coupon.routes');
const discounts = require('./discount.routes');
const products = require('./product.routes');
const shops = require('./shop.routes');
const users = require('./user.routes');

router.use('/', home);
router.use('/coupons', coupons);
router.use('/categories', categories);
router.use('/cities', cities);
router.use('/discounts', discounts);
router.use('/products', products);
router.use('/shops', shops);
router.use('/users', users);

module.exports = router;
 

