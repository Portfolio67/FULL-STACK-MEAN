const appRoot = require('app-root-path');
const winston = require('winston');
const morgan = require('morgan');

//https://coralogix.com/blog/complete-winston-logger-guide-with-hands-on-examples/
//https://www.digitalocean.com/community/tutorials/how-to-use-winston-to-log-node-js-applications
//https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/

const { combine, timestamp, json } = winston.format;
// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: 'silly',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 52428800, // 5GB
    maxFiles: 5,
    colorize: false,
  },
  errorFile: {
    level: 'error',
    name: 'file.error',
    filename: `${appRoot}/logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  console: {
    level: 'http',
    format: combine(timestamp({format: 'YYYY-MM-DD hh:mm:ss.SSS A',}),json())
  },
};

// instantiate a new Winston Logger with the settings defined above
let logger = winston.createLogger({
  transports: [
    //new (winston.transports.Console)(options.console),
    new (winston.transports.File)(options.errorFile),
    new (winston.transports.File)(options.file),
    new winston.transports.Console()
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};


module.exports = logger;
