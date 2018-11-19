const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name: {type: String}
});

module.exports = mongoose.model('Product', ProductSchema);
