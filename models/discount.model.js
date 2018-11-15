const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscountSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: Number}
});

module.exports = mongoose.model('Discount', DiscountSchema);
