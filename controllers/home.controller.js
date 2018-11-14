const Coupon = require('../models/coupon.model');
const City = require('../models/city.model');
const Category = require('../models/category.model');
const Discount = require('../models/discount.model');

const async = require('async');



exports.index = function(req, res){
  async.parallel({
    coupons_exclusive: function(callback){
      Coupon.find({}, callback)
    },
    coupons_list: function(callback){
      Coupon.find({}, callback)
    },
    category_list: function(callback){
      Category.find({}, callback)
    },
    discount_list: function(callback){
      Discount.find({}, callback)
    },
    city_list: function(callback){
      City.find({}, callback)
    }
  }, function(err, result){
    res.render('index', {title: 'Home page', layout: 'landing', err: err, data: result});
  });

};