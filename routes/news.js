console.log("----ROUTES/NEWS----")
const express = require("express")
const router = express.Router()
const controller = require("../controllers/news") //first needs path to see the object

/* GET travel page. */
router.get("/", controller.news)

module.exports = router
