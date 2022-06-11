
console.log('----------- APP_API/ROUTES/INDEX.JS--------')

const express = require('express');
const router = express.Router();
const tripsController = require("../controllers/trips");

router
  .route("/trips")
  .get(tripsController.tripsList)
  //.post(auth, tripsController.tripsAddTrip);
  .post(tripsController.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsController.tripsList)
  .put(tripsController.tripsUpdateTrip);
  //.put(auth, tripsController.tripsUpdateTrip);

router.route("/trips/:tripCode").get(tripsController.tripsFindCode);

console.log('---END---- APP_API/ROUTES/INDEX.JS--------')
module.exports = router;

