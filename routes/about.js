console.log("----ROUTES/ABOUT---")
const express = require("express")
const router = express.Router()
const controller = require("../controllers/about")

/* GET travel page. */
router.get("/", controller.about)

module.exports = router
