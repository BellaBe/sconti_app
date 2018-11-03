const express = require('express');
const config = require('./server/config');
let app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', `${__dirname}/views`);
app = config(app);
app.listen(app.get('port'), ()=>{
 console.log(`Server is running on port ${app.get('port')}`) 
})