const jwt = require("jsonwebtoken");
module.exports.authenticate = (req, res, next) => {
  jwt.verify(
    req.cookies["jwt-token"],
    process.env.SecretKeyOne,
    (err, payload) => {
      if (err) {
        res.status(401).json({ verified: false });
      } else {
        req.user.Id = payload.id;
        next();
      }
    }
  );
};
