console.log("----ROUTES/MEALS----")
const express = require("express")
const router = express.Router()
const controller = require("../controllers/meals") //first needs path to see the object

/* GET travel page. */
router.get("/", controller.meals)

module.exports = router
