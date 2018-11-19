const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  coupon_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Coupon'}]
});

CitySchema
.virtual('url')
.get(function(){
  return '/cities/' + this._id;
});

module.exports = mongoose.model('City', CitySchema);
