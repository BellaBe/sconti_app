module.exports = {
  index(req, res){
    res.render('coupon');
  },
  list(req, res){
    res.render('coupons')
  }
}