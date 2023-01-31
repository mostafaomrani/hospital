const express = require("express");
const path = require("path");
const passport = require('passport');
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const nextify = require("./lib/nextify");
const basicAuth = require("./middlewares/basic-auth");
const errorHandler = require("./middlewares/error-handler");
const peopleRouter = require("./routes/people");
const ideasRouter = require("./routes/ideas");
const usersRouter = require("./routes/users");
const PersonDao = require("./dao/person");
const userController = require("./controllers/userController");
const Idea = require('./models/idea');
const session = require("express-session");


//* Passport Configuration
require('./config/passport');
const app = express();
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

/**session */
app.use(
  session({
      secret: "secret",
      cookie: { maxAge: 60000 },
      resave: false,
      saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//* Flash
app.use(flash()); //req.flash

const PORT = 3000;


app.use("/people", peopleRouter);
app.use("/form", ideasRouter);

app.use(errorHandler);







/** GET Methods */
app.get("/", (req, res) => {
  res.render("./login.ejs");
});
app.get(
  "/dashboard",
  nextify(async (req, res) => {
    Ideas = await Idea.query();

    res.render("./dashboard.ejs", { pageTitle: "برندگان مسابقه", Ideas });
  })
);

app.get("/login", userController.login)
app.post("/login", userController.handleLogin)



app.get(
  "/lottery",
  basicAuth,
  nextify(async (req, res) => {
    const dao = new PersonDao();
    const lotteryPeople = await dao.lottery();
    res.render("lottery", {
      pageTitle: "برندگان مسابقه",
      lotteryPeople,
    });
  })
);

app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`);
});
