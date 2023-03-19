require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const log = require("./helpers/logging");
const passport = require("passport");
const app = express();
const port = 8000;

// configure Passport
require("./Config/passport");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// setting up session cookie with logged in user's database id
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.user, "-------------");
  res.locals.user = req.user;
  next();
});

require("./config/mongoose.config");
require("./routes/teamForward.routes")(app);
// require("./routes/loginOauth.routes");

app.use("/", require("./routes/oauth.routes"));

app.listen(port, () => console.log(`listening on port: ${port}`));
