const { Discount } = require('../models/index');
const mongoose = require('mongoose');

exports.discount_list = (req, res)=>{
  res.send('NOT IMPLEMENTED: discount list')
}

exports.discount_detail = (req, res)=>{
  res.send('NOT IMPLEMENTED: discount detail' + req.params.id)
}

exports.discount_create_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: discount create GET')
}
exports.discount_create_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: discount create POST')
}
exports.discount_delete_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: discount delete GET')
}
exports.discount_delete_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: discount delete POST')
}
exports.discount_update_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: discount update GET')
}
exports.discount_update_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: discount update POST')
}