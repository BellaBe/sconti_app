const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  _id: Schema.Types.ObjectId,
 title: {type: String, required: true},
 description: {type: String, required: true},
 details: {
  createdAt: {type: Date, default: Date.now, required: true},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  terms: {type: String},
  image: {type: String},
  thumbnail: {type: String},
  isExclusive: {type: Boolean, default: false},
  isPublished: {type: Boolean}
 },
 shop:{type: Schema.Types.ObjectId, ref: 'Shop', required: true},
 product:{type: Schema.Types.ObjectId, ref: 'Product', required: true},
 category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
 discount: {type: Schema.Types.ObjectId, ref: 'Discount', required: true},
});

CouponSchema
.virtual('url')
.get(function(){
  return '/coupons/' + this._id;
});

module.exports = mongoose.model('Coupon', CouponSchema);
