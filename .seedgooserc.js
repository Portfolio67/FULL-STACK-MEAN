console.log('-----MEAN_LOCAL / SEEDGOOSE_config------'); 
module.exports = {
// location to the directory
    //modelBaseDirectory: "/database/models", // model directory name
  //include all .js files but not db.js

    modelBaseDirectory: "app_api/database/models",

  //old when using spp_server
    //modelBaseDirectory: "database/models",
    //modelBaseDirectory: "app_server/database/models", 
    
    models: ["*.js", "!db.js"], // model matcher
  // data folder name
    data: "data",  // data directory name
    //new
    //standard mongo connection
    //db: "mongodb://localhost:27017/app_server", 
    db: 'mongodb://localhost:27017/MEAN_LOCAL_M4' // database
  
  };
  console.log(' end ------MEAN_LOCAL / SEEDGOOSE_config  --------');
  //console.log(module.exports);
  //seedgoose uses a mao not an array
  // {
  //   modelBaseDirectory: 'database/models',
  //   models: [ '*.js', '!db.js' ],
  //   data: 'data',
  //   db: 'mongodb://localhost:27017/travlr'
  // }