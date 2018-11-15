const path = require('path');
const exphbs = require('express-handlebars');
const express = require('express');
const mongoose = require('mongoose');
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
  app.use('/public/', express.static(path.join(__dirname, '../public')));
  app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    };
    next();
  });
  app.use(require('./routes'));

  app.use((req, res, next)=>{
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.json({
      err: {
        message: err.message
      }
    })
  });

  return app;
};