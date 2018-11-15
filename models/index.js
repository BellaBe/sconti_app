const mongoose = require('mongoose');

const mongoDB = 'mongodb://bellabe:Bell5221@ds155833.mlab.com:55833/sconti_app';

mongoose.connect(mongoDB, { useNewUrlParser: true })
.then(()=>{
  'Now connected to MongoDB';
})
.catch(err => console.error('Something went wrong', err));

mongoose.Promise = global.Promise;
const db = mongoose.connection;


module.exports={
  'Category': require('./category.model'),
  'City': require('./city.model'),
  'Coupon': require('./coupon.model'),
  'Discount': require('./discount.model'),
  'Product': require('./product.model'),
  'Shop': require('./shop.model'),
  'User': require('./user.model')
};