var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var maladieRouter = require('./routes/maladie');
var doctorRouter = require('./routes/doctor');
var vaccinRouter = require('./routes/vaccin');


const sequelize = require('./data/database');
const  session = require('express-session');


const { Sequelize } = require('./models');
const cat = require('./models/users');
// const categorie = cat(sequelize,Sequelize).sync({force:true})


try {
  sequelize.authenticate()
  
    console.log('base de donnee connecté avec succes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ 
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: false}
}))
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/maladie', maladieRouter);
app.use('/doctor', doctorRouter);
app.use('/vaccin', vaccinRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

} catch (error) {
  console.log('base de noconnecte',error);
  
}

module.exports = app;
