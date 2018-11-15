const {Product} = require('../models/index');
const mongoose = require('mongoose');

exports.product_list = (req, res)=>{
  res.send('NOT IMPLEMENTED: product list')
}

exports.product_detail = (req, res)=>{
  res.send('NOT IMPLEMENTED: product detail' + req.params.id)
}

exports.product_create_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: product create GET')
}
exports.product_create_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: product create POST')
}
exports.product_delete_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: product delete GET')
}
exports.product_delete_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: product delete POST')
}
exports.product_update_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: product update GET')
}
exports.product_update_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: product update POST')
}