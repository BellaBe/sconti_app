const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ShopSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdAt: {type: Date, default: Date.now},
  name: {type: String, required: true},
  address: {
    street: String,
    cityId: {type: mongoose.Schema.Types.ObjectId, ref: 'City', require: true} ,
   
  },
  contactId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  couponId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Coupon'}],
  image: String,
  logo: {type: String}
});


module.exports = mongoose.model('Shop', ShopSchema);