const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
 title: {type: String, required: true},
 description: {type: String, required: true},
 details: {
  createdAt: {type: Date, default: Date.now, required: true},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  terms: {type: String},
  image: {type: String},
  logo: {type: String},
  isExclusive: {type: Boolean, default: false},
  isPublished: {type: Boolean}
 },
 shop_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true},
 product_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
 category_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
 discount_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Discount', required: true},
});

CouponSchema
.virtual('url')
.get(function(){
  return '/coupons/' + this._id;
});

module.exports = mongoose.model('Coupon', CouponSchema);
