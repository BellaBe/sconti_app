const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  details: {
    town:{type: String},
    city:{type: String},
    province: {type: String},
    region: {type: String, required: true},
    country: {type: String, required: true}
},
  shops: [{type: mongoose.Schema.Types.ObjectId, ref: 'Shop'}]

});

CitySchema
.virtual('url')
.get(function(){
  return '/cities/' + this._id;
});

module.exports = mongoose.model('City', CitySchema);
