console.log("----------- APP_API/ROUTES/INDEX.JS--------");

const express = require("express");
const router = express.Router();
const tripsController = require("../controllers/trips");
const jwt = require('express-jwt');

const routeRegister = {
  get: (url, handler) => router.get(url, handler),
  patch: (url, handler) => router.patch(url, handler),
  post: (url, handler) => {
    console.log('post route registered')
    router.post(url, handler)},
  delete: (url, handler) => router.delete(url, handler),
};


router.get("/", (req, res) =>
  res.json(tripsController.tripRoutes.map(({ handler, ...struct }) => struct))
);

tripsController.tripRoutes.forEach((tripAction) =>
  routeRegister[tripAction.method](tripAction.url, tripAction.handler)
);

// tripsController.tripRoutes.forEach((tripHandler) => {
//   const action = routeRegister[tripHandler.method];
//   return action(tripHandler.url, tripHandler.handler);
// });

// router.get("/trips",tripsController.tripsList)

// router
//   .route("/trips")
//   .get(tripsController.tripsList)
//   //.post(auth, tripsController.tripsAddTrip);
//   .post(tripsController.tripsAddTrip);

// router
//   .route("/trips/:tripCode")
//   .get(tripsController.tripsList)
//   .put(tripsController.tripsUpdateTrip);
//   //.put(auth, tripsController.tripsUpdateTrip);

// router.route("/trips/:tripCode").get(tripsController.tripsFindCode);

console.log("---END---- APP_API/ROUTES/INDEX.JS--------");
module.exports = router;
