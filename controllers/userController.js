const bcrypt = require("bcryptjs");
const passport = require("passport");
const nextify = require("../lib/nextify");

const User = require("../models/User");

exports.login = nextify(async (req, res) => {
  res.render("login", {
    pageTitle: "ورود به بخش مدیریت",
    path: "/login",
    message: req.flash("success_msg"),
    error: req.flash("error"),
  });
});

exports.handleLogin = async (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    });
  });
};
// req, res, next;


