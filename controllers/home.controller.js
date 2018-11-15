const {Coupon, City, Category, Discount } = require('../models/index');
const async = require('async');
const mongoose = require('mongoose');



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