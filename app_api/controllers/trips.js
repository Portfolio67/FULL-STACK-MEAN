console.log("----------- APP_API/CONTROLLERS/TRIPS.JS-------");

const { model } = require("mongoose");

const Trips = model("trips");
const user = model("users");

// :::::GET:::::::
const tripsList = async (req, res) => {
  Trips.find({}).exec((err, trips) => {
    if (!trips) {
      return res.status(404).json({ message: "trips not found" });
    } else if (err) {
      return res.status(404).json(err);
    } else {
      return res.status(200).json(trips);
    }
  });
};
// :::::GET ONE:::::::
const tripsFindCode = async (req, res) => {
  Trips.find({ code: req.params.tripCode }) // MONGOOSE FUNCTIONS USED
    .exec((err, trip) => {
      if (!trip) {
        return res.status(404).json({ message: "trip not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trip);
      }
    });
};

const tripsUpdateTrip = async (req, res) => {
  console.log(req.body);
  getUser(req, res, (req, res) => {
    Trips.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      { new: true }
    )
      .then((trip) => {
        if (!trip) {
          return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode,
          });
        }
        res.send(trip);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode,
          });
        }
        return res
          .status(500) // server error
          .json(err);
      });
  });
};

const tripsAddTrip = async (req, res) => {
  getUser(req, res, (req, res) => {
    Trips.create(
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      (err, trip) => {
        if (err) {
          return res
            .status(400) //bad request
            .json(err);
        } else {
          return res
            .status(201) //creates
            .json(trip);
        }
      }
    );
  });
};

const getUserCallback = (req, res, username) => username;

const tripsDeleteCode = async (req, res) => {
  const username = await getUser(req, res, getUserCallback);

  Trips.findOneAndDelete({ code: req.params.tripCode })
    .then((trip) => {
      if (!trip) {
        res.status(400).send(req.params.tripCode + " was not found");
      } else {
        res.status(200).send({trip}); //  The front and was expecting a Json not a plane text.
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
};
const getUser = (req, res, callback) => {
  if (req.body.payload && req.body.payload.email) {
    user.findOne({ email: req.body.payload.email }).exec((err, user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } else if (err) {
        console.log(err);
        return res.status(404).json(err);
      }
      callback(req, res, user.name);
    });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  tripRoutes: [
    { method: "get", url: "/trips", handler: tripsList, response: "Trips[]" },
    { method: "get", url: "/trips/:tripCode", handler: tripsFindCode, response: "Trip" },
    { method: "post", url: "/trips", handler: tripsAddTrip, response: "Trip" },
    { method: "patch", url: "/trips/:tripCode", handler: tripsUpdateTrip, response: "Trip" },
    { method: "post", url: "/trips/:tripCode/delete", handler: tripsDeleteCode, response: "Trip" },

    // [tripsFindCode,''],
    // [tripsAddTrip],
    // [tripsUpdateTrip],
  ],
};
