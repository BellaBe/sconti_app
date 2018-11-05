const express = require('express');
const router = express.Router();
const home = require('../controllers/home');
const coupon = require('../controllers/coupon');
const shop = require('../controllers/shop');
const category = require('../controllers/category');
const city = require('../controllers/city');
const product = require('../controllers/product');
const discount = require('../controllers/discount');

module.exports = (app)=>{
  router.get('/', home.index);
  router.get('/coupons', coupon.list);
  router.get('/coupons/:coupon_id', coupon.index);
  router.get('/discounts', discount.list);
  router.get('/discounts/:id', discount.index);
  router.get('/shops', shop.list);
  router.get('/shops/:shop_id', shop.index);
  router.get('/categories', category.list);
  router.get('/categories/:category_id', category.index);
  router.get('/products', product.list);
  router.get('/products/:product_id', product.index);
  router.get('/cities', city.list);
  router.get('/cities/:city_id', city.index);
  app.use(router);
};