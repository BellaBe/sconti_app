const city = require('../models/city.model')

exports.city_list = (req, res)=>{
  res.send('NOT IMPLEMENTED: cities list')
}

exports.city_detail = (req, res)=>{
  res.send('NOT IMPLEMENTED: city detail' + req.params.id)
}

exports.city_create_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: city create GET')
}
exports.city_create_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: city create POST')
}
exports.city_delete_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: city delete GET')
}
exports.city_delete_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: city delete POST')
}
exports.city_update_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: city update GET')
}
exports.city_update_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: city update POST')
}