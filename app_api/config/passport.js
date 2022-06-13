const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require('mongoose').model('users')

passport.use(
  new LocalStrategy({ usernameField: "email" }, (username, password, done) => {
   try {
    User.findOne({ email: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
   } catch (error) {
    console.error(error)
   }
  })
);
