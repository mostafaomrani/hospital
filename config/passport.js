const { Strategy } = require("passport-local");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const passport = require("passport");
const { query } = require("../models/user");
passport.use(
  new Strategy(async (userName, password, done) => {
    try {
      const user = await User.query().findOne(
        { userName: userName },
        function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          // if (!user.verifyPassword(password)) {
          //   return done(null, false);
          // }
          return done(null, user);
        }
      );
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((id, done) => {
  query().findById(id, (err, user) => {
    done(err, user);
  });
});
