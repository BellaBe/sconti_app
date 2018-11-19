const mongoose = require('mongoose');
const config = require('../config');

mongoose.set('debug', true);
mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'))
.then(()=>{
  'Now connected to MongoDB';
})
.catch(err => console.error('Something went wrong', err));

mongoose.Promise = global.Promise;

module.exports = mongoose;

