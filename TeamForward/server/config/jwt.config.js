const jwt = require("jsonwebtoken");
module.exports.authenticate = (req, res, next) => {
  jwt.verify(process.env.SecretKeyOne, (err, payload) => {
    console.log(req.cookies["jwt-token"]);
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      req.user.Id = payload.id;
      next();
    }
  });
};
