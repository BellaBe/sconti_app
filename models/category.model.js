const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  coupon_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Coupon'}]
});

CategorySchema
.virtual('url')
.get(function(){
  return '/categories/' + this._id;
});

module.exports = mongoose.model('Category', CategorySchema);
