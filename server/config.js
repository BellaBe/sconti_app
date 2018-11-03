const path = require('path');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const multer = require('multer');
const errorHandler = require('errorhandler');
const moment = require('moment');

module.exports = (app)=>{
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser('some-secret-value-here'));
  // app.use(multer({
  //   dest: path.join(__dirname, '../public/upload/temp')
  // }));
  app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: `${app.get('views')}/layouts`,
    partialsDir: [`${app.get('views')}/partials`],
    helpers: {
      timeago: (timestamp)=>{
        return moment(timestamp).startOf('minute').fromNow();
      }
    }
  }).engine);
  app.set('view engine', 'handlebars');
  routes(app);
  app.use('/public/', express.static(path.join(__dirname, '../public')));
  return app;
}