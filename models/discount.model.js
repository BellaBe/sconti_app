const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscountSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: Number},
  coupons: [{type: mongoose.Schema.Types.ObjectId, ref: 'Coupon'}]
});

module.exports = mongoose.model('Discount', DiscountSchema);
