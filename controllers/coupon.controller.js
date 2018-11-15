const {Coupon} = require('../models/index');
const async = require('async');
const mongoose = require('mongoose');

exports.coupon_list = (req, res, next)=>{

  res.render('coupons');
}

exports.coupon_detail = (req, res, next)=>{
  async.parallel({
    coupon: function(callback){
      Coupon.findById(req.params.id)
      .populate('shop')
      .populate('product')
      .populate('category')
      .populate('discount')
      .exec(callback);
    }
   
  }, function(err, results){
    if(err){return next(err)};
    if(result.category == null){
      const err = new Error('Category not found');
      err.status = 404;
      return next(err);
    }
    res.render('coupon', { title: 'Coupon Detail', coupon: results.coupon});
  });
};

exports.coupon_create_get = (req, res)=>{
  res.render('coupon_create');
}
exports.coupon_create_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: coupon delete GET')
}
exports.coupon_delete_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: coupon delete GET')
}
exports.coupon_delete_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: coupon delete POST')
}
exports.coupon_update_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: coupon update GET')
}
exports.coupon_update_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: coupon update POST')
}