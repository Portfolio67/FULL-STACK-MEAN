const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const morgan = require('morgan');
const winston = require('./config/winston');
//Loads the handlebars module 
const { engine } = require("express-handlebars"); //  //https://stackoverflow.com/questions/59124092/hbs-is-not-define-in-node-js

//new //FIXME
require('./app_api/models/db'); // causes database module be imported and executed when statting up
//require('./app_api/database/db'); // causes database module be imported and executed when statting up


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const travelRouter = require('./routes/travel'); // make new contstant for the app to use for the travel page
const aboutRouter = require('./routes/about');
const roomsRouter = require('./routes/rooms');
const mealsRouter = require('./routes/meals');
const newsRouter = require('./routes/news');
const contactRouter = require('./routes/contact');

//new admin 
const apiRouter = require('./app_api/routes/index');

const app = express();

//---------- view engine setup------
app.engine("handlebars", engine()); // calls the deconstructed express object line 7
//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));



//allow CORS for angular and express
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/travel", travelRouter); // use new travel app page, this adds the new travelRouter
app.use("/about", aboutRouter);
app.use("/rooms", roomsRouter);
app.use("/meals", mealsRouter);
app.use("/news", newsRouter);
app.use("/contact", contactRouter);

//new
app.use("/api", apiRouter);

// winston and morgan logging
app.use(morgan('combined'));
app.use(morgan('combined', { stream: winston.stream }));

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

//Initializing logger
//loggerMean.init(app);
app.use(morgan('combined'));
morgan('tiny');
morgan(':method :url :status :res[content-length] - :response-time ms');

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
});

app.use(morgan('combined'));


morgan('tiny');
morgan(':method :url :status :res[content-length] - :response-time ms');

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
});

// EXAMPLE: only log error responses
morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // add this line to include winston logging
  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;




//Nodemon for auto start npm 
// in packages.json add script  
//npm i -D nodemon 
// npm run get 
//npm run dev 
// 
// FILE STRUCTURE NOTES
// the routes and views is now in the main path that is the default of the route of  handlebars
//https://www.npmjs.com/package/express-handlebars

// set up handlebars
//https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65

// ------javascript curly brackets deconstruct-----
//used to destructure the JavaScript Object 
//https://www.geeksforgeeks.org/what-is-the-use-of-curly-brackets-in-the-var-statements/

// let example_object = {
//   name: "Object",
//   platform: "GeeksForGeeks",
//   number: 100
// };

// let {name, platform, number} = example_object;

// console.log("Name: ", name);

//https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use

//https://www.tabnine.com/code/javascript/modules/express-handlebars
//hbs module
//https://www.geeksforgeeks.org/handlebars-templating-in-expressjs/
//https://stackabuse.com/guide-to-handlebars-templating-engine-for-node/

// seedgoose
//https://github.com/victorteokw/seedgoose#readme
//npm cache clean -force: Cleaning your cache will resolve potential conflicts with previously installed packages.
//JSONLint  

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('hello, world!')
});

morgan('tiny');
morgan(':method :url :status :res[content-length] - :response-time ms');

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
});

// EXAMPLE: only log error responses
morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
});
