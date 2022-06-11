console.log("----ROUTES/INDEX----")
const express = require("express") //imports the Express application object
const router = express.Router() //uses express to get a Router object
// new
//const ctrlMain = require("../app_server/controllers/main")
const ctrlMain = require("../controllers/main")
/* GET home page. */
router.get("/", ctrlMain.index) //adds routes to it using the get() method.

module.exports = router  //module exports the Router object.



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//REFERENCES
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
