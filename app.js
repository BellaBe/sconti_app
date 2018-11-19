const path = require('path');
const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
//const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const methodOverride = require('method-override');
const multer = require('multer');
const errorHandler = require('errorhandler');
const moment = require('moment');

const config = require('./config');
const winston = require('./libs/winston');

let app = express();



app.set('port', config.get('port'));
http.createServer(app).listen(app.get('port'), () => {
  winston.info(`Server is running on port ${config.get('port')}`);
});


app.set('views', path.join(__dirname, 'views'));
//app.use(favicon());
app.use(morgan('combined', {stream: winston.stream}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({
  secret: config.get('session:secret'),
  resave: config.get('session:resave'),
  saveUninitialized: config.get('session:saveUninitialized'),
  cookie: config.get('session:cookie')
}));
// app.use(multer({
//   dest: path.join(__dirname, '../public/upload/temp')
// }));



app.engine('handlebars', exphbs.create({
  defaultLayout: 'main',
  layoutsDir: `${app.get('views')}/layouts`,
  partialsDir: [`${app.get('views')}/partials`],
  helpers: {
    timeago: (timestamp) => {
      return moment(timestamp).startOf('minute').fromNow();
    }
  }
}).engine);
app.set('view engine', 'handlebars');
app.use(require('./routes'));
app.use('/public', express.static(path.join(__dirname, 'public')));


if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});



app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  winston.error(`${err.status || 500} - ${err.message} - ${err.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(err.status || 500);
  res.render('error');
});