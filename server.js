const express = require('express');
const config = require('./server/config');
let app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', `${__dirname}/views`);
app = config(app);
// mongoose.connect('mongodb://bellabe:Bell5221@ds155833.mlab.com:55833/sconti_app', { useNewUrlParser: true });
// mongoose.connection.on('open', ()=>{
//   console.log('Mongoose connected')
// })
app.listen(app.get('port'), ()=>{
 console.log(`Server is running on port ${app.get('port')}`);
})