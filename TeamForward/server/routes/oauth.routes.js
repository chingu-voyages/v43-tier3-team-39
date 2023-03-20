const router = require("express").Router();
const passport = require("passport");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    // successRedirect: "http://localhost:3000/",
    successRedirect: "/success",
    failureRedirect: "/signin",
    successMessage: true,
    failureMessage: true,
  })
);

router.get("/success", (req, res) => {
  let user = req.user;
  res.redirect("https://zippy-kangaroo-408751.netlify.app/feed");
});

// OAuth Logout Route
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("https://zippy-kangaroo-408751.netlify.app/");
});

module.exports = router;
