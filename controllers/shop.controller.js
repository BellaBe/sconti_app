const {Shop} = require('../models/index');

exports.shop_list = (req, res)=>{
  res.send('NOT IMPLEMENTED: shop list')
}

exports.shop_detail = (req, res)=>{
  //res.send('NOT IMPLEMENTED: shop detail' + req.params.id)
  res.render('shop')
}

exports.shop_create_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: shop create GET')
}
exports.shop_create_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: shop create POST')
}
exports.shop_delete_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: shop delete GET')
}
exports.shop_delete_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: shop delete POST')
}
exports.shop_update_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: shop update GET')
}
exports.shop_update_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: shop update POST')
}