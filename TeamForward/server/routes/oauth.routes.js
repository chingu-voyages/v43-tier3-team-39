const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: process.env.REDIRECTKEYONE,
    failureRedirect: "/signin/failed",
    successMessage: true,
    failureMessage: true,
  })
);

router.get("/signin/success", (req, res) => {
  if (req.user) {
    const payload = { id: req.user._id };
    const userToken = jwt.sign(payload, process.env.SecretKeyOne);
    res.cookie("jwt-token", userToken, { httpOnly: true });
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
});

router.get("/signin/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect(process.env.REDIRECTKEYTWO);
});

module.exports = router;
