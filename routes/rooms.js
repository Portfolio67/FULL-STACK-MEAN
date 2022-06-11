console.log("----ROURES/TRAVELL----")
const express = require("express")
const router = express.Router()
const controller = require("../controllers/rooms")

/* GET travel page. */
router.get("/", controller.rooms)

module.exports = router
