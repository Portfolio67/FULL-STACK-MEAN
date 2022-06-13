console.log("----------- APP_API/ROUTES/INDEX.JS--------");

const express = require("express");
const router = express.Router();
const tripsController = require("../controllers/trips");
const authController = require('../controllers/authentication')
const jwt = require("express-jwt");

const routeRegister = {
  get: (url, handler) => router.get(url, handler),
  patch: (url, handler) => router.patch(url, handler),
  post: (url, handler) => {
    console.log("post route registered");
    router.post(url, handler);
  },
  delete: (url, handler) => router.delete(url, handler),
};

router.get("/", (req, res) => res.json(tripsController.tripRoutes.map(({ handler, ...struct }) => struct)));

tripsController.tripRoutes.forEach((tripAction) =>
  routeRegister[tripAction.method](tripAction.url, tripAction.handler)
);

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);


console.log("---END---- APP_API/ROUTES/INDEX.JS--------");
module.exports = router;
