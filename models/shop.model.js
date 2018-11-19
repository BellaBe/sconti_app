const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;
const ShopSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdAt: {type: Date, default: Date.now},
  name: {type: String, required: true},
  address: {
    street: String,
    town:{type: String},
    city:{type: String},
    province: {type: String},
    region: {type: String, required: true},
    country: {type: String, required: true}
  },
  contact_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  image: {type: String},
  thumbnail: {type: String},
  logo: {type: String}
});


module.exports = mongoose.model('Shop', ShopSchema);