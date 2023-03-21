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
    successRedirect: "/success",
    failureRedirect: "/signin",
    successMessage: true,
    failureMessage: true,
  })
);

router.get("/success", (req, res) => {
  let user = req.user;
  let json = JSON.stringify(user);
  const queryString = new URLSearchParams({ user: json }).toString();
  console.log(`${process.env.REDIRECTKEYONE}?${queryString}`);
  res.redirect(`${process.env.REDIRECTKEYONE}?${queryString}`);
});

// OAuth Logout Route
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("http:localhost:3000/");
});

module.exports = router;
