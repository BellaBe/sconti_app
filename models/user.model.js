const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  email: {type: String, required: true, unique: true, lowercase: true},
  password: {type: String},
  createdAt: {type: Date, default: Date.now},
  isClient: {type: Boolean, default: false},
  details: {
    firstname: String,
    lastname: {type: String},
    phone: {type: String}
  }
});

UserSchema.virtual('fullname')
  .get(function(){
    return this.firstname + ' ' + this.lastname;
  });

module.exports = mongoose.model('User', UserSchema);