console.log("----ROUTES/CONTACTS----")
const express = require("express")
const router = express.Router()
const controller = require("../controllers/contact") //first needs path to see the object

/* GET travel page. */
router.get("/", controller.contact)

module.exports = router
