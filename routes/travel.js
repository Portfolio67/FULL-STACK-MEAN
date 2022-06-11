console.log("----ROUTES/TRAVEL----")

const express = require("express");
const router = express.Router();
//new 06/06
const controller = require("../controllers/travel");
console.log(controller.travelList);
console.log(controller);
router.get("/", controller.travelList);

module.exports = router;

console.log("----END  ROUTES/TRAVEL----")