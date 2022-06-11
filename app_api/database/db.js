console.log("-------------------APP_API/DATABASE DB.JS--------------------"); 

const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
console.log(host); 
//https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/

const dbURI = `mongodb://${host}/MEAN_LOCAL_M4`;
console.log(dbURI); 

// const mongoose = require('mongoose');
// const dbURI = 'mongodb://localhost:27017/database';                  
// mongoose.connect(dbURI, {useNewUrlParser: true});           
// mongoose.connection.on('connected', () => {                 
//   console.log(`Mongoose connected to ${dbURI}`);            
// });                                                         
// mongoose.connection.on('error', err => {
//     console.log(`Mongoose connection error: ${err}`);         
// });                                                         
// mongoose.connection.on('disconnected', () => {              
//   console.log('Mongoose disconnected');                    
// });                                                                                                                  3
// // For nodemon restarts                                     
// process.once('SIGUSR2', () => {                             
//   gracefulShutdown('nodemon restart', () => {               
//     process.kill(process.pid, 'SIGUSR2');                   
//   });                                                       
// });                                                         
// // For app termination                                      
// process.on('SIGINT', () => {                                
//   gracefulShutdown('app termination', () => {               
//     process.exit(0);                                        
//   });                                                       
// });                                                         
// // For Heroku app termination                               
// process.on('SIGTERM', () => {                               
//   gracefulShutdown('Heroku app shutdown', () => {           
//     process.exit(0);                                        
//   });                                                       
// });                                                         
      
      
    

const readLine = require ("readline");
if (process.platform === 'win32'){
  const rl = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
  });
  rl.on ('SIGINT', () => {
    process.emit ("SIGINT");
  });
}



//server discovery 

mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
    }), 1000);
}

mongoose.connection.on('connected', () => {
  console.log("mongoose.connection.on('connected', () "); 

});

mongoose.connection.on('error', err => {
});

mongoose.connection.on('disconnected', () => {
});

if(process.platform === 'win32') {
}

const gracefulShutdown = (msg, callback) => {                1
    mongoose.connection.close( () => {                         2
      console.log(`Mongoose disconnected through ${msg}`);     3
      callback();                                              3
    });
  };


// For nodemon restarts
process.once('SIGUSR2', () => {
});
process.on('SIGINT', () => {
    
});
// for app termination
process.on('SIGTERM', () => {
    
});

connect();
console.log(' AFTER CONNECT() ------APP_API/DATABASE DB.JS-  ------------')
// bring mongoose shema THAT IS IN THE SAME DIRECTORY MODELS
//  module.exports in file travlr.js call this
require('./models/travlr');


///https://www.npmjs.com/package/seedgoose