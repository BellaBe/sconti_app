const {User} = require('../models/index');

exports.user_list = (req, res)=>{
  res.send('NOT IMPLEMENTED: user list')
}

exports.user_detail = (req, res)=>{
  res.send('NOT IMPLEMENTED: user detail' + req.params.id)
}

exports.user_create_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: user create GET')
}
exports.user_create_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: user create POST')
}
exports.user_delete_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: user delete GET')
}
exports.user_delete_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: user delete POST')
}
exports.user_update_get = (req, res)=>{
  res.send('NOT IMPLEMENTED: user update GET')
}
exports.user_update_post = (req, res)=>{
  res.send('NOT IMPLEMENTED: user update POST')
}